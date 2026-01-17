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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity className="size-6 text-orange-500" />
              <span className="text-xl font-semibold text-slate-900">Trading Bots</span>
            </div>
            <Button 
              onClick={scrollToCTA}
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              Начать
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-8">
              <Activity className="size-4" />
              Стабильная прибыль каждый день
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Торговые боты с доходностью{' '}
              <span className="text-orange-500">1–1.5% в сутки</span>
            </h1>
            
            <p className="text-2xl text-slate-600 mb-4">
              Ваш капитал остаётся на вашем Binance‑счёте
            </p>

            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              Умные алгоритмы, которые работают за вас 24/7. Без доверительного управления. 
              Без передачи средств. Вы сохраняете полный контроль над деньгами — бот лишь 
              торгует через API.
            </p>

            <Button 
              size="lg" 
              onClick={scrollToCTA}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg"
            >
              Запустить бота сейчас
              <ChevronRight className="ml-2 size-5" />
            </Button>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1748609622257-bb917eda4d14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMHRyYWRpbmclMjBzY3JlZW58ZW58MXx8fHwxNzY4NTE4NDgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Trading Interface"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Как бот приносит прибыль каждый день
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                Мои торговые боты используют проверенные внутридневные стратегии, которые дают 
                стабильную доходность от 1 до 1.5% в сутки. Алгоритмы анализируют рынок, открывают 
                и закрывают сделки автоматически, без эмоций и ошибок, свойственных человеку.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                Вы подключаете бота к своему Binance‑аккаунту через API‑ключи без права вывода 
                средств — это гарантирует, что деньги всегда остаются под вашим полным контролем.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <BarChart3 className="size-8 text-orange-500 mb-3" />
                  <p className="font-semibold text-slate-900 mb-1">Анализ рынка</p>
                  <p className="text-sm text-slate-600">В реальном времени</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <Zap className="size-8 text-orange-500 mb-3" />
                  <p className="font-semibold text-slate-900 mb-1">Автоматически</p>
                  <p className="text-sm text-slate-600">Без участия</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1707075891545-41b982930351?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXRjb2luJTIwZGlnaXRhbCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY4NTE4NDgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Crypto Technology"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Advantage Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Ваши деньги — только ваши
            </h2>
            <p className="text-xl text-slate-600">
              Бот торгует, но не может вывести средства
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-12">
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                В отличие от доверительного управления, где вы передаёте деньги третьим лицам, 
                здесь всё иначе:
              </p>

              <div className="space-y-4 mb-10">
                {[
                  'Средства остаются на вашем Binance‑счёте',
                  'Вы в любой момент можете отключить бота',
                  'Вы видите каждую сделку в реальном времени',
                  'API‑ключи не дают права вывода — только торговля',
                  'Вы можете пополнять или выводить деньги когда угодно'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="size-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-700">{item}</p>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-xl bg-orange-50 border border-orange-200">
                <p className="text-lg text-slate-900 text-center font-medium">
                  Вы не отдаёте деньги никому. Вы просто разрешаете боту торговать на вашем счёте.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Почему этот бот — лучший инструмент для пассивного дохода
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Доходность 1–1.5% в сутки',
                description: 'Стратегии оптимизированы под внутридневные движения рынка и работают в любых условиях.'
              },
              {
                icon: Shield,
                title: 'Полный контроль над капиталом',
                description: 'Никаких переводов, никаких рисков доверительного управления.'
              },
              {
                icon: Clock,
                title: 'Работа 24/7',
                description: 'Алгоритм не спит, не устает и не подвержен эмоциям.'
              },
              {
                icon: Eye,
                title: 'Прозрачность',
                description: 'Каждая сделка отображается у вас в Binance в реальном времени.'
              },
              {
                icon: Zap,
                title: 'Гибкость',
                description: 'Вы можете остановить бота в любой момент — одним кликом.'
              },
              {
                icon: Lock,
                title: 'Безопасность',
                description: 'API‑ключи создаются с отключённым выводом средств.'
              },
              {
                icon: Headphones,
                title: 'Поддержка',
                description: 'Я, Виктор, лично сопровождаю подключение и отвечаю за корректную работу ботов.'
              }
            ].map((benefit, index) => (
              <div key={index} className="group p-8 rounded-xl bg-white border border-slate-200 hover:shadow-lg transition-all duration-300 hover:border-orange-300">
                <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors">
                  <benefit.icon className="size-6 text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Connect Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              3 шага до ежедневной прибыли
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
              <div key={index} className="relative bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-sm font-bold text-orange-500 mb-4">{step.step}</div>
                <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                  <step.icon className="size-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is It For Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
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
                className="flex items-center gap-4 p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-orange-300 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="size-5 text-orange-500" />
                </div>
                <p className="text-lg text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mx-auto mb-6">
              <Shield className="size-8 text-green-600" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Безопасность — приоритет №1
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
            <div className="relative h-64">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1643546352167-8ba057e8c333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG8lMjBibG9ja2NoYWluJTIwbmV0d29ya3xlbnwxfHx8fDE3Njg1MTg0ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Security"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-12 space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                Вы не переводите деньги никому. Бот работает только в рамках вашего Binance‑аккаунта. 
                API‑ключи создаются с отключённым выводом средств — это технически исключает 
                возможность доступа к вашим средствам.
              </p>

              <div className="p-6 rounded-xl bg-green-50 border border-green-200">
                <p className="text-xl text-slate-900 text-center font-semibold">
                  Вы контролируете всё.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta-section" className="py-24 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Готовы получать 1–1.5% в сутки?
          </h2>
          
          <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
            Я лично помогу вам настроить систему и отвечу на все вопросы.
          </p>

          <Button 
            size="lg"
            className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg font-semibold"
          >
            Подключить бота сейчас
            <ChevronRight className="ml-2 size-5" />
          </Button>
        </div>
      </section>

      {/* About Viktor Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Кто стоит за проектом
            </h2>
          </div>

          <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
            <div className="grid lg:grid-cols-5 gap-8 items-center p-12">
              <div className="lg:col-span-2">
                <div className="relative rounded-2xl overflow-hidden aspect-square border border-slate-200">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2ODQyMzgyN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Viktor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center mt-6">
                  <p className="text-2xl font-semibold text-slate-900">Виктор</p>
                  <p className="text-orange-600">Создатель торговых алгоритмов</p>
                </div>
              </div>

              <div className="lg:col-span-3 space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed">
                  Меня зовут Виктор. Я разработчик и создатель торговых алгоритмов, которые 
                  помогают людям получать стабильный доход на криптовалютном рынке.
                </p>

                <p className="text-lg text-slate-600 leading-relaxed">
                  Я не беру ваши деньги в управление — вы просто подключаете мои боты к своему 
                  счёту и сохраняете полный контроль над капиталом.
                </p>

                <div className="p-6 rounded-xl bg-white border border-slate-200">
                  <p className="text-lg text-slate-900 font-medium">
                    Моя задача — обеспечить вам стабильную прибыль и прозрачность.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  {[
                    { icon: Wallet, text: 'Полный контроль' },
                    { icon: Shield, text: 'Безопасность' },
                    { icon: TrendingUp, text: 'Стабильность' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200">
                      <item.icon className="size-4 text-orange-500" />
                      <span className="text-sm text-slate-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Activity className="size-6 text-orange-500" />
              <span className="text-xl font-semibold text-slate-900">Trading Bots</span>
            </div>
            <p className="text-slate-600">
              © 2026 Виктор. Все права защищены.
            </p>
            <p className="text-sm text-slate-500 max-w-2xl mx-auto">
              Торговля сопряжена с рисками. Прошлые результаты не гарантируют будущих доходов.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
