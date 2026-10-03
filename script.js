/**
 * ============================================================================
 * EDITAURA — THE CINEMATIC NLE PORTFOLIO (NISHANT AGRAWAL // @editaura36)
 * Lead Engineer & Creative Technologist: Production Vanilla Architecture
 * ============================================================================
 */

// LINE 1: GLOBAL CONFIGURATION OBJECT
const CONFIG = {
  creator: {
    name: "Nishant Agrawal",
    brand: "EDITAURA",
    handle: "@editaura36",
    role: "Video Editor | Colorist | Motion Designer | 3D Generalist",
    bio: "Sculpting high-retention short-form, kinetic commercials, and narrative films.",
    email: "nishantagrawal12022007@gmail.com",
    instagram: "https://www.instagram.com/editaura36?stkn=MWk5ZmF1c3MxdnRrMQ==",
    youtube: "https://youtube.com/@editaura36-i3y?si=RJv3pDf4QzrNLRry",
    linkedin: "https://linkedin.com/in/editaura36-placeholder",
    vimeo: "https://vimeo.com/editaura36-placeholder"
  },
  timebase: {
    fps: 24,
    totalFrames: 34560, // 24 minutes full sequence
    timecodeStart: "00:00:00:00"
  },
  defaultTheme: "dark", // 'dark' | 'light'
  projects: [
    {
      id: "proj-1",
      seq: "SEQ_01",
      title: "CYBERPUNK NEON DRIVE",
      category: "commercial",
      categoryLabel: "Commercial & 3D Spec",
      client: "Aether Automotive / Spec Commercial",
      duration: "00:01:15:12",
      aspect: "16:9",
      role: "Lead Editor, 3D Generalist & Colorist",
      challenge: "Transform raw studio turntable car footage into a high-octane Tokyo night sprint with hyper-realistic wet asphalt reflections, neon reflections, and sub-frame engine audio synchronization.",
      technique: "Speed-ramping on 120fps plates, custom 3D anamorphic lens flares in Blender, chromatic aberration passes, and rhythmic razor cuts synced precisely to synthetic bass kicks.",
      metric: "Achieved 86.4% completion rate across 4.2M paid impressions.",
      tools: ["Blender Cycles", "Premiere Pro", "DaVinci Resolve", "After Effects"],
      themeColor: "#56DEFF",
      bgGradient: "linear-gradient(135deg, #051924 0%, #0b3447 50%, #030d14 100%)"
    },
    {
      id: "proj-2",
      seq: "SEQ_02",
      title: "THE MONK OF VARANASI",
      category: "narrative",
      categoryLabel: "Narrative & Doc",
      client: "Independent Short Film / Doc Festival",
      duration: "00:08:45:00",
      aspect: "16:9",
      role: "Documentary Editor & Colorist",
      challenge: "Condense 18 hours of vérité documentary footage shot along the ghats of the Ganges into a poignant, contemplative 8-minute narrative without losing cultural reverence.",
      technique: "Extensive L-cuts allowing meditative ambient river soundscapes to linger past visual scene changes, warm Kodak 5207 35mm film emulation, and delicate shadow tonal recovery.",
      metric: "Official Selection at 3 International Doc Festivals; 94% retention on YouTube Premiere.",
      tools: ["DaVinci Resolve Studio", "Adobe Premiere Pro", "Fairlight Audio"],
      themeColor: "#E07A38",
      bgGradient: "linear-gradient(135deg, #211307 0%, #442407 50%, #150902 100%)"
    },
    {
      id: "proj-3",
      seq: "SEQ_03",
      title: "HYPERDRIVE: BEATS IN MOTION",
      category: "music",
      categoryLabel: "Music Video",
      client: "SubVision Records / Artist: Kaelen",
      duration: "00:03:22:18",
      aspect: "16:9",
      role: "Director of Post & Lead Editor",
      challenge: "Create a relentless kinetic rhythm that matches 150 BPM drill-trap audio without causing viewer optical exhaustion or disjointed narrative flow.",
      technique: "Invisible zoom match-cuts, rotational whip pans, custom CRT phosphor distortion overlays, and glitch frame flashes on snare transients.",
      metric: "+14.8M Views in first 60 days with 78% retention across the 3-minute mark.",
      tools: ["After Effects", "Premiere Pro", "Boris FX Sapphire", "Photoshop"],
      themeColor: "#BD00FF",
      bgGradient: "linear-gradient(135deg, #1a0526 0%, #360754 50%, #0c0014 100%)"
    },
    {
      id: "proj-4",
      seq: "SEQ_04",
      title: "RETAIN: 60S HOOK MASTER",
      category: "viral",
      categoryLabel: "Short-Form & Viral",
      client: "Alex Vance Media (1.8M Subs)",
      duration: "00:00:58:14",
      aspect: "9:16",
      role: "Viral Retention Editor",
      challenge: "Defeat the algorithmic 3-second swipe rate for high-ticket SaaS breakdown reels, maintaining an average watch duration exceeding 95%.",
      technique: "Karaoke typography with active word tracking, sound-designed paper rips and swooshes on every third second, and dynamic 3D graphic popups anchoring viewer gaze.",
      metric: "Generated 32M+ views across IG Reels & YouTube Shorts; +42,000 new subscribers.",
      tools: ["CapCut Pro", "After Effects", "Premiere Pro", "Audition"],
      themeColor: "#00E676",
      bgGradient: "linear-gradient(135deg, #051a0d 0%, #093b1b 50%, #020d06 100%)"
    },
    {
      id: "proj-5",
      seq: "SEQ_05",
      title: "APEX FORMULA CHRONICLES",
      category: "commercial",
      categoryLabel: "Commercial & 3D Spec",
      client: "Apex Chronographs / Brand Campaign",
      duration: "00:02:10:04",
      aspect: "16:9",
      role: "Editor, Sound Designer & Colorist",
      challenge: "Deliver a luxury Swiss watch commercial emphasizing precision engineering, racing heritage, and mechanical micro-movement.",
      technique: "Macro sound design featuring real mechanical escapement ticks, high-contrast monochrome and gold split-toning, and seamless match cuts from piston strokes to second hands.",
      metric: "3.8x lift in luxury watch pre-order conversions; featured in Behance Editorial.",
      tools: ["DaVinci Resolve", "Blender 3D", "Premiere Pro"],
      themeColor: "#FFEA00",
      bgGradient: "linear-gradient(135deg, #1f1b03 0%, #3e3706 50%, #0e0d01 100%)"
    },
    {
      id: "proj-6",
      seq: "SEQ_06",
      title: "ASTRAL HORIZONS: ZERO-G",
      category: "music",
      categoryLabel: "Music Video",
      client: "Nebula Soundscapes / Ambient EP",
      duration: "00:04:12:08",
      aspect: "16:9",
      role: "Visual Director & 3D Motion Lead",
      challenge: "Build a photorealistic deep-space zero-gravity exploration odyssey on an indie post-production timeline and budget.",
      technique: "Procedural planet generation and volumetric asteroid fields rendered in Blender, combined with slow anamorphic rack focuses and spectral audio soundscapes.",
      metric: "Vimeo Staff Pick nomination; over 2.1M organic streams.",
      tools: ["Blender 3D", "After Effects", "DaVinci Resolve"],
      themeColor: "#00E5FF",
      bgGradient: "linear-gradient(135deg, #04171d 0%, #09303d 50%, #020c0f 100%)"
    },
    {
      id: "proj-7",
      seq: "SEQ_07",
      title: "VELVET MIDNIGHT: RUNWAY 26",
      category: "narrative",
      categoryLabel: "Narrative & Doc",
      client: "Maison Noir / Haute Couture Paris",
      duration: "00:01:45:20",
      aspect: "16:9",
      role: "Fashion Film Editor & Master Colorist",
      challenge: "Capture the tactile tension, fabric textures, and backstage adrenaline of Paris Fashion Week in a dark editorial film format.",
      technique: "Bleach-bypass DaVinci color grading, jump cuts preserving rhythm rather than continuity, and ambient runway bass mixed with whisper foley.",
      metric: "Screened at Milan Fashion Film Festival 2026.",
      tools: ["DaVinci Resolve Studio", "Premiere Pro", "Photoshop"],
      themeColor: "#FF5A2B",
      bgGradient: "linear-gradient(135deg, #1e0d08 0%, #3a190f 50%, #0e0603 100%)"
    },
    {
      id: "proj-8",
      seq: "SEQ_08",
      title: "SCALING TO 100M: CREATOR MASTERCLASS",
      category: "viral",
      categoryLabel: "Short-Form & Viral",
      client: "Creator Accelerator Pro",
      duration: "00:00:54:02",
      aspect: "9:16",
      role: "Short-Form Retention Architect",
      challenge: "Distill a 2-hour technical podcast interview into three 50-second high-energy clips that convert viewers into cohort enrollments.",
      technique: "Aggressive b-roll cutting, bespoke 2D motion illustrations, punch-in zooms on key revelations, and custom whoosh/impact foley.",
      metric: "Generated 1,420 email opt-ins from organic TikTok and Shorts views.",
      tools: ["CapCut Pro", "Premiere Pro", "After Effects"],
      themeColor: "#00E676",
      bgGradient: "linear-gradient(135deg, #091f11 0%, #114223 50%, #030e06 100%)"
    }
  ]
};

