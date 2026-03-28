import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/776df7f9-ab59-4308-92db-0cdd271bdf37/files/16ee14f0-8575-4fa3-a61c-01fa9c16217d.jpg";
const WORK_IMG = "https://cdn.poehali.dev/projects/776df7f9-ab59-4308-92db-0cdd271bdf37/files/eafb1488-083a-49a2-8869-8eab2face4e4.jpg";

const services = [
  { icon: "✨", name: "Классика", desc: "Природная красота и лёгкость. Одна ресничка на одну натуральную.", price: "от 1 500 ₽", time: "1.5–2 ч" },
  { icon: "💫", name: "1,5D / 2D", desc: "Чуть больше объёма — взгляд становится выразительнее и глубже.", price: "от 2 000 ₽", time: "2–2.5 ч" },
  { icon: "🌊", name: "Мокрый эффект", desc: "Трендовый look! Пучки слипаются — создаётся эффект мокрых ресниц.", price: "от 2 200 ₽", time: "2–3 ч" },
  { icon: "🔥", name: "Объём 3D+", desc: "Роскошный, пышный взгляд. Голливудский объём для особых случаев.", price: "от 2 500 ₽", time: "2.5–3.5 ч" },
];

const reviews = [
  { name: "Анастасия", text: "Виолетта — настоящий профессионал! Делала классику, результат превзошёл ожидания. Держатся уже три недели, ни одна не упала. Однозначно вернусь!", stars: 5 },
  { name: "Мария", text: "Попросила мокрый эффект — это просто wow! Все подруги спрашивают, где делала. Очень комфортно лежать, кушетка мягкая, атмосфера уютная.", stars: 5 },
  { name: "Екатерина", text: "Давно искала мастера, который делает аккуратно и слышит пожелания. Виолетта именно такая! Подобрала идеальный изгиб под форму моих глаз.", stars: 5 },
];

const portfolio = [HERO_IMG, WORK_IMG, HERO_IMG, WORK_IMG];

const times = ["10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00"];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <span key={i} className="text-yellow-400 text-sm">★</span>
      ))}
    </div>
  );
}

