import { initializeApp } from "firebase/app";
import {
  collection,
  getDocs,
  getFirestore,
  doc,
  getDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  projectId: process.env.FB_PROJECT_ID,
  storageBucket: process.env.FB_STORAGE_BUCKET,
  messagingSenderId: process.env.FB_MESSAGE_SENDER_ID,
  appId: process.env.FB_APP_ID,
  measurementId: process.env.FB_MEASUREMENT_ID,
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