// ============================================================================
// SYSTEM CONTROLLER & INITIALIZATION
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  initLenis();
  initTimecodeEngine();
  initSideNavigation();
  initThemeSwitcher();
  initCustomCursor();
  initHeroCanvas();
  initRotatingHeadline();
  initProjectsGrid();
  initCaseStudyDrawer();
  initSplitSlider();
  initTrackStack();
  initShowreelModal();
  initScrubberEngine();
  initToolkitMarquee();
  initVaranasiClock();
  initDirectContacts();
  initContactForm();
  initHotkeys();
});

// ============================================================================
// 1. LENIS SMOOTH SCROLLING SETUP
// ============================================================================
let lenis = null;

function initLenis() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  if (typeof Lenis !== "undefined") {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync with GSAP ScrollTrigger if available
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    }
  }
}

function smoothScrollTo(target, onComplete) {
  if (lenis) {
    lenis.scrollTo(target, { offset: -64, duration: 1.2, onComplete });
  } else {
    const el = typeof target === "string" ? document.querySelector(target) : target;
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 64;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
      if (typeof onComplete === "function") {
        setTimeout(onComplete, 800);
      }
    }
  }
}

// ============================================================================
// 2. SMPTE 24FPS TIMECODE ENGINE & SEQUENCE TRACKER
// ============================================================================
function formatSMPTE(frameNumber, fps = 24) {
  const totalSeconds = Math.floor(frameNumber / fps);
  const frames = frameNumber % fps;
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (n) => String(n).padStart(2, "0");
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(frames)}`;
}

function initTimecodeEngine() {
  const hudTimecode = document.getElementById("hud-timecode");
  const playheadTooltip = document.getElementById("playhead-tooltip");
  const scrubberPlayhead = document.getElementById("scrubber-playhead");

  function updateHUDTimecode() {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPos = window.scrollY || window.pageYOffset;
    const progress = docHeight > 0 ? Math.min(Math.max(scrollPos / docHeight, 0), 1) : 0;

    const currentFrames = Math.floor(progress * CONFIG.timebase.totalFrames);
    const smpte = formatSMPTE(currentFrames, CONFIG.timebase.fps);

    if (hudTimecode) hudTimecode.textContent = smpte;
    if (playheadTooltip) playheadTooltip.textContent = smpte;

    if (scrubberPlayhead) {
      scrubberPlayhead.style.left = `${progress * 100}%`;
    }
  }

  window.addEventListener("scroll", updateHUDTimecode, { passive: true });
  if (lenis) {
    lenis.on("scroll", updateHUDTimecode);
  }
  updateHUDTimecode();
}

// ============================================================================
// 2.1 CINEMATIC VERTICAL NAVIGATION RAIL & MOBILE SIDE TRAY
// ============================================================================
function initSideNavigation() {
  const navToggleBtn = document.getElementById("hud-nav-toggle");
  const sideNavTray = document.getElementById("side-nav-tray");
  const sideNavBackdrop = document.getElementById("side-nav-backdrop");
  const sideTrayCloseBtn = document.getElementById("side-tray-close-btn");
  const sideRailLinks = document.querySelectorAll(".side-nav-link");
  const trayNavLinks = document.querySelectorAll(".tray-nav-link");
  const trayContactCta = document.getElementById("tray-contact-cta");
  const trayActiveClip = document.getElementById("tray-active-clip");
  const activeClipTag = document.getElementById("active-clip-tag");
  const scrubChapters = document.querySelectorAll(".scrub-chapter");
  const brandLink = document.querySelector(".brand-link");
  const hudCtaBtn = document.querySelector(".hud-cta-btn");

  let activeChapterId = null;

  // Query only the 10 project chapters
  const chapters = Array.from(document.querySelectorAll("section.nle-chapter"));

  // Tray open / close helpers
  function openSideNavTray() {
    if (!sideNavTray) return;
    sideNavTray.classList.add("is-open");
    if (sideNavBackdrop) sideNavBackdrop.classList.add("is-open");
    if (navToggleBtn) {
      navToggleBtn.classList.add("is-active");
      navToggleBtn.setAttribute("aria-expanded", "true");
    }
    sideNavTray.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    if (lenis) lenis.stop();
    if (sideTrayCloseBtn) {
      sideTrayCloseBtn.focus();
    }
    playSynthesizedClick(440, 0.04);
  }

  function closeSideNavTray() {
    if (!sideNavTray) return;
    const wasOpen = sideNavTray.classList.contains("is-open");
    sideNavTray.classList.remove("is-open");
    if (sideNavBackdrop) sideNavBackdrop.classList.remove("is-open");
    if (navToggleBtn) {
      navToggleBtn.classList.remove("is-active");
      navToggleBtn.setAttribute("aria-expanded", "false");
      if (wasOpen && document.activeElement && sideNavTray.contains(document.activeElement)) {
        navToggleBtn.focus();
      }
    }
    sideNavTray.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lenis) lenis.start();
  }

  if (navToggleBtn) {
    navToggleBtn.addEventListener("click", () => {
      const isOpen = sideNavTray && sideNavTray.classList.contains("is-open");
      if (isOpen) {
        closeSideNavTray();
      } else {
        openSideNavTray();
      }
    });
  }

  if (sideTrayCloseBtn) {
    sideTrayCloseBtn.addEventListener("click", () => {
      closeSideNavTray();
      playSynthesizedClick(300, 0.04);
    });
  }

  if (sideNavBackdrop) {
    sideNavBackdrop.addEventListener("click", (e) => {
      e.preventDefault();
      closeSideNavTray();
      playSynthesizedClick(300, 0.04);
    });
  }

  // Trap focus inside sideNavTray when open
  if (sideNavTray) {
    sideNavTray.addEventListener("keydown", (e) => {
      if (e.key !== "Tab") return;
      const focusableEls = Array.from(
        sideNavTray.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => !el.hasAttribute("disabled") && el.offsetParent !== null);

      if (focusableEls.length === 0) return;
      const firstEl = focusableEls[0];
      const lastEl = focusableEls[focusableEls.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    });
  }

  // Mobile Floating Quick Nav FAB
  const mobileNavFab = document.getElementById("mobile-nav-fab");
  if (mobileNavFab) {
    mobileNavFab.addEventListener("click", () => {
      openSideNavTray();
    });
  }

  // Side Rail Expand / Collapse Toggle
  const railExpandToggle = document.getElementById("rail-expand-toggle");
  const sideRailDock = document.getElementById("side-rail-dock");
  const sideRailHeader = document.querySelector(".side-rail-header");
  if (sideRailDock) {
    const toggleRail = (e) => {
      if (e) e.stopPropagation();
      sideRailDock.classList.toggle("is-expanded");
      playSynthesizedClick(340, 0.04);
    };

    if (railExpandToggle) {
      railExpandToggle.addEventListener("click", toggleRail);
    }
    if (sideRailHeader) {
      sideRailHeader.addEventListener("click", (e) => {
        if (e.target !== railExpandToggle && !railExpandToggle.contains(e.target)) {
          toggleRail(e);
        }
      });
    }

    // Collapse if user clicks outside
    document.addEventListener("click", (e) => {
      if (sideRailDock.classList.contains("is-expanded") && !sideRailDock.contains(e.target)) {
        sideRailDock.classList.remove("is-expanded");
      }
    });
  }

  // Handle jump link clicks (side rail & mobile tray)
  function handleChapterJump(targetId) {
    if (!targetId) return;
    closeSideNavTray();
    smoothScrollTo(targetId, () => {
      setActiveChapter(targetId);
    });
    setActiveChapter(targetId);
    playSynthesizedClick(360, 0.04);
  }

  sideRailLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = link.getAttribute("data-target");
      handleChapterJump(target);
    });
  });

  trayNavLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = link.getAttribute("data-target");
      handleChapterJump(target);
    });
  });

  if (trayContactCta) {
    trayContactCta.addEventListener("click", (e) => {
      e.preventDefault();
      closeSideNavTray();
      smoothScrollTo("#contact", () => {
        setActiveChapter("#contact");
      });
      setActiveChapter("#contact");
      playSynthesizedClick(360, 0.04);
    });
  }

  if (brandLink) {
    brandLink.addEventListener("click", (e) => {
      e.preventDefault();
      handleChapterJump("#hero");
    });
  }

  if (hudCtaBtn) {
    hudCtaBtn.addEventListener("click", (e) => {
      e.preventDefault();
      handleChapterJump("#contact");
    });
  }

  // Set active chapter UI across all navigation components with change memoization
  function setActiveChapter(targetId) {
    if (!targetId) return;
    const cleanId = targetId.startsWith("#") ? targetId : `#${targetId}`;
    if (activeChapterId === cleanId) return;
    activeChapterId = cleanId;

    sideRailLinks.forEach((link) => {
      const isMatch = link.getAttribute("data-target") === cleanId;
      link.classList.toggle("active", isMatch);
      if (isMatch) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    trayNavLinks.forEach((link) => {
      const isMatch = link.getAttribute("data-target") === cleanId;
      link.classList.toggle("active", isMatch);
      if (isMatch) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    scrubChapters.forEach((btn) => {
      const isMatch = btn.getAttribute("data-target") === cleanId;
      btn.classList.toggle("active", isMatch);
    });

    // Update floating mobile FAB chapter number
    const fabCurrNum = document.getElementById("fab-curr-num");
    if (fabCurrNum) {
      const matchLink = document.querySelector(`.side-nav-link[data-target="${cleanId}"]`);
      if (matchLink) {
        const numEl = matchLink.querySelector(".nav-num");
        if (numEl) {
          fabCurrNum.textContent = numEl.textContent.replace(/[\[\]]/g, "");
        }
      }
    }

    const targetEl = document.querySelector(cleanId);
    if (targetEl) {
      const seq = targetEl.getAttribute("data-sequence");
      if (seq) {
        if (activeClipTag) activeClipTag.textContent = seq;
        if (trayActiveClip) trayActiveClip.textContent = seq;
      }
    }
  }

  // Active chapter tracking with scroll position
  function updateActiveChapterOnScroll() {
    if (chapters.length === 0) return;
    const scrollY = window.scrollY || window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Boundary cases: top & bottom
    if (scrollY < 100) {
      setActiveChapter(`#${chapters[0].id}`);
      return;
    }
    if (docHeight > 0 && scrollY >= docHeight - 80) {
      setActiveChapter(`#${chapters[chapters.length - 1].id}`);
      return;
    }

    // Viewport focal line at 35% from top
    const focalY = window.innerHeight * 0.35;
    let currentChapter = chapters[0];

    for (let i = 0; i < chapters.length; i++) {
      const rect = chapters[i].getBoundingClientRect();
      if (rect.top <= focalY) {
        currentChapter = chapters[i];
      }
    }

    if (currentChapter) {
      setActiveChapter(`#${currentChapter.id}`);
    }
  }

  window.addEventListener("scroll", updateActiveChapterOnScroll, { passive: true });
  if (lenis) {
    lenis.on("scroll", updateActiveChapterOnScroll);
  }
  updateActiveChapterOnScroll();

  // Close tray if resized to desktop/tablet
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768 && window.innerHeight > 500 && sideNavTray && sideNavTray.classList.contains("is-open")) {
      closeSideNavTray();
    }
  });

  // Export close helper for hotkeys / external triggers
  window.closeSideNavTray = closeSideNavTray;
}

