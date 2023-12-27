<script lang="ts">
	const questions = [
		{ key: 'learn', text: 'What did you learn today?' },
		{ key: 'improve', text: 'How did you improve today?' },
		{ key: 'generous', text: 'How were you generous today?' },
		{ key: 'resourceful', text: 'How were you persevering or resourceful today?' },
		{ key: 'craftsmanlike', text: 'How were you craftsmanlike today?' }
	];

	const rndmIdx = Math.floor(Math.random() * questions.length);
	let selectedQuestion = questions[rndmIdx].key;

	function getLetterGrade(numGrade: number): string {
		if (numGrade >= 98) return 'A+';
		if (numGrade >= 95) return 'A';
		if (numGrade >= 93) return 'A-';
		if (numGrade >= 90) return 'B+';
		if (numGrade >= 87) return 'B';
		if (numGrade >= 85) return 'B-';
		if (numGrade >= 82) return 'C+';
		if (numGrade >= 79) return 'C';
		if (numGrade >= 77) return 'C-';
		if (numGrade >= 74) return 'D+';
		if (numGrade >= 70) return 'D';
		return 'F';
	}

	let rating = 60;
	$: grade = getLetterGrade(rating);
</script>

<div class="outer-container">
	<div class="new-log-container">
		<p>{new Date().toDateString()}</p>

		<form method="POST">
			<div class="form-group">
				<label for="accomplished">What did you accomplish today?</label>
				<textarea
					name="accomplished"
					id="accomplished"
					rows="5"
					cols="80"
					placeholder="Be specific"
					required
				></textarea>
			</div>
			<div class="form-group">
				<label for="answer">
					<select name="question" id="question" bind:value={selectedQuestion}>
						{#each questions as question (question.key)}
							<option id={question.key} value={question.key}>{question.text}</option>
						{/each}
					</select>
				</label>
				<textarea name="answer" id="answer" rows="5" cols="80" placeholder="Be specific" required
				></textarea>
			</div>
			<div class="form-group">
				<label for="rating">How would you grade your effort and focus today?</label>
				<div class="rating">
					<input
						type="range"
						id="rating"
						name="rating"
						min="60"
						max="100"
						step="1"
						bind:value={rating}
						class="range-input"
					/>
					<div>{rating} {grade}</div>
				</div>
			</div>
		</form>
	</div>
</div>

<style>
	.outer-container {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.new-log-container {
		padding: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		font-weight: 500;
		font-size: 1.5rem;
	}

	.form-group {
		margin-bottom: 1.5rem;
	}

	.rating {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.range-input {
		margin: 5px 0;
		width: 90%;
		height: 1px;
	}

	label {
		display: block;
		margin-bottom: 1rem;
	}

	select {
		width: 100%;
		font-family: 'Quicksand';
		font-size: 1.5rem;
		padding: 0px;
		background-color: inherit;
		border: 0px;
	}

	textarea {
		font-family: 'Quicksand';
		font-size: 1.25rem;
		color: rgb(255, 255, 255);
		background-color: rgb(10, 10, 10, 0.8);
		padding: 0.75rem;
		border-radius: 0.4rem;
		border: 1px solid #000;
	}
</style>
