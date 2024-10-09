<script lang="ts">
  import { onMount } from "svelte";

  let currentSlide = 0;
  const slides = [
    "/src/assets/images/slider-badging.jpg",
    "/src/assets/images/slider-badag.jpg",
    "/src/assets/images/slider-scale.jpg",
    "/src/assets/images/slider-scales.jpg",
  ];

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
  }

  onMount(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  });
</script>

<div class="carousel">
  {#each slides as slide, i}
    <div
      class="wrap"
      style="opacity: {i === currentSlide ? 1 : 0}; 
               transition: opacity 0.5s ease-in-out;"
    >
      <img src={slide} alt="slider" />
    </div>
  {/each}
</div>

<style>
  .carousel {
    margin-top: 20px;
    position: relative;
    height: 400px;
  }

  .wrap {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
    box-shadow:
      rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  }
</style>
