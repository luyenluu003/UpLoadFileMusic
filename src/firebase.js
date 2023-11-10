import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyApGNUiLi85wjw_0bRVOB2IM7Xem7_6_GA",
  authDomain: "totmusica-95359.firebaseapp.com",
  projectId: "totmusica-95359",
  storageBucket: "totmusica-95359.appspot.com",
  messagingSenderId: "84903725328",
  appId: "1:84903725328:web:3b8abd98eca5702985bd95",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
