<script lang="ts">
	export let trackingId = '';
</script>

<svelte:head>
	{#if trackingId}
		<script async src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}></script>
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
