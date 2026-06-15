export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  ingredients: string;
  for: string;
}

export interface Lead {
  id: string;
  type: 'whatsapp_click' | 'form_submit' | 'product_enquiry';
  source: string;
  timestamp: string;
  details?: string;
}

export interface ContactInfo {
  phone: string;
  address: string;
  email: string;
  whatsappNumber: string;
}

export interface SiteData {
  logoUrl: string;
  contact: ContactInfo;
  products: Product[];
  leads: Lead[];
  visits: number;
}

const STORAGE_KEY = 'sri_jayanthi_data_v2';

export const defaultProducts: Product[] = [
  {
    id: '1',
    name: 'Agnisandhi Vati',
    description:
      'A classical Ayurvedic digestive tonic formulated to rekindle digestive fire (Agni), relieve gas, bloating, acidity, and constipation. Supports liver detox and IBS management.',
    price: 996,
    image: '/products/agnisandhi-vati.jpg',
    ingredients:
      'Chitrak, Pippali, Shunti, Maricha, Jeeraka, Hingu, Lavana, Ajamoda',
    for: 'Gas, bloating, acidity, constipation, IBS, indigestion, liver sluggishness, and low metabolism.',
  },
  {
    id: '2',
    name: 'Sandhishool Lepam',
    description:
      'A potent external herbal paste for chronic joint and muscle pain. Provides deep warmth, reduces inflammation, and improves mobility in arthritic conditions.',
    price: 1460,
    image: '/products/sandhishool-lepam.jpg',
    ingredients:
      'Dashamoola, Nirgundi, Rasna, Castor leaf, Eranda, Devadaru, Saindhava Lavana',
    for: 'Back pain, knee pain, joint stiffness, muscle pain, osteoporosis, cervical spondylosis, and sports injuries.',
  },
  {
    id: '3',
    name: 'Immunity Plus Syrup',
    description:
      'A daily immunity booster rooted in classical Ayurveda. Strengthens respiratory health, builds defence against seasonal infections, and supports recovery.',
    price: 1200,
    image: '/products/immunity-plus.jpg',
    ingredients:
      'Ashwagandha, Guduchi, Tulsi, Yashtimadhu, Pippali, Amalaki, Haridra',
    for: 'Frequent colds, cough, sinusitis, allergies, asthma, weak immunity, and post-illness recovery.',
  },
  {
    id: '4',
    name: 'Kesha Oli Hair Oil',
    description:
      'A nourishing hair oil prepared with bhringraj, amla, and coconut milk base. Revitalises follicles, restores natural colour pigment, and cools the scalp.',
    price: 1200,
    image: '/products/kesha-oli.jpg',
    ingredients:
      'Bhringraj, Amla, Brahmi, Jatamansi, Neem, Coconut milk, Sesame oil',
    for: 'Hair fall, premature greying, dandruff, scalp dryness, split ends, and thinning hair.',
  },
  {
    id: '5',
    name: 'Stree Sanjivani',
    description:
      'A comprehensive women\'s health tonic that harmonises hormones, regulates menstrual cycles, and supports reproductive wellness through all life stages.',
    price: 1200,
    image: '/products/stree-sanjivani.jpg',
    ingredients:
      'Ashoka, Shatavari, Lodhra, Dashamoola, Guduchi, Chandana, Kumari',
    for: 'PCOS, irregular periods, hormonal imbalance, PMS, menopausal symptoms, uterine health, and white discharge.',
  },
  {
    id: '6',
    name: 'Shankha Bhasma',
    description:
      'A traditional Ayurvedic antacid and digestive aid prepared from purified conch shell ash. Neutralises excess stomach acid and heals gastric lining naturally.',
    price: 644,
    image: '/products/shankha-bhasma.jpg',
    ingredients:
      'Shankha Bhasma (calcined conch shell), Amalaki, Yastimadhu, Shatavari',
    for: 'Acidity, heartburn, GERD, gastric ulcer, gastritis, hyperacidity, and burning sensation in chest.',
  },
];

export const defaultContact: ContactInfo = {
  phone: '+91 77781 66222',
  address: 'Sri Jayanthi Wellbeing Clinic\n[Your Address Here]',
  email: 'contact@srijayanthi.com',
  whatsappNumber: '919177816622',
};

export const defaultData: SiteData = {
  logoUrl: '/Logo-Final-Version.png',
  contact: defaultContact,
  products: defaultProducts,
  leads: [],
  visits: 0,
};

export function loadData(): SiteData {
  if (typeof window === 'undefined') return defaultData;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultData;
    const parsed = JSON.parse(raw) as Partial<SiteData>;
    return {
      ...defaultData,
      ...parsed,
      contact: { ...defaultContact, ...parsed.contact },
      products: parsed.products ?? defaultProducts,
      leads: parsed.leads ?? [],
      visits: parsed.visits ?? 0,
    };
  } catch {
    return defaultData;
  }
}

export function saveData(data: SiteData) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function addLead(lead: Omit<Lead, 'id' | 'timestamp'>) {
  const data = loadData();
  const newLead: Lead = {
    ...lead,
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    timestamp: new Date().toISOString(),
  };
  data.leads = [newLead, ...data.leads];
  saveData(data);
}

export function incrementVisits() {
  const data = loadData();
  data.visits += 1;
  saveData(data);
}

export function updateContact(contact: Partial<ContactInfo>) {
  const data = loadData();
  data.contact = { ...data.contact, ...contact };
  saveData(data);
}

export function updateLogo(url: string) {
  const data = loadData();
  data.logoUrl = url;
  saveData(data);
}

export function updateProducts(products: Product[]) {
  const data = loadData();
  data.products = products;
  saveData(data);
}

export function deleteLead(id: string) {
  const data = loadData();
  data.leads = data.leads.filter((l) => l.id !== id);
  saveData(data);
}
