<script>
  import { onDestroy, onMount } from "svelte";
  import { Router, navigate } from "svelte-routing";
  import { auth$ as auth, logout } from "@example/auth";

  const ROUTES = {
    LOGIN: "/login",
    HOME: "/home",
  };

  let sub;
  onMount(() => {
    sub = auth.subscribe(({ sessionToken }) => {
      const needsLogin = !sessionToken;
      if (needsLogin) navigate(ROUTES.LOGIN);
      else if (!needsLogin && window.location.pathname === ROUTES.LOGIN) {
        navigate(ROUTES.HOME);
      }
    });
  });

  onDestroy(() => {
    sub.unsubscribe();
  });
</script>

<header class="header">
  <nav>
    <Router>
      {#if $auth.sessionToken}
        <span>Welcome!</span>
        <button class="action" type="button" on:click|once={logout}>Logout</button
        >
      {:else}<span>You are not logged in.</span>{/if}
    </Router>
  </nav>
</header>

<style>
  .header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 2rem 8rem;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
  }
  nav {
    color: #999;
    font: inherit;
    font-weight: 700;
    font-size: 1.6rem;
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  nav .action {
    background: none;
    border: 1px solid currentColor;
    border-radius: 4px;
    color: #404cfa;
    font-size: 1.6rem;
    line-height: 1.5;
    font-weight: 700;
    padding: .8rem 2rem;
    height: 4.2rem;
    text-decoration: none;
    transition: all .2s ease-in-out;
  }

  nav .action:hover,
  nav .action:focus {
    background-color: #404cfa;
    border-color: #404cfa;
    color: #fff;
    outline: 0;
  }
</style>
