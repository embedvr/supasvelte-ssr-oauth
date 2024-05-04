import { redirect } from '@sveltejs/kit';

export const GET = async ({ locals: { supabase } }) => {
	const { data, error } = await supabase.auth.signInWithOAuth({
		provider: 'twitch',
		options: {
			redirectTo: 'http://localhost:5173/auth/callback'
		}
	});

	if (error) {
		throw new Error(error.message);
	}

	if (data.url) {
		redirect(303, data.url);
	}

	return new Response('ok');
};
