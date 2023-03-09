<script>
  export let trackingId = '';

  // Load the Google Analytics script
  const loadScript = () => {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize the GA tracking code
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', trackingId);
  };

  // Load the script when the component is mounted
  onMount(loadScript);
</script>

<svelte:head>
  <!-- Add the Google Analytics tracking code -->
  {#if trackingId}
    <script async src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '{trackingId}');
    </script>
  {/if}
</svelte:head>