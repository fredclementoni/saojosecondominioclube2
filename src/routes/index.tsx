import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-piscina-sunset.jpg";
import fachadaImg from "@/assets/fachada-dusk.jpg";
import gourmetImg from "@/assets/lounge-gourmet.jpg";
import academiaImg from "@/assets/academia.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "São José Condomínio Clube — Últimas unidades · INBRAX" },
      {
        name: "description",
        content:
          "O primeiro condomínio clube de São Sebastião do Paraíso. Apartamentos a partir de R$ 350.000. Últimas unidades da Torre B.",
      },
      { property: "og:title", content: "São José Condomínio Clube" },
      {
        property: "og:description",
        content: "Viva o pôr do sol todos os dias. Últimas unidades da Torre B.",
      },
    ],
  }),
  component: Index,
});

const WHATSAPP_URL =
  "https://wa.me/5535910202948?text=Ol%C3%A1!%20Tenho%20interesse%20no%20S%C3%A3o%20Jos%C3%A9%20Condom%C3%ADnio%20Clube.";

const TOUR_360 = "https://tour360.meupasseiovirtual.com/023490/109122/";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <Nav />
      <Hero />
      <Diferente />
      <Lazer />
      <Localizacao />
      <Plantas />
      <Perfis />
      <Investimento />
      <Autoridade />
      <Urgencia />
      <CTAFinal />
      <Footer />
      <FloatingWhats />
    </div>
  );
}

/* -------------------------- Nav -------------------------- */
function Nav() {
  return (
    <nav className="sticky top-0 z-40 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 grid grid-cols-[minmax(0,1fr)_auto] sm:flex sm:items-center sm:justify-between gap-4">
        <a href="#hero" className="flex items-center gap-3 min-w-0">
          <span className="font-serif text-xl tracking-tight font-bold truncate">
            São José
          </span>
          <span className="hidden sm:inline eyebrow">Condomínio Clube</span>
        </a>
        <div className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.2em] font-medium">
          <a href="#lazer" className="hover:text-bronze transition-colors">Lazer</a>
          <a href="#plantas" className="hover:text-bronze transition-colors">Plantas</a>
          <a href="#preco" className="hover:text-bronze transition-colors">Investimento</a>
          <a href="#cta-final" className="hover:text-bronze transition-colors">Contato</a>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 px-5 py-2 border border-charcoal text-[10px] uppercase tracking-[0.2em] font-semibold hover:bg-charcoal hover:text-background transition-all rounded-full"
        >
          Agendar Visita
        </a>
      </div>
    </nav>
  );
}

/* -------------------------- Hero -------------------------- */
function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-end overflow-hidden">
      <img
        src={heroImg}
        alt="Piscina ao pôr do sol no São José Condomínio Clube"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(110deg, color-mix(in oklab, var(--charcoal) 78%, transparent) 0%, color-mix(in oklab, var(--charcoal) 30%, transparent) 55%, transparent 100%)",
        }}
      />
      <div className="absolute top-24 right-6 md:right-10 z-10 animate-reveal">
        <div className="px-4 py-2 rounded-full bg-background/90 backdrop-blur text-[10px] uppercase tracking-[0.25em] font-semibold text-charcoal flex items-center gap-2 shadow-soft">
          <span className="size-1.5 rounded-full bg-sunset animate-pulse" />
          Últimas unidades · Torre B
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-20 md:pb-28 w-full">
        <div className="max-w-3xl animate-reveal text-background">
          <span className="eyebrow !text-bronze-soft">
            INBRAX · São Sebastião do Paraíso
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight mt-6 text-balance">
            Viva o <span className="italic font-normal">pôr do sol</span>
            <br />
            todos os dias.
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg text-background/80 leading-relaxed">
            O primeiro condomínio clube de São Sebastião do Paraíso. Piscina,
            academia, gourmet e a vista que só quem mora aqui conhece.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-7 py-4 bg-background text-charcoal text-[11px] uppercase tracking-[0.25em] font-semibold rounded-full hover:bg-bronze hover:text-background transition-all duration-500 shadow-elegant"
            >
              Falar no WhatsApp
              <span aria-hidden>→</span>
            </a>
            <a
              href="#lazer"
              className="text-[11px] uppercase tracking-[0.25em] font-medium text-background/70 border-b border-background/40 pb-1 hover:text-background hover:border-background transition-colors"
            >
              Conheça o projeto
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-background/60 text-[10px] uppercase tracking-[0.3em]">
        ↓ Role para descobrir
      </div>
    </section>
  );
}

