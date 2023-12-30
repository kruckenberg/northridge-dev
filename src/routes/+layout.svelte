<div class="nav-bar">
	<p class="logo"><a href="/"><img src="/logo.png" alt="logo" width="50" height="50" /></a></p>
	<a href="/game-dev">game dev course</a>
	<a href="/dev-log">dev log</a>
	<a href="/dev-log/new" class="bordered">+ dev log</a>
</div>
<hr />

<slot />

<style>
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

	.nav-bar a {
		margin: 1rem 1rem;
		text-decoration: none;
		font-size: 1.5rem;
		color: #000;
	}

	.bordered {
		padding: 0.5rem 1rem;
		border: 1px solid #000;
		border-radius: 5px;
	}
</style>
