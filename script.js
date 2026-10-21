const projectData = [
  {
    id: 'project-one',
    title: 'EMBER — Autumn Magic',
    category: 'Luxury Food & Beverage · Concept Ad',
    description: 'A cinematic dark chocolate advertising concept with a warm autumn atmosphere.',
    label: 'Independent Concept Project',
    cta: 'Watch the Film',
    image: 'assets/ember-thumbnail.jpg',
    videoUrl: 'https://youtube.com/shorts/UniMApQGATE?feature=share',
    embedUrl: 'https://www.youtube.com/embed/UniMApQGATE?rel=0',
    platform: 'YouTube'
  },
  {
    id: 'project-two',
    title: 'VAYORA — Own the Ground',
    category: 'Fashion & Footwear · Concept Ad',
    description: 'A premium sneaker advertising concept focused on confident, energetic fashion storytelling.',
    tagline: 'Your Energy. Your Rules.',
    label: 'Independent Concept Project',
    cta: 'Watch the Film',
    image: 'assets/vayora-thumbnail.jpg',
    videoUrl: 'https://youtube.com/shorts/r35Z1fL89jg?feature=share',
    embedUrl: 'https://www.youtube.com/embed/r35Z1fL89jg?rel=0',
    platform: 'YouTube'
  }
];

const packages = [
  { name: 'Starter Ad', price: '$79', note: 'A focused first creative for a single product or offer.' },
  { name: 'Signature Creative', price: '$249', note: 'A coordinated set of short-form concepts and images.' },
  { name: 'Cinematic Video', price: 'From $149', note: 'A tailored film with scope confirmed before production.' },
  { name: 'Campaign Studio', price: 'Custom Quote', note: 'A larger creative system built around your campaign.' }
];

function bindNavigation() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav-links');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

function bindInquiryForm() {
  const form = document.querySelector('#inquiry-form');
  if (!form) return;
  const status = document.querySelector('#form-status');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      status.textContent = 'Please complete the required fields before creating your email draft.';
      status.classList.remove('hidden');
      status.classList.add('error');
      return;
    }
    const data = new FormData(form);
    const subject = `Project inquiry — ${data.get('brand') || 'New brand'}`;
    const body = [
      `Full name: ${data.get('name')}`,
      `Professional email: ${data.get('email')}`,
      `Brand name: ${data.get('brand')}`,
      `Website or social profile: ${data.get('website') || 'Not provided'}`,
      `Desired service/package: ${data.get('service')}`,
      `Estimated budget: ${data.get('budget')}`,
      `Main advertising goal: ${data.get('goal')}`,
      `Preferred communication language: ${data.get('language')}`,
      `Phone/WhatsApp: ${data.get('phone') || 'Not provided'}`,
      '',
      'Project description and requirements:',
      data.get('description')
    ].join('\n');
    const mailto = `mailto:silentlens01@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    status.classList.remove('hidden', 'error');
    status.textContent = 'Your email draft should now be opening. It has not been sent or stored by Silent Lens yet — please review it and press Send in your email app. If nothing opened, use the Email Us link below.';
    window.location.href = mailto;
  });
}

function setYear() {
  document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
}

function init() {
  bindNavigation();
  bindInquiryForm();
  setYear();
}

document.addEventListener('DOMContentLoaded', init);
