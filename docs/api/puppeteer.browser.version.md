---
sidebar_label: Browser.version
---

# Browser.version() method

A string representing the browser name and version.

#### Signature:

```typescript
class Browser {
  version(): Promise<string>;
}
```

**Returns:**

Promise&lt;string&gt;

## Remarks

For headless browser, this is similar to `HeadlessChrome/61.0.3153.0`. For non-headless or new-headless, this is similar to `Chrome/61.0.3153.0`. For Firefox, it is similar to `Firefox/116.0a1`.

The format of browser.version() might change with future releases of browsers.
