(function () {

  var CFG = (window.WIKI_CONTENT && window.WIKI_CONTENT.game) || {};
  var GAME_VERSION = CFG.version || "Early Access 0.1.2b.19972";
  var PATCH_DATE = CFG.patchDate || "May 29, 2026";

  var DISCORD_URL = "https://discord.gg/Paralives";

  (function loadIconFont(){
    if(document.getElementById("ph-icons")) return;
    var l = document.createElement("link");
    l.id = "ph-icons"; l.rel = "stylesheet";
    l.href = "https://unpkg.com/@phosphor-icons/web@2.1.1/src/bold/style.css";
    document.head.appendChild(l);
  })();

  var ICON = {
    home: "ph-house-line",
    qa:   "ph-chats-circle",
    res:  "ph-toolbox",
    tips: "ph-lightbulb",
    mesh: "ph-chart-bar",
    test: "ph-flask",
    mods: "ph-puzzle-piece",
    about: "ph-book-open-text"
  };

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

  var NAV = (window.WIKI_CONTENT && window.WIKI_CONTENT.navigation && window.WIKI_CONTENT.navigation.length)
    ? window.WIKI_CONTENT.navigation
    : DEFAULT_NAV;

  function icon(name, cls) {
    return '<i class="' + (cls || "ic") + ' ph-bold ' + (name || "ph-circle") + '"></i>';
  }

  var here = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  if (here === "") here = "index.html";

  function navHTML() {
    var h = "";
    NAV.forEach(function (n) {
      if (n.group) h += '<div class="nav-label">' + n.group + "</div>";
      var active = n.href.toLowerCase() === here ? " active" : "";
      var iconName = ICON[n.icon] || ICON.about;
      h += '<a class="' + active.trim() + '" href="' + n.href + '">' + icon(iconName) + "<span>" + n.label + "</span></a>";
    });
    return h;
  }

  var markSvg = '<img src="assets/img/logo-dog.png" alt="" width="500" height="500">';

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

  window.WIKI = {
    escape: function (s) {
      return String(s == null ? "" : s)
        .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
    },

    rich: function (s) {
      var e = window.WIKI.escape(s);
      e = e.replace(/(https?:\/\/[^\s)]+)/g, function (u) {
        return '<a href="' + u + '" target="_blank" rel="noopener" class="exlink">' + u + "</a>";
      });
      return e.replace(/\n/g, "<br>");
    }
  };
})();
