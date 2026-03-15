# WebView2 TypeScript Types

TypeScript type definitions for the **Microsoft WebView2 JavaScript API**.

This package provides strongly-typed interfaces for the `window.chrome.webview` API used inside WebView2 environments, enabling better autocompletion, documentation, and type safety when developing WebView2 applications with TypeScript.

## Features

- Complete typings for the **WebView2 JavaScript API**
- Fully typed **host object proxies**
- Support for both:
  - **Async host object proxies**
  - **Sync host object proxies**

- Typed event interfaces
- Fully typed `window.chrome.webview`
- Works with any TypeScript WebView2 project

## Installation

```bash
npm install --save-dev webview2-types
```

## Usage

After installing the package, TypeScript will automatically include the types.

Example usage inside a WebView2 page:

```ts
window.chrome.webview.postMessage({
  type: "hello",
  message: "Hello from WebView2",
});
```

Listening for messages:

```ts
window.chrome.webview.addEventListener("message", (event) => {
  console.log(event.data);
});
```

Accessing host objects:

```ts
const api = await window.chrome.webview.hostObjects.myApi;
await api.doSomething();
```

Using synchronous proxies:

```ts
const api = window.chrome.webview.hostObjects.sync.myApi;
api.doSomething();
```

## Provided Types

This package includes definitions for:

| Type                        | Description                                      |
| --------------------------- | ------------------------------------------------ |
| `WebView`                   | The main `window.chrome.webview` interface       |
| `HostObjectsAsyncRoot`      | Container for async host object proxies          |
| `HostObjectsSyncRoot`       | Container for sync host object proxies           |
| `HostObjectAsyncProxy`      | Async host object proxy                          |
| `HostObjectSyncProxy`       | Sync host object proxy                           |
| `WebViewMessageEvent`       | Event for messages sent via `postMessage`        |
| `SharedBufferReceivedEvent` | Event triggered when shared buffers are received |

These types mirror the official WebView2 JavaScript API documentation.

## Example

```ts
window.chrome.webview.addEventListener("sharedbufferreceived", (event) => {
  const buffer = event.getBuffer();
  const view = new Uint8Array(buffer);

  console.log("Received shared buffer:", view);
});
```

## Package Information

- **Name:** `webview2-types`
- **Entry point:** `index.d.ts`
- **License:** MIT

## Development

Install dependencies:

```bash
npm install
```

Format code:

```bash
npm run prettier
```

Lint code:

```bash
npm run lint
```

## Contributing

Contributions are welcome! If you find missing APIs or incorrect typings, feel free to open a pull request or issue.

## References

- Microsoft WebView2 Documentation
  [https://learn.microsoft.com/en-us/microsoft-edge/webview2/](https://learn.microsoft.com/en-us/microsoft-edge/webview2/)

- WebView2 JavaScript API
  [https://learn.microsoft.com/en-us/microsoft-edge/webview2/reference/javascript/](https://learn.microsoft.com/en-us/microsoft-edge/webview2/reference/javascript/)
