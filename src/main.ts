import App from './App.svelte';
import { ROUTES } from './app/routing/routes';

const app = new App({
	target: document.body,
	props: { }
});

export default app;