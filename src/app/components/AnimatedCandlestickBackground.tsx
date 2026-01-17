import { useEffect, useRef } from 'react';

interface Candle {
  x: number;
  open: number;
  close: number;
  high: number;
  low: number;
  bullish: boolean;
}

export function AnimatedCandlestickBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let offset = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const candles: Candle[] = [];
    const candleWidth = 40;
    const candleSpacing = 20;
    const numCandles = Math.ceil(canvas.width / (candleWidth + candleSpacing)) + 2;

    // Generate initial candles
    for (let i = 0; i < numCandles; i++) {
      const open = 100 + Math.random() * 200;
      const changePercent = (Math.random() - 0.5) * 20;
      const close = open + changePercent;
      const high = Math.max(open, close) + Math.random() * 20;
      const low = Math.min(open, close) - Math.random() * 20;

      candles.push({
        x: i * (candleWidth + candleSpacing),
        open,
        close,
        high,
        low,
        bullish: close > open
      });
    }

    const drawCandle = (candle: Candle, xOffset: number) => {
      const x = candle.x - xOffset;
      const centerX = x + candleWidth / 2;

      // Scale values to canvas
      const scale = canvas.height / 500;
      const baseY = canvas.height / 2;

      const openY = baseY - candle.open * scale;
      const closeY = baseY - candle.close * scale;
      const highY = baseY - candle.high * scale;
      const lowY = baseY - candle.low * scale;

      const color = candle.bullish ? 'rgba(34, 197, 94, 0.15)' : 'rgba(239, 68, 68, 0.15)';
      const wickColor = candle.bullish ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)';

      // Draw wick
      ctx.strokeStyle = wickColor;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(centerX, highY);
      ctx.lineTo(centerX, lowY);
      ctx.stroke();

      // Draw body
      ctx.fillStyle = color;
      const bodyHeight = Math.abs(closeY - openY);
      const bodyY = Math.min(openY, closeY);
      ctx.fillRect(x, bodyY, candleWidth, bodyHeight || 2);

      // Border
      ctx.strokeStyle = candle.bullish ? 'rgba(34, 197, 94, 0.3)' : 'rgba(239, 68, 68, 0.3)';
      ctx.lineWidth = 1;
      ctx.strokeRect(x, bodyY, candleWidth, bodyHeight || 2);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Gradual movement
      offset += 0.3;

      // Draw candles
      candles.forEach(candle => {
        drawCandle(candle, offset);
      });

      // Add new candle when needed
      if (offset > candleWidth + candleSpacing) {
        offset = 0;
        candles.shift();
        
        const lastCandle = candles[candles.length - 1];
        const open = lastCandle.close;
        const changePercent = (Math.random() - 0.5) * 20;
        const close = open + changePercent;
        const high = Math.max(open, close) + Math.random() * 20;
        const low = Math.min(open, close) - Math.random() * 20;

        candles.push({
          x: lastCandle.x + candleWidth + candleSpacing,
          open,
          close,
          high,
          low,
          bullish: close > open
        });
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 opacity-20"
      style={{ pointerEvents: 'none' }}
    />
  );
}