// ============================================================================
// 3. DUAL-THEME ENGINE (DARK / LIGHT MODE)
// ============================================================================
function initThemeSwitcher() {
  const themeButtons = document.querySelectorAll(".theme-btn, .lut-btn");
  const savedTheme = localStorage.getItem("editaura-theme") || CONFIG.defaultTheme || "dark";

  applyTheme(savedTheme);

  themeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const theme = btn.getAttribute("data-theme") || (btn.getAttribute("data-lut") === "warm" ? "light" : "dark");
      applyTheme(theme);
      showToast(`Theme: ${theme.toUpperCase()} MODE`);
    });
  });
}

function applyTheme(themeKey) {
  if (themeKey !== "light") themeKey = "dark";

  document.documentElement.setAttribute("data-theme", themeKey);
  // Keep data-grade in sync for backward compatibility
  document.documentElement.setAttribute("data-grade", themeKey);
  localStorage.setItem("editaura-theme", themeKey);

  const themeButtons = document.querySelectorAll(".theme-btn, .lut-btn");
  themeButtons.forEach((b) => {
    const btnTheme = b.getAttribute("data-theme") || (b.getAttribute("data-lut") === "warm" ? "light" : "dark");
    const isActive = btnTheme === themeKey;
    b.classList.toggle("active", isActive);
    b.setAttribute("aria-checked", isActive ? "true" : "false");
  });
}

