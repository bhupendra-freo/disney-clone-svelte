<script lang="ts">
  import { onMount } from "svelte";
  import { navigate } from "svelte-routing";
  import type { Movie } from "../types/movie";
  import { movies } from "../stores/movieStore";

  export let title = "";
  let movie: Movie | undefined;

  onMount(() => {
    movie = $movies.find(
      (m) => m.title.toLowerCase() === decodeURIComponent(title).toLowerCase()
    );
    if (!movie) {
      navigate("/home", { replace: true });
    }
  });
</script>

{#if movie}
  <div class="container">
    <div class="background">
      <img src={movie.backgroundImg} alt={movie.title} />
    </div>

    <div class="image-title">
      <img src={movie.titleImg} alt={movie.title} />
    </div>

    <div class="controls">
      <button class="play-button">
        <img src="/src/assets/images/play-icon-black.png" alt="play" />
        <span>PLAY</span>
      </button>

      <button class="trailer-button">
        <img src="/src/assets/images/play-icon-white.png" alt="trailer" />
        <span>TRAILER</span>
      </button>

      <button class="add-button">
        <span>+</span>
      </button>

      <button class="group-watch">
        <img src="/src/assets/images/group-icon.png" alt="group watch" />
      </button>
    </div>

    <div class="subtitle">{movie.subTitle}</div>
    <div class="description">{movie.description}</div>
  </div>
{/if}

<style>
  .container {
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
  }

  .background {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;
  }

  .background img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .image-title {
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;
    margin-top: 60px;
  }

  .image-title img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .controls {
    display: flex;
    align-items: center;
    margin-top: 24px;
  }

  .play-button,
  .trailer-button {
    display: flex;
    align-items: center;
    padding: 0 24px;
    margin-right: 22px;
    height: 56px;
    border-radius: 4px;
    font-size: 15px;
    cursor: pointer;
    border: none;
  }

  .play-button {
    background: rgb(249, 249, 249);
    color: black;
  }

  .trailer-button {
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
  }

  .add-button,
  .group-watch {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    margin-right: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .subtitle {
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
  }

  .description {
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 760px;
  }

  @media (max-width: 768px) {
    .controls {
      flex-direction: column;
      align-items: flex-start;
    }

    .play-button,
    .trailer-button {
      margin-bottom: 10px;
    }
  }
</style>
