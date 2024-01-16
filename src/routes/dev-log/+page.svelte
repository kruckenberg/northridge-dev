<script lang="ts">
	import Protected from '$lib/components/Protected.svelte';

	export let data;
	let { logs, session } = data;
	$: ({ logs, session } = data);

	function getQuestionText(
		slug: 'learn' | 'improve' | 'generous' | 'resourceful' | 'craftsman'
	): string {
		const questions = {
			learn: 'What did you learn today?',
			improve: 'How did you improve today?',
			generous: 'How were you generous today?',
			resourceful: 'How were you persevering or resourceful today?',
			craftsman: 'How were you craftsmanlike today?'
		};

		return questions[slug] || 'Unknown question';
	}
</script>

<Protected {session}>
	<h1>Dev Logs</h1>

	{#if !logs.length}
		<p>No logs yet.</p>
	{:else}
		{#each logs as { created_at: logDate, accomplished, question, answer, rating }}
			<div class="log-entry">
				<b>{new Date(logDate).toDateString()}</b>
				<b>What I accomplished:</b>
				{accomplished}
				<b>{getQuestionText(question)}</b>
				{answer}
				<b>Effort & focus:</b>
				{rating}
			</div>
		{/each}
	{/if}

	<style>
		h1 {
			padding-top: 1rem;
			padding-bottom: 1rem;
			font-weight: 600;
			font-size: 2.5rem;
		}

		.log-entry {
			display: flex;
			flex-direction: column;
			margin-bottom: 1rem;
			padding: 1rem;
			border: 1px solid #ccc;
			border-radius: 5px;
			box-shadow: 0 0 5px #ccc;
			background-color: #f5f5f5;
			width: 75%;
		}

		b {
			padding-top: 2rem;
		}
	</style>
</Protected>
