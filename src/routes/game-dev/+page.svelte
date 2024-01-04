<script>
	import SvelteMarkdown from 'svelte-markdown';

	const tenativeSchedule = `
| Date | Topic | Activity |
| ---- | :--- | :--- |
| Week 0 | Introductions |  |
| Week 1 | Scratch Week |  |
| Week 2 | Introducing Python |  |
| Week 3 | Hangman |  |
| Week 3 |  |  |
| Week 4 | Pong |  |
| Week 5 |  |  |
| Week 6 |  |  |
| Week 7 | Snake Game |  |
| Week 8 |  |  |
| Week 9 | Tetris |  |
| Week 10 |  |  |
| Week 11 | Space Invaders |  |
| Week 12 |  |  |
| Week 13 |  |  |
| Week 14 | Side-scroller / Platform |  |
| Week 15 |  |  |
| Week 16 |  |  |
| Week 17 | Final Projects |  |
| Week 18 | Final Projects |  |
| Week 19 | Final Projects | Finish & present final projects |
| Week 20 | Goodbyes | End-of-semester celebration |`;
</script>

<h1>Python Game Dev Course</h1>
<a href="game-dev/syllabus">Syllabus</a>

<div class="center">
	<h2>Tenative Schedule</h2>
</div>
<div class="center box">
	<SvelteMarkdown source={tenativeSchedule} />
</div>

<style>
	h1 {
		padding-top: 1rem;
		padding-bottom: 1rem;
		font-weight: 600;
		font-size: 2.5rem;
	}

	.center {
		display: flex;
		justify-content: center;
		flex-direction: column;
		margin: auto;
		width: 50%;
		padding: 10px;
	}

	.box {
		border: 1px solid black;
		border-radius: 5px;
	}
</style>
