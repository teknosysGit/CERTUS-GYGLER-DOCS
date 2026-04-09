// docs/assets/pdf-config.js
// ─────────────────────────────────────────────────────────────────────────────
// PRODUCT SWITCHER — add / remove entries in MANUAL_PRODUCTS to control the
// drop-down. Order here = order in the menu.
// ─────────────────────────────────────────────────────────────────────────────
//
// HOW PATHS WORK
// ──────────────
// Both  docPath  and  pdfPath  are written relative to MANUAL_SITE_ROOT
// (set above). The final URL is simply:
//
//   MANUAL_SITE_ROOT + docPath   e.g.  "/" + "certus-flex/"  →  /certus-flex/
//   MANUAL_SITE_ROOT + pdfPath   e.g.  "/" + "certus-flex/pdf/Manual.pdf"
//                                                            →  /certus-flex/pdf/Manual.pdf
//
//   MANUAL_SITE_ROOT    docPath           Resolves to
//   ──────────────────  ────────────────  ──────────────────────────────────
//   "/"                 "certus-flex/"    /certus-flex/
//   "/docs/"            "certus-flex/"    /docs/certus-flex/
//
// Rules:
//   • Always use a TRAILING SLASH on  docPath  so the browser loads index.html.
//   • NO leading slash needed on docPath / pdfPath — stripped automatically.
//   • The PDF filename must exactly match  output_path  in the product's
//     mkdocs-with-pdf plugin configuration.
//   • Paths are case-sensitive on Linux/macOS servers.
//
// Typical layout produced by the build-and-serve script:
//
//   site/
//   ├── index.html                  ← portal landing page
//   ├── certus-flex/
//   │   ├── index.html
//   │   ├── pdf/
//   │   │   └── User_Manual_CERTUS_FLEX_EN.pdf
//   │   └── … (all other Flex pages)
//   └── certus-rivo/
//       ├── index.html
//       ├── pdf/
//       │   └── User_Manual_CERTUS_RIVO_EN.pdf
//       └── … (all other Rivo pages)
//
// ─────────────────────────────────────────────────────────────────────────────
window.MANUAL_PRODUCTS = [
  {
    // Text shown in the drop-down menu and in the trigger button when selected
    label: "Certus Flex",

    // Inline SVG icon shown to the left of the label in every menu item and
    // in the trigger button when this product is active.
    // Replace the <path> data with any 24×24 SVG icon you prefer.
    // Set to "" (empty string) to show no icon for this product.
    icon: `<svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
            fill="none" stroke="currentColor" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,

    // The folder prefix used to detect which product is active from the URL.
    // Must be the top-level product folder — matches ANY page inside it.
    matchPath: "certus-flex/",

    // Navigation target — the page opened when this product is selected.
    // Leading slash is stripped automatically.
    docPath: "/certus-flex/common_content/introduction/",

    // Path to the PDF file. Must match output_path in mkdocs-certus-flex.yml.
    pdfPath: "certus-flex/pdf/User_Manual_CERTUS_FLEX_EN.pdf",
  },
  {
    label: "Certus Rivo",

    // Replace the <path> data with any 24×24 SVG icon you prefer.
    // Set to "" (empty string) to show no icon for this product.
    icon: `<svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 7.5l-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
            fill="none" stroke="currentColor" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,

    // The folder prefix used to detect which product is active from the URL.
    matchPath: "certus-rivo/",

    // Navigation target — the page opened when this product is selected.
    docPath: "/certus-rivo/common_content/introduction/",

    pdfPath: "certus-rivo/pdf/User_Manual_CERTUS_RIVO_EN.pdf",
  },
  // ── Add more products here ──────────────────────────────────────────────────
  // {
  //   label: "Certus Pro",
  //   icon: `<svg viewBox="0 0 24 24" aria-hidden="true">
  //     <path d="..." fill="none" stroke="currentColor" stroke-width="1.5"
  //           stroke-linecap="round" stroke-linejoin="round"/>
  //   </svg>`,
  //   docPath: "/certus-pro",
  //   pdfPath: "certus-pro/pdf/User_Manual_CERTUS_PRO_EN.pdf",
  // },
];

// ─────────────────────────────────────────────────────────────────────────────
// SITE ROOT  ← set this first; everything else depends on it
// ─────────────────────────────────────────────────────────────────────────────
//
// The absolute path to the folder that contains all product sub-folders —
// i.e. the "site/" directory produced by the build script, as seen in the
// browser address bar. This is NOT a file-system path.
//
// WHY THIS IS NEEDED
// ──────────────────
// When a user is already inside a product (e.g. certus-flex/setup/), the
// browser's current URL contains the product folder. Without an explicit site
// root the script could mistakenly prepend that folder when navigating to
// another product, producing paths like:
//
//   certus-flex/certus-rivo/          ← WRONG  (MANUAL_SITE_ROOT not set)
//   /certus-rivo/                     ← CORRECT (MANUAL_SITE_ROOT = "/")
//
// HOW TO SET IT
// ─────────────
//   Use the path prefix that appears in the browser address bar BEFORE the
//   product folder name.
//
//   Address bar while browsing         Set MANUAL_SITE_ROOT to
//   ─────────────────────────────────  ──────────────────────
//   http://localhost:8000/certus-flex/ "/"
//   https://example.com/certus-flex/  "/"
//   https://example.com/docs/certus-flex/  "/docs/"
//
//   Always include a TRAILING SLASH.
//   Always include a LEADING SLASH (absolute path).
//   Do NOT use relative paths such as "../".
//
window.MANUAL_SITE_ROOT = "/";

// ─────────────────────────────────────────────────────────────────────────────
// DROPDOWN UI TEXT
// ─────────────────────────────────────────────────────────────────────────────

// Placeholder shown when no product matches the current URL
window.MANUAL_PRODUCT_PLACEHOLDER = "Select product…";

// Tooltip on the dropdown widget
window.MANUAL_PRODUCT_TOOLTIP = "Switch product documentation";

// ─────────────────────────────────────────────────────────────────────────────
// PDF BUTTON
// ─────────────────────────────────────────────────────────────────────────────

// Label on the download button
window.MANUAL_PDF_LABEL = "Download PDF";

// Tooltip for the button (also used as aria-label)
window.MANUAL_PDF_TOOLTIP = "Download the User Manual as PDF";

// Inline SVG icon (fully configurable here)
window.MANUAL_PDF_ICON = `
<svg viewBox="0 0 24 24" aria-hidden="true">
  <path d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M7.5 10.5l4.5 4.5 4.5-4.5M12 3v12"
        fill="none" stroke="currentColor" stroke-width="1.5"
        stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

// Inline SVG chevron shown inside the dropdown trigger (fully replaceable)
window.MANUAL_DROPDOWN_CHEVRON = `
<svg viewBox="0 0 24 24" aria-hidden="true">
  <path d="M6 9l6 6 6-6"
        fill="none" stroke="currentColor" stroke-width="1.5"
        stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

// ─────────────────────────────────────────────────────────────────────────────
// ERROR DIALOG  (shown when the PDF file cannot be found)
// ─────────────────────────────────────────────────────────────────────────────
window.MANUAL_PDF_ERROR = {
  title: "PDF not available",
  body:
    "The user manual PDF could not be found in <code>/pdf</code>. " +
    "Please ensure the <code>with-pdf</code> plugin generated it and that " +
    "<code>output_path</code> matches the configured file name.",
  okLabel: "OK"
};