// Export for window access
window.applyTheme = applyTheme;
window.applyLUT = applyTheme;

// ============================================================================
// 4. CUSTOM HARDWARE CONTEXTUAL CURSOR
// ============================================================================
function initCustomCursor() {
  const cursor = document.getElementById("custom-cursor");
  const cursorDot = document.getElementById("cursor-dot");
  const cursorRing = document.getElementById("cursor-ring");
  const cursorLabel = document.getElementById("cursor-label");

  if (!cursor || window.matchMedia("(pointer: coarse)").matches) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (cursorDot) {
      cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    }
  });

  function renderCursor() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;

    if (cursorRing) {
      cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
    }
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Hover Contexts
  const hoverSelectors = [
    { selector: "[data-cursor]", attr: "data-cursor" },
    { selector: "a, button", label: "CUT" },
    { selector: ".nle-track", label: "TRACK" },
    { selector: ".split-slider-viewport", label: "DRAG" }
  ];

  document.addEventListener("mouseover", (e) => {
    const target = e.target.closest("[data-cursor], a, button, .nle-track, .split-slider-viewport");
    if (target) {
      cursor.classList.add("active-hover");
      const customVerb = target.getAttribute("data-cursor");
      if (customVerb) {
        cursorLabel.textContent = customVerb;
      } else if (target.tagName === "A" || target.tagName === "BUTTON") {
        cursorLabel.textContent = "VIEW";
      } else {
        cursorLabel.textContent = "ACT";
      }
    }
  });

  document.addEventListener("mouseout", (e) => {
    const target = e.target.closest("[data-cursor], a, button, .nle-track, .split-slider-viewport");
    if (target) {
      cursor.classList.remove("active-hover");
      cursorLabel.textContent = "REC";
    }
  });
}

