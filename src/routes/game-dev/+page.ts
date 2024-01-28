/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const [problemSets, projects, classLogRaw] = await Promise.all(
		[
			'https://raw.githubusercontent.com/northridge-dev/python-game-dev/main/problem_sets/list.md',
			'https://raw.githubusercontent.com/northridge-dev/python-game-dev/main/projects/list.md',
			'https://raw.githubusercontent.com/northridge-dev/python-game-dev/main/log/2024_01.md'
		].map((url) => fetch(url).then((response) => response.text()))
	);

	const classLog = classLogRaw.slice(classLogRaw.indexOf('|')).trim();

	return {
		problemSets,
		projects,
		classLog
	};
}
