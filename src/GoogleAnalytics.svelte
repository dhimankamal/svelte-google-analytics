<script>
  export let trackingCode;
  
  function init() {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', trackingCode);
  }

  // Initialize Google Analytics when the component is mounted
  onMount(() => {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingCode}`;
    script.onload = () => init();
    document.head.appendChild(script);
  });

  // Call Google Analytics function to track an event
  export function trackEvent(eventType, eventAction, eventParams) {
    window.gtag('event', eventType, {
      ...eventParams,
      event_category: eventParams?.event_category || 'default',
      event_label: eventParams?.event_label || '',
      event_action: eventAction
    });
  }
</script>