// ============================================================================
// 5. HERO GENERATIVE CINEMA CANVAS
// ============================================================================
function initHeroCanvas() {
  const canvas = document.getElementById("hero-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let w = (canvas.width = canvas.offsetWidth);
  let h = (canvas.height = canvas.offsetHeight);

  window.addEventListener("resize", () => {
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
  });

  const particles = [];
  const particleCount = 28;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      radius: Math.random() * 80 + 30,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.15 + 0.05
    });
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);

    const isLight = document.documentElement.getAttribute("data-theme") === "light";

    // Adaptive ambient background
    const bgGrad = ctx.createRadialGradient(w / 2, h / 2, 50, w / 2, h / 2, Math.max(w, h));
    if (isLight) {
      bgGrad.addColorStop(0, "rgba(255, 255, 255, 0.96)");
      bgGrad.addColorStop(1, "rgba(244, 246, 248, 0.98)");
    } else {
      bgGrad.addColorStop(0, "rgba(25, 20, 25, 0.4)");
      bgGrad.addColorStop(1, "rgba(5, 5, 6, 0.95)");
    }
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    // Floating anamorphic bokeh lights
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < -p.radius) p.x = w + p.radius;
      if (p.x > w + p.radius) p.x = -p.radius;
      if (p.y < -p.radius) p.y = h + p.radius;
      if (p.y > h + p.radius) p.y = -p.radius;

      const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
      if (isLight) {
        grad.addColorStop(0, `rgba(0, 155, 201, ${p.alpha * 0.4})`);
        grad.addColorStop(0.6, `rgba(86, 222, 255, ${p.alpha * 0.15})`);
        grad.addColorStop(1, "rgba(255, 255, 255, 0)");
      } else {
        grad.addColorStop(0, `rgba(86, 222, 255, ${p.alpha})`);
        grad.addColorStop(0.6, `rgba(0, 180, 230, ${p.alpha * 0.4})`);
        grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      }

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.ellipse(p.x, p.y, p.radius * 1.5, p.radius * 0.8, -0.15, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
}

// ============================================================================
// 6. ROTATING HEADLINE TEXT MASK
// ============================================================================
function initRotatingHeadline() {
  const track = document.getElementById("rotating-text-track");
  if (!track) return;

  const items = track.querySelectorAll(".rotating-item");
  let currentIndex = 0;
  const total = items.length;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % total;
    track.style.transform = `translateY(-${currentIndex * 1.25}em)`;
  }, 2600);
}

// ============================================================================
// 7. SELECTED WORK: GRID GENERATION & FILTER ENGINE
// ============================================================================
function initProjectsGrid() {
  const grid = document.getElementById("projects-grid");
  const filterTabs = document.querySelectorAll(".filter-tab");
  if (!grid) return;

  function renderProjects(filter = "all") {
    grid.innerHTML = "";
    const filtered = filter === "all"
      ? CONFIG.projects
      : CONFIG.projects.filter((p) => p.category === filter);

    filtered.forEach((project, idx) => {
      const card = document.createElement("article");
      card.className = "project-card";
      card.setAttribute("data-id", project.id);
      card.setAttribute("data-cursor", "INSPECT");
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", `View Case Study: ${project.title}`);

      card.innerHTML = `
        <div class="card-meta-bar">
          <span class="seq-pill">${project.seq}</span>
          <span class="aspect-pill">${project.aspect}</span>
          <span class="duration-pill">${project.duration}</span>
        </div>
        <div class="card-visual-frame ${project.aspect === '9:16' ? 'aspect-9-16' : ''}">
          <div class="card-canvas-plate" style="background: ${project.bgGradient}; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; position: relative;">
            <div style="font-family: var(--font-mono); font-size: 1.8rem; font-weight: 700; color: rgba(255,255,255,0.12);">${project.seq}</div>
            <div style="position: absolute; bottom: 12px; left: 14px; font-family: var(--font-mono); font-size: 0.65rem; color: rgba(255,255,255,0.7); letter-spacing: 0.1em;">${project.role}</div>
          </div>
          <div class="card-visual-overlay"></div>
          <div class="card-hover-prompt">OPEN CASE STUDY</div>
        </div>
        <div class="card-content">
          <div class="card-category-tag">${project.categoryLabel}</div>
          <h3 class="card-title">${project.title}</h3>
          <p class="card-excerpt">${project.challenge}</p>
          <div class="card-footer-tags">
            <span class="client-tag">${project.client}</span>
            <span class="view-link">INSPECT CUT →</span>
          </div>
        </div>
      `;

      card.addEventListener("click", () => openCaseStudy(project));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openCaseStudy(project);
        }
      });

      grid.appendChild(card);
    });
  }

  renderProjects("all");

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      filterTabs.forEach((t) => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      renderProjects(tab.getAttribute("data-filter"));
    });
  });
}

// ============================================================================
// 8. CASE STUDY DRAWER MODAL
// ============================================================================
function initCaseStudyDrawer() {
  const drawer = document.getElementById("case-study-drawer");
  const closeBtn = document.getElementById("drawer-close-btn");
  const backdrop = document.getElementById("drawer-backdrop");
  const actionClose = document.getElementById("drawer-action-close");
  const actionShowreel = document.getElementById("drawer-action-showreel");

  if (closeBtn) closeBtn.addEventListener("click", closeCaseStudyDrawer);
  if (backdrop) {
    backdrop.addEventListener("click", closeCaseStudyDrawer);
    backdrop.addEventListener("wheel", (e) => e.preventDefault(), { passive: false });
    backdrop.addEventListener("touchmove", (e) => e.preventDefault(), { passive: false });
  }
  if (actionClose) actionClose.addEventListener("click", closeCaseStudyDrawer);

  if (actionShowreel) {
    actionShowreel.addEventListener("click", () => {
      closeCaseStudyDrawer();
      openShowreel();
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer && drawer.classList.contains("is-open")) {
      closeCaseStudyDrawer();
    }
  });
}

