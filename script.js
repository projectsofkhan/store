/* ============================================================ */
/* Store — Controller                                            */
/* ============================================================ */

// ============================================================
// DATA
// ============================================================
// Fields:
//   name         → display name
//   desc         → short description
//   url          → link to open
//   category     → 'apps' | 'pwas' | 'websites' | 'builders'
//   builder      → (only for builders) 'wix' | 'jimdo' | 'weebly' | 'blogspot' | 'others'
//   icon         → (only for apps & pwas) image URL, or omit for fallback favicon
//   featured     → true to appear in Featured tab
//   download     → optional APK / download page URL (mostly for apps)
//
// Websites and Builders DO NOT receive icons.
// ============================================================

const APPS = [
    // ══════════════════════════════════════════════════════════
    // APPS (installable APKs)
    // ══════════════════════════════════════════════════════════
    {
        name: "RelayTalk",
        desc: "Fast, private messaging & calls. Chat, share images and voice notes, make calls — no ads, no noise, no tracking.",
        url: "https://relaytalk.vercel.app",
        download: "https://relaytalk.vercel.app/assets/apk/",
        category: "apps",
        icon: "https://relaytalk.vercel.app/favicon.ico",
        featured: true
    },

    // ══════════════════════════════════════════════════════════
    // PWAs (installable in browser)
    // ══════════════════════════════════════════════════════════
    {
        name: "Blitzracer",
        desc: "A high-speed car racing game built as a PWA. Smooth controls, fast action, playable right in your browser.",
        url: "https://blitzracer.vercel.app",
        category: "pwas",
        icon: "https://blitzracer.vercel.app/favicon.ico",
        featured: false
    },
    {
        name: "ZeeAI TTS",
        desc: "Text-to-speech powered by AI. Type anything and hear it spoken in natural voices — installable as a PWA.",
        url: "https://projectsofkhan.github.io/zeeAi",
        category: "pwas",
        icon: "https://projectsofkhan.github.io/zeeAi/zee512.png",
        featured: true
    },
    {
        name: "3 Player Carrom",
        desc: "Classic carrom board game for three players. Play with friends online, right from your browser.",
        url: "https://carrom3p.vercel.app",
        category: "pwas",
        icon: "https://carrom3p.vercel.app/favicon.ico",
        featured: false
    },

    // ══════════════════════════════════════════════════════════
    // WEBSITES (hand-coded, Vercel / GitHub.io)
    // ══════════════════════════════════════════════════════════
    {
        name: "Zeeshan 40u Portfolio",
        desc: "Personal portfolio showcasing projects, skills, and contact — the home base for everything I build.",
        url: "https://zeeshan40u.vercel.app",
        category: "websites",
        featured: true
    },
    {
        name: "TrailStory",
        desc: "A narrative-driven game site with story chapters, choices, and an immersive reading-and-playing experience.",
        url: "https://projectsofkhan.github.io/Trail/",
        category: "websites",
        featured: false
    },

    // ══════════════════════════════════════════════════════════
    // WEBSITE BUILDERS — Sub: Wix
    // ══════════════════════════════════════════════════════════
    {
        name: "ChatWithZ Groups",
        desc: "Old Wix site built for personal chat groups and community hangouts.",
        url: "https://chatwithz.wixsite.com/groups",
        category: "builders",
        builder: "wix",
        featured: false
    },
    {
        name: "ChatWithZ Chats",
        desc: "Companion Wix site with chat rooms — personal-use project from earlier days.",
        url: "https://chatwithz.wixsite.com/chats",
        category: "builders",
        builder: "wix",
        featured: false
    },
    {
        name: "RDJ Star",
        desc: "A Wix site made as a game hub to play with friends and brothers.",
        url: "https://rdjstar.wixsite.com/rdj1",
        category: "builders",
        builder: "wix",
        featured: false
    },

    // ══════════════════════════════════════════════════════════
    // WEBSITE BUILDERS — Sub: Jimdo
    // ══════════════════════════════════════════════════════════
    {
        name: "Zeeshan 40u",
        desc: "Personal Jimdo space with listings and everything I've been working on.",
        url: "https://zeeshan40u.jimdofree.com/",
        category: "builders",
        builder: "jimdo",
        featured: false
    },
    {
        name: "Class 10th Notes",
        desc: "Study notes site for Class 10th students — clean, organized, and free.",
        url: "https://class10th.jimdofree.com/",
        category: "builders",
        builder: "jimdo",
        featured: false
    },
    {
        name: "JavaScript Notes",
        desc: "Curated JS notes site — a quick reference for students learning JavaScript.",
        url: "https://jsbykhan.jimdofree.com/",
        category: "builders",
        builder: "jimdo",
        featured: false
    },
    {
        name: "Python Projects",
        desc: "Collection of Python projects and code snippets, hosted for easy sharing.",
        url: "https://python40u.jimdofree.com/",
        category: "builders",
        builder: "jimdo",
        featured: false
    },
    {
        name: "CSS Notes",
        desc: "CSS notes site — everything from selectors to flexbox and grid, in one place.",
        url: "https://cssbykhan.jimdofree.com/",
        category: "builders",
        builder: "jimdo",
        featured: false
    },
    {
        name: "Class 9th Notes",
        desc: "Study notes for Class 9th students, organized by subject.",
        url: "https://zeeshank.jimdofree.com/",
        category: "builders",
        builder: "jimdo",
        featured: false
    },
    {
        name: "Site Updates",
        desc: "News and updates page for the Class 9th notes site.",
        url: "https://siteupdates.jimdofree.com/news/",
        category: "builders",
        builder: "jimdo",
        featured: false
    },
    {
        name: "HTML Notes",
        desc: "HTML notes site — structured notes for anyone starting with web development.",
        url: "https://htmlbykhan.jimdofree.com/",
        category: "builders",
        builder: "jimdo",
        featured: false
    },

    // ══════════════════════════════════════════════════════════
    // WEBSITE BUILDERS — Sub: Weebly
    // ══════════════════════════════════════════════════════════
    // (add later with builder: "weebly")

    // ══════════════════════════════════════════════════════════
    // WEBSITE BUILDERS — Sub: Blogspot
    // ══════════════════════════════════════════════════════════
    // (add later with builder: "blogspot")

    // ══════════════════════════════════════════════════════════
    // WEBSITE BUILDERS — Sub: Others
    // ══════════════════════════════════════════════════════════
    // (add later with builder: "others")

    // ── Add more above this line ──
];

