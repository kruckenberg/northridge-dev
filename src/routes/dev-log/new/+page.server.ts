import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async function ({ request, locals }) {
		const formData = await request.formData();
		const accomplished = formData.get('accomplished');
		const question = formData.get('question');
		const answer = formData.get('answer');
		const rating = formData.get('rating');

		const { error, data, status, statusText } = await locals.supabase
			.from('devlog')
			.insert({ accomplished, question, answer, rating });

		if (error) {
			throw fail(500, { message: 'Something went wrong' });
		}

		throw redirect(303, '/dev-log');
	}
};
