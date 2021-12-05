<script lang="ts">
	import AppRouter from "./app/routing/AppRouter.svelte";
</script>

<AppRouter />

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	@layer utilities {
		.z-9999 {
			z-index: 9999;
		}
		.w-f {
			width: fit-content;
		}
		.radius-2 {
			border-radius: 2px;
		}
		.no-select {
			-webkit-touch-callout: none;
			-webkit-user-select: none;
			-khtml-user-select: none;
			-moz-user-select: none;
			-ms-user-select: none;
			user-select: none;
		}
	}
</style>
