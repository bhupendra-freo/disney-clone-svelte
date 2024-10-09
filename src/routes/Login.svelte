<script lang="ts">
  import { link } from "svelte-routing";
</script>

<div class="container">
  <div class="content">
    <img class="cta-logo-one" src="/src/assets/images/cta-logo-one.svg" alt="" />

    <a href="/home" class="sign-up" use:link>GET ALL THERE</a>

    <p class="description">
      Get Premier Access to Raya and the Last Dragon for an additional fee with
      a Disney+ subscription. As of 03/26/21, the price of Disney+ and The
      Disney Bundle will increase by $1.
    </p>

    <img class="cta-logo-two" src="/src/assets/images/cta-logo-two.png" alt="" />
  </div>
</div>

<style>
  .container {
    position: relative;
    min-height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;
  }

  .container::before {
    background-image: url("/src/assets/images/login-background.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.8;
    z-index: -1;
  }

  .content {
    max-width: 650px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
    padding: 80px 40px;
  }

  .cta-logo-one {
    width: 100%;
    margin-bottom: 12px;
  }

  .sign-up {
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-bottom: 12px;
    text-decoration: none;

    &:hover {
      background-color: #0483ee;
    }
  }

  .description {
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
    margin-bottom: 12px;
  }

  .cta-logo-two {
    width: 90%;
  }
</style>
