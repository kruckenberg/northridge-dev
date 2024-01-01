import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async function ({ request }) {
		const formData = await request.formData();
		const accomplished = formData.get('accomplished');
		const question = formData.get('question');
		const answer = formData.get('answer');
		const rating = formData.get('rating');

		const devLog = { date: Date.now(), accomplished, question, answer, rating };
	}
};
