export const site = {
  name: 'Blueprint Clean Co.',
  tagline: 'Precision Cleaning, Professional Results',
  subTagline: 'Spotless Transitions, Stress-Free Cleanings',
  phone: '629-932-6356',
  phoneHref: 'tel:+16299326356',
  email: 'savannah.s@sidonioenterprises.com',
  emailHref: 'mailto:savannah.s@sidonioenterprises.com?subject=Cleaning%20Service%20Inquiry',
  areaServed: 'Nashville & Middle Tennessee',
  city: 'Nashville',
  region: 'TN',
  formEndpoint: 'https://formspree.io/f/xqpakvqq',
  social: {
    // TODO: add real profile URLs when available
    google: '',
    facebook: '',
    instagram: '',
  },
};

// Order reflects the client's stated priority: realtors, property management,
// and general contractors/home builders come first, this is the single most
// important message on the site, per direct client feedback.
export const trustTicker: string[] = [
  'Trusted by Realtors',
  'Trusted by Property Management',
  'Trusted by General Contractors & Home Builders',
  'Luxury Airbnb Hosts',
  'Serving Nashville & Middle Tennessee',
];

export type NavLink = { label: string; href: string };

export const primaryNav: NavLink[] = [
  { label: 'Services', href: '/services/' },
  { label: 'Residential & Commercial', href: '/residential-commercial-cleaning/' },
  { label: 'Premium & Lifestyle', href: '/premium-lifestyle-services/' },
  { label: 'Gallery', href: '/gallery/' },
  { label: 'Reviews', href: '/reviews/' },
  { label: 'About', href: '/about/' },
  { label: 'FAQ', href: '/faq/' },
];

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  audience: string;
  summary: string;
  href: string;
  keywordFocus: string;
  featured?: boolean;
};

export const coreServices: Service[] = [
  {
    slug: 'post-construction-cleaning',
    name: 'Post-Construction 3-Phase Cleaning',
    shortName: 'Post-Construction',
    audience: 'Home Builders & Contractors',
    summary:
      'Our flagship service. A structured 3-phase clean, rough clean, touch-up, and final detail clean, that takes a new build from job site to move-in ready.',
    href: '/post-construction-cleaning/',
    keywordFocus: 'post construction cleaning Nashville, new build cleaning Middle Tennessee',
    featured: true,
  },
  {
    slug: 'pre-listing-cleaning',
    name: 'Pre-Listing & Open House Cleaning',
    shortName: 'Pre-Listing',
    audience: 'Realtors & Sellers',
    summary:
      'Show-ready prep that helps listings shine on day one, because a spotless home photographs better, shows better, and sells faster.',
    href: '/pre-listing-cleaning/',
    keywordFocus: 'pre-listing cleaning for realtors Nashville, listing prep cleaning',
  },
  {
    slug: 'move-in-move-out-cleaning',
    name: 'Move-In / Move-Out Cleaning',
    shortName: 'Move-In / Move-Out',
    audience: 'Property Managers',
    summary:
      'Fast, reliable turnovers between tenants, detailed cleaning that protects your unit, your timeline, and your reputation.',
    href: '/move-in-move-out-cleaning/',
    keywordFocus: 'move out cleaning for property management Nashville, tenant turnover cleaning',
  },
  {
    slug: 'airbnb-turnover-cleaning',
    name: 'Airbnb & Short-Term Rental Turnovers',
    shortName: 'Airbnb Turnovers',
    audience: 'Luxury Airbnb & STR Hosts',
    summary:
      'Quick-turn cleanings between guests that protect your rating: consistent, hotel-grade presentation every single stay.',
    href: '/airbnb-turnover-cleaning/',
    keywordFocus: 'Airbnb turnover cleaning Nashville, short-term rental cleaning service',
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  detail?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Blueprint Clean Co did an incredible job cleaning our home. Every room was spotless, and they paid attention to details that other cleaning companies often miss. Walking into a fresh, clean home after work was such a relief. Highly recommend!",
    name: 'Sarah M.',
  },
  {
    quote:
      "Excellent communication from start to finish. The team was friendly, respectful, and did an amazing deep clean before we hosted family for the weekend. I will definitely be scheduling recurring service.",
    name: 'Amanda T.',
  },
  {
    quote:
      "From move-out cleans to pre-listing deep cleans, their team consistently delivers professional results. They help us prepare properties quickly and efficiently.",
    name: 'Michael B.',
    detail: 'Broker Associate',
  },
  {
    quote:
      "Blueprint Clean Co did such a good job on our pre-listing clean that they ruined my afternoon plans, I thought I'd have another hour at Hobby Lobby, but the house was already finished. The home looked incredible, smelled fresh, and was absolutely show-ready. Highly recommend!",
    name: 'Sharon T.',
  },
  {
    quote:
      "I hired Blueprint Clean Co. for a deep clean. Their attention to detail was incredible, our home looked and felt completely refreshed. Highly recommend, they now clean for us bi-weekly!",
    name: 'Nicole G.',
  },
];

