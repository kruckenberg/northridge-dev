import type { Session } from '@supabase/supabase-js';

export function getUsername(session: Session | null): string {
	if (!session) {
		return '';
	}
	return session.user?.user_metadata?.name ?? '';
}
