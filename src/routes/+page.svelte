<script>
	import { page } from '$app/stores';
</script>

{#if $page.data.user}
	<p>User ID: {$page.data.user.id}</p>
	<p>User Name: {$page.data.user.user_metadata.name}</p>
	<a href="/auth/logout">Log out</a>
{:else}
	<p>You are not logged in</p>
	<a href="/auth">Log in with Twitch</a>
{/if}
