import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ depends, locals: { getSession } }) => {
	return {
		session: await getSession()
	};
};