export type TrustAudience = {
  label: string;
  detail: string;
};

export const trustAudiences: TrustAudience[] = [
  { label: 'Realtors', detail: 'Pre-listing prep & showing-ready turnarounds' },
  { label: 'Property Managers', detail: 'Move-in / move-out turnovers on your timeline' },
  { label: 'Home Builders & Contractors', detail: '3-phase post-construction cleaning' },
  { label: 'Airbnb & STR Hosts', detail: 'Reliable guest-to-guest turnovers' },
];

export const blueprintStandard = [
  {
    title: 'Multi-Stage Inspection',
    detail: 'Multi-stage inspection protocols for every move-in and move-out transition.',
  },
  {
    title: 'Detailed Checklists',
    detail: 'A documented checklist for every service and every professional, so quality never varies.',
  },
  {
    title: 'Comprehensive Sanitization',
    detail: 'Surface sanitization using high-performance, eco-friendly solutions.',
  },
  {
    title: 'Vetted Professionals',
    detail: 'Highly vetted, experienced professionals who deliver quality outcomes every time.',
  },
];

export const faqs = [
  {
    q: 'What areas do you serve?',
    a: 'We provide cleaning services throughout Nashville and Middle Tennessee, including surrounding suburbs. Reach out with your address and we can confirm coverage.',
  },
  {
    q: 'How does post-construction 3-phase cleaning work?',
    a: 'Phase 1 (rough clean) removes construction debris, dust, and stickers. Phase 2 (touch-up) wipes down surfaces and clears dust and marks left from final trim, flooring, and fixture installs. Phase 3 (final detail clean) is a detailed top-to-bottom clean of every surface, cabinet, fixture, and floor, completed right before walkthrough to leave the home spotless for buyers or homeowners.',
  },
  {
    q: 'Do you work directly with property management companies and realtors?',
    a: "Yes, a large part of our business is built around realtor pre-listing prep and property management turnovers. We're used to working on tight timelines and coordinating directly with agents, PMs, and builders.",
  },
  {
    q: 'How do I get a quote?',
    a: 'Submit a request through our quote form, call us, or send a short video walkthrough of the space to savannah.s@sidonioenterprises.com for a fast, accurate quote.',
  },
  {
    q: 'Can I schedule recurring cleanings?',
    a: 'Yes. We have dedicated teams for recurring residential and commercial cleaning on a weekly, bi-weekly, or monthly basis, separate from our project-based teams.',
  },
  {
    q: 'Do you offer holiday or event cleaning?',
    a: 'Yes, our Holiday Hosting and premium lifestyle packages cover pre-event setup, post-event deep cleans, and everything in between so you can focus on your guests.',
  },
  {
    q: "Can I book a specific date and time online?",
    a: "You can request your two preferred date/time windows through our online request form, and our scheduling team will confirm the one that works best. We're working on full online self-scheduling, for now this two-option request gets you the fastest confirmation.",
  },
];
