<script>
	import { Router, Route } from "svelte-routing";
	import Navbar from "../components/navbar/Navbar.svelte";
	import { ROUTES } from "./routes";
</script>

<Router>
	{#each ROUTES as rt}
		<Route path={rt.path}>
			{#if rt.topNavbar} <Navbar /> {/if}
			<svelte:component this={rt.component} />
		</Route>
	{/each}
</Router>