function openCaseStudy(project) {
  const drawer = document.getElementById("case-study-drawer");
  if (!drawer) return;

  document.getElementById("drawer-seq").textContent = project.seq;
  document.getElementById("drawer-category").textContent = project.categoryLabel;
  document.getElementById("drawer-title").textContent = project.title;
  document.getElementById("drawer-client").textContent = project.client;
  document.getElementById("drawer-role").textContent = project.role;
  document.getElementById("drawer-aspect").textContent = project.aspect;
  document.getElementById("drawer-duration").textContent = project.duration;
  document.getElementById("drawer-challenge").textContent = project.challenge;
  document.getElementById("drawer-technique").textContent = project.technique;
  document.getElementById("drawer-metric").textContent = project.metric;

  // Visual plate
  const visualPlate = document.getElementById("drawer-plate-visual");
  if (visualPlate) {
    visualPlate.style.background = project.bgGradient;
  }

  // Tools tags
  const toolsContainer = document.getElementById("drawer-tools");
  if (toolsContainer) {
    toolsContainer.innerHTML = project.tools
      .map((tool) => `<span class="tool-chip">${tool}</span>`)
      .join("");
  }

  // Reset drawer panel scroll position to top
  const panel = drawer.querySelector(".drawer-panel");
  if (panel) {
    panel.scrollTop = 0;
  }

  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");

  // Lock background scrolling completely (Lenis + Body class)
  document.body.classList.add("modal-open");
  document.documentElement.classList.add("modal-open");
  document.body.style.overflow = "hidden";
  if (lenis) {
    lenis.stop();
  }
}

function closeCaseStudyDrawer() {
  const drawer = document.getElementById("case-study-drawer");
  if (!drawer) return;

  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");

  // Unlock background scrolling
  document.body.classList.remove("modal-open");
  document.documentElement.classList.remove("modal-open");
  document.body.style.overflow = "";
  if (lenis) {
    lenis.start();
  }
}

// ============================================================================
// 9. COLOR SCIENCE BEFORE / AFTER SPLIT WIPE SLIDER
// ============================================================================
function initSplitSlider() {
  const viewport = document.getElementById("split-viewport");
  const beforeLayer = document.getElementById("split-before-layer");
  const divider = document.getElementById("split-divider");

  if (!viewport || !beforeLayer || !divider) return;

  let isDragging = false;

  function updateWipe(percent) {
    percent = Math.max(0, Math.min(100, percent));
    beforeLayer.style.clipPath = `polygon(0 0, ${percent}% 0, ${percent}% 100%, 0 100%)`;
    divider.style.left = `${percent}%`;
    divider.setAttribute("aria-valuenow", Math.round(percent));
  }

  function handlePointer(clientX) {
    const rect = viewport.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const percent = (offsetX / rect.width) * 100;
    updateWipe(percent);
  }

  viewport.addEventListener("mousedown", (e) => {
    isDragging = true;
    handlePointer(e.clientX);
  });

  window.addEventListener("mousemove", (e) => {
    if (isDragging) {
      handlePointer(e.clientX);
    }
  });

  window.addEventListener("mouseup", () => {
    isDragging = false;
  });

  // Touch Support
  viewport.addEventListener("touchstart", (e) => {
    isDragging = true;
    handlePointer(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener("touchmove", (e) => {
    if (isDragging) {
      handlePointer(e.touches[0].clientX);
    }
  }, { passive: true });

  window.addEventListener("touchend", () => {
    isDragging = false;
  });

  // Keyboard accessibility
  divider.addEventListener("keydown", (e) => {
    let current = parseFloat(divider.getAttribute("aria-valuenow") || "50");
    if (e.key === "ArrowLeft") {
      updateWipe(current - 5);
      e.preventDefault();
    } else if (e.key === "ArrowRight") {
      updateWipe(current + 5);
      e.preventDefault();
    }
  });
}

// ============================================================================
// 10. MULTITRACK NLE STACK (MUTE / SOLO / ACCORDION)
// ============================================================================
function initTrackStack() {
  const tracks = document.querySelectorAll(".nle-track");

  tracks.forEach((track) => {
    const muteBtn = track.querySelector(".track-mute");
    const soloBtn = track.querySelector(".track-solo");
    const expandBtn = track.querySelector(".track-expand-btn");
    const drawer = track.querySelector(".track-drawer");

    // Mute Logic
    if (muteBtn) {
      muteBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        muteBtn.classList.toggle("active");
        track.classList.toggle("muted", muteBtn.classList.contains("active"));
        playSynthesizedClick(160, 0.05);
      });
    }

    // Solo Logic
    if (soloBtn) {
      soloBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const willBeSolo = !soloBtn.classList.contains("active");

        // Clear other solos
        tracks.forEach((t) => {
          const s = t.querySelector(".track-solo");
          if (s) s.classList.remove("active");
          t.classList.remove("muted");
        });

        if (willBeSolo) {
          soloBtn.classList.add("active");
          tracks.forEach((t) => {
            if (t !== track) t.classList.add("muted");
          });
        }
        playSynthesizedClick(340, 0.05);
      });
    }

    // Expand Drawer Logic
    if (expandBtn && drawer) {
      expandBtn.addEventListener("click", () => {
        const isOpen = drawer.classList.contains("is-expanded");
        drawer.classList.toggle("is-expanded", !isOpen);
        expandBtn.setAttribute("aria-expanded", String(!isOpen));
      });
    }
  });
}

// ============================================================================
// 11. SHOWREEL CINEMA MODAL & VIDEO PLAYER
// ============================================================================
let showreelCanvasAnim = null;
let isReelPlaying = false;
let reelProgress = 0; // 0 to 1

function initShowreelModal() {
  const modal = document.getElementById("showreel-modal");
  const openHeroBtn = document.getElementById("open-showreel-btn");
  const reelCard = document.getElementById("reel-card-trigger");
  const closeBtn = document.getElementById("showreel-close-btn");
  const backdrop = document.getElementById("showreel-backdrop");
  const playTrigger = document.getElementById("modal-play-trigger");
  const transportPlay = document.getElementById("transport-play-btn");
  const scrubWrap = document.getElementById("modal-scrub-wrap");

  if (openHeroBtn) openHeroBtn.addEventListener("click", openShowreel);
  if (reelCard) reelCard.addEventListener("click", openShowreel);
  if (closeBtn) closeBtn.addEventListener("click", closeShowreel);
  if (backdrop) backdrop.addEventListener("click", closeShowreel);

  if (playTrigger) playTrigger.addEventListener("click", toggleReelPlay);
  if (transportPlay) transportPlay.addEventListener("click", toggleReelPlay);

  if (scrubWrap) {
    scrubWrap.addEventListener("click", (e) => {
      const rect = scrubWrap.getBoundingClientRect();
      reelProgress = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      updateReelTransportUI();
    });
  }

  // Preview card static canvas
  initReelPreviewCanvas();
}

