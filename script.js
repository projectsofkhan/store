/* ============================================================ */
/* Store — Controller                                            */
/* Edit the APPS array below to add real projects.               */
/* ============================================================ */

// ============================================================
// DATA
// ============================================================
// Each item needs:
//   name     → display name
//   desc     → short description
//   url      → link to open
//   category → 'apps' | 'websites' | 'webs-wb'
//   icon     → optional: a Font Awesome class ("fas fa-rocket")
//              OR an image URL ("https://.../logo.png")
//              If omitted, first letter of name is used.
//   featured → optional: true to highlight
//   download → optional: URL to APK / download page
// ============================================================

const APPS = [
    // ── Apps & PWAs ──
    {
        name: "RelayTalk",
        desc: "Fast, private messaging & calls. Chat, share images and voice notes, make calls — no ads, no noise, no tracking.",
        url: "https://relaytalk.vercel.app",
        download: "https://relaytalk.vercel.app/assets/apk/",
        category: "apps",
        icon: "https://i.ibb.co/nJ0Wnqs/relay.jpg",
        featured: true
    },

    // ── Websites ──

    // ── Websites built with builders (WB) ──

    // ── Add more above this line ──
];

// ============================================================
// STATE
// ============================================================
let currentTab = "all";

// ============================================================
// SVG ICONS (reused)
// ============================================================
const SVG = {
    externalLink: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="9 7 17 7 17 15"></polyline></svg>`,
    download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`,
    badgeApp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2" width="12" height="20" rx="3"></rect><line x1="12" y1="18" x2="12" y2="18.01"></line></svg>`,
    badgeWebsite: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    badgeWB: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v3"></path><path d="M12 18v3"></path><path d="M3 12h3"></path><path d="M18 12h3"></path><circle cx="12" cy="12" r="5"></circle></svg>`
};

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

function getBadgeFor(category) {
    switch (category) {
        case "apps":
            return { cls: "badge-apps", svg: SVG.badgeApp, label: "App" };
        case "websites":
            return { cls: "badge-websites", svg: SVG.badgeWebsite, label: "Website" };
        case "webs-wb":
            return { cls: "badge-wb", svg: SVG.badgeWB, label: "Website · WB" };
        default:
            return { cls: "badge-apps", svg: SVG.badgeApp, label: "Item" };
    }
}

function renderIcon(icon, name) {
    if (!icon) {
        const initial = (name || "?").trim().charAt(0).toUpperCase();
        return `<span class="app-icon-initial">${escapeHtml(initial)}</span>`;
    }
    if (/^https?:\/\//i.test(icon) || icon.startsWith("/") || icon.startsWith("data:")) {
        return `<img src="${escapeAttr(icon)}" alt="${escapeAttr(name)}" loading="lazy" onerror="this.style.display='none'">`;
    }
    return `<i class="${escapeAttr(icon)}"></i>`;
}

// ============================================================
// CARD
// ============================================================
function buildCard(item) {
    const badge = getBadgeFor(item.category);
    const featured = item.featured === true ? "featured" : "";

    const downloadBtn = item.download
        ? `<a class="app-btn app-btn-download" href="${escapeAttr(item.download)}" target="_blank" rel="noopener">
               <span class="app-btn-icon">${SVG.download}</span>
               <span>Download</span>
           </a>`
        : "";

    return `
        <article class="app-card ${featured}" data-category="${escapeAttr(item.category)}">
            <div class="app-card-top">
                <div class="app-icon">
                    ${renderIcon(item.icon, item.name)}
                </div>
                <span class="app-badge ${badge.cls}">
                    ${badge.svg}
                    ${badge.label}
                </span>
            </div>
            <h3 class="app-name">${escapeHtml(item.name)}</h3>
            <p class="app-desc">${escapeHtml(item.desc)}</p>
            <div class="app-actions">
                <a class="app-btn app-btn-visit" href="${escapeAttr(item.url)}" target="_blank" rel="noopener">
                    <span class="app-btn-icon">${SVG.externalLink}</span>
                    <span>Visit</span>
                </a>
                ${downloadBtn}
            </div>
        </article>
    `;
}

