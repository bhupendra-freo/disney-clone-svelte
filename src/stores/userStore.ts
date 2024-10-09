import { writable } from 'svelte/store';

interface User {
  name: string | null;
  email: string | null;
  photo: string | null;
}

export const user = writable<User>({
  name: null,
  email: null,
  photo: null
});