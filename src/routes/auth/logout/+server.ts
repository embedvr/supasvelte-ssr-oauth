import { redirect } from '@sveltejs/kit';

export const GET = async ({ locals: { supabase } }) => {
	const { error } = await supabase.auth.signOut();
	if (error) {
		throw new Error(error.message);
	}

	redirect(303, '/');
};
