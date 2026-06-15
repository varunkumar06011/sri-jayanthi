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

const STORAGE_KEY = 'sri_jayanthi_data_v3';

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
