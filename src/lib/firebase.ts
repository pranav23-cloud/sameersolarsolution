import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported as isAnalyticsSupported } from "firebase/analytics";
import { getDatabase, ref, push, get, child } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA1C-PW0wTHvOCOfEIf6mgUaB8KaEzIKyM",
  authDomain: "sameer-associates-data.firebaseapp.com",
  databaseURL: "https://sameer-associates-data-default-rtdb.firebaseio.com",
  projectId: "sameer-associates-data",
  storageBucket: "sameer-associates-data.firebasestorage.app",
  messagingSenderId: "197786237287",
  appId: "1:197786237287:web:7cf9e4ba5f56cc7ec457c2",
  measurementId: "G-FLL6CY0YLQ",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Analytics is optional and only works in supported environments (HTTPS, browser).
let analyticsPromise: Promise<ReturnType<typeof getAnalytics> | null> | null = null;

export const getFirebaseAnalytics = () => {
  if (!analyticsPromise) {
    analyticsPromise = isAnalyticsSupported()
      .then((supported) => (supported ? getAnalytics(app) : null))
      .catch(() => null);
  }
  return analyticsPromise;
};

export interface ContactEnquiry {
  name: string;
  phone: string;
  email: string;
  message: string;
  createdAt: string;
}

export async function saveContactEnquiry(data: Omit<ContactEnquiry, "createdAt">) {
  const enquiriesRef = ref(db, "enquiries");
  const payload: ContactEnquiry = {
    ...data,
    createdAt: new Date().toISOString(),
  };
  await push(enquiriesRef, payload);
}

export async function listContactEnquiries(): Promise<(ContactEnquiry & { id: string })[]> {
  const dbRef = ref(db);
  const snapshot = await get(child(dbRef, "enquiries"));
  if (!snapshot.exists()) {
    return [];
  }
  const value = snapshot.val() as Record<string, ContactEnquiry>;
  return Object.entries(value)
    .map(([id, enquiry]) => ({ id, ...enquiry }))
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

