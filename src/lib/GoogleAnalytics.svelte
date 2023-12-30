<script lang="ts">
	import { page } from '$app/stores';

	export let trackingId = '';

	$: {
		if (typeof gtag !== 'undefined') {
			gtag('config', trackingId, {
				page_title: document.title,
				page_path: $page.url.pathname
			});
		}
	}
	
</script>

<svelte:head>
	{#if trackingId}
		<script async src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}>
		</script>
		<script>
			window.dataLayer = window.dataLayer || [];

			function gtag() {
				dataLayer.push(arguments);
			}

			gtag('js', new Date());
			gtag('config', trackingId);
		</script>
	{/if}
</svelte:head>
