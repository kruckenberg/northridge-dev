<script>
	import SvelteMarkdown from 'svelte-markdown';

	export let data;
</script>

<div class="container">
	<h1>Python Game Dev Course</h1>
	<a href="game-dev/syllabus">Syllabus</a>

	<div>
		<SvelteMarkdown source={data.projects} />
	</div>
	<div>
		<h2>Class Log</h2>
	</div>
	<div class="box">
		<SvelteMarkdown source={data.classLog} />
	</div>
</div>

<style>
	h1 {
		padding-top: 1rem;
		padding-bottom: 1rem;
		font-weight: 600;
		font-size: 2.5rem;
	}

	h2 {
		padding-bottom: 0.25rem;
		margin-bottom: 0px;
	}
	.container {
		margin: 50px;
	}

	.box {
		width: 50%;
		border: 1px solid #ccc;
		border-radius: 5px;
		padding: 40px 20px 40px 20px;
		margin: 10px;
		min-width: 600px;
	}
</style>
