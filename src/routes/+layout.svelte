<script>
	import { onMount } from 'svelte';
	import { error, fail, redirect } from '@sveltejs/kit';
	import { getUsername } from '$lib/utils';
	import { invalidate } from '$app/navigation';
	import { page } from '$app/stores';

	export let data;

	let { session, supabase } = data;
	$: ({ session, supabase } = data);

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => subscription.unsubscribe();
	});

	async function login() {
		const { data, error: err } = await supabase.auth.signInWithOAuth({
			provider: 'github',
			options: { redirectTo: 'https://northridge.dev/auth/callback' }
		});

		if (err) {
			return fail(400, { message: 'Something went wrong' });
		}
	}

	async function logout() {
		const { error: err } = await supabase.auth.signOut();

		if (err) {
			throw error(500, 'Something went wrong');
		}
	}
</script>

<div class="outer-container">
	<div class="nav-bar">
		<p class="logo"><a href="/"><img src="/logo.png" alt="logo" width="50" height="50" /></a></p>
		<a href="/game-dev">game dev course</a>
		<a href="/dev-log">dev log</a>
		<a href="/dev-log/new" class="bordered">+ dev log</a>
	</div>
	<div class="nav-bar">
		{getUsername(session)}
		{#if session}
			<button on:click={logout} class="bordered">log out</button>
		{:else}
			<button on:click={login} class="bordered">log in</button>
		{/if}
	</div>
</div>
<hr />

<slot />

<style>
	.outer-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.logo {
		font-family: monospace;
		font-size: 1.5rem;
		font-weight: 600;
		margin: 1rem 1rem;
	}

	.nav-bar {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}

	a {
		margin: 1rem 1rem;
		text-decoration: none;
		font-size: 1.5rem;
		color: #000;
	}

	button {
		font-family: 'Quicksand';
		margin: 1rem 1rem;
		text-decoration: none;
		font-size: 1.5rem;
		color: #000;
		background-color: transparent;
		border: 0px;
		cursor: pointer;
	}

	.bordered {
		padding: 0.5rem 1rem;
		border: 1px solid #000;
		border-radius: 5px;
	}
</style>
