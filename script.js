/* ============================================================ */
/* Store — Controller                                            */
/* ============================================================ */

const APPS = [
    // ══════════════════════════════════════════════════════════
    // APPS
    // ══════════════════════════════════════════════════════════
    {
        name: "RelayTalk",
        desc: "Fast, private messaging & calls. Chat, share images and voice notes, make calls — no ads, no noise, no tracking.",
        url: "https://relaytalk.vercel.app",
        download: "https://relaytalk.vercel.app/assets/apk/",
        category: "apps",
        icon: "https://relaytalk.vercel.app/favicon.ico",
        badge: "RelayTalk",
        featured: true
    },

    // ══════════════════════════════════════════════════════════
    // WEB APPS
    // ══════════════════════════════════════════════════════════
    {
        name: "Blitzracer",
        desc: "A high-speed car racing game built as a PWA. Smooth controls, fast action, playable right in your browser.",
        url: "https://blitzracer.github.io/Cargame",
        category: "websites",
        icon: "https://blitzracer.vercel.app/cargame512.png",
        featured: false
    },
    {
        name: "ZeeAI TTS",
        desc: "Text-to-speech powered by AI. Type anything and hear it spoken in natural voices — installable as a PWA.",
        url: "https://projectsofkhan.github.io/zeeAi",
        category: "websites",
        icon: "https://projectsofkhan.github.io/zeeAi/zee512.png",
        featured: true
    },
    {
        name: "3 Player Carrom",
        desc: "Classic carrom board game for three players. Play with friends online, right from your browser.",
        url: "https://carrom3p.vercel.app",
        category: "websites",
        icon: "https://carrom3p.vercel.app/favicon.ico",
        featured: false
    },
    {
        name: "Zeeshan 40u Portfolio",
        desc: "Personal portfolio showcasing projects, skills, and contact — the home base for everything I build.",
        url: "https://zeeshan40u.vercel.app",
        category: "websites",
        icon: "https://zeeshan40u.vercel.app/favicon.ico",
        featured: true
    },
    {
        name: "TrailStory",
        desc: "A narrative-driven game site with story chapters, choices, and an immersive reading-and-playing experience.",
        url: "https://projectsofkhan.github.io/Trail/",
        category: "websites",
        color: "cinnamon",
        featured: false
    },

    // ══════════════════════════════════════════════════════════
    // BUILDERS — Wix
    // ══════════════════════════════════════════════════════════
    {
        name: "ChatWithZ Groups",
        desc: "Old Wix site built for personal chat groups and community hangouts.",
        url: "https://chatwithz.wixsite.com/groups",
        category: "builders",
        builder: "wix",
        color: "copper",
        featured: false
    },
    {
        name: "ChatWithZ Chats",
        desc: "Companion Wix site with chat rooms — personal-use project from earlier days.",
        url: "https://chatwithz.wixsite.com/chats",
        category: "builders",
        builder: "wix",
        color: "copper",
        featured: false
    },
    {
        name: "RDJ Star",
        desc: "A Wix site made as a game hub to play with friends and brothers.",
        url: "https://rdjstar.wixsite.com/rdj1",
        category: "builders",
        builder: "wix",
        color: "cinnamon",
        featured: false
    },

    // ══════════════════════════════════════════════════════════
    // BUILDERS — Jimdo
    // ══════════════════════════════════════════════════════════
    {
        name: "Zeeshan 40u",
        desc: "Personal Jimdo space with listings and everything I've been working on.",
        url: "https://zeeshan40u.jimdofree.com/",
        category: "builders",
        builder: "jimdo",
        color: "caramel",
        featured: false
    },
    {
        name: "Class 10th Notes",
        desc: "Study notes site for Class 10th students — clean, organized, and free.",
        url: "https://class10th.jimdofree.com/",
        category: "builders",
        builder: "jimdo",
        color: "sienna",
        featured: false
    },
    {
        name: "JavaScript Notes",
        desc: "Curated JS notes site — a quick reference for students learning JavaScript.",
        url: "https://jsbykhan.jimdofree.com/",
        category: "builders",
        builder: "jimdo",
        color: "cinnamon",
        featured: false
    },
    {
        name: "Python Projects",
        desc: "Collection of Python projects and code snippets, hosted for easy sharing.",
        url: "https://python40u.jimdofree.com/",
        category: "builders",
        builder: "jimdo",
        color: "copper",
        featured: false
    },
    {
        name: "CSS Notes",
        desc: "CSS notes site — everything from selectors to flexbox and grid, in one place.",
        url: "https://cssbykhan.jimdofree.com/",
        category: "builders",
        builder: "jimdo",
        color: "caramel",
        featured: false
    },
    {
        name: "Class 9th Notes",
        desc: "Study notes for Class 9th students, organized by subject.",
        url: "https://zeeshank.jimdofree.com/",
        category: "builders",
        builder: "jimdo",
        color: "sienna",
        featured: false
    },
    {
        name: "Site Updates",
        desc: "News and updates page for the Class 9th notes site.",
        url: "https://siteupdates.jimdofree.com/news/",
        category: "builders",
        builder: "jimdo",
        color: "taupe",
        featured: false
    },
    {
        name: "HTML Notes",
        desc: "HTML notes site — structured notes for anyone starting with web development.",
        url: "https://htmlbykhan.jimdofree.com/",
        category: "builders",
        builder: "jimdo",
        color: "cinnamon",
        featured: false
    }
];

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

