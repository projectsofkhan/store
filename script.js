/* ============================================================ */
/* Zeeshan's Store — Controller                                  */
/* Edit the APPS array below to add real projects.               */
/* ============================================================ */

// ============================================================
// DATA — Add your apps, PWAs, websites here
// ============================================================
// Each item needs:
//   name     → display name
//   desc     → short description
//   url      → link (opens in same tab by default)
//   category → 'apps' | 'websites' | 'webs-wb'
//   icon     → optional Font Awesome class OR image URL
//              - If you pass an image URL, it will be used as <img>
//              - If you pass a FA class like "fas fa-rocket", it will be used as icon
//              - If you pass nothing, the first letter of the name is shown
//   featured → optional; true to highlight with a gold border
//
// Example:
//   { name: "RelayTalk", desc: "...", url: "https://...", category: "apps", icon: "fas fa-comments", featured: true }
// ============================================================

const APPS = [
    // ── Apps & PWAs ──
    {
        name: "RelayTalk",
        desc: "Fast, private messaging & calls — no ads, no noise. Chat, share images and voice notes, make calls, all in one place.",
        url: "https://relaytalk.vercel.app",
        category: "apps",
        icon: "fas fa-comments",
        featured: true
    },

    // ── Websites ──

    // ── Websites built with builders ──

    // ── Add more above this line ──
];

// ============================================================
// STATE
// ============================================================
let currentTab = "all";

// ============================================================
// ICON RENDERING
// ============================================================
function renderIcon(icon, name) {
    if (!icon) {
        const initial = (name || "?").trim().charAt(0).toUpperCase();
        return `<span class="app-icon-initial">${escapeHtml(initial)}</span>`;
    }

    // If it looks like a URL → render as image
    if (/^https?:\/\//i.test(icon) || icon.startsWith("/") || icon.startsWith("data:")) {
        return `<img src="${escapeAttr(icon)}" alt="${escapeAttr(name)}" loading="lazy" onerror="this.style.display='none'">`;
    }

    // Otherwise assume it's a Font Awesome class (e.g. "fas fa-rocket")
    return `<i class="${escapeAttr(icon)}"></i>`;
}

// ============================================================
// HELPERS
// ============================================================
function escapeHtml(str) {
    if (str === null || str === undefined) return "";
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function escapeAttr(str) { return escapeHtml(str); }

function getDomain(url) {
    try {
        const u = new URL(url);
        return u.hostname.replace(/^www\./, "");
    } catch {
        return url.replace(/^https?:\/\//, "").split("/")[0];
    }
}

function getBadgeFor(category) {
    switch (category) {
        case "apps":
            return { cls: "badge-apps", icon: "fa-mobile-screen", label: "App" };
        case "websites":
            return { cls: "badge-websites", icon: "fa-code", label: "Website" };
        case "webs-wb":
            return { cls: "badge-wb", icon: "fa-wand-magic-sparkles", label: "Website · WB" };
        default:
            return { cls: "badge-apps", icon: "fa-cube", label: "Item" };
    }
}

// ============================================================
// CARD RENDERING
// ============================================================
function buildCard(item, index) {
    const badge = getBadgeFor(item.category);
    const domain = getDomain(item.url || "");
    const featured = item.featured === true ? "featured" : "";

    return `
        <article class="app-card ${featured}" data-category="${escapeAttr(item.category)}" onclick="openItem('${escapeAttr(item.url)}')" tabindex="0" role="button" aria-label="Open ${escapeAttr(item.name)}">
            <div class="app-card-top">
                <div class="app-icon">
                    ${renderIcon(item.icon, item.name)}
                </div>
                <span class="app-badge ${badge.cls}">
                    <i class="fas ${badge.icon}"></i>
                    ${badge.label}
                </span>
            </div>
            <h3 class="app-name">${escapeHtml(item.name)}</h3>
            <p class="app-desc">${escapeHtml(item.desc)}</p>
            <div class="app-card-footer">
                <span class="app-url">${escapeHtml(domain)}</span>
                <span class="app-arrow">
                    <i class="fas fa-arrow-right"></i>
                </span>
            </div>
        </article>
    `;
}

// ============================================================
// RENDER GRID
// ============================================================
function renderGrid(items, animate) {
    const grid = document.getElementById("storeGrid");
    const empty = document.getElementById("storeEmpty");
    if (!grid) return;

    if (!items || items.length === 0) {
        grid.innerHTML = "";
        grid.style.display = "none";
        if (empty) empty.style.display = "flex";
        return;
    }

    grid.style.display = "";
    if (empty) empty.style.display = "none";

    grid.innerHTML = items.map((item, i) => buildCard(item, i)).join("");

    if (animate) {
        grid.classList.remove("entering");
        // Force reflow to restart animation
        void grid.offsetWidth;
        grid.classList.add("entering");
        setTimeout(() => grid.classList.remove("entering"), 1000);
    }
}

// ============================================================
// FILTER BY TAB
// ============================================================
function filterByTab(tab) {
    if (tab === "all") return APPS;
    return APPS.filter((item) => item.category === tab);
}

// ============================================================
// TAB SWITCHING — smooth crossfade
// ============================================================
function switchTab(tab) {
    if (tab === currentTab) return;
    currentTab = tab;

    // Update button states
    document.querySelectorAll(".store-tab").forEach((btn) => {
        const isActive = btn.dataset.tab === tab;
        btn.classList.toggle("active", isActive);
        btn.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    const grid = document.getElementById("storeGrid");
    if (!grid) return;

    // Fade-out, then swap, then fade-in
    grid.classList.add("switching");

    setTimeout(() => {
        grid.classList.remove("switching");
        renderGrid(filterByTab(tab), true);
    }, 220);
}

// ============================================================
// OPEN ITEM
// ============================================================
window.openItem = function (url) {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
};

// ============================================================
// SCROLL TO TOP
// ============================================================
window.scrollToTop = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// ============================================================
// MOUSE-TRACKING GLOW on cards
// ============================================================
function attachCardGlow() {
    document.addEventListener("mousemove", (e) => {
        const card = e.target.closest(".app-card");
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty("--mouse-x", `${x}%`);
        card.style.setProperty("--mouse-y", `${y}%`);
    }, { passive: true });
}

// ============================================================
// KEYBOARD SUPPORT
// ============================================================
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
        const focused = document.activeElement;
        if (focused && focused.classList.contains("app-card")) {
            e.preventDefault();
            focused.click();
        }
    }
});

// ============================================================
// INIT
// ============================================================
function init() {
    // Bind tabs
    document.querySelectorAll(".store-tab").forEach((btn) => {
        btn.addEventListener("click", () => {
            switchTab(btn.dataset.tab);
        });
    });

    // First render — no animation class, cards animate individually via CSS
    renderGrid(filterByTab(currentTab), false);

    // Card glow follows mouse
    attachCardGlow();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}