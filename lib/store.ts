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

export interface CampImage {
  id: string;
  url: string;
  caption: string;
  location: string;
  date: string;
}

export interface SiteData {
  logoUrl: string;
  contact: ContactInfo;
  products: Product[];
  campImages: CampImage[];
  leads: Lead[];
  visits: number;
}

const STORAGE_KEY = 'sri_jayanthi_data_v7';

export const defaultProducts: Product[] = [
  {
    id: '1',
    name: 'Gas-Empt',
    description:
      'A classical Ayurvedic digestive tonic formulated to rekindle digestive fire (Agni), relieve gas, bloating, acidity, and constipation. Supports liver detox and IBS management.',
    price: 450,
    image: '/gas-empt.png',
    ingredients:
      'Chitrak, Pippali, Shunti, Maricha, Jeeraka, Hingu, Lavana, Ajamoda',
    for: 'Gas, bloating, acidity, constipation, IBS, indigestion, liver sluggishness, and low metabolism.',
  },
  {
    id: '2',
    name: 'Kasa-Off',
    description:
      'A potent respiratory relief formulation for chronic cough, cold, and bronchial congestion. Soothes irritated airways and strengthens lung function naturally.',
    price: 444,
    image: '/kasa-off.png',
    ingredients:
      'Dashamoola, Vasaka, Kantakari, Pippali, Yastimadhu, Haridra, Tulsi',
    for: 'Chronic cough, cold, bronchitis, chest congestion, wheezing, and seasonal respiratory issues.',
  },
  {
    id: '3',
    name: 'Immune It',
    description:
      'A daily immunity booster rooted in classical Ayurveda. Strengthens respiratory health, builds defence against seasonal infections, and supports recovery.',
    price: 348,
    image: '/immune-it.png',
    ingredients:
      'Ashwagandha, Guduchi, Tulsi, Yashtimadhu, Pippali, Amalaki, Haridra',
    for: 'Frequent colds, cough, sinusitis, allergies, asthma, weak immunity, and post-illness recovery.',
  },
];

export const defaultContact: ContactInfo = {
  phone: '+91 91778 16622',
  address: 'Sri Jayanthi Wellbeing LLP\n16-2-751/91, H. No: B-34\nState Bank Colony\nSaidabad\nHyderabad – 500059',
  email: 'srijayanthiwellbeing@gmail.com',
  whatsappNumber: '919177816622',
};

export const defaultCampImages: CampImage[] = [
  {
    id: 'camp-1',
    url: '/camps/New 1.png',
    caption: 'Ayurvedic consultation in progress — personalised health assessment and treatment guidance rooted in classical wisdom.',
    location: 'Telangana',
    date: '2025-2026',
  },
  {
    id: 'camp-2',
    url: '/camps/new 2.png',
    caption: 'Community wellness camp — bringing preventive and curative Ayurvedic care to rural families across Telangana.',
    location: 'Telangana',
    date: '2025-2026',
  },
  {
    id: 'camp-3',
    url: '/camps/new 3.png',
    caption: 'Health education and wellness counselling — empowering individuals with daily routines, seasonal diets, and natural remedies.',
    location: 'Telangana',
    date: '2025-2026',
  },
  {
    id: 'camp-4',
    url: '/camps/image 1.png',
    caption: 'Direct Ayurvedic consultations at a community health camp — assessing patients for joint pain, digestive disorders, and lifestyle conditions with traditional pulse diagnosis.',
    location: 'Telangana',
    date: '2025-2026',
  },
  {
    id: 'camp-5',
    url: '/camps/image 3.png',
    caption: 'Educating village communities on preventive healthcare — teaching families about daily Ayurvedic routines, seasonal diets, and herbal home remedies for common ailments.',
    location: 'Telangana',
    date: '2025-2026',
  },
  {
    id: 'camp-6',
    url: '/camps/image 4.png',
    caption: 'Distribution of herbal medicines and Ayurvedic supplements to underserved communities — ensuring traditional wellness reaches every doorstep in rural Telangana.',
    location: 'Telangana',
    date: '2025-2026',
  },
  {
    id: 'camp-7',
    url: '/camps/image 5.png',
    caption: 'Women\'s health focus camp — addressing PCOS, menstrual health, and postnatal care through classical Ayurvedic protocols and lifestyle counselling.',
    location: 'Telangana',
    date: '2025-2026',
  },
];

export const defaultData: SiteData = {
  logoUrl: '/SJ.cdr.png',
  contact: defaultContact,
  products: defaultProducts,
  campImages: defaultCampImages,
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
      campImages: parsed.campImages ?? defaultCampImages,
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

export function updateCampImages(images: CampImage[]) {
  const data = loadData();
  data.campImages = images;
  saveData(data);
}

export function addCampImage(image: Omit<CampImage, 'id'>) {
  const data = loadData();
  const newImage: CampImage = {
    ...image,
    id: 'camp-' + Date.now().toString(36),
  };
  data.campImages = [...data.campImages, newImage];
  saveData(data);
  return newImage;
}

export function deleteCampImage(id: string) {
  const data = loadData();
  data.campImages = data.campImages.filter((c) => c.id !== id);
  saveData(data);
}
