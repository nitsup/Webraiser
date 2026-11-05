import { createClient, type SupabaseClient } from '@supabase/supabase-js';

let supabaseClient: SupabaseClient | undefined;

export function getSupabaseClient(): SupabaseClient {
	if (supabaseClient) return supabaseClient;

	const url = import.meta.env.PUBLIC_SUPABASE_URL?.trim();
	const publishableKey = import.meta.env.PUBLIC_SUPABASE_PUBLISHABLE_KEY?.trim();
	if (!url || !publishableKey) {
		const missingVariables = [
			!url && 'PUBLIC_SUPABASE_URL',
			!publishableKey && 'PUBLIC_SUPABASE_PUBLISHABLE_KEY',
		].filter((variable): variable is string => Boolean(variable));
		throw new Error(
			`Cannot initialize Supabase: missing ${missingVariables.join(' and ')}. Add these values to your local .env file.`,
		);
	}

	supabaseClient = createClient(url, publishableKey);
	return supabaseClient;
}
