<script>
	import Protected from '$lib/components/Protected.svelte';

	export let data;
	let { session } = data;
	$: ({ session } = data);
</script>

<Protected {session}>
	<h1>Dev Log</h1>

	{#each data.logs as { created_at: logDate, accomplished, rating }}
		<li>
			{new Date(logDate).toLocaleString()}
			{accomplished}
			{rating}
		</li>
	{/each}

	<style>
		h1 {
			padding-top: 1rem;
			padding-bottom: 1rem;
			font-weight: 600;
			font-size: 2.5rem;
		}
	</style>
</Protected>
