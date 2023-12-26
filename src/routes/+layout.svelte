<div class="nav-bar">
	<p class="logo"><a href="/">$nrp-dev</a></p>
	<a href="/ms-course">ms course</a>
	<a href="/hs-course">hs course</a>
	<a href="/dev-log">dev log</a>
	<a href="/dev-log/new">add dev log</a>
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
		align-items: flex-start;
	}

	.nav-bar a {
		margin: 1rem 1rem;
		text-decoration: none;
		font-size: 1.5rem;
		color: #000;
	}
</style>
