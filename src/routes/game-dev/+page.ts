/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const [problemSets, projects] = await Promise.all(
		[
			'https://raw.githubusercontent.com/northridge-dev/python-game-dev/main/problem_sets/list.md',
			'https://raw.githubusercontent.com/northridge-dev/python-game-dev/main/projects/list.md'
		].map((url) => fetch(url).then((response) => response.text()))
	);

	return {
		problemSets,
		projects
	};
}
