export async function load() {
	const [problemSets, projects] = await Promise.all([
		fetch(
			'https://raw.githubusercontent.com/northridge-dev/python-game-dev/main/problem_sets/list.md'
		),
		fetch('https://raw.githubusercontent.com/northridge-dev/python-game-dev/main/projects/list.md')
	]);

	return {
		problemSets: await problemSets.text(),
		projects: await projects.text()
	};
}
