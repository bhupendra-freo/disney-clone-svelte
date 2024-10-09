import App from "./App.svelte";
import { navigate } from "svelte-routing";

const app = new App({
  target: document.getElementById("app") as HTMLElement,
});

window.addEventListener("popstate", () => {
  navigate(document.location.pathname, { replace: true });
});

export default app;