/* -------------------------- Por que é diferente -------------------------- */
function Diferente() {
  const items = [
    {
      n: "01",
      title: "O único clube",
      body: "O primeiro condomínio clube da região — não é prédio com piscina, é clube com apartamentos.",
    },
    {
      n: "02",
      title: "Torre A entregue",
      body: "100% habitada e funcionando. Você vê, visita e sente antes de assinar.",
    },
    {
      n: "03",
      title: "INBRAX há 14 anos",
      body: "15 empreendimentos e mais de 500 famílias atendidas em São Sebastião do Paraíso.",
    },
    {
      n: "04",
      title: "Pronto para morar",
      body: "Torre B em fase final de entrega. Acabamentos, lazer e infraestrutura prontos.",
    },
  ];

  return (
    <section id="diferente" className="py-28 md:py-40 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
          <div>
            <span className="eyebrow">Por que é diferente</span>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] mt-6 text-balance">
              Um endereço pensado <i className="font-normal">para a vida</i>,
              não apenas para morar.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-px bg-border rounded-3xl overflow-hidden">
            {items.map((it) => (
              <div
                key={it.n}
                className="bg-card p-8 md:p-10 group hover:bg-charcoal hover:text-background transition-colors duration-500"
              >
                <span className="font-serif italic text-bronze text-sm group-hover:text-bronze-soft">
                  {it.n}
                </span>
                <h3 className="font-serif text-2xl mt-4">{it.title}</h3>
                <p className="mt-3 text-sm leading-relaxed opacity-80">
                  {it.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------- Lazer -------------------------- */
function Lazer() {
  const amenities = [
    { name: "Piscina", note: "Adulto e infantil" },
    { name: "Sauna", note: "Bem-estar" },
    { name: "Academia", note: "Equipada" },
    { name: "Brinquedoteca", note: "Para os pequenos" },
    { name: "Salão de Festas", note: "Decorado" },
    { name: "2 Gourmets", note: "Com churrasqueira" },
    { name: "Playground", note: "Ao ar livre" },
    { name: "Garagem", note: "Subsolo coberto" },
  ];

  return (
    <section id="lazer" className="py-28 md:py-40 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <span className="eyebrow">Estrutura de Lazer</span>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] mt-6 text-balance">
              Tudo o que você merece, a poucos passos da sua porta.
            </h2>
          </div>
          <a
            href={TOUR_360}
            target="_blank"
            rel="noreferrer"
            className="text-[11px] uppercase tracking-[0.25em] font-medium border-b border-charcoal pb-1 hover:text-bronze hover:border-bronze transition-colors shrink-0"
          >
            Tour 360° ↗
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-3xl group min-h-[420px]">
            <img
              src={gourmetImg}
              alt="Espaço gourmet do São José Condomínio Clube"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 text-background">
              <span className="eyebrow !text-bronze-soft">01 — Convívio</span>
              <h3 className="font-serif text-3xl md:text-4xl mt-3">
                Espaço gourmet
              </h3>
              <p className="text-sm mt-2 text-background/75 max-w-sm">
                Dois ambientes completos com churrasqueira para reunir família e
                amigos.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl group min-h-[200px] md:min-h-0">
            <img
              src={academiaImg}
              alt="Academia equipada do condomínio"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-background">
              <h3 className="font-serif text-2xl">Academia</h3>
              <p className="text-xs mt-1 text-background/70">
                Equipada para o seu dia
              </p>
            </div>
          </div>
          <div className="bg-background p-6 rounded-3xl border border-border flex flex-col justify-between min-h-[200px]">
            <span className="eyebrow">Tour Virtual</span>
            <div>
              <h3 className="font-serif text-2xl mt-2">Visite agora</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Explore cada ambiente em 360°.
              </p>
              <a
                href={TOUR_360}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-[10px] uppercase tracking-[0.25em] font-semibold text-bronze border-b border-bronze pb-0.5"
              >
                Abrir tour ↗
              </a>
            </div>
          </div>
        </div>

        <ul className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {amenities.map((a) => (
            <li
              key={a.name}
              className="bg-card p-5 hover:bg-background transition-colors"
            >
              <div className="font-serif text-lg">{a.name}</div>
              <div className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground mt-1">
                {a.note}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* -------------------------- Localização -------------------------- */
function Localizacao() {
  const groups = [
    {
      title: "Educação",
      items: ["Escolas a 5 min", "Faculdade UNIFEG a 8 min", "Creches no entorno"],
    },
    {
      title: "Saúde",
      items: ["Santa Casa a 6 min", "Clínicas próximas", "Farmácias 24h"],
    },
    {
      title: "Conveniência",
      items: ["Supermercados", "Padarias", "Bancos"],
    },
    {
      title: "Lazer",
      items: ["Praça principal", "Parques", "Restaurantes"],
    },
  ];

  return (
    <section id="localizacao" className="py-28 md:py-40 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        <div className="lg:sticky lg:top-24">
          <span className="eyebrow">Localização</span>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] mt-6 text-balance">
            No coração de São Sebastião do Paraíso.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
            Um endereço estratégico que coloca escola, trabalho, saúde e lazer
            a poucos minutos da sua porta.
          </p>
          <div className="mt-10 rounded-3xl overflow-hidden border border-border aspect-[5/4] shadow-soft">
            <iframe
              title="Mapa São José Condomínio Clube"
              src="https://www.google.com/maps?q=S%C3%A3o+Sebasti%C3%A3o+do+Para%C3%ADso,+MG&output=embed"
              loading="lazy"
              className="w-full h-full grayscale-[0.4] contrast-[1.05]"
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-8">
          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="font-serif text-2xl border-b border-border pb-3">
                {g.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-start gap-3 text-sm text-foreground/85"
                  >
                    <span className="mt-2 size-1.5 rounded-full bg-bronze shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------- Plantas -------------------------- */
function Plantas() {
  const plans = [
    {
      tag: "Smart",
      area: "54m²",
      desc: "2 quartos · sacada · infra para ar-condicionado",
      price: "R$ 350.000",
      features: ["2 quartos", "Sacada", "Infra AC", "Garagem coberta"],
    },
    {
      tag: "Garden",
      area: "76m²",
      desc: "2 quartos · área externa privativa · churrasqueira",
      price: "R$ 420.000",
      features: ["2 quartos", "Área externa", "Churrasqueira", "Garagem coberta"],
    },
  ];

  return (
    <section id="plantas" className="py-28 md:py-40 bg-charcoal text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <span className="eyebrow !text-bronze-soft">As plantas</span>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] mt-6 text-balance">
            Duas formas de viver bem.
          </h2>
          <p className="mt-6 text-background/65 leading-relaxed">
            Escolha o apartamento que combina com o seu momento — com o
            acabamento e a infraestrutura de quem entende de morar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          {plans.map((p) => (
            <article
              key={p.tag}
              className="group relative p-8 md:p-10 rounded-3xl border border-background/10 bg-background/[0.03] hover:bg-background/[0.06] transition-all duration-500"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="eyebrow !text-bronze-soft">Tipologia</span>
                  <h3 className="font-serif text-4xl md:text-5xl mt-2">
                    {p.tag}
                  </h3>
                </div>
                <div className="text-right">
                  <div className="font-serif text-3xl">{p.area}</div>
                </div>
              </div>

              <PlantaIllustration variant={p.tag.toLowerCase() as "smart" | "garden"} />

              <p className="text-background/70 text-sm mt-6">{p.desc}</p>

              <ul className="mt-6 grid grid-cols-2 gap-2">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="text-[11px] uppercase tracking-[0.15em] text-background/60 border border-background/10 rounded-full px-3 py-1.5 text-center"
                  >
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-background/10 flex items-end justify-between gap-4">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-background/50">
                    A partir de
                  </div>
                  <div className="font-serif text-3xl mt-1">{p.price}</div>
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] uppercase tracking-[0.2em] font-semibold border-b border-bronze pb-1 hover:text-bronze-soft transition-colors"
                >
                  Quero esta planta →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlantaIllustration({ variant }: { variant: "smart" | "garden" }) {
  const isGarden = variant === "garden";
  return (
    <div className="mt-8 aspect-[16/10] w-full rounded-2xl border border-background/10 bg-gradient-to-br from-background/[0.04] to-transparent relative overflow-hidden">
      <svg
        viewBox="0 0 320 200"
        className="absolute inset-0 w-full h-full p-6 text-bronze-soft"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
      >
        {/* Outer walls */}
        <rect x="20" y="20" width={isGarden ? 220 : 200} height="160" />
        {/* Living */}
        <line x1="20" y1="100" x2={isGarden ? 140 : 120} y2="100" />
        <line x1={isGarden ? 140 : 120} y1="20" x2={isGarden ? 140 : 120} y2="180" />
        {/* Bath */}
        <line
          x1={isGarden ? 140 : 120}
          y1="100"
          x2={isGarden ? 240 : 220}
          y2="100"
        />
        {isGarden && (
          <>
            <rect x="240" y="20" width="60" height="160" strokeDasharray="3 3" />
            <text
              x="270"
              y="105"
              textAnchor="middle"
              fontSize="7"
              fill="currentColor"
              stroke="none"
              fontFamily="Inter, sans-serif"
            >
              TERRAÇO
            </text>
          </>
        )}
        {/* Labels */}
        <g
          fill="currentColor"
          stroke="none"
          fontFamily="Inter, sans-serif"
          fontSize="6"
          letterSpacing="1"
        >
          <text x="60" y="60">SALA</text>
          <text x={isGarden ? 165 : 145} y="50">QUARTO</text>
          <text x={isGarden ? 200 : 180} y="50">QUARTO</text>
          <text x="40" y="140">COZINHA</text>
          <text x={isGarden ? 160 : 140} y="140">BANHO</text>
        </g>
      </svg>
      <div className="absolute bottom-3 right-4 text-[9px] uppercase tracking-[0.2em] text-background/40">
        Planta ilustrativa
      </div>
    </div>
  );
}

/* -------------------------- Perfis -------------------------- */
function Perfis() {
  const perfis = [
    {
      tag: "Patrimônio",
      title: "Para quem pensa em valorização",
      body: "Dinheiro parado não rende. Um imóvel da INBRAX valoriza e ainda gera renda via locação por temporada com a Zella.",
    },
    {
      tag: "Upgrade",
      title: "Para quem quer mais qualidade de vida",
      body: "Você já tem onde morar — agora quer onde viver. Piscina, academia e gourmet no mesmo endereço.",
    },
    {
      tag: "Primeiro imóvel",
      title: "Para quem cansou de pagar aluguel",
      body: "A parcela pode ser menor que o seu aluguel. Aceita FGTS, MCMV, SBPE e financiamento Caixa.",
    },
  ];
  return (
    <section id="perfis" className="py-28 md:py-40 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl mb-16">
          <span className="eyebrow">Feito para você</span>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] mt-6 text-balance">
            Três caminhos. Uma decisão certa.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {perfis.map((p, i) => (
            <div
              key={p.tag}
              className="p-8 rounded-3xl border border-border bg-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="eyebrow">{p.tag}</span>
                <span className="font-serif italic text-bronze">
                  0{i + 1}
                </span>
              </div>
              <h3 className="font-serif text-2xl mt-6 leading-snug">
                {p.title}
              </h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------- Investimento -------------------------- */
function Investimento() {
  return (
    <section id="preco" className="py-28 md:py-40 px-6 lg:px-10 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="eyebrow">Investimento</span>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] mt-6 text-balance">
            Comece a viver aqui <i className="font-normal">por menos do que imagina</i>.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
            Aceitamos MCMV, SBPE, FGTS e financiamento pela Caixa Econômica
            Federal. Faça uma simulação gratuita e sem compromisso.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 px-7 py-4 bg-charcoal text-background text-[11px] uppercase tracking-[0.25em] font-semibold rounded-full hover:bg-bronze transition-all duration-500 shadow-elegant"
          >
            Simular financiamento
            <span aria-hidden>→</span>
          </a>
        </div>

        <div className="grid gap-4">
          <div className="bg-background rounded-3xl p-8 border border-border flex items-end justify-between">
            <div>
              <div className="eyebrow">Smart · 54m²</div>
              <div className="font-serif text-3xl mt-2">R$ 350.000</div>
              <div className="text-xs text-muted-foreground mt-1">
                Parcelas a partir de R$ 1.890/mês*
              </div>
            </div>
            <span className="font-serif italic text-bronze">01</span>
          </div>
          <div className="bg-background rounded-3xl p-8 border border-border flex items-end justify-between">
            <div>
              <div className="eyebrow">Garden · 76m²</div>
              <div className="font-serif text-3xl mt-2">R$ 420.000</div>
              <div className="text-xs text-muted-foreground mt-1">
                Sob consulta · entrada facilitada
              </div>
            </div>
            <span className="font-serif italic text-bronze">02</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
            {["MCMV", "SBPE", "FGTS", "Caixa"].map((m) => (
              <div
                key={m}
                className="text-center text-[10px] uppercase tracking-[0.2em] py-3 border border-border rounded-full font-semibold text-foreground/70"
              >
                {m}
              </div>
            ))}
          </div>
          <p className="text-[10px] text-muted-foreground mt-2">
            *Simulação para Smart 54m² com entrada e prazos típicos. Sujeito à
            análise de crédito.
          </p>
        </div>
      </div>
    </section>
  );
}

/* -------------------------- Autoridade -------------------------- */
function Autoridade() {
  const stats = [
    { n: "14", l: "Anos de mercado" },
    { n: "15", l: "Empreendimentos" },
    { n: "500+", l: "Famílias atendidas" },
    { n: "100%", l: "Torre A entregue" },
  ];
  const depoimentos = [
    {
      nome: "Mariana S.",
      papel: "Moradora · Torre A",
      texto:
        "Saímos de um apartamento comum e viemos para o São José. Hoje meus filhos vivem na piscina e na brinquedoteca — é outra qualidade de vida.",
    },
    {
      nome: "Roberto C.",
      papel: "Investidor",
      texto:
        "Comprei na planta como investimento. Já valorizou e está alugado pela Zella. Decisão acertada.",
    },
    {
      nome: "Ana Paula M.",
      papel: "Primeira moradia",
      texto:
        "A parcela ficou menor que o aluguel que eu pagava. A INBRAX cuidou de cada detalhe da entrega.",
    },
  ];
  return (
    <section id="autoridade" className="py-28 md:py-40 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
          <div className="relative">
            <img
              src={fachadaImg}
              alt="Fachada da Torre A do São José Condomínio Clube"
              loading="lazy"
              className="rounded-3xl shadow-elegant w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-background border border-border rounded-2xl px-6 py-4 shadow-soft hidden md:block">
              <div className="eyebrow">Entrega</div>
              <div className="font-serif text-xl mt-1">Torre A · 2024</div>
            </div>
          </div>
          <div>
            <span className="eyebrow">A INBRAX</span>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] mt-6 text-balance">
              Quem entrega há 14 anos não promete — comprova.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
              Fundada em 2013, a INBRAX é a incorporadora que mais entregou
              empreendimentos em São Sebastião do Paraíso.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden mt-10 border border-border">
              {stats.map((s) => (
                <div key={s.l} className="bg-card p-6 text-center">
                  <div className="font-serif text-3xl">{s.n}</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-2">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Depoimentos */}
        <div className="mt-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow">Quem já vive aqui</span>
            <h3 className="font-serif text-3xl md:text-4xl mt-6 leading-tight text-balance">
              Histórias de quem fez a escolha certa.
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {depoimentos.map((d) => (
              <figure
                key={d.nome}
                className="bg-card p-8 rounded-3xl border border-border flex flex-col"
              >
                <span className="font-serif text-5xl text-bronze leading-none">
                  “
                </span>
                <blockquote className="font-serif italic text-lg mt-2 leading-snug flex-1">
                  {d.texto}
                </blockquote>
                <figcaption className="mt-6 pt-6 border-t border-border">
                  <div className="font-semibold text-sm">{d.nome}</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
                    {d.papel}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Zella */}
        <div className="mt-20 rounded-3xl p-10 md:p-14 bg-charcoal text-background grid md:grid-cols-[2fr_1fr] gap-8 items-center">
          <div>
            <span className="eyebrow !text-bronze-soft">Parceria Zella</span>
            <h3 className="font-serif text-3xl md:text-4xl mt-4 leading-tight">
              Seu apartamento gerando renda quando você não estiver nele.
            </h3>
            <p className="mt-4 text-background/65 max-w-xl">
              A Zella cuida da locação por temporada do seu imóvel — limpeza,
              hospedagem, anúncio. Você só recebe.
            </p>
          </div>
          <div className="flex md:justify-end">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-background text-charcoal text-[10px] uppercase tracking-[0.25em] font-semibold rounded-full hover:bg-bronze hover:text-background transition-all"
            >
              Saber mais →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------- Urgência -------------------------- */
function Urgencia() {
  return (
    <section
      id="urgencia"
      className="relative py-32 md:py-44 px-6 lg:px-10 overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, color-mix(in oklab, var(--sunset) 28%, transparent), transparent 60%), radial-gradient(ellipse at 80% 80%, color-mix(in oklab, var(--bronze) 22%, transparent), transparent 60%)",
        }}
      />
      <div className="relative max-w-4xl mx-auto text-center">
        <span className="eyebrow !text-sunset">Atenção</span>
        <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mt-6 text-balance">
          A Torre B está nas últimas unidades.
        </h2>
        <p className="mt-8 text-lg text-foreground/75 max-w-2xl mx-auto leading-relaxed">
          A Torre A está 100% habitada. A Torre B segue o mesmo caminho —
          rápido. Quem decidir agora ainda escolhe planta, andar e vista.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-12 inline-flex items-center gap-3 px-8 py-5 bg-charcoal text-background text-[11px] uppercase tracking-[0.25em] font-semibold rounded-full hover:bg-bronze transition-all duration-500 shadow-elegant"
        >
          Garantir minha unidade
          <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
}

/* -------------------------- CTA Final + Form -------------------------- */
function CTAFinal() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nome = (data.get("nome") || "").toString();
    const telefone = (data.get("telefone") || "").toString();
    const interesse = (data.get("interesse") || "").toString();
    const msg = `Olá! Meu nome é ${nome}. Telefone: ${telefone}. Tenho interesse em: ${interesse}.`;
    window.open(
      `https://wa.me/5535910202948?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  }

  return (
    <section id="cta-final" className="py-28 md:py-40 px-6 lg:px-10 bg-charcoal text-background">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <span className="eyebrow !text-bronze-soft">Fale conosco</span>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mt-6 text-balance">
            O próximo capítulo da sua história começa com uma conversa.
          </h2>
          <p className="mt-8 text-background/70 leading-relaxed max-w-md">
            Preencha os dados e nosso consultor entrará em contato pelo
            WhatsApp para apresentar o projeto e agendar sua visita.
          </p>

          <div className="mt-12 space-y-5">
            <ContactLine
              label="WhatsApp"
              value="(35) 91020-2948"
              href={WHATSAPP_URL}
            />
            <ContactLine label="Tour 360°" value="Explore em casa" href={TOUR_360} />
            <ContactLine
              label="Endereço"
              value="São Sebastião do Paraíso · MG"
              href="#localizacao"
            />
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-background text-charcoal p-8 md:p-10 rounded-3xl shadow-elegant flex flex-col gap-6"
        >
          <Field label="Nome" name="nome" placeholder="Como devemos te chamar" required />
          <Field
            label="WhatsApp"
            name="telefone"
            type="tel"
            placeholder="(00) 00000-0000"
            required
          />
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-[0.25em] font-semibold text-charcoal/60">
              Interesse
            </label>
            <select
              name="interesse"
              defaultValue="Smart 54m²"
              className="bg-transparent border-b border-charcoal/20 py-2 focus:border-bronze outline-none transition-colors"
            >
              <option>Smart 54m² · R$ 350.000</option>
              <option>Garden 76m² · R$ 420.000</option>
              <option>Investimento / Zella</option>
              <option>Visita ao stand</option>
            </select>
          </div>
          <label className="flex items-start gap-3 text-xs text-charcoal/70 leading-relaxed">
            <input type="checkbox" required className="mt-0.5 accent-bronze" />
            Autorizo o contato e li a política de privacidade (LGPD).
          </label>
          <button
            type="submit"
            className="mt-2 w-full py-4 bg-charcoal text-background text-[11px] uppercase tracking-[0.25em] font-semibold rounded-full hover:bg-bronze transition-all duration-500"
          >
            Enviar para o WhatsApp →
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] uppercase tracking-[0.25em] font-semibold text-charcoal/60">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="bg-transparent border-b border-charcoal/20 py-2 focus:border-bronze outline-none transition-colors placeholder:text-charcoal/30"
      />
    </div>
  );
}

function ContactLine({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group flex items-baseline justify-between border-b border-background/15 pb-4 hover:border-bronze transition-colors"
    >
      <span className="eyebrow !text-bronze-soft">{label}</span>
      <span className="font-serif text-xl group-hover:text-bronze-soft transition-colors">
        {value} <span className="opacity-50">↗</span>
      </span>
    </a>
  );
}

/* -------------------------- Footer -------------------------- */
function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-10 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="font-serif text-lg font-bold">São José Condomínio Clube</div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
            INBRAX Empreendimentos · CRECI MG
          </div>
        </div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground text-center">
          © 2026 INBRAX · Todos os direitos reservados
        </p>
        <div className="flex gap-6 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-bronze">
            WhatsApp
          </a>
          <a href={TOUR_360} target="_blank" rel="noreferrer" className="hover:text-bronze">
            Tour 360°
          </a>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------- Floating WhatsApp -------------------------- */
function FloatingWhats() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <span className="relative flex items-center gap-3 bg-[#25D366] text-white pl-4 pr-5 py-3.5 rounded-full shadow-elegant hover:scale-105 active:scale-95 transition-transform">
        <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
        </svg>
        <span className="hidden md:inline text-[11px] uppercase tracking-[0.2em] font-semibold">
          Fale agora
        </span>
      </span>
    </a>
  );
}
