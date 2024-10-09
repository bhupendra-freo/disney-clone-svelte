<script lang="ts">
  import ImageSlider from "../components/ImageSlider.svelte";
  import Viewers from "../components/Viewers.svelte";
  import Movies from "../components/Movies.svelte";
  import { movies } from "../stores/movieStore";
</script>

<div class="container">
  <ImageSlider />
  <Viewers />
  <Movies title="Recommended for You" type="recommend" />
  <Movies title="New to Disney+" type="new" />
  <Movies title="Trending" type="trending" />
  <Movies title="Originals" type="original" />
</div>

<style>
  .container {
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;
  }

  .container::before {
    background: url("src/assets/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
</style>
