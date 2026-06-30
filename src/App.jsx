import { useState } from "react";
import { motion } from "motion/react";
import {
  AirVent,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Fan,
  Hammer,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Ruler,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Star,
  Wrench,
  X,
} from "lucide-react";

const PHONE = "+7 928 917-71-72";
const PHONE_LINK = "tel:+79289177172";
const WHATSAPP_LINK =
  "https://wa.me/79289177172?text=Здравствуйте!%20Хочу%20рассчитать%20стоимость%20установки%20кондиционера.";

const navItems = [
  { label: "Услуги", href: "#services" },
  { label: "Преимущества", href: "#benefits" },
  { label: "Цены", href: "#prices" },
  { label: "Работы", href: "#portfolio" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

const services = [
  {
    icon: AirVent,
    title: "Установка кондиционеров",
    text: "Монтаж сплит-систем под ключ для квартир, домов, офисов и коммерческих помещений.",
  },
  {
    icon: Hammer,
    title: "Демонтаж и перенос",
    text: "Аккуратно демонтируем, переносим и заново устанавливаем кондиционер на новом месте.",
  },
  {
    icon: Sparkles,
    title: "Монтаж с пылесосом",
    text: "Работаем чисто: минимизируем пыль, грязь и следы после бурения.",
  },
  {
    icon: Ruler,
    title: "Алмазная резка",
    text: "Ровные отверстия и аккуратная работа даже на сложных стенах.",
  },
  {
    icon: Fan,
    title: "Обслуживание и чистка",
    text: "Профилактика, чистка фильтров, диагностика и подготовка кондиционера к сезону.",
  },
  {
    icon: Wrench,
    title: "Закладка трассы",
    text: "Прокладываем трассу на этапе ремонта, чтобы монтаж выглядел максимально эстетично.",
  },
];

const benefits = [
  "Аккуратный монтаж без лишней грязи",
  "Профессиональный инструмент",
  "Честная цена до начала работ",
  "Помощь с подбором кондиционера",
  "Гарантия на выполненную работу",
  "Эстетичная прокладка трассы",
];

const process = [
  {
    step: "01",
    title: "Заявка",
    text: "Вы оставляете заявку на сайте, в WhatsApp или Instagram.",
  },
  {
    step: "02",
    title: "Расчет",
    text: "Уточняем помещение, стену, длину трассы и называем ориентир по цене.",
  },
  {
    step: "03",
    title: "Монтаж",
    text: "Приезжаем, аккуратно устанавливаем кондиционер и проверяем все соединения.",
  },
  {
    step: "04",
    title: "Проверка",
    text: "Запускаем кондиционер, проверяем охлаждение, дренаж и работу во всех режимах.",
  },
];

const prices = [
  {
    title: "Стандартный монтаж",
    price: "от 7 000 ₽",
    items: ["Внутренний и наружный блок", "Базовая трасса", "Проверка запуска"],
    featured: true,
  },
  {
    title: "Демонтаж",
    price: "от 3 000 ₽",
    items: ["Снятие блоков", "Сохранение фреона", "Аккуратная упаковка"],
  },
  {
    title: "Обслуживание",
    price: "от 2 500 ₽",
    items: ["Чистка фильтров", "Диагностика", "Проверка дренажа"],
  },
];

const portfolio = [
  {
    type: "Квартира",
    title: "Чистый монтаж в спальне",
    text: "Установка с аккуратной трассой и минимальным количеством пыли.",
  },
  {
    type: "Дом",
    title: "Монтаж после ремонта",
    text: "Бережная работа рядом с готовой отделкой и мебелью.",
  },
  {
    type: "Офис",
    title: "Установка в рабочей зоне",
    text: "Быстрый монтаж без остановки основных процессов.",
  },
];

const reviews = [
  {
    name: "Магомед",
    text: "Приехали вовремя, сделали аккуратно. После работы все объяснили, мусор за собой убрали.",
  },
  {
    name: "Амина",
    text: "Очень понравилось, что работали с пылесосом. После установки почти не было пыли.",
  },
  {
    name: "Ислам",
    text: "Цена была понятна заранее. Монтаж сделали красиво, трассу вывели аккуратно.",
  },
];

const faqs = [
  {
    q: "Сколько длится установка кондиционера?",
    a: "Обычно стандартный монтаж занимает несколько часов. Точное время зависит от стены, длины трассы и сложности доступа к наружному блоку.",
  },
  {
    q: "Можно ли установить кондиционер после ремонта?",
    a: "Да. Мы работаем максимально аккуратно, используем пылесос и стараемся сохранить чистоту помещения.",
  },
  {
    q: "Что входит в стандартный монтаж?",
    a: "Установка внутреннего и наружного блока, базовая трасса, подключение, вакуумация, запуск и проверка работы.",
  },
  {
    q: "Вы помогаете выбрать кондиционер?",
    a: "Да. Подскажем подходящую мощность и вариант под площадь комнаты, бюджет и особенности помещения.",
  },
];

function FadeIn({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm">
        <Snowflake className="h-4 w-4" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
        {title}
      </h2>
      {text && <p className="mt-5 text-lg leading-8 text-slate-600">{text}</p>}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/50 bg-white/75 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500 text-white shadow-lg shadow-sky-200">
            <Snowflake className="h-6 w-6" />
          </div>
          <div>
            <div className="text-xl font-black tracking-tight text-slate-950">
              ing_comfort
            </div>
            <div className="text-xs font-medium text-slate-500">
              установка кондиционеров
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-600 transition hover:text-sky-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={PHONE_LINK}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-sky-50"
          >
            <Phone className="h-4 w-4" />
            {PHONE}
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-sky-200 transition hover:-translate-y-0.5 hover:bg-sky-600"
          >
            WhatsApp
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-2xl border border-sky-100 bg-white p-3 text-slate-900 shadow-sm lg:hidden"
          aria-label="Открыть меню"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-sky-100 bg-white px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 font-bold text-slate-700 hover:bg-sky-50"
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-500 px-5 py-4 font-bold text-white"
            >
              Написать в WhatsApp
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-40">
      <div className="absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-300/30 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <FadeIn>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-bold text-sky-700 shadow-sm">
            <BadgeCheck className="h-4 w-4" />
            Чистый и аккуратный монтаж под ключ
          </div>

          <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
            Установка кондиционеров с заботой о чистоте и комфорте
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
            ing_comfort — профессиональный монтаж кондиционеров, демонтаж,
            обслуживание, алмазная резка и работа с пылесосом. Аккуратно,
            надежно и без лишней грязи.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-sky-500 px-7 py-4 text-base font-black text-white shadow-xl shadow-sky-200 transition hover:-translate-y-1 hover:bg-sky-600"
            >
              Рассчитать стоимость
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href={PHONE_LINK}
              className="inline-flex items-center justify-center gap-3 rounded-full border border-sky-200 bg-white px-7 py-4 text-base font-black text-slate-800 shadow-sm transition hover:-translate-y-1 hover:bg-sky-50"
            >
              <Phone className="h-5 w-5 text-sky-500" />
              Позвонить мастеру
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-4">
            {[
              ["100%", "аккуратность"],
              ["24/7", "заявки"],
              ["1 год", "гарантия"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-3xl border border-sky-100 bg-white/80 p-5 shadow-sm backdrop-blur"
              >
                <div className="text-2xl font-black text-slate-950">
                  {value}
                </div>
                <div className="mt-1 text-sm font-semibold text-slate-500">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="relative">
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-cyan-200/50 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white bg-white p-4 shadow-2xl shadow-sky-100">
            <div className="rounded-[2rem] bg-gradient-to-br from-sky-100 via-white to-cyan-100 p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-sky-700">
                    ing_comfort service
                  </div>
                  <div className="text-2xl font-black text-slate-950">
                    Монтаж под ключ
                  </div>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-sky-500 shadow-lg">
                  <AirVent className="h-7 w-7" />
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-3xl bg-white p-5 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-50 text-sky-500">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-black text-slate-950">
                        Работа с пылесосом
                      </div>
                      <div className="text-sm text-slate-500">
                        Чище после бурения
                      </div>
                    </div>
                  </div>
                  <div className="h-3 rounded-full bg-slate-100">
                    <div className="h-3 w-[88%] rounded-full bg-sky-400" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-3xl bg-slate-950 p-5 text-white shadow-sm">
                    <ShieldCheck className="mb-6 h-7 w-7 text-sky-300" />
                    <div className="text-xl font-black">Гарантия</div>
                    <div className="mt-1 text-sm text-slate-300">на монтаж</div>
                  </div>
                  <div className="rounded-3xl bg-white p-5 shadow-sm">
                    <Ruler className="mb-6 h-7 w-7 text-sky-500" />
                    <div className="text-xl font-black text-slate-950">
                      Алмазная
                    </div>
                    <div className="mt-1 text-sm text-slate-500">
                      резка стен
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-black text-slate-950">
                        Среднее время монтажа
                      </div>
                      <div className="text-sm text-slate-500">
                        зависит от сложности объекта
                      </div>
                    </div>
                    <div className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-black text-emerald-600">
                      быстро
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="px-5 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-sky-100 bg-white/80 p-5 shadow-sm backdrop-blur">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { icon: ShieldCheck, text: "Гарантия на работу" },
            { icon: Sparkles, text: "Монтаж без лишней грязи" },
            { icon: Clock3, text: "Быстрый выезд" },
            { icon: BadgeCheck, text: "Честный расчет цены" },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-3 rounded-2xl px-4 py-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-sky-500">
                <item.icon className="h-5 w-5" />
              </div>
              <div className="font-black text-slate-800">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Услуги"
          title="Все, что нужно для кондиционера"
          text="От подбора и установки до демонтажа, обслуживания и аккуратной закладки трассы под ремонт."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.05}>
              <div className="group h-full rounded-[2rem] border border-sky-100 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-100">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-500 transition group-hover:bg-sky-500 group-hover:text-white">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-black text-slate-950">
                  {service.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  className="mt-6 inline-flex items-center gap-2 font-black text-sky-600"
                >
                  Узнать цену
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section
      id="benefits"
      className="bg-slate-950 px-5 py-24 text-white lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <FadeIn>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-bold text-sky-200">
            <ShieldCheck className="h-4 w-4" />
            Почему выбирают нас
          </div>
          <h2 className="text-3xl font-black tracking-tight md:text-5xl">
            Делаем так, чтобы монтаж выглядел аккуратно даже после ремонта
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Клиенту важно не только, чтобы кондиционер охлаждал. Важно, чтобы не
            испортили стены, не оставили грязь и сразу объяснили, за что он
            платит. Именно на этом построен подход ing_comfort.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-black text-slate-950 transition hover:-translate-y-1 hover:bg-sky-100"
          >
            Получить консультацию
            <MessageCircle className="h-5 w-5" />
          </a>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((item, index) => (
            <FadeIn key={item} delay={index * 0.06}>
              <div className="flex h-full items-start gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-400 text-slate-950">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div className="text-lg font-black leading-7">{item}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Процесс"
          title="Понятный порядок работы"
          text="Клиент заранее понимает, что будет происходить после заявки и из чего складывается цена."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {process.map((item, index) => (
            <FadeIn key={item.step} delay={index * 0.05}>
              <div className="relative h-full rounded-[2rem] border border-sky-100 bg-white p-7 shadow-sm">
                <div className="mb-8 text-5xl font-black text-sky-100">
                  {item.step}
                </div>
                <h3 className="text-xl font-black text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Prices() {
  return (
    <section id="prices" className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Цены"
          title="Прозрачные ориентиры по стоимости"
          text="Точная цена зависит от длины трассы, типа стены, высоты установки и сложности доступа."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {prices.map((plan, index) => (
            <FadeIn key={plan.title} delay={index * 0.06}>
              <div
                className={`h-full rounded-[2.2rem] p-8 shadow-sm ${
                  plan.featured
                    ? "bg-slate-950 text-white ring-4 ring-sky-200"
                    : "border border-sky-100 bg-white text-slate-950"
                }`}
              >
                {plan.featured && (
                  <div className="mb-5 inline-flex rounded-full bg-sky-400 px-4 py-2 text-sm font-black text-slate-950">
                    Самая частая услуга
                  </div>
                )}

                <h3 className="text-2xl font-black">{plan.title}</h3>
                <div className="mt-5 text-4xl font-black">{plan.price}</div>

                <div className="mt-7 grid gap-4">
                  {plan.items.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2
                        className={`h-5 w-5 ${
                          plan.featured ? "text-sky-300" : "text-sky-500"
                        }`}
                      />
                      <span
                        className={
                          plan.featured ? "text-slate-200" : "text-slate-600"
                        }
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 font-black transition hover:-translate-y-1 ${
                    plan.featured
                      ? "bg-white text-slate-950 hover:bg-sky-100"
                      : "bg-sky-500 text-white hover:bg-sky-600"
                  }`}
                >
                  Рассчитать точно
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center leading-7 text-slate-500">
          Перед началом работы цена согласовывается заранее. Никаких скрытых
          доплат без объяснения и согласования.
        </p>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="bg-sky-50/70 px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Портфолио"
          title="Реальные работы ing_comfort"
          text="Здесь можно поставить настоящие фото до/после, видео процесса и готовые результаты монтажа."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {portfolio.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.06}>
              <div className="overflow-hidden rounded-[2.2rem] border border-white bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-100">
                <div className="relative h-72 overflow-hidden bg-gradient-to-br from-slate-900 via-sky-800 to-cyan-400 p-6">
                  <div className="absolute right-6 top-6 rounded-full bg-white/20 px-4 py-2 text-sm font-black text-white backdrop-blur">
                    {item.type}
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] bg-white/15 p-5 text-white backdrop-blur-xl">
                    <AirVent className="mb-4 h-10 w-10" />
                    <div className="text-sm font-semibold opacity-80">
                      Фото работы
                    </div>
                    <div className="text-2xl font-black">
                      Замените на реальное фото
                    </div>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-black text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Отзывы"
          title="Когда клиенту спокойно — он рекомендует дальше"
          text="Добавьте сюда скриншоты отзывов из WhatsApp, Instagram, 2ГИС, Яндекс или Google."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <FadeIn key={review.name} delay={index * 0.06}>
              <div className="h-full rounded-[2rem] border border-sky-100 bg-white p-7 shadow-sm">
                <div className="mb-5 flex gap-1 text-amber-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-lg leading-8 text-slate-700">
                  “{review.text}”
                </p>
                <div className="mt-7 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 font-black text-sky-700">
                    {review.name[0]}
                  </div>
                  <div>
                    <div className="font-black text-slate-950">
                      {review.name}
                    </div>
                    <div className="text-sm text-slate-500">
                      клиент ing_comfort
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionTitle
          eyebrow="FAQ"
          title="Частые вопросы"
          text="Ответы на вопросы, которые чаще всего возникают перед установкой кондиционера."
        />

        <div className="grid gap-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.q}
              className="overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-sm"
            >
              <button
                onClick={() => setActive(active === index ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 p-6 text-left"
              >
                <span className="text-lg font-black text-slate-950">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-sky-500 transition ${
                    active === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {active === index && (
                <div className="px-6 pb-6 leading-8 text-slate-600">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contacts" className="px-5 pb-28 pt-10 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-slate-950 shadow-2xl shadow-sky-100">
        <div className="grid gap-0 lg:grid-cols-[1fr_0.9fr]">
          <div className="p-8 text-white md:p-12 lg:p-16">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-bold text-sky-200">
              <MessageCircle className="h-4 w-4" />
              Оставить заявку
            </div>

            <h2 className="text-3xl font-black tracking-tight md:text-5xl">
              Рассчитаем стоимость установки под ваш объект
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Напишите нам в WhatsApp: какая комната, какой кондиционер, ремонт
              уже сделан или нет, и по возможности отправьте фото места
              установки. Так мы быстрее назовем точную цену.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-sky-400 px-7 py-4 font-black text-slate-950 transition hover:-translate-y-1 hover:bg-sky-300"
              >
                Написать в WhatsApp
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href={PHONE_LINK}
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/10 px-7 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-white/15"
              >
                Позвонить
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 lg:p-16">
            <div className="rounded-[2rem] border border-sky-100 bg-sky-50/60 p-7">
              <h3 className="text-2xl font-black text-slate-950">
                Контакты ing_comfort
              </h3>

              <div className="mt-7 grid gap-5">
                <a
                  href={PHONE_LINK}
                  className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm transition hover:bg-sky-50"
                >
                  <Phone className="h-6 w-6 text-sky-500" />
                  <div>
                    <div className="text-sm font-bold text-slate-500">
                      Телефон
                    </div>
                    <div className="font-black text-slate-950">{PHONE}</div>
                  </div>
                </a>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm transition hover:bg-sky-50"
                >
                  <MessageCircle className="h-6 w-6 text-sky-500" />
                  <div>
                    <div className="text-sm font-bold text-slate-500">
                      WhatsApp
                    </div>
                    <div className="font-black text-slate-950">
                      Быстрая заявка
                    </div>
                  </div>
                </a>

                <a
                  href="https://instagram.com/ing_comfort"
                  target="_blank"
                  className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm transition hover:bg-sky-50"
                >
                  <Hammer className="h-6 w-6 text-sky-500" />
                  <div>
                    <div className="text-sm font-bold text-slate-500">
                      Instagram
                    </div>
                    <div className="font-black text-slate-950">
                      @ing_comfort
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
                  <MapPin className="h-6 w-6 text-sky-500" />
                  <div>
                    <div className="text-sm font-bold text-slate-500">
                      География
                    </div>
                    <div className="font-black text-slate-950">
                      Ваш город и ближайшие районы
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-7 rounded-2xl bg-slate-950 p-5 text-white">
                <div className="font-black">Что отправить для расчета?</div>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                  <li>— фото места установки внутреннего блока;</li>
                  <li>— фото места наружного блока;</li>
                  <li>— модель кондиционера, если уже куплен;</li>
                  <li>— город, этаж и есть ли готовый ремонт.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-sky-100 bg-white px-5 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500 text-white">
            <Snowflake className="h-6 w-6" />
          </div>
          <div>
            <div className="font-black text-slate-950">ing_comfort</div>
            <div className="text-sm text-slate-500">
              установка кондиционеров под ключ
            </div>
          </div>
        </div>

        <div className="text-sm text-slate-500">
          © {new Date().getFullYear()} ing_comfort. Все права защищены.
        </div>
      </div>

      <a
        href={WHATSAPP_LINK}
        target="_blank"
        className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-200 transition hover:-translate-y-1 hover:bg-emerald-600"
        aria-label="Написать в WhatsApp"
      >
        <MessageCircle className="h-8 w-8" />
      </a>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Benefits />
        <Process />
        <Prices />
        <Portfolio />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