export default function Index() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", date: "", time: "" });
  const [sent, setSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "О мне" },
    { href: "#services", label: "Услуги" },
    { href: "#portfolio", label: "Портфолио" },
    { href: "#reviews", label: "Отзывы" },
    { href: "#booking", label: "Запись" },
    { href: "#contacts", label: "Контакты" },
  ];

  return (
    <div className="min-h-screen" style={{ background: "#0d0a14", color: "#f8f0f5" }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ background: "rgba(13,10,20,0.85)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(214,51,132,0.12)" }}>
        <span className="font-display text-xl italic" style={{ background: "linear-gradient(135deg,#d63384,#ff6bb5,#ffb347)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Violetta Lashes
        </span>
        <div className="hidden md:flex gap-8">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className="text-sm font-light tracking-wide transition-colors" style={{ color: "rgba(248,240,245,0.7)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#ff6bb5")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(248,240,245,0.7)")}>
              {l.label}
            </a>
          ))}
        </div>
        <a href="#booking" className="hidden md:block btn-gradient px-5 py-2 rounded-full text-sm font-semibold">
          Записаться
        </a>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col pt-20 px-8 gap-6"
          style={{ background: "rgba(13,10,20,0.97)", backdropFilter: "blur(20px)" }}>
          {navLinks.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              className="text-2xl font-display italic gradient-text py-2 border-b"
              style={{ borderColor: "rgba(214,51,132,0.15)" }}>{l.label}</a>
          ))}
          <a href="#booking" onClick={() => setMenuOpen(false)} className="btn-gradient mt-4 px-6 py-3 rounded-full text-center font-semibold">
            Записаться
          </a>
        </div>
      )}

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(214,51,132,0.18) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(255,179,71,0.1) 0%, transparent 60%)"
        }} />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full animate-glow-pulse"
          style={{ background: "radial-gradient(circle, rgba(214,51,132,0.15) 0%, transparent 70%)", filter: "blur(40px)" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-xs font-medium tracking-widest uppercase"
              style={{ background: "rgba(214,51,132,0.12)", border: "1px solid rgba(214,51,132,0.3)", color: "#ff6bb5" }}>
              ✦ Мастер наращивания ресниц
            </div>
            <h1 className="font-display text-6xl md:text-7xl font-light leading-tight mb-6">
              Привет!<br />
              <span className="italic gradient-text">Меня зовут<br />Виолетта</span>
            </h1>
            <p className="text-lg font-light leading-relaxed mb-8" style={{ color: "rgba(248,240,245,0.75)" }}>
              Я мастер по наращиванию ресниц. Хочу развиваться в профессии, совершенствовать навыки и создавать красивые, естественные взгляды для своих клиентов.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#booking" className="btn-gradient px-8 py-3 rounded-full font-semibold text-white">
                Записаться онлайн
              </a>
              <a href="#portfolio" className="px-8 py-3 rounded-full font-semibold transition-all"
                style={{ border: "1px solid rgba(214,51,132,0.4)", color: "#ff6bb5" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(214,51,132,0.1)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
                Посмотреть работы
              </a>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="relative w-80 h-96 rounded-3xl overflow-hidden animate-float"
              style={{ boxShadow: "0 0 60px rgba(214,51,132,0.35)" }}>
              <img src={HERO_IMG} alt="Наращивание ресниц" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,10,20,0.4) 0%, transparent 60%)" }} />
            </div>
            <div className="absolute -bottom-4 -left-4 card-glow rounded-2xl px-4 py-3 text-sm font-medium"
              style={{ color: "#f8f0f5" }}>
              <div className="gradient-text font-semibold text-lg">100%</div>
              <div style={{ color: "rgba(248,240,245,0.6)", fontSize: 12 }}>Качественные материалы</div>
            </div>
            <div className="absolute -top-4 -right-4 card-glow rounded-2xl px-4 py-3 text-sm font-medium">
              <div className="gradient-text-gold font-semibold text-lg">★ 5.0</div>
              <div style={{ color: "rgba(248,240,245,0.6)", fontSize: 12 }}>Оценка клиентов</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="w-full h-80 rounded-3xl overflow-hidden"
              style={{ border: "1px solid rgba(214,51,132,0.2)", boxShadow: "0 0 50px rgba(214,51,132,0.15)" }}>
              <img src={WORK_IMG} alt="Процесс работы" className="w-full h-full object-cover" />
            </div>
          </div>
          <div>
            <div className="text-xs tracking-widest uppercase mb-4" style={{ color: "#ff6bb5" }}>✦ Обо мне</div>
            <h2 className="font-display text-5xl font-light mb-8 leading-tight">
              Что вы<br /><span className="italic gradient-text">получаете</span>
            </h2>
            <div className="space-y-4">
              {[
                { icon: "💎", text: "Профессиональное наращивание ресниц с учётом ваших пожеланий и особенностей взгляда" },
                { icon: "📐", text: "Индивидуальный подбор изгиба, длины и объёма (классика, 1,5D, 2D и мокрый эффект 🌊)" },
                { icon: "🛋️", text: "Комфортные условия: удобная кушетка, стерильные инструменты, качественные материалы" },
                { icon: "📋", text: "Консультацию по уходу за наращёнными ресницами" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start p-4 rounded-2xl animate-fade-in-up"
                  style={{ background: "rgba(214,51,132,0.05)", border: "1px solid rgba(214,51,132,0.1)", animationDelay: `${i * 0.1}s` }}>
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(248,240,245,0.8)" }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Что от вас требуется */}
        <div className="mt-16 p-8 rounded-3xl card-glow">
          <h3 className="font-display text-3xl font-light mb-6 italic gradient-text">От вас требуется:</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "⏰", text: "Готовность уделить время процедуре (длительность зависит от выбранного объёма и густоты ваших ресниц)" },
              { icon: "💬", text: "Обратная связь о результате и впечатлениях — это поможет мне становиться лучше" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(248,240,245,0.75)" }}>{item.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 font-display text-2xl italic" style={{ color: "#ff6bb5" }}>
            Давайте создадим ваш идеальный взгляд вместе! ✨
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6" style={{ background: "rgba(214,51,132,0.03)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs tracking-widest uppercase mb-4" style={{ color: "#ff6bb5" }}>✦ Услуги</div>
            <h2 className="font-display text-5xl font-light">Виды <span className="italic gradient-text">наращивания</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div key={i} className="card-glow rounded-3xl p-6 flex flex-col gap-4 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}>
                <span className="text-4xl">{s.icon}</span>
                <h3 className="font-display text-2xl font-light">{s.name}</h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "rgba(248,240,245,0.65)" }}>{s.desc}</p>
                <div className="pt-4" style={{ borderTop: "1px solid rgba(214,51,132,0.15)" }}>
                  <div className="gradient-text font-semibold text-lg">{s.price}</div>
                  <div className="text-xs mt-1 flex items-center gap-1" style={{ color: "rgba(248,240,245,0.5)" }}>
                    <Icon name="Clock" size={12} /> {s.time}
                  </div>
                </div>
                <a href="#booking" className="btn-gradient px-4 py-2 rounded-full text-center text-sm font-semibold text-white">
                  Записаться
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs tracking-widest uppercase mb-4" style={{ color: "#ff6bb5" }}>✦ Портфолио</div>
          <h2 className="font-display text-5xl font-light">Мои <span className="italic gradient-text">работы</span></h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {portfolio.map((img, i) => (
            <div key={i} className="relative group rounded-2xl overflow-hidden aspect-square cursor-pointer"
              style={{ border: "1px solid rgba(214,51,132,0.15)" }}>
              <img src={img} alt={`Работа ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                style={{ background: "rgba(214,51,132,0.5)" }}>
                <Icon name="Eye" size={32} className="text-white" />
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-sm" style={{ color: "rgba(248,240,245,0.45)" }}>
          Больше работ — в моём Instagram и Telegram ✨
        </p>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 px-6" style={{ background: "rgba(255,179,71,0.03)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs tracking-widest uppercase mb-4" style={{ color: "#ffb347" }}>✦ Отзывы</div>
            <h2 className="font-display text-5xl font-light">Что говорят <span className="italic gradient-text-gold">клиенты</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="card-glow rounded-3xl p-6 flex flex-col gap-4 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.15}s`, borderColor: "rgba(255,179,71,0.15)" }}>
                <Stars n={r.stars} />
                <p className="text-sm leading-relaxed flex-1" style={{ color: "rgba(248,240,245,0.8)" }}>«{r.text}»</p>
                <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid rgba(255,179,71,0.1)" }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold"
                    style={{ background: "linear-gradient(135deg,#d63384,#ff6bb5)", color: "white" }}>
                    {r.name[0]}
                  </div>
                  <span className="font-medium text-sm">{r.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs tracking-widest uppercase mb-4" style={{ color: "#ff6bb5" }}>✦ Онлайн-запись</div>
          <h2 className="font-display text-5xl font-light">Запишитесь <span className="italic gradient-text">онлайн</span></h2>
          <p className="mt-4 text-sm" style={{ color: "rgba(248,240,245,0.55)" }}>Выберите услугу, дату и удобное время — и я свяжусь с вами для подтверждения</p>
        </div>

        {sent ? (
          <div className="max-w-md mx-auto text-center card-glow rounded-3xl p-12">
            <div className="text-5xl mb-6">✨</div>
            <h3 className="font-display text-3xl gradient-text italic mb-4">Заявка принята!</h3>
            <p className="text-sm" style={{ color: "rgba(248,240,245,0.65)" }}>
              Виолетта свяжется с вами в ближайшее время для подтверждения записи.
            </p>
            <button onClick={() => setSent(false)} className="mt-8 btn-gradient px-6 py-2 rounded-full text-sm font-semibold text-white">
              Записаться ещё раз
            </button>
          </div>
        ) : (
          <div className="max-w-xl mx-auto card-glow rounded-3xl p-8">
            <div className="space-y-5">
              <div>
                <label className="text-xs uppercase tracking-widest block mb-2" style={{ color: "rgba(248,240,245,0.5)" }}>Ваше имя</label>
                <input
                  type="text" placeholder="Анастасия"
                  value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(214,51,132,0.2)", color: "#f8f0f5" }}
                  onFocus={e => (e.currentTarget.style.borderColor = "rgba(214,51,132,0.6)")}
                  onBlur={e => (e.currentTarget.style.borderColor = "rgba(214,51,132,0.2)")}
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest block mb-2" style={{ color: "rgba(248,240,245,0.5)" }}>Телефон</label>
                <input
                  type="tel" placeholder="+7 (___) ___-__-__"
                  value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(214,51,132,0.2)", color: "#f8f0f5" }}
                  onFocus={e => (e.currentTarget.style.borderColor = "rgba(214,51,132,0.6)")}
                  onBlur={e => (e.currentTarget.style.borderColor = "rgba(214,51,132,0.2)")}
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest block mb-2" style={{ color: "rgba(248,240,245,0.5)" }}>Услуга</label>
                <select
                  value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                  style={{ background: "rgba(20,12,28,0.95)", border: "1px solid rgba(214,51,132,0.2)", color: form.service ? "#f8f0f5" : "rgba(248,240,245,0.4)" }}
                  onFocus={e => (e.currentTarget.style.borderColor = "rgba(214,51,132,0.6)")}
                  onBlur={e => (e.currentTarget.style.borderColor = "rgba(214,51,132,0.2)")}
                >
                  <option value="" disabled>Выберите услугу</option>
                  {services.map(s => <option key={s.name} value={s.name}>{s.name} — {s.price}</option>)}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-widest block mb-2" style={{ color: "rgba(248,240,245,0.5)" }}>Дата</label>
                  <input
                    type="date"
                    value={form.date} onChange={e => setForm({ ...form, date: e.target.value })}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                    style={{ background: "rgba(20,12,28,0.95)", border: "1px solid rgba(214,51,132,0.2)", color: "#f8f0f5", colorScheme: "dark" }}
                    onFocus={e => (e.currentTarget.style.borderColor = "rgba(214,51,132,0.6)")}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(214,51,132,0.2)")}
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest block mb-2" style={{ color: "rgba(248,240,245,0.5)" }}>Время</label>
                  <select
                    value={form.time} onChange={e => setForm({ ...form, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                    style={{ background: "rgba(20,12,28,0.95)", border: "1px solid rgba(214,51,132,0.2)", color: form.time ? "#f8f0f5" : "rgba(248,240,245,0.4)" }}
                    onFocus={e => (e.currentTarget.style.borderColor = "rgba(214,51,132,0.6)")}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(214,51,132,0.2)")}
                  >
                    <option value="" disabled>Выберите</option>
                    {times.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>
              <button
                onClick={() => { if (form.name && form.phone && form.service && form.date && form.time) setSent(true); }}
                className="w-full btn-gradient py-4 rounded-xl font-semibold text-white text-sm tracking-wide mt-2"
                style={{ opacity: (form.name && form.phone && form.service && form.date && form.time) ? 1 : 0.5 }}
              >
                Отправить заявку ✨
              </button>
            </div>
          </div>
        )}
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 px-6" style={{ background: "rgba(214,51,132,0.03)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs tracking-widest uppercase mb-4" style={{ color: "#ff6bb5" }}>✦ Контакты</div>
            <h2 className="font-display text-5xl font-light">Связаться <span className="italic gradient-text">со мной</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: "📱", label: "Телефон", value: "+7 (___) ___-__-__", hint: "Звонки и WhatsApp" },
              { icon: "✈️", label: "Telegram", value: "@violetta_lashes", hint: "Быстрый ответ" },
              { icon: "📍", label: "Адрес", value: "Укажите город", hint: "Выезд возможен" },
            ].map((c, i) => (
              <div key={i} className="card-glow rounded-3xl p-6 text-center">
                <div className="text-4xl mb-4">{c.icon}</div>
                <div className="text-xs uppercase tracking-widest mb-2" style={{ color: "#ff6bb5" }}>{c.label}</div>
                <div className="font-semibold mb-1">{c.value}</div>
                <div className="text-xs" style={{ color: "rgba(248,240,245,0.4)" }}>{c.hint}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 text-center" style={{ borderTop: "1px solid rgba(214,51,132,0.12)" }}>
        <span className="font-display text-lg italic gradient-text">Violetta Lashes</span>
        <p className="text-xs mt-2" style={{ color: "rgba(248,240,245,0.3)" }}>© 2026 · Мастер наращивания ресниц</p>
      </footer>

    </div>
  );
}
