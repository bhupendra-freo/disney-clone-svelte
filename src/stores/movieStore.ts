import { writable } from "svelte/store";
import type { Movie } from "../types/movie";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  writeBatch,
  doc,
} from "firebase/firestore";

function createMovieStore() {
  const { subscribe, set, update } = writable<Movie[]>([]);

  return {
    subscribe,
    initializeFirebase: async (movieData: Movie[]) => {
      try {
        const batch = writeBatch(db);
        const moviesRef = collection(db, "movies");

        // First, check if data already exists
        const snapshot = await getDocs(moviesRef);
        if (snapshot.empty) {
          // If collection is empty, add all movies
          movieData.forEach((movie) => {
            const docRef = doc(moviesRef);
            batch.set(docRef, movie);
          });

          await batch.commit();
          console.log("Movie data initialized in Firebase");
        }

        // Set the local store with the data
        set(movieData);
      } catch (error) {
        console.error("Error initializing Firebase data:", error);
      }
    },
    fetchFromFirebase: async () => {
      try {
        const moviesRef = collection(db, "movies");
        const snapshot = await getDocs(moviesRef);
        const movies = snapshot.docs.map((doc) => doc.data() as Movie);
        set(movies);
      } catch (error) {
        console.error("Error fetching movies from Firebase:", error);
      }
    },
  };
}

export const movies = createMovieStore();
