import { useState, type FormEvent, type ReactNode } from 'react';
import { Link, Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  ChevronRight,
  ClipboardList,
  FileCheck2,
  Landmark,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Stethoscope,
  X,
} from 'lucide-react';

const phone = '+917510016397';
const displayPhone = '+91 7510016397';
const email = 'Shivamgroup1942@outlook.com';
const logoSrc = `${import.meta.env.BASE_URL}images/shivam-logo-transparent.png`;
const whatsapp = `https://wa.me/${phone}?text=Hello%20Shivam%20Group%20of%20Enterprises%2C%20I%20would%20like%20to%20know%20more%20about%20your%20hospital%20consultancy%20services.`;

function Logo() {
  return (
    <Link href="/" className="logo" data-testid="link-logo">
      <img className="brand-logo" src={logoSrc} alt="Shivam Group of Enterprises" />
    </Link>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const links = [
    ['Home', '/'],
    ['About', '/about'],
    ['Services', '/services'],
    ['NABH', '/nabh'],
    ['Ayushman', '/ayushman'],
    ['TPA', '/tpa-insurance'],
    ['Contact', '/contact'],
  ];
  return (
    <header className="site-header">
      <div className="nav-inner">
        <Logo />
        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={location === href ? 'active' : ''}
              onClick={() => setOpen(false)}
              data-testid={`link-nav-${label.toLowerCase()}`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="nav-cta" data-testid="link-header-consultation">
          Get Consultation <ArrowUpRight size={16} />
        </Link>
        <button
          className="menu-toggle"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          data-testid="button-mobile-menu"
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Logo />
            <p className="footer-description">
              Professional consultancy for hospitals navigating NABH, Ayushman, CM Fund, ECSH, CGHS, TPA and Insurance processes.
            </p>
          </div>
          <div>
            <p className="footer-title">QUICK LINKS</p>
            <div className="footer-links">
              <Link href="/" data-testid="link-footer-home">Home</Link>
              <Link href="/about" data-testid="link-footer-about">About Us</Link>
              <Link href="/services" data-testid="link-footer-services">Services</Link>
              <Link href="/hospital-consultancy" data-testid="link-footer-hospital">Hospital Consultancy</Link>
              <Link href="/contact" data-testid="link-footer-contact">Contact Us</Link>
            </div>
          </div>
          <div>
            <p className="footer-title">SERVICES</p>
            <div className="footer-links">
              <Link href="/nabh" data-testid="link-footer-nabh">NABH Consultancy</Link>
              <Link href="/ayushman" data-testid="link-footer-ayushman">Ayushman / PM-JAY</Link>
              <Link href="/cm-fund" data-testid="link-footer-cm-fund">CM Fund</Link>
              <Link href="/ecsh" data-testid="link-footer-ecsh">ECSH Consultancy</Link>
              <Link href="/cghs" data-testid="link-footer-cghs">CGHS Consultancy</Link>
              <Link href="/tpa-insurance" data-testid="link-footer-tpa">TPA &amp; Insurance</Link>
            </div>
          </div>
          <div>
            <p className="footer-title">CONTACT US</p>
            <div className="contact-links">
              <a className="contact-link" href={`tel:${phone}`} data-testid="link-footer-phone"><Phone size={15} /> <span>{displayPhone}</span></a>
              <a className="contact-link" href={whatsapp} target="_blank" rel="noreferrer" data-testid="link-footer-whatsapp"><MessageCircle size={15} /> <span>WhatsApp: {displayPhone}</span></a>
              <a className="contact-link" href={`mailto:${email}`} data-testid="link-footer-email"><Mail size={15} /> <span>{email}</span></a>
              <span className="contact-link"><MapPin size={15} /> <span>Serving hospitals across India</span></span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">© 2026 Shivam Group of Enterprises. All Rights Reserved.</div>
      </div>
    </footer>
  );
}

function FloatingContact() {
  return (
    <div className="floating">
      <a className="float-button float-whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" data-testid="link-floating-whatsapp">
        <MessageCircle size={20} />
      </a>
      <a className="float-button float-call" href={`tel:${phone}`} aria-label="Call us" data-testid="link-floating-call">
        <Phone size={19} />
      </a>
    </div>
  );
}

function Shell({ children }: { children: ReactNode }) {
  return <div className="page"><Header />{children}<Footer /><FloatingContact /></div>;
}

const serviceCards = [
  { title: 'NABH Certificate Consultancy', description: 'Complete guidance for NABH accreditation documentation and process implementation.', href: '/nabh', icon: ShieldCheck },
  { title: 'Ayushman / PM-JAY', description: 'Hospital participation and operational guidance for Ayushman Bharat PM-JAY scheme processes.', href: '/ayushman', icon: Landmark },
  { title: 'CM Fund Consultancy', description: 'Professional assistance and guidance for CM Fund related processes and hospital coordination.', href: '/cm-fund', icon: FileCheck2 },
  { title: 'ECSH Consultancy', description: 'Specialized consultancy and support for ECSH-related hospital processes and requirements.', href: '/ecsh', icon: ClipboardList },
  { title: 'CGHS Consultancy', description: 'Guidance for CGHS hospital operational processes, documentation and coordination support.', href: '/cghs', icon: Building2 },
  { title: 'TPA & Insurance', description: 'Streamlined TPA coordination, claims workflow and hospital-insurer communication consultancy.', href: '/tpa-insurance', icon: FileCheck2 },
  { title: 'Complete Hospital Consultancy', description: 'End-to-end hospital management guidance from setup and planning to ongoing operational improvement.', href: '/hospital-consultancy', icon: Stethoscope },
  { title: 'Hospital Setup & Operations', description: 'Guidance on how to start, set up, manage and run a hospital with practical operational workflows.', href: '/hospital-consultancy', icon: Building2 },
];

function ServiceCard({ service, index }: { service: typeof serviceCards[number]; index: number }) {
  const Icon = service.icon;
  return (
    <Link href={service.href} className={`service-card reveal delay-${(index % 3) + 1}`} data-testid={`card-service-${index}`}>
      <span className="service-icon"><Icon size={24} strokeWidth={1.7} /></span>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <span className="learn">Learn More <ArrowRight size={14} /></span>
    </Link>
  );
}

function Home() {
  return (
    <Shell>
      <main>
        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-copy reveal">
              <div className="eyebrow eyebrow-light hero-pill">Healthcare &amp; Hospital Consultancy</div>
              <h1>Professional Healthcare &amp; <span>Hospital Consultancy</span> Solutions</h1>
              <p>Helping hospitals and healthcare organizations navigate NABH, Ayushman, CM Fund, ECSH, CGHS, TPA &amp; Insurance processes with professional consultancy and practical guidance.</p>
              <div className="hero-actions">
                <Link href="/contact" className="button-primary" data-testid="link-hero-consultation">Get Consultation <ArrowUpRight size={16} /></Link>
                <a href={whatsapp} className="button-secondary" target="_blank" rel="noreferrer" data-testid="link-hero-whatsapp"><MessageCircle size={17} /> Talk on WhatsApp</a>
              </div>
            </div>
            <div className="hero-image-wrap reveal delay-2">
              <img className="hero-image" src="/images/hero-hospital.jpg" alt="Contemporary hospital building" />
            </div>
          </div>
        </section>

        <section className="section trust-section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">WHY SHIVAM GROUP</div>
              <h2>Your Trusted Partner for Hospital Consultancy</h2>
              <p>Shivam Group of Enterprises provides focused consultancy and practical support to hospitals across India, assisting with accreditation, government schemes, insurance coordination, and comprehensive hospital management guidance.</p>
            </div>
            <div className="trust-grid">
              <div className="trust-card reveal"><div className="icon-box"><ShieldCheck size={20} /></div><h3>NABH Certification Support</h3><p>Expert guidance through NABH documentation, process preparation and quality implementation for accreditation readiness.</p></div>
              <div className="trust-card reveal delay-1"><div className="icon-box"><Landmark size={20} /></div><h3>Government Scheme Guidance</h3><p>Practical support for Ayushman Bharat, PM-JAY, CM Fund, ECSH, and CGHS scheme-related processes and documentation.</p></div>
              <div className="trust-card reveal delay-2"><div className="icon-box"><FileCheck2 size={20} /></div><h3>TPA &amp; Insurance Coordination</h3><p>Consultancy to streamline TPA coordination, claims workflow, billing documentation and hospital-insurer communication processes.</p></div>
            </div>
          </div>
        </section>

        <section className="section services-section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">OUR SERVICES</div>
              <h2>Comprehensive Healthcare Consultancy Services</h2>
            </div>
            <div className="service-grid">{serviceCards.map((service, index) => <ServiceCard key={`${service.href}-${index}`} service={service} index={index} />)}</div>
          </div>
        </section>

        <section className="section choose-section">
          <div className="container choose-layout">
            <div className="choose-title">
              <div className="eyebrow">WHY CHOOSE US</div>
              <h2>Built for Healthcare, Focused on Results</h2>
              <p>Shivam Group of Enterprises combines deep understanding of healthcare processes with practical consultancy to help hospitals achieve their operational and accreditation goals.</p>
            </div>
            <div className="reason-list">
              <div className="reason"><h3><Check size={18} />Professional Consultancy</h3><p>Focused guidance from consultants who understand hospital operations and regulatory requirements.</p></div>
              <div className="reason"><h3><Check size={18} />Practical Process Guidance</h3><p>Real-world guidance on documentation, workflows and implementation rather than theoretical advice.</p></div>
              <div className="reason"><h3><Check size={18} />Multi-Scheme Expertise</h3><p>Covering NABH, Ayushman, CM Fund, ECSH, CGHS, TPA and full hospital management under one roof.</p></div>
              <div className="reason"><h3><Check size={18} />Accessible &amp; Responsive</h3><p>Direct communication via phone and WhatsApp, making consultancy accessible whenever you need it.</p></div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container cta-inner">
            <div><h2>Ready to Transform Your Hospital Operations?</h2><p>Connect with Shivam Group of Enterprises today for professional healthcare consultancy.</p></div>
            <div className="cta-actions">
              <Link href="/contact" className="button-primary" data-testid="link-home-cta">Get Consultation <ArrowUpRight size={16} /></Link>
              <a href={whatsapp} className="button-secondary" target="_blank" rel="noreferrer" data-testid="link-home-cta-whatsapp"><MessageCircle size={16} /> WhatsApp Us</a>
            </div>
          </div>
        </section>
      </main>
    </Shell>
  );
}

function InnerHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="inner-hero"><div className="container reveal"><div className="eyebrow eyebrow-light">{eyebrow}</div><h1>{title}</h1><p>{description}</p></div></section>;
}

function About() {
  return (
    <Shell>
      <InnerHero eyebrow="WHO WE ARE" title="About Shivam Group of Enterprises" description="Professional consultancy and practical support for hospitals navigating accreditation, government schemes and insurance coordination." />
      <section className="section article-section">
        <div className="container article-layout">
          <div className="article-copy">
            <div className="eyebrow">WHO WE ARE</div>
            <h2>Focused Healthcare Consultancy for Indian Hospitals</h2>
            <p>Shivam Group of Enterprises is a dedicated healthcare consultancy firm providing professional support and practical guidance to hospitals and healthcare organizations across India. We focus on helping healthcare providers navigate the complex landscape of accreditation, government health schemes, insurance coordination and comprehensive hospital management.</p>
            <p>Our consultancy covers the full spectrum of healthcare administrative requirements — from NABH accreditation preparation to Ayushman Bharat process guidance, from CM Fund and ECSH coordination to TPA and insurance workflow support.</p>
            <div className="commitment"><h3>Our Commitment</h3><p>We are committed to making healthcare administration more manageable for hospitals through focused, practical and professionally delivered consultancy services.</p></div>
            <Link href="/contact" className="button-primary" style={{ marginTop: 27 }} data-testid="link-about-contact">Get In Touch <ArrowUpRight size={16} /></Link>
          </div>
          <div className="foundation">
            <h3>OUR FOUNDATION</h3>
            <div className="foundation-item"><h4>Our Mission</h4><p>To provide focused, practical and professionally delivered healthcare consultancy that helps hospitals achieve their accreditation, compliance and operational objectives efficiently and effectively.</p></div>
            <div className="foundation-item"><h4>Our Approach</h4><p>We take a collaborative, hands-on approach to consultancy — working closely with hospital teams to understand their specific context and delivering guidance that is actionable, clear and practically implementable.</p></div>
            <div className="foundation-item"><h4>Why Choose Us</h4><p>Our deep focus on the healthcare sector, combined with practical field knowledge, enables us to deliver consultancy that goes beyond generic advice and addresses the real challenges hospitals face daily.</p></div>
          </div>
        </div>
      </section>
      <section className="cta-section"><div className="container cta-inner"><div><h2>Ready to Transform Your Hospital Operations?</h2><p>Connect with Shivam Group of Enterprises today for professional healthcare consultancy.</p></div><Link href="/contact" className="button-primary" data-testid="link-about-cta">Get Consultation <ArrowUpRight size={16} /></Link></div></section>
    </Shell>
  );
}

function Services() {
  return (
    <Shell>
      <InnerHero eyebrow="WHAT WE OFFER" title="Our Healthcare Consultancy Services" description="Specialized consultancy across every key area of hospital administration, accreditation and government scheme coordination." />
      <section className="section services-section"><div className="container"><div className="service-grid">{serviceCards.map((service, index) => <ServiceCard key={`${service.href}-directory-${index}`} service={service} index={index} />)}</div></div></section>
      <section className="cta-section"><div className="container cta-inner"><div><h2>Discuss Your Hospital's Requirements</h2><p>Connect with our team for focused and practical guidance.</p></div><Link href="/contact" className="button-primary" data-testid="link-services-cta">Get Consultation <ArrowUpRight size={16} /></Link></div></section>
    </Shell>
  );
}

type DetailData = {
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  features: { title: string; text: string; icon: typeof ShieldCheck }[];
  ctaTitle: string;
  ctaText: string;
};

const detailData: Record<string, DetailData> = {
  nabh: {
    eyebrow: 'ACCREDITATION CONSULTANCY',
    title: 'NABH Certification Consultancy',
    description: 'Expert guidance to help hospitals prepare documentation, implement processes and achieve NABH accreditation readiness.',
    intro: 'NABH (National Accreditation Board for Hospitals & Healthcare Providers) accreditation is a recognized standard of quality and patient safety in India. Achieving NABH accreditation requires thorough preparation, systematic documentation and well-implemented clinical and administrative processes. Shivam Group of Enterprises provides focused consultancy to guide hospitals through every stage of this journey.',
    features: [
      { title: 'NABH Preparation & Gap Analysis', text: 'We help hospitals assess their current readiness against NABH standards, identify gaps and create a structured roadmap for achieving compliance across all required elements.', icon: ShieldCheck },
      { title: 'Documentation & Process Guidance', text: 'Guidance on preparing required policies, procedures, SOPs and records that form the documentation backbone of a successful NABH application.', icon: ClipboardList },
      { title: 'Quality & Patient Safety Systems', text: 'Support in establishing and operationalizing quality management and patient safety systems aligned with NABH requirements for clinical and service standards.', icon: FileCheck2 },
      { title: 'Implementation & Readiness Support', text: 'Ongoing consultancy support during the implementation phase, helping hospital teams operationalize NABH requirements and prepare for assessments with practical, hands-on guidance.', icon: Stethoscope },
    ],
    ctaTitle: 'Discuss Your NABH Requirements',
    ctaText: 'Ready to begin your NABH accreditation journey? Connect with Shivam Group of Enterprises today.',
  },
  ayushman: {
    eyebrow: 'GOVERNMENT SCHEME CONSULTANCY',
    title: 'Ayushman / PM-JAY Hospital Consultancy',
    description: 'Practical guidance for hospitals navigating Ayushman Bharat PM-JAY scheme participation, documentation and operational processes.',
    intro: 'The Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PM-JAY) is one of India’s largest government-funded health insurance schemes. For hospitals, participating in or optimizing their engagement with PM-JAY requires careful process management and documentation. Shivam Group of Enterprises provides consultancy to help hospitals operate smoothly within the scheme framework.',
    features: [
      { title: 'Process Guidance & Onboarding', text: 'Guidance on the empanelment and operational onboarding process for hospitals joining the Ayushman Bharat PM-JAY scheme, including documentation and eligibility requirements.', icon: Landmark },
      { title: 'Documentation Support', text: 'Assistance with preparing and organizing the required documentation for PM-JAY claim submission, hospital records and scheme-related administrative requirements.', icon: ClipboardList },
      { title: 'Operational Workflow Guidance', text: 'Support in setting up and optimizing internal hospital workflows for patient intake, treatment records, discharge documentation and claim preparation aligned with PM-JAY requirements.', icon: Stethoscope },
      { title: 'Scheme Coordination Support', text: 'Guidance on effective coordination within the PM-JAY ecosystem, including understanding scheme guidelines, package structures and operational processes for participating hospitals.', icon: FileCheck2 },
    ],
    ctaTitle: 'Get Ayushman Consultancy',
    ctaText: 'Connect with Shivam Group of Enterprises to discuss your hospital’s PM-JAY requirements.',
  },
  hospital: {
    eyebrow: 'FLAGSHIP SERVICE',
    title: 'Complete Hospital Consultancy',
    description: 'From Hospital Setup to Smooth Operations — Professional Guidance for Healthcare Organizations.',
    intro: 'Our most comprehensive consultancy covers every aspect of hospital planning, setup, operations and ongoing management improvement.',
    features: [
      { title: 'Hospital Planning Guidance', text: 'Consultancy on hospital planning including infrastructure requirements, department layout, capacity planning and operational design for new and existing hospitals.', icon: Building2 },
      { title: 'Department & Workflow Setup', text: 'Guidance on setting up clinical and administrative departments with efficient workflows, clear responsibilities and documented operational processes.', icon: Stethoscope },
      { title: 'Documentation & SOP Development', text: 'Support in developing comprehensive Standard Operating Procedures, policies and documentation frameworks that support quality operations and accreditation requirements.', icon: ClipboardList },
      { title: 'Complete Scheme Coordination Under One Roof', text: 'From NABH accreditation to Ayushman Bharat, from CGHS to TPA coordination — we provide integrated consultancy that covers the full spectrum of schemes and insurance processes your hospital needs to navigate.', icon: Landmark },
    ],
    ctaTitle: 'Start Your Hospital Consultancy Journey',
    ctaText: 'Connect with our team today to discuss how we can support your hospital’s operational and administrative goals.',
  },
  cmfund: {
    eyebrow: 'GOVERNMENT SCHEME CONSULTANCY',
    title: 'CM Fund Consultancy',
    description: 'Professional assistance for CM Fund related processes and hospital coordination.',
    intro: 'Professional assistance for CM Fund related processes. We help hospitals understand requirements, prepare documentation and navigate the administrative aspects of CM Fund coordination.',
    features: [
      { title: 'Requirements Guidance', text: 'Support to help hospitals understand CM Fund requirements and the administrative steps involved in coordination.', icon: Landmark },
      { title: 'Documentation Support', text: 'Practical guidance on preparing and organizing documentation for clear, efficient scheme-related processes.', icon: ClipboardList },
      { title: 'Hospital Coordination', text: 'Focused assistance for hospital teams working through CM Fund coordination and related operational requirements.', icon: Building2 },
    ],
    ctaTitle: 'Discuss Your CM Fund Requirements',
    ctaText: 'Connect with Shivam Group of Enterprises for focused guidance.',
  },
  ecsh: {
    eyebrow: 'GOVERNMENT SCHEME CONSULTANCY',
    title: 'ECSH Consultancy',
    description: 'Specialized consultancy and support for ECSH-related hospital processes and requirements.',
    intro: 'Specialized support for hospitals dealing with ECSH-related processes, documentation requirements and operational coordination to ensure smooth compliance.',
    features: [
      { title: 'Process Guidance', text: 'Clear guidance for hospitals navigating ECSH-related processes and operational requirements.', icon: ClipboardList },
      { title: 'Documentation Requirements', text: 'Support in understanding and organizing documentation required for smooth ECSH administration.', icon: FileCheck2 },
      { title: 'Operational Coordination', text: 'Practical coordination support to help hospital teams keep related processes clear and manageable.', icon: Building2 },
    ],
    ctaTitle: 'Discuss Your ECSH Requirements',
    ctaText: 'Connect with Shivam Group of Enterprises for practical consultancy support.',
  },
  cghs: {
    eyebrow: 'GOVERNMENT SCHEME CONSULTANCY',
    title: 'CGHS Consultancy',
    description: 'Guidance for CGHS hospital operational processes, documentation and coordination support.',
    intro: 'Practical guidance for hospitals on CGHS operational processes, documentation standards and coordination support to facilitate smooth administration.',
    features: [
      { title: 'Operational Process Guidance', text: 'Support for hospitals working through CGHS operational processes and administrative coordination.', icon: Landmark },
      { title: 'Documentation Standards', text: 'Guidance on documentation standards and requirements that support smoother CGHS-related administration.', icon: ClipboardList },
      { title: 'Coordination Support', text: 'Practical support to help hospital teams coordinate CGHS-related requirements with clarity.', icon: Building2 },
    ],
    ctaTitle: 'Discuss Your CGHS Requirements',
    ctaText: 'Connect with Shivam Group of Enterprises for focused guidance.',
  },
  tpa: {
    eyebrow: 'INSURANCE COORDINATION',
    title: 'TPA & Insurance Consultancy',
    description: 'Guidance on TPA coordination, insurance claim processes, billing documentation and hospital-insurer workflow improvement for smoother administrative operations.',
    intro: 'We help hospitals make TPA coordination, insurance claims and insurer communication more manageable through practical workflow and documentation guidance.',
    features: [
      { title: 'TPA Coordination', text: 'Guidance to streamline communication and coordination between hospitals and third-party administrators.', icon: Building2 },
      { title: 'Claims Workflow', text: 'Support for claim processes and internal workflows that make hospital-insurer coordination clearer and more consistent.', icon: FileCheck2 },
      { title: 'Billing Documentation', text: 'Practical guidance on billing documentation and records required for smoother administrative operations.', icon: ClipboardList },
    ],
    ctaTitle: 'Discuss Your TPA & Insurance Requirements',
    ctaText: 'Connect with Shivam Group of Enterprises for practical workflow support.',
  },
};

function DetailPage({ data }: { data: DetailData }) {
  return (
    <Shell>
      <InnerHero eyebrow={data.eyebrow} title={data.title} description={data.description} />
      <section className="section detail-section">
        <div className="container">
          <div className="detail-intro"><div className="eyebrow">{data.eyebrow}</div><h2>{data.title}</h2><p>{data.intro}</p></div>
          <div className="feature-grid">
            {data.features.map((feature) => { const Icon = feature.icon; return <div className="feature" key={feature.title}><h3><Icon size={20} strokeWidth={1.8} />{feature.title}</h3><p>{feature.text}</p></div>; })}
          </div>
          <div className="detail-cta"><div><h3>{data.ctaTitle}</h3><p>{data.ctaText}</p></div><Link href="/contact" className="button-primary" data-testid={`link-detail-contact-${data.title.toLowerCase().replaceAll(' ', '-')}`}>Get Consultation <ArrowUpRight size={16} /></Link></div>
        </div>
      </section>
    </Shell>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [hospital, setHospital] = useState('');
  const [message, setMessage] = useState('');
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    const subject = encodeURIComponent(`Consultancy enquiry from ${name || 'hospital team'}`);
    const body = encodeURIComponent(`Name: ${name}\nHospital / Organization: ${hospital}\n\n${message}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };
  return (
    <Shell>
      <InnerHero eyebrow="GET IN TOUCH" title="Contact Shivam Group of Enterprises" description="Have questions about our consultancy services? We are here to help. Reach out by phone, WhatsApp or fill out the form below." />
      <section className="section contact-section">
        <div className="container contact-layout">
          <div className="contact-copy">
            <div className="eyebrow">DIRECT CONTACT</div>
            <h2>Let’s discuss your hospital’s requirements.</h2>
            <p>Our team is available to understand your context and guide you toward the right consultancy support.</p>
            <div className="direct-list">
              <div className="direct-card"><Phone size={20} /><div><strong>Phone / Call</strong><a href={`tel:${phone}`} data-testid="link-contact-phone">{displayPhone}</a></div></div>
              <div className="direct-card"><MessageCircle size={20} /><div><strong>WhatsApp Chat</strong><a href={whatsapp} target="_blank" rel="noreferrer" data-testid="link-contact-whatsapp">{displayPhone}</a></div></div>
              <div className="direct-card"><Mail size={20} /><div><strong>Email</strong><a href={`mailto:${email}`} data-testid="link-contact-email">{email}</a></div></div>
              <div className="direct-card"><MapPin size={20} /><div><strong>Service Area</strong><span style={{ color: 'var(--muted)', fontSize: 14 }}>Hospitals and healthcare organizations across India</span></div></div>
            </div>
          </div>
          <form className="message-form" onSubmit={submit} data-testid="form-contact">
            <h3>Send Us a Message</h3>
            {submitted && <div className="form-success" data-testid="status-contact-submitted">Your message is ready to send. Your email application should open now.</div>}
            <div className="form-grid">
              <div className="field"><label htmlFor="name">Your Name</label><input id="name" required value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" data-testid="input-contact-name" /></div>
              <div className="field"><label htmlFor="hospital">Hospital / Organization</label><input id="hospital" value={hospital} onChange={(event) => setHospital(event.target.value)} placeholder="Hospital or organization" data-testid="input-contact-hospital" /></div>
              <div className="field full"><label htmlFor="message">How can we help?</label><textarea id="message" required value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Tell us about your consultancy requirements" data-testid="textarea-contact-message" /></div>
            </div>
            <button className="button-primary form-submit" type="submit" data-testid="button-contact-submit">Send Message <ArrowRight size={16} /></button>
          </form>
        </div>
      </section>
    </Shell>
  );
}

function NotFound() {
  return <Shell><div className="not-found"><div><div className="eyebrow">PAGE NOT FOUND</div><h1>We couldn’t find that page.</h1><p>Return to the Shivam Group of Enterprises homepage.</p><Link href="/" className="button-primary" data-testid="link-not-found-home">Back to Home <ArrowRight size={16} /></Link></div></div></Shell>;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/nabh">{() => <DetailPage data={detailData.nabh} />}</Route>
      <Route path="/ayushman">{() => <DetailPage data={detailData.ayushman} />}</Route>
      <Route path="/hospital-consultancy">{() => <DetailPage data={detailData.hospital} />}</Route>
      <Route path="/cm-fund">{() => <DetailPage data={detailData.cmfund} />}</Route>
      <Route path="/ecsh">{() => <DetailPage data={detailData.ecsh} />}</Route>
      <Route path="/cghs">{() => <DetailPage data={detailData.cghs} />}</Route>
      <Route path="/tpa-insurance">{() => <DetailPage data={detailData.tpa} />}</Route>
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><Router /></WouterRouter>;
}

export default App;