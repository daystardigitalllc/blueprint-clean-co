export const site = {
  name: 'Blueprint Clean Co.',
  tagline: 'Precision Cleaning, Professional Results',
  subTagline: 'Spotless Transitions, Stress-Free Cleanings',
  legalName: 'Sidonio Enterprises LLC',
  phone: '(629) 932-6356',
  phoneHref: 'tel:+16299326356',
  smsHref: 'sms:+16299326356',
  quoteHref: '/contact/#quote',
  email: 'savannah.s@sidonioenterprises.com',
  emailHref: 'mailto:savannah.s@sidonioenterprises.com?subject=Cleaning%20Service%20Inquiry',
  areaServed: 'Nashville & Middle Tennessee',
  serviceCounties: ['Davidson', 'Macon', 'Montgomery', 'Putnam', 'Robertson', 'Rutherford', 'Smith', 'Sumner', 'Trousdale', 'Williamson', 'Wilson'],
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

export const trustTicker: string[] = [
  'Trusted by Homeowners',
  'Trusted by Businesses & Offices',
  'Trusted by Realtors & Property Managers',
  'Trusted by General Contractors & Home Builders',
  'Serving 11 Middle Tennessee Counties',
];

export type NavLink = { label: string; href: string };

export const primaryNav: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Residential', href: '/residential-cleaning/' },
  { label: 'Commercial', href: '/commercial-cleaning/' },
  { label: 'Post-Construction', href: '/post-construction-cleaning/' },
  { label: 'Gallery', href: '/gallery/' },
  { label: 'About Us', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

export const quoteServices: string[] = [
  'Residential Deep Cleaning',
  'Weekly, Biweekly & Monthly Cleaning',
  'Move-In / Move-Out Cleaning',
  'Pre-Listing Cleaning',
  'Home Organization',
  'Carpet & Upholstery Cleaning',
  'Senior Cleaning Services',
  'Office Cleaning',
  'Retail & Commercial Facility Cleaning',
  'Recurring Janitorial Services',
  'Property Management Cleaning',
  'Commercial Cleaning Contract',
  'Government & Public Sector Cleaning',
  'New Construction Cleaning',
  'Post-Renovation Cleaning',
  'Builder & Contractor Cleaning',
  'Other',
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
    a: 'We serve 11 Middle Tennessee counties: Davidson, Macon, Montgomery, Putnam, Robertson, Rutherford, Smith, Sumner, Trousdale, Williamson, and Wilson. Reach out with your address and we can confirm coverage.',
  },
  {
    q: 'Do you clean both homes and businesses?',
    a: 'Yes. Residential and commercial cleaning are equal parts of what we do, from deep cleans, recurring service, and move-in/out cleans for homes to offices, retail spaces, and janitorial contracts for businesses.',
  },
  {
    q: 'How do I get a quote?',
    a: 'Submit a request through our quote form, call or text us at (629) 932-6356, or send a short video walkthrough of the space to savannah.s@sidonioenterprises.com for a fast, accurate quote.',
  },
  {
    q: 'Can I schedule recurring cleanings?',
    a: 'Yes. We have dedicated teams for recurring residential and commercial cleaning on a weekly, bi-weekly, or monthly basis.',
  },
  {
    q: 'How does post-construction 3-phase cleaning work?',
    a: 'Phase 01 (initial construction cleanup) removes construction debris, dust, stickers, and protective film. Phase 02 (rough and progress cleaning) wipes down surfaces and clears dust and marks as trades finish trim, flooring, and fixture installs. Phase 03 (final detail and turnover cleaning) is a detailed top-to-bottom clean of every surface, cabinet, fixture, and floor, completed right before walkthrough.',
  },
  {
    q: 'Do you work directly with property management companies and realtors?',
    a: "Yes. We're used to working on tight timelines and coordinating directly with agents, property managers, and builders for pre-listing prep and move-in/move-out turnovers.",
  },
  {
    q: 'Do you work with government agencies?',
    a: 'Yes. Blueprint Clean Co. is a woman-owned business with an assigned CAGE code, and we welcome government contracting and bidding opportunities for public sector facilities.',
  },
  {
    q: 'Can I book a specific date and time?',
    a: "You can request your two preferred date/time windows through our online request form, and our scheduling team will confirm the one that works best.",
  },
];
