<div class="new-log-container">
	<p>{new Date().toDateString()}</p>

	<form method="POST">
		<label for="accomplished">What did you accomplish today?</label>
		<textarea name="accomplished" id="accomplished" rows="5"></textarea>
	</form>
</div>

<style>
	.new-log-container {
		width: 70%;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		font-weight: 500;
		font-size: 1.5rem;
	}

	label {
		display: block;
		margin-bottom: 1rem;
	}

	textarea {
		width: 50%;
		font-family: 'Quicksand';
		font-size: 1.25rem;
		color: rgb(255, 255, 255);
		background-color: rgb(10, 10, 10, 0.8);
		padding: 0.75rem;
		border-radius: 0.4rem;
		border: 1px solid #000;
	}
</style>
