/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const [projects, classLogRaw] = await Promise.all(
		[
			'https://raw.githubusercontent.com/northridge-dev/python-game-dev/main/projects/README.md',
			'https://raw.githubusercontent.com/northridge-dev/python-game-dev/main/log/2024_01.md'
		].map((url) => fetch(url).then((response) => response.text()))
	);

	const classLog = classLogRaw.slice(classLogRaw.indexOf('|')).trim();

	return {
		projects,
		classLog
	};
}
