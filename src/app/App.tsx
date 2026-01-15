import { 
  TrendingUp, 
  Shield, 
  Clock, 
  Eye, 
  Zap, 
  Lock, 
  Headphones,
  ChevronRight,
  CheckCircle2,
  BarChart3,
  Wallet,
  Activity
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export default function App() {
  const scrollToCTA = () => {
    document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='rgba(255, 255, 255, 0.03)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
        }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-32 sm:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                <Activity className="size-4 text-blue-400" />
                <span className="text-sm text-blue-300">Стабильная прибыль каждый день</span>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
                  Торговые боты с доходностью{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    1–1.5% в сутки
                  </span>
                </h1>
                <p className="text-xl text-blue-300">
                  Ваш капитал остаётся на вашем Binance‑счёте
                </p>
              </div>

              <p className="text-lg text-slate-300 leading-relaxed">
                Умные алгоритмы, которые работают за вас 24/7. Без доверительного управления. 
                Без передачи средств. Вы сохраняете полный контроль над деньгами — бот лишь 
                торгует через API.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={scrollToCTA}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg"
                >
                  Запустить бота сейчас
                  <ChevronRight className="ml-2 size-5" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-3xl opacity-20" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1639825752750-5061ded5503b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaW5nJTIwY2hhcnRzJTIwY3J5cHRvfGVufDF8fHx8MTc2ODUxMzgyN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Trading Charts"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              Как бот приносит прибыль каждый день
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761850167081-473019536383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjB0ZWNobm9sb2d5JTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2ODQ4MDIwMnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Trading Dashboard"
                className="w-full h-auto"
              />
            </div>

            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                Мои торговые боты используют проверенные внутридневные стратегии, которые дают 
                стабильную доходность от 1 до 1.5% в сутки. Алгоритмы анализируют рынок, открывают 
                и закрывают сделки автоматически, без эмоций и ошибок, свойственных человеку.
              </p>

              <p className="text-lg text-slate-300 leading-relaxed">
                Вы подключаете бота к своему Binance‑аккаунту через API‑ключи без права вывода 
                средств — это гарантирует, что деньги всегда остаются под вашим полным контролем.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <BarChart3 className="size-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white">Анализ рынка</p>
                    <p className="text-sm text-slate-400">В реальном времени</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                    <Zap className="size-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white">Автоматически</p>
                    <p className="text-sm text-slate-400">Без участия</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Advantage Section */}
      <section className="relative py-20 sm:py-24 bg-gradient-to-b from-blue-950/30 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
              Ваши деньги — только ваши
            </h2>
            <p className="text-xl text-blue-300">
              Бот торгует, но не может вывести средства
            </p>
          </div>

          <Card className="bg-slate-900/50 border-white/10 backdrop-blur-sm">
            <CardContent className="p-8 sm:p-12">
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                В отличие от доверительного управления, где вы передаёте деньги третьим лицам, 
                здесь всё иначе:
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  'Средства остаются на вашем Binance‑счёте',
                  'Вы в любой момент можете отключить бота',
                  'Вы видите каждую сделку в реальном времени',
                  'API‑ключи не дают права вывода — только торговля',
                  'Вы можете пополнять или выводить деньги когда угодно'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="size-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-200">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                <p className="text-lg text-white text-center">
                  Вы не отдаёте деньги никому. Вы просто разрешаете боту торговать на вашем счёте.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
              Почему этот бот — лучший инструмент для пассивного дохода
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingUp,
                title: 'Доходность 1–1.5% в сутки',
                description: 'Стратегии оптимизированы под внутридневные движения рынка и работают в любых условиях.',
                iconBg: 'bg-blue-500/10',
                iconBorder: 'border-blue-500/20',
                iconColor: 'text-blue-400'
              },
              {
                icon: Shield,
                title: 'Полный контроль над капиталом',
                description: 'Никаких переводов, никаких рисков доверительного управления.',
                iconBg: 'bg-green-500/10',
                iconBorder: 'border-green-500/20',
                iconColor: 'text-green-400'
              },
              {
                icon: Clock,
                title: 'Работа 24/7',
                description: 'Алгоритм не спит, не устает и не подвержен эмоциям.',
                iconBg: 'bg-purple-500/10',
                iconBorder: 'border-purple-500/20',
                iconColor: 'text-purple-400'
              },
              {
                icon: Eye,
                title: 'Прозрачность',
                description: 'Каждая сделка отображается у вас в Binance в реальном времени.',
                iconBg: 'bg-cyan-500/10',
                iconBorder: 'border-cyan-500/20',
                iconColor: 'text-cyan-400'
              },
              {
                icon: Zap,
                title: 'Гибкость',
                description: 'Вы можете остановить бота в любой момент — одним кликом.',
                iconBg: 'bg-orange-500/10',
                iconBorder: 'border-orange-500/20',
                iconColor: 'text-orange-400'
              },
              {
                icon: Lock,
                title: 'Безопасность',
                description: 'API‑ключи создаются с отключённым выводом средств.',
                iconBg: 'bg-red-500/10',
                iconBorder: 'border-red-500/20',
                iconColor: 'text-red-400'
              },
              {
                icon: Headphones,
                title: 'Поддержка',
                description: 'Я, Виктор, лично сопровождаю подключение и отвечаю за корректную работу ботов.',
                iconBg: 'bg-pink-500/10',
                iconBorder: 'border-pink-500/20',
                iconColor: 'text-pink-400'
              }
            ].map((benefit, index) => (
              <Card key={index} className="bg-slate-900/50 border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
                <CardContent className="p-6 space-y-4">
                  <div className={`p-3 rounded-xl ${benefit.iconBg} border ${benefit.iconBorder} inline-block`}>
                    <benefit.icon className={`size-6 ${benefit.iconColor}`} />
                  </div>
                  <h3 className="text-xl text-white">{benefit.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Connect Section */}
      <section className="relative py-20 sm:py-24 bg-gradient-to-b from-purple-950/30 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
              3 шага до ежедневной прибыли
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Создаёте API‑ключи на Binance',
                description: 'Только торговля. Вывод средств отключён.',
                icon: Lock
              },
              {
                step: '02',
                title: 'Подключаете бота',
                description: 'Я помогу настроить всё за 5–10 минут.',
                icon: Zap
              },
              {
                step: '03',
                title: 'Получаете прибыль ежедневно',
                description: 'Бот начинает торговать и приносить стабильный доход.',
                icon: TrendingUp
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <Card className="bg-slate-900/50 border-white/10 h-full">
                  <CardContent className="p-8 space-y-4">
                    <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-400 opacity-20">
                      {step.step}
                    </div>
                    <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 inline-block">
                      <step.icon className="size-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl text-white">{step.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ChevronRight className="size-8 text-blue-400/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is It For Section */}
      <section className="relative py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
              Этот бот создан для тех, кто хочет…
            </h2>
          </div>

          <div className="space-y-4">
            {[
              'Получать стабильный пассивный доход',
              'Не передавать деньги третьим лицам',
              'Иметь полный контроль над капиталом',
              'Автоматизировать торговлю',
              'Зарабатывать без опыта в трейдинге'
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-4 p-6 rounded-xl bg-slate-900/50 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <CheckCircle2 className="size-6 text-blue-400" />
                </div>
                <p className="text-lg text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="relative py-20 sm:py-24 bg-gradient-to-b from-blue-950/30 to-transparent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-4 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
              <Shield className="size-12 text-green-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
              Безопасность — приоритет №1
            </h2>
          </div>

          <Card className="bg-slate-900/50 border-white/10">
            <CardContent className="p-8 sm:p-12 space-y-6">
              <div className="relative rounded-xl overflow-hidden border border-white/10 mb-8">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1767972464040-8bfee42d7bed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGxvY2slMjBkaWdpdGFsfGVufDF8fHx8MTc2ODQyMDI0N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Security"
                  className="w-full h-64 object-cover"
                />
              </div>

              <p className="text-lg text-slate-300 leading-relaxed">
                Вы не переводите деньги никому. Бот работает только в рамках вашего Binance‑аккаунта. 
                API‑ключи создаются с отключённым выводом средств — это технически исключает 
                возможность доступа к вашим средствам.
              </p>

              <div className="p-6 rounded-xl bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20">
                <p className="text-xl text-white text-center">
                  Вы контролируете всё.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta-section" className="relative py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative p-12 sm:p-16 rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 overflow-hidden">
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid2' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='rgba(255, 255, 255, 0.1)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid2)'/%3E%3C/svg%3E")`
            }} />
            
            <div className="relative space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white">
                Готовы получать 1–1.5% в сутки?
              </h2>
              
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Я лично помогу вам настроить систему и отвечу на все вопросы.
              </p>

              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg mt-8"
              >
                Подключить бота сейчас
                <ChevronRight className="ml-2 size-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Viktor Section */}
      <section className="relative py-20 sm:py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
              Кто стоит за проектом
            </h2>
          </div>

          <Card className="bg-slate-900/50 border-white/10">
            <CardContent className="p-8 sm:p-12">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1">
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-square">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2ODQyMzgyN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Viktor"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-2xl text-white">Виктор</p>
                    <p className="text-blue-400">Создатель торговых алгоритмов</p>
                  </div>
                </div>

                <div className="lg:col-span-2 space-y-6">
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Меня зовут Виктор. Я разработчик и создатель торговых алгоритмов, которые 
                    помогают людям получать стабильный доход на криптовалютном рынке.
                  </p>

                  <p className="text-lg text-slate-300 leading-relaxed">
                    Я не беру ваши деньги в управление — вы просто подключаете мои боты к своему 
                    счёту и сохраняете полный контроль над капиталом.
                  </p>

                  <div className="p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                    <p className="text-lg text-white">
                      Моя задача — обеспечить вам стабильную прибыль и прозрачность.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-4">
                    {[
                      { icon: Wallet, text: 'Полный контроль' },
                      { icon: Shield, text: 'Безопасность' },
                      { icon: TrendingUp, text: 'Стабильность' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-white/10">
                        <item.icon className="size-4 text-blue-400" />
                        <span className="text-sm text-slate-300">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Activity className="size-6 text-blue-400" />
              <span className="text-xl text-white">Trading Bots</span>
            </div>
            <p className="text-slate-400">
              © 2026 Виктор. Все права защищены.
            </p>
            <p className="text-sm text-slate-500">
              Торговля сопряжена с рисками. Прошлые результаты не гарантируют будущих доходов.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
