<script lang="ts">
  import { onMount } from "svelte";
  import { movies } from "../stores/movieStore";
  import { movieData } from "../data/movieData";
  import type { Movie } from "../types/movie";
  import { link } from "svelte-routing";

  export let title: string;
  export let type: string;

  onMount(async () => {
    await movies.initializeFirebase(movieData);
  });

  $: filteredMovies = $movies.filter(
    (movie) => type === "recommend" || movie.type === type
  );
</script>

<div class="container">
  <h4>{title}</h4>
  <div class="content">
    {#each filteredMovies as movie}
      <div class="wrap">
        <a href={`/detail/${movie.title}`} use:link>
          <img src={movie.cardImg} alt={movie.title} />
        </a>
      </div>
    {/each}
  </div>
</div>

<style>
  .container {
    margin-bottom: 20px;
  }

  h4 {
    margin-bottom: 20px;
  }

  .content {
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .wrap {
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow:
      rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }

  .wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .wrap:hover {
    transform: scale(1.05);
    box-shadow:
      rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    border-color: rgba(249, 249, 249, 0.8);
  }

  @media (max-width: 768px) {
    .content {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
</style>
