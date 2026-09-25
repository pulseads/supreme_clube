/*
  * Design direction: Supreme Clube official identity adapted to an urban club aesthetic.
 * Navy blue, white, and electric sky blue mirror the circular brand seal from Instagram.
 * Real Instagram media is used where available; conversion always points to direct WhatsApp
 * and every visit-oriented CTA reminds the visitor to schedule before coming.
 */
import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowUpRight,
  MoveRight,
  CalendarDays,
  CarFront,
  ChevronDown,
  Droplets,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Scissors,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
  X,
} from "lucide-react";

const WHATSAPP = "https://wa.me/5527992977721";
const BARBER_WHATSAPP = "https://api.whatsapp.com/send?phone=5527998873746&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio.";
const INSTAGRAM = "https://www.instagram.com/supremeclube.vv/";
const MAPS =
  "https://www.google.com/maps/search/?api=1&query=Av.%20Saturnino%20Rangel%20Mauro%2C%20405%2C%20Praia%20de%20Itaparica%2C%20Vila%20Velha%2C%20ES";
const waMessage = (message: string) => `${WHATSAPP}?text=${encodeURIComponent(message)}`;

const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path}`;
const brandLogo = assetPath("assets/profile-picture.jpg");
const realImages = {
  wash: assetPath("assets/wash.jpg"),
  finish: assetPath("assets/finish.jpg"),
  space: assetPath("assets/space.jpg"),
  barber: assetPath("assets/barber-real.jpg"),
  videoCover: assetPath("assets/video-cover.jpg"),
  video: assetPath("assets/supreme-clube-instagram-video-dh-bt2.mp4"),
  barberBeard: assetPath("assets/barber-treated-beard.webp"),
  barberFamily: assetPath("assets/barber-treated-family.webp"),
  barberAgenda: assetPath("assets/barber-treated-agenda.webp"),
};

const gallery = [
  { src: realImages.wash, alt: "Carro vermelho durante processo de lavagem no Supreme Clube", label: "Lavagem / processo real" },
  { src: realImages.finish, alt: "Produtos de coating e acabamento em bancada do Supreme Clube", label: "Proteção / acabamento" },
  { src: realImages.space, alt: "Interior azul do espaço de estética automotiva Supreme Clube", label: "O espaço / Vila Velha" },
];

const automotiveServices = [
  { name: "Vitrificação Full", note: "Proteção avançada e brilho duradouro", icon: ShieldCheck },
  { name: "Polimento completo", note: "Acabamento e recuperação da pintura", icon: Sparkles },
  { name: "Polimento de farol", note: "Mais transparência e acabamento", icon: CarFront },
  { name: "Lavagem de bancos", note: "Limpeza profunda do interior", icon: Droplets },
  { name: "Lavagem de motor", note: "Cuidado técnico para o cofre", icon: Wrench },
  { name: "Lavagem de chassi", note: "Higienização da parte inferior", icon: Droplets },
  { name: "Hidratação de bancos", note: "Conservação e toque renovado", icon: ShieldCheck },
  { name: "Impermeabilização de estofados", note: "Proteção contra líquidos e manchas", icon: ShieldCheck },
  { name: "VIP Completa", note: "Cuidado completo para o seu carro", icon: CarFront },
  { name: "Cera em pasta e selante", note: "Brilho e proteção no acabamento", icon: Sparkles },
];

const verifiedReviews = [
  { author: "Christiane Codignolle", text: "O atendimento foi excelente, a equipe foi super solícita e educada. O ambiente é agradável e tranquilo. Recomendo.", detail: "Google · avaliação pública · 5 estrelas" },
  { author: "Valeska Feijo de Souza", text: "O atendimento é transparente e excelente. Fui muito bem atendida — e o melhor é poder agendar carro e barbearia na mesma visita.", detail: "Google · avaliação pública · 5 estrelas" },
  { author: "Robson Ribeiro", text: "Serviço impecável, são profissionais que entendem e gostam de carro. Deixei meu carro com eles e voltou um carro novo. Recomendo.", detail: "Google · avaliação pública · 5 estrelas" },
  { author: "Douglas Lobato", text: "Lugar agradável, música boa, atendimento excelente!! Recomendo demais!", detail: "Google · avaliação pública · 5 estrelas" },
];

const faqs = [
  { question: "Preciso agendar antes de ir?", answer: "Sim. Antes de ir ao Supreme Clube, entre em contato pelo WhatsApp para consultar a disponibilidade e agendar seu atendimento." },
  { question: "Onde fica o Supreme Clube?", answer: "Estamos na Av. Saturnino Rangel Mauro, 405, em Praia de Itaparica, Vila Velha — ES." },
  { question: "Quais serviços automotivos estão disponíveis?", answer: "O catálogo reúne VIP Completa, lavagens de bancos, motor e chassi, polimentos, vitrificação Full, cera, selante, hidratação de bancos e impermeabilização de estofados. Confirme disponibilidade e escopo pelo WhatsApp." },
  { question: "A barbearia também precisa de agendamento?", answer: "Para evitar deslocamento sem atendimento, consulte a equipe pelo WhatsApp antes de ir e confirme a disponibilidade da barbearia." },
  { question: "Posso cuidar do carro e cortar o cabelo na mesma visita?", answer: "É possível consultar a combinação dos atendimentos, mas as agendas são confirmadas pelas equipes. Fale com os dois contatos antes de ir." },
  { question: "Posso pedir orçamento pelo WhatsApp?", answer: "Sim. Envie uma mensagem com o serviço que deseja consultar e a equipe orientará você sobre escopo e disponibilidade." },
  { question: "A barbearia atende crianças?", answer: "O perfil do Supreme Clube apresenta atendimento infantil. Confirme o horário e os detalhes do corte diretamente com a barbearia." },
  { question: "Quanto tempo dura o atendimento?", answer: "A duração varia conforme o serviço escolhido. Consulte a equipe pelo WhatsApp antes de agendar." },
];

function BrandMark() {
  return <img src={brandLogo} alt="Logo Supreme Clube" className="official-logo" />;
}

function SectionKicker({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <div className={`section-kicker ${light ? "section-kicker-light" : ""}`}><span className="section-kicker-line" /><span>{children}</span></div>;
}


type ChatView = "home" | "carro" | "barbearia" | "duvidas" | "localizacao";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const closeMenu = () => setMenuOpen(false);
  const animateScrollTo = (targetTop: number) => {
    const startTop = window.scrollY;
    const distance = targetTop - startTop;
    const duration = 720;
    const startedAt = performance.now();
    const easeOutCubic = (progress: number) => 1 - Math.pow(1 - progress, 3);
    const frame = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      window.scrollTo(0, startTop + distance * easeOutCubic(progress));
      if (progress < 1) window.requestAnimationFrame(frame);
    };
    window.requestAnimationFrame(frame);
  };
  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    closeMenu();
    const target = document.getElementById(id);
    if (!target) return;
    animateScrollTo(target.getBoundingClientRect().top + window.scrollY - 88);
    window.history.replaceState(null, "", `#${id}`);
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <a className="brand-lockup" href="#top" aria-label="Supreme Clube — início" onClick={(event) => scrollToSection(event, "top")}><BrandMark /><span className="brand-wordmark"><strong>SUPREME</strong><span>CLUBE</span></span></a>
          <nav id="primary-navigation" className={`desktop-nav ${menuOpen ? "mobile-nav-open" : ""}`} aria-label="Navegação principal">
            <a href="#servicos" onClick={(event) => scrollToSection(event, "servicos")}>Serviços</a>
            <a href="#barbearia" onClick={(event) => scrollToSection(event, "barbearia")}>Barbearia</a>
            <a href="#avaliacoes" onClick={(event) => scrollToSection(event, "avaliacoes")}>Avaliações</a>
            <a href="#localizacao" onClick={(event) => scrollToSection(event, "localizacao")}>Localização</a>
            <a className="nav-mobile-cta" href={waMessage("Olá! Vim pela página do Supreme Clube e quero agendar um atendimento.")} target="_blank" rel="noreferrer" data-umami-event="header-whatsapp">Agendar no WhatsApp <ArrowUpRight size={15} /></a>
          </nav>
          <a className="header-cta" href={waMessage("Olá! Vim pela página do Supreme Clube e quero agendar um atendimento.")} target="_blank" rel="noreferrer" data-umami-event="header-whatsapp">Agendar no WhatsApp <ArrowUpRight size={15} /></a>
          <button className="menu-toggle" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-controls="primary-navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
      </header>

      <a className="skip-link" href="#main-content">Pular para o conteúdo</a>
      <main id="main-content">
        <section className="hero-section" id="top" aria-labelledby="hero-title">
          <div className="hero-image" role="img" aria-label="Carro vermelho em processo de lavagem no Supreme Clube" style={{ backgroundImage: `url("${assetPath("assets/hero-car-clear.webp")}")` }} />
          <div className="hero-overlay" /><div className="hero-grid" />
          <div className="container hero-content">
            <div className="hero-copy">
              <div className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> BARBEARIA & ESTÉTICA AUTOMOTIVA</div>
              <h1 id="hero-title">Seu carro cuidado.<br /><em>Você também.</em></h1>
              <p>Estética automotiva e barbearia no mesmo lugar. Enquanto seu carro recebe o cuidado que merece, aproveite o tempo para colocar o visual em dia.</p>
              <div className="hero-actions">
                <a className="button button-primary" href={waMessage("Olá! Vim pela página do Supreme Clube e quero agendar um serviço de estética automotiva.")} target="_blank" rel="noreferrer" data-umami-event="hero-auto-whatsapp">Agendar estética <MoveRight size={17} /></a>
                <a className="button button-ghost" href={BARBER_WHATSAPP} target="_blank" rel="noreferrer" data-umami-event="hero-barber-whatsapp">Agendar barbearia <Scissors size={16} /></a>
              </div>
            </div>
            <div className="hero-side-note"><MapPin size={16} /><span>Av. Saturnino Rangel Mauro, 405<br />Praia de Itaparica, Vila Velha — ES</span></div>
          </div>
        </section>

