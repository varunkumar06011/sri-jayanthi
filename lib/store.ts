export interface Product {
  id: string;
  name: string;
  description: string;
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

const STORAGE_KEY = 'sri_jayanthi_data';

export const defaultProducts: Product[] = [
  {
    id: '1',
    name: 'Kesha Thailam',
    description: 'A classical hair oil prepared with bhringraj, amla, and sesame base. Used for premature greying, hair fall, and scalp dryness.',
    ingredients: 'Bhringraj, Amla, Brahmi, Sesame oil, Coconut milk',
    for: 'Anyone with hair fall, dandruff, or early greying.',
  },
  {
    id: '2',
    name: 'Pain Relief Lepam',
    description: 'External herbal paste for joint and muscle pain. Gives immediate warmth and relief when applied before a hot pack.',
    ingredients: 'Dashamoola, Nirgundi, Castor leaf, Rasna, Ajwain',
    for: 'Back pain, knee pain, sprains, and arthritic joints.',
  },
  {
    id: '3',
    name: 'Skin Glow Lepam',
    description: 'Face and body pack for hyperpigmentation, acne scars, and uneven skin tone. Brightens without bleaching.',
    ingredients: 'Sandalwood, Turmeric, Manjistha, Lodhra, Rose water',
    for: 'Dull skin, acne marks, tan removal, and weekly skin care.',
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
