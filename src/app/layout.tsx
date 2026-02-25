import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Webisse - Dijital Ajans",
  description:
    "Webisse ile markanıza özel, modern ve etkileyici dijital deneyimler.",
  metadataBase: new URL("https://webisse.com.tr"),
  icons: {
    icon: [
      { url: "/img/wicon.png", sizes: "any" },
    ],
    apple: "/img/wicon.png",
  },
  manifest: "/img/favicon/manifest.webmanifest",
  openGraph: {
    title: "Webisse - Dijital Ajans",
    description:
      "Webisse ile markanıza özel, modern ve etkileyici dijital deneyimler.",
    url: "https://webisse.com.tr",
    images: [
      {
        url: "/img/hero/01_hero-img.webp",
        width: 1200,
        height: 1200,
        alt: "Webisse",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF7F6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" dir="ltr" suppressHydrationWarning color-scheme="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <meta
          name="msapplication-navbutton-color"
          content="#161616"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link rel="stylesheet" href="/css/loaders/loader.min.css" />
        <link rel="stylesheet" href="/css/plugins.min.css" />
        <link rel="stylesheet" href="/css/main.min.css" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
        <Script src="/js/libs.min.js" strategy="beforeInteractive" />
        <script
          dangerouslySetInnerHTML={{
            __html: `localStorage.setItem("template.theme","light");document.documentElement.setAttribute("color-scheme","light");`,
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                var origDocQS = Document.prototype.querySelector;
                var origElQS = Element.prototype.querySelector;
                var origDocQSA = Document.prototype.querySelectorAll;
                var origElQSA = Element.prototype.querySelectorAll;
                var origGetId = Document.prototype.getElementById;
                
                var dummyStore = new Map();

                function createDummy(idOrSel) {
                  // Do NOT return dummies for internal Next.js or core operations
                  if (!idOrSel || typeof idOrSel !== 'string') return null;
                  if (idOrSel.includes('[data-nextjs') || idOrSel.includes('#__next') || idOrSel.startsWith('html') || idOrSel.startsWith('body')) {
                    return null;
                  }
                  
                  // Only return dummies for template-related selectors that we know often fail
                  var templateSelectors = ['.stack-', 'loading', 'loader', 'count', 'testimonials', 'swiper', 'slider', 'masonry', 'ukiyo', 'ukiya', '.mxd-', '.hero-', '.parallax-', '.btn-', '.reveal-', '.anim-', '.marquee-', '#typed'];
                  function isWhitelisted(sel) {
                    if (!sel || typeof sel !== 'string') return false;
                    return templateSelectors.some(function(s) { return sel.indexOf(s) !== -1; });
                  }

                  if (!isWhitelisted(idOrSel)) return null;

                  if (dummyStore.has(idOrSel)) return dummyStore.get(idOrSel);
                  
                  var dummy = document.createElement('div');
                  dummy.style.display = 'none';
                  dummy.__isDummy = true;
                  dummy.__selector = idOrSel;
                  dummy.nodeType = 1;
                  dummy.tagName = 'DIV';
                  
                  // REAL detached DOM element for fakeParent to satisfy strict checks (e.g. getComputedStyle)
                  var fakeParent = document.createElement('div');
                  fakeParent.style.display = 'none';
                  fakeParent.__isFakeParent = true;
                  
                  Object.defineProperty(dummy, 'parentNode', { get: function() { return fakeParent; } });
                  Object.defineProperty(dummy, 'parentElement', { get: function() { return fakeParent; } });
                  Object.defineProperty(dummy, 'ownerDocument', { get: function() { return document; } });

                  // Critical for scripts expecting these properties
                  if (!('offsetHeight' in dummy)) dummy.offsetHeight = 0;
                  if (!('offsetWidth' in dummy)) dummy.offsetWidth = 0;
                  if (!('textContent' in dummy)) dummy.textContent = "";
                  if (!('innerText' in dummy)) dummy.innerText = "";
                  
                  console.warn('Webisse: Patched missing template element:', idOrSel);
                  dummyStore.set(idOrSel, dummy);
                  return dummy;
                }

                // Patch getComputedStyle because libraries like Swiper call it on potential dummies or detached nodes
                var origGetComputedStyle = window.getComputedStyle;
                window.getComputedStyle = function(el, pseudo) {
                  if (!el || !(el instanceof Element)) {
                    // Return a mock CSSStyleDeclaration if it's not a real element
                    return {
                      getPropertyValue: function() { return ""; },
                      display: "none",
                      opacity: "0",
                      width: "0px",
                      height: "0px"
                    };
                  }
                  return origGetComputedStyle.call(window, el, pseudo);
                };

                Document.prototype.querySelector = function(sel) {
                  var result = origDocQS.call(this, sel);
                  if (result === null) return createDummy(sel);
                  return result;
                };

                Element.prototype.querySelector = function(sel) {
                  var result = origElQS.call(this, sel);
                  if (result === null) return createDummy(sel);
                  return result;
                };

                Document.prototype.getElementById = function(id) {
                  var result = origGetId.call(this, id);
                  if (result === null) return createDummy('#' + id);
                  return result;
                };

                // Handle querySelectorAll to prevent empty result crashes for specific critical selectors
                var criticalSelectors = ['.stack-item', '.stack-offset', '.loading-wrap', '.loading__item'];
                
                Document.prototype.querySelectorAll = function(sel) {
                  var result = origDocQSA.call(this, sel);
                  if (result.length === 0 && criticalSelectors.includes(sel)) {
                    var dummy = createDummy(sel);
                    if (!dummy) return result;
                    var arr = [dummy];
                    arr.item = function(i) { return this[i]; };
                    return arr;
                  }
                  return result;
                };

                Element.prototype.querySelectorAll = function(sel) {
                  var result = origElQSA.call(this, sel);
                  if (result.length === 0 && criticalSelectors.includes(sel)) {
                    var dummy = createDummy(sel);
                    if (!dummy) return result;
                    var arr = [dummy];
                    arr.item = function(i) { return this[i]; };
                    return arr;
                  }
                  return result;
                };

                // Patch Node operations to handle detached dummies
                var origInsertBefore = Node.prototype.insertBefore;
                var origRemoveChild = Node.prototype.removeChild;

                Node.prototype.insertBefore = function(newNode, refNode) {
                  if (refNode && refNode.__isDummy && refNode.parentNode !== this) {
                    console.warn('Webisse: Preventing insertBefore crash with dummy refNode:', refNode.__selector);
                    return this.appendChild(newNode);
                  }
                  try {
                    return origInsertBefore.call(this, newNode, refNode);
                  } catch (e) {
                    // console.error('Webisse: insertBefore failed', e);
                    return this.appendChild(newNode);
                  }
                };

                Node.prototype.removeChild = function(child) {
                  if (child && child.__isDummy && child.parentNode !== this) {
                    console.warn('Webisse: Preventing removeChild crash with dummy node:', child.__selector);
                    return child;
                  }
                  try {
                    return origRemoveChild.call(this, child);
                  } catch (e) {
                    // console.error('Webisse: removeChild failed', e);
                    return child;
                  }
                };
              })();
            `,
          }}
        />

        <Script src="/js/app.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
