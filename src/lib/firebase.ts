import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

let firebaseApp: FirebaseApp;

if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = getApps()[0];
}

const storage = getStorage(firebaseApp);

export { storage };

export async function uploadQRCodeToFirebase(
  qrCodeBuffer: Buffer,
  fileName: string
): Promise<string> {
  const storageRef = ref(storage, `qr-codes/${fileName}`);
  const snapshot = await uploadBytes(storageRef, qrCodeBuffer);
  const downlo = await getDownloadURL(snapshot.ref);
  return downlo;
}