// ============================================================
// RENDER
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

    grid.innerHTML = items.map(buildCard).join("");

    if (animate) {
        grid.classList.remove("entering");
        void grid.offsetWidth;
        grid.classList.add("entering");
        setTimeout(() => grid.classList.remove("entering"), 1100);
    }
}

function filterByTab(tab) {
    if (tab === "all") return APPS;
    return APPS.filter((item) => item.category === tab);
}

// ============================================================
// TABS
// ============================================================
function switchTab(tab, scroll) {
    const grid = document.getElementById("storeGrid");
    if (!grid) return;

    document.querySelectorAll(".tab").forEach((btn) => {
        const isActive = btn.dataset.tab === tab;
        btn.classList.toggle("active", isActive);
        btn.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    if (tab === currentTab) {
        if (scroll) {
            document.querySelector(".tabs")?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        return;
    }

    currentTab = tab;

    grid.classList.add("switching");
    setTimeout(() => {
        grid.classList.remove("switching");
        renderGrid(filterByTab(tab), true);
        if (scroll) {
            document.querySelector(".tabs")?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, 240);
}

// ============================================================
// DRAWER
// ============================================================
function openDrawer() {
    const drawer = document.getElementById("drawer");
    const backdrop = document.getElementById("drawerBackdrop");
    const menuBtn = document.getElementById("menuBtn");

    drawer.classList.add("open");
    backdrop.classList.add("visible");
    menuBtn.classList.add("open");
    menuBtn.setAttribute("aria-expanded", "true");
    drawer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeDrawer() {
    const drawer = document.getElementById("drawer");
    const backdrop = document.getElementById("drawerBackdrop");
    const menuBtn = document.getElementById("menuBtn");

    drawer.classList.remove("open");
    backdrop.classList.remove("visible");
    menuBtn.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    drawer.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

// ============================================================
// SCROLL TOP FAB
// ============================================================
function initScrollTopFab() {
    const fab = document.getElementById("scrollTop");
    if (!fab) return;

    const toggle = () => {
        if (window.scrollY > 400) fab.classList.add("visible");
        else fab.classList.remove("visible");
    };

    window.addEventListener("scroll", toggle, { passive: true });
    toggle();

    fab.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// ============================================================
// NAVBAR SHADOW ON SCROLL
// ============================================================
function initNavbarScroll() {
    const nav = document.getElementById("navbar");
    if (!nav) return;

    const toggle = () => {
        if (window.scrollY > 12) nav.classList.add("scrolled");
        else nav.classList.remove("scrolled");
    };

    window.addEventListener("scroll", toggle, { passive: true });
    toggle();
}

// ============================================================
// KEYBOARD
// ============================================================
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDrawer();
});

// ============================================================
// INIT
// ============================================================
function init() {
    document.querySelectorAll(".tab").forEach((btn) => {
        btn.addEventListener("click", () => switchTab(btn.dataset.tab, false));
    });

    const menuBtn = document.getElementById("menuBtn");
    if (menuBtn) menuBtn.addEventListener("click", () => {
        const isOpen = document.getElementById("drawer").classList.contains("open");
        isOpen ? closeDrawer() : openDrawer();
    });

    const closeBtn = document.getElementById("drawerClose");
    if (closeBtn) closeBtn.addEventListener("click", closeDrawer);

    const backdrop = document.getElementById("drawerBackdrop");
    if (backdrop) backdrop.addEventListener("click", closeDrawer);

    document.querySelectorAll(".drawer-link").forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const tabTarget = link.dataset.tabTarget;
            const scrollTarget = link.dataset.scroll;

            closeDrawer();

            if (scrollTarget === "top") {
                setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 200);
                return;
            }

            if (tabTarget) {
                setTimeout(() => switchTab(tabTarget, true), 200);
            }
        });
    });

    renderGrid(filterByTab(currentTab), false);
    initScrollTopFab();
    initNavbarScroll();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}