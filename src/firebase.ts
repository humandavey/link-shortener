import { initializeApp } from "firebase/app";
import {
  collection,
  getDocs,
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API_KEY,
  authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FB_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FB_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_FB_APP_ID,
  measurementId: import.meta.env.VITE_FB_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getAllLinks = async (): Promise<String[]> => {
  const ref = collection(db, "links");
  const snapshot = await getDocs(ref);
  const links: String[] = [];
  snapshot.forEach((doc: any) => {
    links.push(doc.data());
  });
  return links;
}

export const getURL = async (short: string): Promise<string> => {
  const docRef = doc(db, "links", short)
  const docSnap = await getDoc(docRef)
  return docSnap.data()!["url"]
}

export const createShort = async(url: string, short: string) => {
  console.log({
    name: short,
    url: url,
  })
  await setDoc(doc(db, "links", short), {
    name: short,
    url: url,
  })
}