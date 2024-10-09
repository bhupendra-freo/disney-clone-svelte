<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import Detail from "./routes/Detail.svelte";
  import Login from "./routes/Login.svelte";
  import Header from "./components/Header.svelte";
</script>

<Router>
  <Header />

  <main>
    <Route path="/" component={Login} />
    <Route path="/home" component={Home} />
    <Route path="/detail/:title" let:params>
      <Detail title={params.title} />
    </Route>
  </main>
</Router>

<style>
  :global(body) {
    margin: 0;
    color: white;
    font-family: Avenir-Roman, sans-serif;
    background-color: #040714;
  }

  main {
    min-height: calc(100vh - 70px);
  }
</style>