function openShowreel() {
  const modal = document.getElementById("showreel-modal");
  if (!modal) return;
  modal.setAttribute("open", "");
  document.body.classList.add("modal-open");
  document.documentElement.classList.add("modal-open");
  document.body.style.overflow = "hidden";
  if (lenis) lenis.stop();
  isReelPlaying = true;
  startReelCanvas();
  updateReelTransportUI();
}

function closeShowreel() {
  const modal = document.getElementById("showreel-modal");
  if (!modal) return;
  modal.removeAttribute("open");
  document.body.classList.remove("modal-open");
  document.documentElement.classList.remove("modal-open");
  document.body.style.overflow = "";
  if (lenis) lenis.start();
  isReelPlaying = false;
  if (showreelCanvasAnim) cancelAnimationFrame(showreelCanvasAnim);
}

function toggleReelPlay() {
  isReelPlaying = !isReelPlaying;
  updateReelTransportUI();
  playSynthesizedClick(440, 0.04);
}

function updateReelTransportUI() {
  const fill = document.getElementById("modal-scrub-fill");
  const thumb = document.getElementById("modal-scrub-thumb");
  const timecode = document.getElementById("modal-timecode");
  const playSvg = document.getElementById("transport-play-svg");
  const centerIcon = document.getElementById("center-play-icon");

  if (fill) fill.style.width = `${reelProgress * 100}%`;
  if (thumb) thumb.style.left = `${reelProgress * 100}%`;

  // 90 seconds reel total = 2160 frames
  const totalReelFrames = 90 * 24;
  const currentFrames = Math.floor(reelProgress * totalReelFrames);
  if (timecode) timecode.textContent = formatSMPTE(currentFrames, 24);

  const playIconMarkup = isReelPlaying
    ? '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>'
    : '<polygon points="6 4 20 12 6 20 6 4"></polygon>';

  if (playSvg) playSvg.innerHTML = playIconMarkup;
  if (centerIcon) centerIcon.innerHTML = playIconMarkup;
}

function startReelCanvas() {
  const canvas = document.getElementById("modal-video-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let w = (canvas.width = canvas.offsetWidth || 960);
  let h = (canvas.height = canvas.offsetHeight || 540);

  let frame = 0;

  function renderReel() {
    if (isReelPlaying) {
      reelProgress += 0.0008; // smooth reel progress simulation
      if (reelProgress >= 1) reelProgress = 0;
      updateReelTransportUI();
    }

    frame++;
    ctx.fillStyle = "#09090C";
    ctx.fillRect(0, 0, w, h);

    // Dynamic cinema scenes simulation
    const t = frame * 0.02;
    const gradient = ctx.createLinearGradient(0, 0, w, h);
    gradient.addColorStop(0, `hsl(${(t * 20) % 360}, 60%, 15%)`);
    gradient.addColorStop(0.5, `hsl(${((t * 20) + 60) % 360}, 70%, 25%)`);
    gradient.addColorStop(1, "#050508");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, w, h);

    // Stylized moving graphic geometry
    ctx.strokeStyle = "rgba(86, 222, 255, 0.45)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(w / 2 + Math.sin(t) * 120, h / 2 + Math.cos(t) * 60, 100, 0, Math.PI * 2);
    ctx.stroke();

    // Text banner in cinema screen
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 24px 'JetBrains Mono', monospace";
    ctx.textAlign = "center";
    ctx.fillText("EDITAURA // 2026 4K PRORES REEL", w / 2, h / 2 - 20);
    ctx.font = "14px 'Space Grotesk', sans-serif";
    ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
    ctx.fillText("HIGH-RETENTION CUTS • 3D MOTION • DAVINCI COLOR GRADE", w / 2, h / 2 + 20);

    showreelCanvasAnim = requestAnimationFrame(renderReel);
  }

  if (showreelCanvasAnim) cancelAnimationFrame(showreelCanvasAnim);
  showreelCanvasAnim = requestAnimationFrame(renderReel);
}

function initReelPreviewCanvas() {
  const canvas = document.getElementById("reel-preview-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const w = (canvas.width = 960);
  const h = (canvas.height = 540);

  const grad = ctx.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0, "#05151c");
  grad.addColorStop(0.4, "#0b2633");
  grad.addColorStop(1, "#0B0B0E");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  // Cinematic grid lines
  ctx.strokeStyle = "rgba(86, 222, 255, 0.18)";
  ctx.lineWidth = 1;
  for (let x = 0; x < w; x += 60) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.stroke();
  }
}

// ============================================================================
// 12. FIXED FOOTER PLAYHEAD SCRUBBER ENGINE
// ============================================================================
function initScrubberEngine() {
  const scrubberTrack = document.getElementById("scrubber-track");
  const playhead = document.getElementById("scrubber-playhead");
  const chapterButtons = document.querySelectorAll(".scrub-chapter");

  if (!scrubberTrack || !playhead) return;

  let isDraggingScrubber = false;

  function seekToScrubberPosition(clientX) {
    const rect = scrubberTrack.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const targetScroll = ratio * docHeight;

    if (lenis) {
      lenis.scrollTo(targetScroll, { immediate: true });
    } else {
      window.scrollTo(0, targetScroll);
    }
  }

  scrubberTrack.addEventListener("mousedown", (e) => {
    isDraggingScrubber = true;
    seekToScrubberPosition(e.clientX);
  });

  window.addEventListener("mousemove", (e) => {
    if (isDraggingScrubber) {
      seekToScrubberPosition(e.clientX);
    }
  });

  window.addEventListener("mouseup", () => {
    isDraggingScrubber = false;
  });

  // Chapter Jump Buttons
  chapterButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const targetId = btn.getAttribute("data-target");
      if (targetId) {
        smoothScrollTo(targetId);
        playSynthesizedClick(280, 0.04);
      }
    });
  });

  // Return to top button
  const backToTopBtn = document.getElementById("back-to-top-btn");
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      smoothScrollTo("#hero");
    });
  }
}

