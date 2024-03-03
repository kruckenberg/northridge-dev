<script>
	import SvelteMarkdown from 'svelte-markdown';

	export let data;
</script>

<div class="syllabus">
	<SvelteMarkdown source={data.markdown} />
</div>

<style>
	.syllabus {
		margin: 75px;
	}
</style>