<section className="video-feature-section" aria-labelledby="video-title"><div className="container video-feature-layout"><div className="video-copy"><h2 id="video-title">O cuidado<br /><em>acontece aqui.</em></h2><p>Veja um pouco do conteúdo real do Supreme Clube e conheça a experiência diretamente no perfil oficial.</p><a className="text-link" href="https://www.instagram.com/p/DH_BT2uxMMt/" target="_blank" rel="noreferrer" data-umami-event="video-instagram">Ver publicação no Instagram <ArrowUpRight size={16} /></a></div><div className="video-preview"><video loop playsInline controls preload="none" poster={realImages.videoCover} aria-label="Vídeo do Supreme Clube mostrando a experiência de estética automotiva, com áudio disponível"><source src={realImages.video} type="video/mp4" /></video><span className="video-shade" /><a className="video-caption" href="https://www.instagram.com/p/DH_BT2uxMMt/" target="_blank" rel="noreferrer" data-umami-event="video-instagram"><span>SUPREME CLUBE / PUBLICAÇÃO REAL</span><ArrowUpRight size={14} /></a></div></div></section>




        <section className="services-section" id="servicos" aria-labelledby="services-title">
          <div className="container services-showcase">
            <div className="services-heading">
              <div><SectionKicker light>Serviços do clube</SectionKicker><h2 id="services-title">Cuidado certo.<br /><em>Para cada detalhe.</em></h2></div>
              <p>Converse com a equipe, confirme o escopo indicado para o seu carro e agende antes de ir ao local.</p>
            </div>
            <div className="services-directory" role="list">
              {automotiveServices.map((service, index) => { const Icon = service.icon; return <a className="service-directory-card" href={waMessage(`Olá! Quero consultar a disponibilidade para ${service.name} no Supreme Clube.`)} target="_blank" rel="noreferrer" key={service.name} role="listitem" data-umami-event="service-directory-whatsapp"><span className="service-directory-number">{String(index + 1).padStart(2, "0")}</span><span className="service-directory-icon"><Icon size={19} /></span><span className="service-directory-copy"><strong>{service.name}</strong><small>{service.note}</small></span><ArrowUpRight size={16} /></a>; })}
            </div>
            <a className="services-note" href={waMessage("Olá! Quero agendar uma avaliação do meu carro no Supreme Clube.")} target="_blank" rel="noreferrer" data-umami-event="services-whatsapp"><CalendarDays size={16} /> Entre em contato para confirmar disponibilidade e agendar antes de ir <ArrowUpRight size={15} /></a>
          </div>
        </section>

        <section className="barber-section" id="barbearia" aria-labelledby="barber-title"><div className="container barber-showcase"><div className="barber-copy"><SectionKicker light>Barbearia Supreme</SectionKicker><h2 id="barber-title">Não é mágica.<br /><em>É técnica.</em></h2><p>Barba desenhada, alinhada e pensada para valorizar o seu rosto. Um serviço com tradição, cuidado e acabamento — para adultos e crianças.</p><div className="barber-status"><span>AGENDA</span><strong>ABERTA</strong><small>Marque seu horário antes de ir ao local.</small></div><div className="barber-actions"><a className="button button-primary" href={BARBER_WHATSAPP} target="_blank" rel="noreferrer" data-umami-event="barber-whatsapp">Agendar meu corte <MessageCircle size={16} /></a><a className="button button-ghost" href="https://www.instagram.com/stories/highlights/18081469165952396/" target="_blank" rel="noreferrer" data-umami-event="barber-highlight">Ver destaque <Instagram size={16} /></a></div></div><div className="barber-references" aria-label="Referências da Barbearia Supreme enviadas pelo cliente"><a className="barber-reference barber-reference-main" href="https://www.instagram.com/stories/highlights/18081469165952396/" target="_blank" rel="noreferrer" data-umami-event="barber-highlight"><img src={realImages.barberAgenda} alt="Arte pública do destaque com a agenda da Barbearia Supreme" loading="lazy" decoding="async" /><span>Agenda aberta <ArrowUpRight size={14} /></span></a><div className="barber-reference-stack"><a className="barber-reference" href="https://www.instagram.com/stories/highlights/18081469165952396/" target="_blank" rel="noreferrer" data-umami-event="barber-highlight"><img src={realImages.barberBeard} alt="Antes e depois de barba da Barbearia Supreme" loading="lazy" decoding="async" /><span>Barba desenhada <ArrowUpRight size={14} /></span></a><a className="barber-reference" href="https://www.instagram.com/stories/highlights/18081469165952396/" target="_blank" rel="noreferrer" data-umami-event="barber-highlight"><img src={realImages.barberFamily} alt="Corte de cabelo infantil na Barbearia Supreme" loading="lazy" decoding="async" /><span>De geração em geração <ArrowUpRight size={14} /></span></a></div></div></div></section>




        <section className="reviews-section" id="avaliacoes" aria-labelledby="reviews-title">
          <div className="container reviews-layout">
            <div className="reviews-heading">
              <div><SectionKicker light>Quem já passou por aqui</SectionKicker><h2 id="reviews-title">Experiências<br /><em>que ficam.</em></h2><div className="reviews-rating reviews-rating-inline"><span className="reviews-stars" aria-label="5 de 5 estrelas"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></span></div></div>
            </div>
            <div className="reviews-grid reviews-grid-verified">
              {verifiedReviews.map((review) => <article className="review-card" key={review.author}><span className="review-stars" aria-label="5 estrelas"><Star size={15} fill="currentColor" /><Star size={15} fill="currentColor" /><Star size={15} fill="currentColor" /><Star size={15} fill="currentColor" /><Star size={15} fill="currentColor" /></span><p>“{review.text}”</p><span>{review.author} · {review.detail}</span></article>)}
            </div>
            <p className="reviews-source-note">Depoimentos reproduzidos a partir de avaliações públicas compartilhadas e disponíveis no Google. <a href="https://www.google.com/maps?cid=16939179030913390897" target="_blank" rel="noreferrer">Ver perfil completo no Google Maps <ArrowUpRight size={13} /></a></p>
          </div>
        </section>

        <section className="instagram-section" aria-labelledby="instagram-title">
          <div className="container instagram-layout"><div className="instagram-intro"><h2 id="instagram-title">A casa é<br /><em>Supreme.</em></h2><p>Uma seleção de imagens públicas do próprio perfil para mostrar processo, espaço e o cuidado que acontece por aqui.</p><a className="text-link" href={INSTAGRAM} target="_blank" rel="noreferrer" data-umami-event="instagram-gallery">Ver o perfil no Instagram <Instagram size={16} /></a></div><div className="instagram-gallery">{gallery.map((item) => <a className="gallery-card" href={INSTAGRAM} target="_blank" rel="noreferrer" key={item.src} data-umami-event="instagram-gallery"><img src={item.src} alt={item.alt} loading="lazy" decoding="async" /><span>{item.label} <ArrowUpRight size={14} /></span></a>)}</div></div>
        </section>




        <section className="faq-section" aria-labelledby="faq-title"><div className="container faq-layout"><div className="faq-intro"><SectionKicker>Perguntas frequentes</SectionKicker><h2 id="faq-title">Antes de chegar,<br /><em>tire suas dúvidas.</em></h2><p>O primeiro passo é simples: fale com a equipe e agende antes de ir.</p><a className="text-link" href={waMessage("Olá! Tenho uma dúvida e quero agendar um atendimento no Supreme Clube.")} target="_blank" rel="noreferrer" data-umami-event="faq-whatsapp">Falar com a equipe <ArrowUpRight size={16} /></a></div><div className="faq-list">{faqs.map((faq, index) => { const open = activeFaq === index; return <div className={`faq-item ${open ? "faq-item-open" : ""}`} key={faq.question}><button className="faq-question" onClick={() => setActiveFaq(open ? null : index)} aria-expanded={open} aria-controls={`faq-answer-${index}`}><span>{faq.question}</span><ChevronDown size={19} /></button>{open && <p className="faq-answer" id={`faq-answer-${index}`}>{faq.answer}</p>}</div>; })}</div></div></section>

        <section className="location-section" id="localizacao" aria-labelledby="location-title"><div className="location-map-panel"><iframe className="club-map" title="Mapa da localização do Supreme Clube" src="https://www.google.com/maps?q=Av.%20Saturnino%20Rangel%20Mauro%2C%20405%2C%20Praia%20de%20Itaparica%2C%20Vila%20Velha%2C%20ES&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><div className="map-overlay-label"><MapPin size={15} /> SUPREME CLUBE / VILA VELHA</div></div><div className="location-content container"><SectionKicker light>Onde encontrar</SectionKicker><h2 id="location-title">Passe no clube<br /><em>em Praia de Itaparica.</em></h2><address><strong>Supreme Clube</strong><br />Av. Saturnino Rangel Mauro, 405<br />Praia de Itaparica, Vila Velha — ES<br />CEP 29102-034, Brasil</address><div className="location-actions"><a className="button button-primary" href={MAPS} target="_blank" rel="noreferrer" data-umami-event="maps-click"><MapPin size={16} /> Abrir rota</a><a className="button button-ghost" href={waMessage("Olá! Quero agendar um atendimento no Supreme Clube. Estou na região de Praia de Itaparica.")} target="_blank" rel="noreferrer" data-umami-event="location-whatsapp"><MessageCircle size={16} /> Agendar no WhatsApp</a></div></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-top"><a className="brand-lockup" href="#top" aria-label="Voltar ao início"><BrandMark /><span className="brand-wordmark"><strong>SUPREME</strong><span>CLUBE</span></span></a><p>Estética automotiva + barbearia<br />Praia de Itaparica, Vila Velha — ES</p><a className="footer-phone" href={waMessage("Olá! Quero agendar um atendimento no Supreme Clube.")} target="_blank" rel="noreferrer" data-umami-event="footer-whatsapp"><MessageCircle size={16} /> Agendar pelo WhatsApp <ArrowUpRight size={15} /></a></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Supreme Clube</span><span>Uma criação <strong>Pulse Ads</strong></span><a href={INSTAGRAM} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={13} /></a></div></footer>
      <a className="floating-whatsapp" href={waMessage("Olá! Vim pela página do Supreme Clube e quero agendar um atendimento.")} target="_blank" rel="noreferrer" aria-label="Agendar com o Supreme Clube pelo WhatsApp" data-umami-event="floating-whatsapp"><MessageCircle size={22} /><span>Agendar no WhatsApp</span></a>

    </div>
  );
}
