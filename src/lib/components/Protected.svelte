<script>
	export let session;
</script>

{#if session}
	<slot />
{:else}
	<p>You must be logged in to view this page.</p>
{/if}
