import { fail } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ depends, locals }) {
	const { data: logs, error: err } = await locals.supabase.from('devlog').select('*');

	if (err) {
		fail(500, { message: 'Something went wrong' });
	}

	return { logs };
}