// ============================================================================
// 13. INFINITE TOOLKIT MARQUEE
// ============================================================================
function initToolkitMarquee() {
  const track = document.getElementById("marquee-track");
  if (!track) return;

  let velocity = 1;
  window.addEventListener("wheel", (e) => {
    velocity = e.deltaY > 0 ? 2.5 : -2.5;
    setTimeout(() => { velocity = 1; }, 400);
  }, { passive: true });
}

// ============================================================================
// 14. LIVE VARANASI / IST CLOCK (FOOTER TELEMETRY)
// ============================================================================
function initVaranasiClock() {
  const clockEl = document.getElementById("studio-clock");
  if (!clockEl) return;

  function updateClock() {
    const now = new Date();
    // Format to Indian Standard Time (IST - UTC+5:30)
    const options = {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    };
    const istTime = new Intl.DateTimeFormat("en-GB", options).format(now);
    clockEl.textContent = `${istTime} IST`;
  }

  updateClock();
  setInterval(updateClock, 1000);
}

// ============================================================================
// 15. DIRECT CONTACTS & EMAIL CLIPBOARD TRANSMITTER
// ============================================================================
function initDirectContacts() {
  const copyBtn = document.getElementById("contact-copy-btn");
  const aboutCopyBtn = document.getElementById("about-copy-email");
  const downloadCvBtn = document.getElementById("download-cv-btn");

  function copyEmail() {
    const email = CONFIG.creator.email;
    navigator.clipboard.writeText(email).then(() => {
      showToast(`Copied ${email} to clipboard!`);
      const copyLabel = document.getElementById("copy-btn-label");
      if (copyLabel) {
        copyLabel.textContent = "COPIED!";
        setTimeout(() => { copyLabel.textContent = "COPY"; }, 2000);
      }
      playSynthesizedClick(520, 0.06);
    }).catch(() => {
      showToast(`Contact: ${email}`);
    });
  }

  if (copyBtn) copyBtn.addEventListener("click", copyEmail);
  if (aboutCopyBtn) aboutCopyBtn.addEventListener("click", copyEmail);

  if (downloadCvBtn) {
    downloadCvBtn.addEventListener("click", () => {
      showToast("Downloading Nishant Agrawal Editorial Specs PDF...");
      // In production, opens downloadable PDF spec sheet
    });
  }
}

// ============================================================================
// 16. INTERACTIVE CONTACT INTAKE FORM
// ============================================================================
function initContactForm() {
  const form = document.getElementById("project-intake-form");
  const disciplinePills = document.querySelectorAll(".discipline-pill");
  const budgetPills = document.querySelectorAll(".budget-pill");
  const selectedDisciplineInput = document.getElementById("selected-discipline");
  const selectedBudgetInput = document.getElementById("selected-budget");

  // Discipline selection
  disciplinePills.forEach((pill) => {
    pill.addEventListener("click", () => {
      disciplinePills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      if (selectedDisciplineInput) {
        selectedDisciplineInput.value = pill.getAttribute("data-discipline");
      }
      playSynthesizedClick(300, 0.03);
    });
  });

  // Budget selection
  budgetPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      budgetPills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      if (selectedBudgetInput) {
        selectedBudgetInput.value = pill.getAttribute("data-budget");
      }
      playSynthesizedClick(300, 0.03);
    });
  });

  // Form submission
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nameInput = document.getElementById("client-name");
      const emailInput = document.getElementById("client-email");
      const briefInput = document.getElementById("project-brief");
      const submitBtn = document.getElementById("submit-brief-btn");

      let isValid = true;

      // Validation
      [nameInput, emailInput, briefInput].forEach((input) => {
        if (!input.value.trim()) {
          input.classList.add("has-error");
          isValid = false;
        } else {
          input.classList.remove("has-error");
        }
      });

      if (!isValid) {
        showToast("Please complete the required fields.");
        return;
      }

      // Simulate submission dispatch
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.querySelector(".submit-text").textContent = "TRANSMITTING BRIEF...";
      }

      setTimeout(() => {
        showToast("Project brief dispatched to Nishant! Expect response within 24 hours.");
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.querySelector(".submit-text").textContent = "DISPATCH PROJECT BRIEF";
        }
        playSynthesizedClick(600, 0.08);
      }, 1200);
    });
  }
}

// ============================================================================
// 17. KEYBOARD HOTKEYS & ACCESSIBILITY
// ============================================================================
function initHotkeys() {
  window.addEventListener("keydown", (e) => {
    // Avoid triggering when user is typing in form inputs
    if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
      return;
    }

    switch (e.key) {
      case " ":
        // Space toggles showreel if modal is open, or opens showreel
        const modal = document.getElementById("showreel-modal");
        if (modal && modal.hasAttribute("open")) {
          e.preventDefault();
          toggleReelPlay();
        } else if (!e.target.closest("button, a")) {
          e.preventDefault();
          openShowreel();
        }
        break;

      case "Escape":
        closeShowreel();
        if (typeof window.closeSideNavTray === "function") {
          window.closeSideNavTray();
        }
        closeCaseStudyDrawer();
        break;

      case "1":
      case "d":
      case "D":
        applyTheme("dark");
        showToast("Theme: DARK MODE");
        break;

      case "2":
      case "l":
      case "L":
        applyTheme("light");
        showToast("Theme: LIGHT MODE");
        break;

      case "t":
      case "T": {
        const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
        const nextTheme = currentTheme === "light" ? "dark" : "light";
        applyTheme(nextTheme);
        showToast(`Theme: ${nextTheme.toUpperCase()} MODE`);
        break;
      }
    }
  });
}

// ============================================================================
// 18. MICRO-TOAST NOTIFICATION ENGINE
// ============================================================================
function showToast(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <span class="toast-dot" style="width: 6px; height: 6px; border-radius: 50%; background-color: var(--accent);"></span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("toast-exit");
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 3200);
}

// ============================================================================
// 19. HAPTIC AUDIO SYNTHESIZER (WEB AUDIO API - ZERO EXTERNAL ASSETS)
// ============================================================================
let audioCtx = null;

function playSynthesizedClick(freq = 400, duration = 0.05) {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(80, audioCtx.currentTime + duration);

    gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (err) {
    // Audio synthesis fallback silent
  }
}
