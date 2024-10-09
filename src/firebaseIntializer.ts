import { db } from './firebase';
import { collection, writeBatch, doc } from 'firebase/firestore';
import { movieData } from './data/movieData';

async function initializeFirebaseData() {
  try {
    const batch = writeBatch(db);
    const moviesRef = collection(db, 'movies');
    
    movieData.forEach((movie) => {
      const docRef = doc(moviesRef); // This creates a new doc with auto-generated ID
      batch.set(docRef, movie);
    });
    
    await batch.commit();
    console.log('Successfully added all movies to Firebase');
  } catch (error) {
    console.error('Error adding movies to Firebase:', error);
  }
}

// Run this function
initializeFirebaseData();