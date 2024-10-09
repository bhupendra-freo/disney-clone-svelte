<script context="module" lang="ts">
  const navItems = [
    { href: "/home", icon: "/src/assets/images/home-icon.svg", alt: "home", text: "HOME" },
    {
      href: "/home",
      icon: "/src/assets/images/search-icon.svg",
      alt: "search",
      text: "SEARCH",
    },
    {
      href: "/home",
      icon: "/src/assets/images/watchlist-icon.svg",
      alt: "watchlist",
      text: "WATCHLIST",
    },
    {
      href: "/home",
      icon: "/src/assets/images/original-icon.svg",
      alt: "originals",
      text: "ORIGINALS",
    },
    {
      href: "/home",
      icon: "/src/assets/images/movie-icon.svg",
      alt: "movies",
      text: "MOVIES",
    },
    {
      href: "/home",
      icon: "/src/assets/images/series-icon.svg",
      alt: "series",
      text: "SERIES",
    },
  ];
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import { navigate } from "svelte-routing";
  import {
    getAuth,
    type Auth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    type User,
  } from "firebase/auth";
  import { user } from "../stores/userStore";
  import { db } from "../firebase";

  let auth: Auth;
  let provider: GoogleAuthProvider;

  onMount(() => {
    auth = getAuth();
    provider = new GoogleAuthProvider();

    const unsubscribe = onAuthStateChanged(
      auth,
      (firebaseUser: User | null) => {
        if (firebaseUser) {
          user.set({
            name: firebaseUser.displayName,
            email: firebaseUser.email,
            photo: firebaseUser.photoURL,
          });
        }
      }
    );

    return unsubscribe;
  });

  async function signIn() {
    try {
      const result = await signInWithPopup(auth, provider);
      const firebaseUser = result.user;
      user.set({
        name: firebaseUser.displayName,
        email: firebaseUser.email,
        photo: firebaseUser.photoURL,
      });
      navigate("/");
    } catch (error) {
      console.error("Error signing in:", error);
    }
  }

  async function handleSignOut() {
    try {
      await signOut(auth);
      user.set({
        name: null,
        email: null,
        photo: null,
      });
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  }
</script>

<nav>
  <img src="/src/assets/images/logo.svg" alt="Disney+" class="logo" />

  {#if !$user.name}
    <div class="login-container">
      <button class="login" on:click={signIn}>Login</button>
    </div>
  {:else}
    <div class="nav-menu">
      {#each navItems as item}
        <a href={item.href}>
          <img src={item.icon} alt={item.alt} />
          <span>{item.text}</span>
        </a>
      {/each}
    </div>
    <button class="user-btn" on:click={handleSignOut}>
      <img src={$user.photo} alt={$user.name} class="user-image" />
    </button>
  {/if}
</nav>

<style>
  nav {
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
  }

  .logo {
    max-width: 80px;
  }

  .nav-menu {
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
  }

  .nav-menu a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    text-decoration: none;
    color: white;
  }

  .nav-menu img {
    height: 20px;
    margin-right: 5px;
  }

  .nav-menu span {
    font-size: 13px;
    letter-spacing: 1.42px;
    position: relative;
    text-transform: uppercase;
  }

  .nav-menu span::after {
    content: "";
    height: 2px;
    background: white;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -6px;
    opacity: 0;
    transform: scaleX(0);
    transform-origin: left center;
    transition: all 250ms cubic-bezier(0.25, 0.45, 0.46, 0.94) 0s;
  }

  .nav-menu a:hover span::after {
    transform: scaleX(1);
    opacity: 1;
  }

  .user-btn{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: transparent;
    width: 48px;
    height: 48px;
  }

  .user-image {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
  }

  .login {
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    transition: all 250ms;
    color: white;
  }

  .login:hover {
    background-color: rgba(249, 249, 249, 0.8);
    color: black;
    border-color: transparent;
  }

  .login-container {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }

  @media (max-width: 768px) {
    .nav-menu {
      display: none;
    }
  }
</style>
