<script lang="ts">
  const viewers = [
    {
      image: "/src/assets/images/viewers-disney.png",
      video: "/src/assets/videos/1564674844-disney.mp4",
    },
    {
      image: "/src/assets/images/viewers-pixar.png",
      video: "/src/assets/videos/1564676714-pixar.mp4",
    },
    {
      image: "/src/assets/images/viewers-marvel.png",
      video: "/src/assets/videos/1564676115-marvel.mp4",
    },
    {
      image: "/src/assets/images/viewers-starwars.png",
      video: "/src/assets/videos/1608229455-star-wars.mp4",
    },
    {
      image: "/src/assets/images/viewers-national.png",
      video: "/src/assets/videos/1564676296-national-geographic.mp4",
    },
  ];
</script>

<div class="container">
  {#each viewers as viewer}
    <div class="wrap">
      <img src={viewer.image} alt="" />
      <video autoplay loop muted playsInline>
        <source src={viewer.video} type="video/mp4" />
      </video>
    </div>
  {/each}
</div>

<style>
  .container {
    margin-top: 30px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    padding: 30px 0 26px;
  }

  .wrap {
    padding-top: 56.25%;
    border-radius: 10px;
    box-shadow:
      rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 3px solid rgba(249, 249, 249, 0.1);
  }

  .wrap img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  .wrap video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }

  .wrap:hover {
    box-shadow:
      rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }

  .wrap:hover video {
    opacity: 1;
  }

  @media (max-width: 768px) {
    .container {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
</style>
