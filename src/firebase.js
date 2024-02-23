// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
import {firebaseConfig} from '../config'

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
