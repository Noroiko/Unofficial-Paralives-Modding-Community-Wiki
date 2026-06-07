/* ============================================================================
   SHARED NAVIGATION  (the left sidebar + the mobile top bar)
   ----------------------------------------------------------------------------
   This file builds the menu that appears on every page, so the navigation
   always looks the same. You normally do NOT need to edit it.

   - The GAME VERSION shown in the sidebar comes from assets/content.js
     (you edit it there, not here).
   - If you ever rename a page or change the Discord link, you can do it in
     the NAV list and the DISCORD_URL line just below.
   ============================================================================ */
(function () {
  // The version shown in the sidebar comes from assets/content.js when loaded.
  // These two lines are only a fallback in case that file is ever missing.
  var CFG = (window.WIKI_CONTENT && window.WIKI_CONTENT.game) || {};
  var GAME_VERSION = CFG.version || "Early Access 0.1.2b.19972";
  var PATCH_DATE = CFG.patchDate || "May 29, 2026";

  // The community Discord invite link, used in the sidebar.
  var DISCORD_URL = "https://discord.gg/Paralives";

  var ICON = {
    home: '<path d="M3 11.5 12 4l9 7.5"/><path d="M5 10v9h14v-9"/><path d="M10 19v-5h4v5"/>',
    qa: '<path d="M21 15a2 2 0 0 1-2 2H8l-4 4V5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2z"/><path d="M9.5 9a2.5 2.5 0 1 1 3.6 2.2c-.7.4-1.1.9-1.1 1.8"/><path d="M12 16h.01"/>',
    res: '<path d="M4 5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="M13 3v5h5"/><path d="M9 13h6M9 17h6"/>',
    mesh: '<path d="M12 2 3 7v10l9 5 9-5V7z"/><path d="M3 7l9 5 9-5"/><path d="M12 12v10"/>',
    tips: '<path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-4 10.5c.8.8 1 1.3 1 2.5h6c0-1.2.2-1.7 1-2.5A6 6 0 0 0 12 3z"/>',
    test: '<path d="M9 3h6"/><path d="M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3"/><path d="M8 14h8"/>',
    mods: '<path d="M12 2 2 7l10 5 10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>',
    about: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><path d="M12 8h.01"/>'
  };

  // The sidebar menu. The maintainer can control this from assets/content.js
  // (the "navigation" list). If that is missing, this built-in list is used.
  // "icon" must be one of the names in the ICON list just above:
  //   home, qa, res, tips, mesh, test, mods, about
  // "group" is the small grey heading shown ABOVE an item (optional).
  var DEFAULT_NAV = [
    { href: "index.html", label: "Home", icon: "home", group: "Wiki" },
    { href: "questions.html", label: "Questions & Answers", icon: "qa" },
    { href: "resources.html", label: "Resources & Tools", icon: "res" },
    { href: "tips.html", label: "Info & Tips", icon: "tips" },
    { href: "mods.html", label: "Mods", icon: "mods" },
    { href: "mesh-stats.html", label: "Mesh Statistics", icon: "mesh", group: "Reference" },
    { href: "testing.html", label: "Testing & Findings", icon: "test" },
    { href: "about.html", label: "About & Credits", icon: "about", group: "More" }
  ];
  // Use the list from content.js if the maintainer provided one, else the default.
  var NAV = (window.WIKI_CONTENT && window.WIKI_CONTENT.navigation && window.WIKI_CONTENT.navigation.length)
    ? window.WIKI_CONTENT.navigation
    : DEFAULT_NAV;

  function svg(p, cls) {
    return '<svg class="' + (cls || "ic") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">' + p + "</svg>";
  }

  var here = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  if (here === "") here = "index.html";

  function navHTML() {
    var h = "";
    NAV.forEach(function (n) {
      if (n.group) h += '<div class="nav-label">' + n.group + "</div>";
      var active = n.href.toLowerCase() === here ? " active" : "";
      var iconPath = ICON[n.icon] || ICON.about;
      h += '<a class="' + active.trim() + '" href="' + n.href + '">' + svg(iconPath) + "<span>" + n.label + "</span></a>";
    });
    return h;
  }

  var markSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 4l9 6.5"/><path d="M5 9.5V19h14V9.5"/><path d="M9.5 19v-5h5v5"/></svg>';

  var sidebar = document.createElement("aside");
  sidebar.className = "sidebar";
  sidebar.innerHTML =
    '<a class="brand" href="index.html"><span class="mark">' + markSvg + '</span>' +
    '<span class="btxt"><b>Paralives Modding</b><span>Community Wiki</span></span></a>' +
    '<nav class="nav">' + navHTML() + "</nav>" +
    '<div class="side-foot">' +
      '<div class="version-card">' +
        '<div class="vlabel">Current Game Version</div>' +
        '<div class="vval">' + GAME_VERSION + "</div>" +
        '<div class="vpatch">Latest patch: <b>' + PATCH_DATE + "</b></div>" +
      "</div>" +
      '<div class="creds">Unofficial fan project · run by the modders of the ' +
      '<a href="' + DISCORD_URL + '" target="_blank" rel="noopener">Paralives Discord</a>.</div>' +
    "</div>";

  var topbar = document.createElement("div");
  topbar.className = "topbar";
  topbar.innerHTML =
    '<span class="mark">' + markSvg + "</span>" +
    "<b>Paralives Modding Wiki</b>" +
    '<button class="nav-toggle" aria-label="Menu"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>';

  var scrim = document.createElement("div");
  scrim.className = "scrim";

  document.addEventListener("DOMContentLoaded", function () {
    var layout = document.querySelector(".layout");
    var main = document.querySelector(".content");
    document.body.insertBefore(topbar, document.body.firstChild);
    layout.insertBefore(sidebar, main);
    document.body.appendChild(scrim);

    topbar.querySelector(".nav-toggle").addEventListener("click", function () {
      document.body.classList.toggle("nav-open");
    });
    scrim.addEventListener("click", function () { document.body.classList.remove("nav-open"); });
    sidebar.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { document.body.classList.remove("nav-open"); });
    });
  });

  // Small helper exposed for pages
  window.WIKI = {
    escape: function (s) {
      return String(s == null ? "" : s)
        .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
    },
    // turn plain-text newlines + bare URLs into HTML
    rich: function (s) {
      var e = window.WIKI.escape(s);
      e = e.replace(/(https?:\/\/[^\s)]+)/g, function (u) {
        return '<a href="' + u + '" target="_blank" rel="noopener" class="exlink">' + u + "</a>";
      });
      return e.replace(/\n/g, "<br>");
    }
  };
})();