const AVATAR_COLORS = {
    cinnamon: { bg: "#f5ede0", fg: "#a0522d" },
    copper:   { bg: "#f0e6d8", fg: "#8b4a2b" },
    caramel:  { bg: "#f5ede0", fg: "#b87333" },
    sienna:   { bg: "#f0e6d8", fg: "#8b4a2b" },
    taupe:    { bg: "#f5ede0", fg: "#8a8078" },
    espresso: { bg: "#f0e6d8", fg: "#2b1d14" }
};

let currentTab = "featured";

const SVG = {
    externalLink: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="9 7 17 7 17 15"></polyline></svg>`,
    download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`,
    badgeApp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`,
    badgePwa: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2" width="12" height="20" rx="3"></rect><line x1="12" y1="18" x2="12" y2="18.01"></line></svg>`,
    badgeWebsite: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    badgeBuilder: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="3" width="7" height="7" rx="1.5"></rect><rect x="3" y="14" width="7" height="7" rx="1.5"></rect><rect x="14" y="14" width="7" height="7" rx="1.5"></rect></svg>`
};

const DEFAULT_ICON = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%23fbf6ee'/%3E%3Cpath d='M10 22V10h7a4 4 0 0 1 0 8h-5' stroke='%23a0522d' stroke-width='2.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E";

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

function getBadgeFor(item) {
    if (item.badge) {
        return { cls: "badge-relaytalk", svg: SVG.badgeApp, label: escapeHtml(item.badge) };
    }
    switch (item.category) {
        case "apps":     return { cls: "badge-pwas",     svg: SVG.badgeApp,      label: "App" };
        case "pwas":     return { cls: "badge-pwas",     svg: SVG.badgePwa,      label: "PWA" };
        case "websites": return { cls: "badge-websites", svg: SVG.badgeWebsite,  label: "Website" };
        case "builders": return { cls: "badge-builders", svg: SVG.badgeBuilder,  label: "Builder" };
        default:         return { cls: "badge-websites", svg: SVG.badgeWebsite,  label: "Item" };
    }
}

function getCardClass(category) {
    switch (category) {
        case "apps":     return "card-app";
        case "pwas":     return "card-pwa";
        case "websites": return "card-website";
        case "builders": return "card-builder";
        default:         return "card-website";
    }
}

function makeAvatar(name, colorKey) {
    const initial = (name || "?").trim().charAt(0).toUpperCase();
    const palette = AVATAR_COLORS[colorKey] || AVATAR_COLORS.cinnamon;
    return `<div class="app-icon-avatar" style="background:${palette.bg};color:${palette.fg};">${escapeHtml(initial)}</div>`;
}

function renderIcon(item) {
    if (item.icon) {
        return `<div class="app-icon">
                    <img src="${escapeAttr(item.icon)}" alt="${escapeAttr(item.name)}" loading="lazy" onerror="this.src='${DEFAULT_ICON}'">
                </div>`;
    }
    if (item.color) {
        return `<div class="app-icon">${makeAvatar(item.name, item.color)}</div>`;
    }
    return "";
}

function buildCard(item) {
    const badge = getBadgeFor(item);
    const cardClass = getCardClass(item.category);
    const featured = item.featured === true ? "featured" : "";
    const iconBlock = renderIcon(item);

    const downloadBtn = item.download
        ? `<a class="app-btn app-btn-download" href="${escapeAttr(item.download)}" target="_blank" rel="noopener">
               <span class="app-btn-icon">${SVG.download}</span>
               <span>Download</span>
           </a>`
        : "";

    const builderChip = item.category === "builders" && item.builder
        ? `<span class="builder-chip" data-builder="${escapeAttr(item.builder)}">
               <span class="builder-chip-dot"></span>
               ${escapeHtml(BUILDER_LABELS[item.builder] || "Builder")}
           </span>`
        : "";

    const topHTML = iconBlock
        ? `<div class="app-card-top">
               ${iconBlock}
               <span class="app-badge ${badge.cls}">
                   ${badge.svg}
                   ${badge.label}
               </span>
           </div>
           <h3 class="app-name">${escapeHtml(item.name)}</h3>`
        : `<div class="card-row">
               <span class="app-badge ${badge.cls}">
                   ${badge.svg}
                   ${badge.label}
               </span>
               <h3 class="app-name">${escapeHtml(item.name)}</h3>
           </div>`;

    return `
        <article class="app-card ${cardClass} ${featured}" data-category="${escapeAttr(item.category)}">
            ${topHTML}
            ${builderChip}
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
        setTimeout(() => grid.classList.remove("entering"), 1100);
    }
}

function filterByTab(tab) {
    if (tab === "featured") return APPS.filter((item) => item.featured === true);
    if (tab === "webapps") {
        return APPS.filter((item) => item.category === "websites" || item.category === "pwas");
    }
    return APPS.filter((item) => item.category === tab);
}

const TILT_MAX_X = 6;
const TILT_MAX_Y = 8;
const TILT_LIFT = -6;
const TILT_Z = 22;

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

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDrawer();
});

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