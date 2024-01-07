<script>
	import SvelteMarkdown from 'svelte-markdown';

	const tenativeSchedule = `
| Date | Topic |
| :--- | :--- |
| Week 0 | Introductions |
| Week 1 | Scratch Week |
| Week 2 | Introducing Python |
| Weeks 3 - 4 | Hangman |
| Weeks 5 - 6 | Pong |
| Weeks 7 - 8| Snake Game |
| Weeks 9 - 10 | Tetris |
| Weeks 11 - 13 | Space Invaders |  |
| Weeks 14 - 16 | Side-scroller / Platform |
| Weeks 17 - 19 | Final Projects |
| Week 20 | Goodbyes / End-of-semester celebration |`;

	const problemSets = `
  | Problem Set | Due Date |
  | ----------- | -------- |
  | [0 - Scratch Cat](https://github.com/northridge-dev/python-game-dev/blob/main/problem_sets/0-scratch-cat.md) |  Friday, January 12 |
`;

	const projects = `
  | Project | Due Date |
  | ------- | -------- |
  | [0 - Scratch](https://github.com/northridge-dev/python-game-dev/blob/main/projects/0-scratch.md) | Friday, January 12 |
  `;
</script>

<div class="container">
	<h1>Python Game Dev Course</h1>
	<a href="game-dev/syllabus">Syllabus</a>
	<div>
		<h2>Problem Sets</h2>
	</div>
	<a href="https://github.com/northridge-dev/python-game-dev/tree/main/problem_sets"
		>all problem sets</a
	>
	<div class="box">
		<SvelteMarkdown source={problemSets} />
	</div>

	<div>
		<h2>Projects</h2>
	</div>
	<a href="https://github.com/northridge-dev/python-game-dev/tree/main/projects">all projects</a>
	<div class="box">
		<SvelteMarkdown source={projects} />
	</div>
	<div>
		<h2>Tenative Schedule</h2>
	</div>
	<div class="box">
		<SvelteMarkdown source={tenativeSchedule} />
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