// ============================================================
// BUILDER SUBCATEGORY ORDER + LABELS
// ============================================================
const BUILDER_SUBCATEGORIES = [
    { id: "wix",      label: "Wix" },
    { id: "jimdo",    label: "Jimdo" },
    { id: "weebly",   label: "Weebly" },
    { id: "blogspot", label: "Blogspot" },
    { id: "others",   label: "Others" }
];

const BUILDER_LABELS = {
    wix: "Wix",
    jimdo: "Jimdo",
    weebly: "Weebly",
    blogspot: "Blogspot",
    others: "Other"
};

// ============================================================
// STATE
// ============================================================
let currentTab = "featured";

// ============================================================
// SVG ICONS
// ============================================================
const SVG = {
    externalLink: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="9 7 17 7 17 15"></polyline></svg>`,
    download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`,
    badgeApp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`,
    badgePwa: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2" width="12" height="20" rx="3"></rect><line x1="12" y1="18" x2="12" y2="18.01"></line></svg>`,
    badgeWebsite: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    badgeBuilder: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="3" width="7" height="7" rx="1.5"></rect><rect x="3" y="14" width="7" height="7" rx="1.5"></rect><rect x="14" y="14" width="7" height="7" rx="1.5"></rect></svg>`
};

const DEFAULT_ICON = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%23a0522d'/%3E%3Cpath d='M10 22V10h7a4 4 0 0 1 0 8h-5' stroke='white' stroke-width='2.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E";

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
        case "pwas":
            return { cls: "badge-pwas", svg: SVG.badgePwa, label: "PWA" };
        case "websites":
            return { cls: "badge-websites", svg: SVG.badgeWebsite, label: "Website" };
        case "builders":
            return { cls: "badge-builders", svg: SVG.badgeBuilder, label: "Builder" };
        default:
            return { cls: "badge-pwas", svg: SVG.badgePwa, label: "Item" };
    }
}

function getCardClass(category) {
    switch (category) {
        case "apps":     return "card-app";
        case "pwas":     return "card-pwa";
        case "websites": return "card-website";
        case "builders": return "card-builder";
        default:         return "card-pwa";
    }
}

function renderIcon(item) {
    // Only apps and pwas have icons
    if (item.category !== "apps" && item.category !== "pwas") return "";
    const iconSrc = item.icon || DEFAULT_ICON;
    return `<div class="app-icon">
                <img src="${escapeAttr(iconSrc)}" alt="${escapeAttr(item.name)}" loading="lazy" onerror="this.src='${DEFAULT_ICON}'">
            </div>`;
}

// ============================================================
// CARD BUILDER
// ============================================================
function buildCard(item) {
    const badge = getBadgeFor(item.category);
    const cardClass = getCardClass(item.category);
    const featured = item.featured === true ? "featured" : "";
    const iconBlock = renderIcon(item);

    const downloadBtn = item.download
        ? `<a class="app-btn app-btn-download" href="${escapeAttr(item.download)}" target="_blank" rel="noopener">
               <span class="app-btn-icon">${SVG.download}</span>
               <span>Download</span>
           </a>`
        : "";

    // Builder chip (only for builders)
    const builderChip = item.category === "builders" && item.builder
        ? `<span class="builder-chip" data-builder="${escapeAttr(item.builder)}">
               <span class="builder-chip-dot"></span>
               ${escapeHtml(BUILDER_LABELS[item.builder] || "Builder")}
           </span>`
        : "";

    const topRow = iconBlock
        ? `<div class="app-card-top">
               ${iconBlock}
               <span class="app-badge ${badge.cls}">
                   ${badge.svg}
                   ${badge.label}
               </span>
           </div>`
        : `<div class="app-card-top app-card-top-noicon">
               <span class="app-badge ${badge.cls}">
                   ${badge.svg}
                   ${badge.label}
               </span>
           </div>`;

    return `
        <article class="app-card ${cardClass} ${featured}" data-category="${escapeAttr(item.category)}">
            ${topRow}
            ${builderChip}
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
// SECTION HEADER
// ============================================================
function buildSectionHeader(label, count) {
    return `
        <div class="website-section-header">
            <span class="website-section-label">
                ${escapeHtml(label)}
                <span class="website-section-count">${count}</span>
            </span>
            <span class="website-section-line"></span>
        </div>
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

    let html = "";

    if (currentTab === "builders") {
        BUILDER_SUBCATEGORIES.forEach((sub) => {
            const group = items.filter((item) => item.builder === sub.id);
            if (group.length === 0) return;
            html += buildSectionHeader(sub.label, group.length);
            html += group.map(buildCard).join("");
        });
    } else {
        html = items.map(buildCard).join("");
    }

    grid.innerHTML = html;

    attach3DTilt();

    if (animate) {
        grid.classList.remove("entering");
        void grid.offsetWidth;
        grid.classList.add("entering");
        setTimeout(() => grid.classList.remove("entering"), 1200);
    }
}

function filterByTab(tab) {
    if (tab === "featured") return APPS.filter((item) => item.featured === true);
    return APPS.filter((item) => item.category === tab);
}

// ============================================================
// 3D TILT
// ============================================================
const TILT_MAX_X = 7;
const TILT_MAX_Y = 9;
const TILT_LIFT = -7;
const TILT_Z = 24;

function attach3DTilt() {
    const cards = document.querySelectorAll(".app-card");

    const isTouch = window.matchMedia("(hover: none)").matches;
    const isNarrow = window.matchMedia("(max-width: 768px)").matches;
    if (isTouch || isNarrow) return;

    cards.forEach((card) => {
        if (card.dataset.tiltBound === "1") return;
        card.dataset.tiltBound = "1";

        let raf = null;

        const onMove = (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;

            card.style.setProperty("--mouse-x", `${x * 100}%`);
            card.style.setProperty("--mouse-y", `${y * 100}%`);

            const ry = (x - 0.5) * 2 * TILT_MAX_Y;
            const rx = (0.5 - y) * 2 * TILT_MAX_X;

            if (raf) cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                card.style.setProperty("--rx", `${rx}deg`);
                card.style.setProperty("--ry", `${ry}deg`);
                card.style.setProperty("--ty", `${TILT_LIFT}px`);
                card.style.setProperty("--tz", `${TILT_Z}px`);
            });
        };

        const onEnter = () => card.classList.add("tilt-active");

        const onLeave = () => {
            card.classList.remove("tilt-active");
            card.style.setProperty("--rx", "0deg");
            card.style.setProperty("--ry", "0deg");
            card.style.setProperty("--ty", "0");
            card.style.setProperty("--tz", "0");
        };

        card.addEventListener("mousemove", onMove);
        card.addEventListener("mouseenter", onEnter);
        card.addEventListener("mouseleave", onLeave);
    });
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
// NAVBAR SHADOW
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
            closeDrawer();
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