import { fail } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const { data: logs, error: err } = await locals.supabase
		.from('devlog')
		.select('accomplished, question, answer, rating, created_at')
		.order('created_at', { ascending: false });

	if (err) {
		fail(500, { message: 'Something went wrong' });
	}

	return { logs };
};
