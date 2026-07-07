/**
 * main.js
 * ---------------------------------------------------------------------------
 * Vanilla JavaScript only — no build step, no dependencies. This file is
 * loaded with `defer` on every page (see the <script> tag at the bottom of
 * each HTML file), so it runs after the HTML has parsed but before the
 * "load" event, without blocking rendering.
 *
 * Everything in here is a progressive enhancement: if JavaScript fails to
 * load for any reason, the site is still fully readable and every link
 * still works. The only thing that changes is the mobile nav won't open
 * (a graceful, non-breaking failure).
 * ---------------------------------------------------------------------------
 */

(function () {
  "use strict";

  /**
   * Mobile navigation toggle.
   * The header button (#nav-toggle) controls visibility of the link list
   * (#nav-links) by flipping a data attribute on <body>, which layout.css
   * uses to show/hide the panel. State is also mirrored on
   * aria-expanded so screen readers announce the open/closed state.
   */
  function initMobileNav() {
    var toggleButton = document.getElementById("nav-toggle");
    var navLinks = document.getElementById("nav-links");
    var body = document.body;

    if (!toggleButton || !navLinks) {
      return; // Nothing to wire up on this page — fail silently.
    }

    function closeMenu() {
      body.setAttribute("data-nav-open", "false");
      toggleButton.setAttribute("aria-expanded", "false");
    }

    function openMenu() {
      body.setAttribute("data-nav-open", "true");
      toggleButton.setAttribute("aria-expanded", "true");
    }

    function isOpen() {
      return body.getAttribute("data-nav-open") === "true";
    }

    toggleButton.addEventListener("click", function () {
      if (isOpen()) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close the menu after a nav link is clicked, so navigating on mobile
    // doesn't leave the panel open underneath the new page.
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    // Close on Escape for keyboard users.
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && isOpen()) {
        closeMenu();
        toggleButton.focus();
      }
    });

    // If the viewport is resized past the mobile breakpoint while the
    // menu is open, reset state so it doesn't get stuck open on desktop.
    var mobileBreakpoint = window.matchMedia("(min-width: 720px)");
    mobileBreakpoint.addEventListener("change", function (event) {
      if (event.matches) {
        closeMenu();
      }
    });
  }

  /**
   * Keeps the copyright year in the footer correct without needing a
   * manual edit every January. Falls back to nothing (the year just
   * won't render) if JS is unavailable — the surrounding text in the
   * HTML still reads correctly either way.
   */
  function initFooterYear() {
    var yearEl = document.getElementById("current-year");
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    initMobileNav();
    initFooterYear();
  });
})();
