# svelte-google-analytics

**Description:** A Svelte component to easily integrate Google Analytics tracking into your Svelte applications.

## Installation

You can install this package via npm:

```bash
npm install svelte-google-analytics
```


## Usage

To use the `GoogleAnalytics` component, import it into your Svelte file:

```html
<script lang="ts">
  import { GoogleAnalytics } from "svelte-google-analytics";
</script>

<GoogleAnalytics trackingId='YOUR_TRACKING_ID_HERE' />
<slot />
```

## Attributes

### `trackingId`

- **Type:** String
- **Default:** `"YOUR_TRACKING_ID_HERE"`
- **Description:** Google Analytics tracking ID. Replace 'YOUR_TRACKING_ID_HERE' with your own tracking ID.

## Contributing

Contributions are welcome! Please follow the guidelines in [CONTRIBUTING.md](https://github.com/dhimankamal/svelte-google-analytics/blob/main/CONTRIBUTING) before submitting pull requests.

## License

This package is licensed under the MIT License. See [LICENSE](https://github.com/dhimankamal/svelte-google-analytics/blob/main/LICENSE) for more details.

## Issues

If you encounter any issues with this package, please report them [here](https://github.com/dhimankamal/ssvelte-google-analytics/issues).
