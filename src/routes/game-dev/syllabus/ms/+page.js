export async function load() {
	const syllabus = await fetch(
		'https://raw.githubusercontent.com/northridge-dev/python-game-dev/main/syllabus/ms/latest.md'
	);

	return {
		markdown: await syllabus.text()
	};
}
