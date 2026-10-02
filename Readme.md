Role: Award-Winning Creative Technologist, Art Director, and Staff Frontend Engineer.
Project: "EDITAURA" — The Cinematic NLE Portfolio for Nishant.

### WORKFLOW PROTOCOL FOR ANTIGRAVITY AGENT
Execute this task strictly in four sequential phases:
1. PHASE 1 (System Tokens): Load `ui-ux-pro-max` and `frontend-design`. Create a root `DESIGN.md` defining the NLE design tokens, typography scale, and 3 color-grade schemes (Noir, Warm Film, Teal & Orange).
2. PHASE 2 (Architecture Plan): Generate `implementation_plan.md` outlining the DOM structure, timecode-to-scroll math (24fps), track system, and GSAP/Lenis interaction timeline.
3. PHASE 3 (Code Construction): Write the complete, production-ready code into `index.html`, `styles.css`, and `script.js`. Zero placeholders, zero truncated blocks, zero external build tools.
4. PHASE 4 (Autonomous QA via Puppeteer MCP): Spin up a local server, trigger Puppeteer MCP to take viewport screenshots at 375px, 768px, and 1440px, run an accessibility audit via `a11y-audit`, verify zero horizontal overflow, and confirm WCAG AA contrast.

---

## 1. BRAND IDENTITY & CLIENT SPECIFICATIONS
- Brand Name: EDITAURA (Derived from @editaura36)
- Creator: Nishant Agrawal
- Primary Roles: Video Editor | Colorist | Motion Designer | 3D Generalist
- Core Disciplines: Short-form Viral Content, Narrative Documentaries, High-Energy Music Videos, Brand Commercials
- Core Suite: Adobe Premiere Pro, After Effects, DaVinci Resolve, Blender
- Tone: High-fashion editorial, dark cinematic, technically precise, kinetic
- Direct Contacts & Channels:
  * Email: nishantagrawal12022007@gmail.com
  * Instagram: https://www.instagram.com/editaura36?stkn=MWk5ZmF1c3MxdnRrMQ==
  * YouTube: https://youtube.com/@editaura36-i3y?si=RJv3pDf4QzrNLRry
  * LinkedIn & Vimeo placeholders pre-wired into the config

---

## 2. THE CORE METAPHOR: "THE TIMELINE" (NON-LINEAR EDITOR INTERFACE)
The entire site behaves as an active timeline workspace inside an NLE:
1. Master HUD (Fixed Header):
   - Dynamic 24fps SMPTE Timecode counter `[00:00:00:00]` tied mathematically to total window scroll position:
     `totalFrames = Math.floor(scrollProgress * totalProjectFrames);`
   - Active Sequence / Clip name displaying current section tag (e.g., `SEQ_01_COLD_OPEN.mov`, `SEQ_03_SELECTED_CUTS.prproj`).
   - Live "REC" status badge with a rhythmic pulsing red indicator.
   - 3-Way "Color Grade" Look Switcher (Noir, Warm 35mm, Teal & Orange) that switches CSS root custom properties with a 400ms ease transition and persists in `localStorage`.
2. Playhead Scrubber (Fixed Footer HUD):
   - Hairline track with section blocks (Hero, Reel, Work, Grade, Tracks, Workflow, Toolkit, About, Reviews, Contact).
   - Draggable / clickable playhead cursor in accent color `#FF4B2B` that moves synchronously with scrolling.
   - Clicking any section block triggers a smooth camera move to that chapter.
3. Editorial Cuts & Cadence:
   - Cold Open / Hero: Hard cut letterbox intro (2.39:1 anamorphic frame).
   - Selected Work: J-Cut behavior where project titles and metadata enter 150ms before the visual plate reveals.
   - Before/After: Interactive split-screen split wipe.
   - Out Point (Footer): "00:23:59:24 — SEQUENCE COMPLETE. THAT'S A WRAP."

---

## 3. COLOR PALETTES & TYPOGRAPHY SYSTEM
Provide CSS custom properties scoped to `:root` and overridden via `[data-grade="..."]`:
- Base System (Default - Noir Slate):
  * `--bg-primary`: #0B0B0C (Deep Negative Void)
  * `--bg-surface`: #151517 (Anodized Console Black)
  * `--text-primary`: #EDEAE3 (Warm Bone White)
  * `--text-muted`: #8A8A8F (Neutral Gray)
  * `--accent`: #FF4B2B (Signal Red)
  * `--hairline`: rgba(237, 234, 227, 0.08)
- Warm Film Look (`[data-grade="warm"]`):
  * `--bg-primary`: #120F0D
  * `--bg-surface`: #1C1814
  * `--accent`: #E07A38
  * `--text-primary`: #F5EBE1
- Teal & Orange Look (`[data-grade="teal-orange"]`):
  * `--bg-primary`: #081014
  * `--bg-surface`: #0E1A20
  * `--accent`: #FF5A2B
  * `--text-primary`: #E0F2F1
- Typography via Google Fonts CDN:
  * Display Headline: 'Playfair Display' or 'Instrument Serif', italicized accents
  * Body / Narrative: 'Inter' or 'Space Grotesk'
  * Technical Metadata / Timecodes: 'JetBrains Mono'

---

## 4. SECTIONS (IN ORDER)
1. HERO ("Cold Open"):
   - 2.39:1 letterbox frame with camera crosshairs, safe-area lines, and corner focal markers.
   - Looping canvas/CSS generative video noise background with easy source override in config.
   - Rotating text mask headline: "I cut stories that [hold attention / move audiences / sell visions / leave marks]".
   - Dual CTAs: Primary magnetic "Watch Showreel", Secondary "Open Timeline".
2. SHOWREEL MODAL:
   - Custom styled cinema video player with play/pause, scrub bar, timecode tracking, volume slider, fullscreen toggle, and keyboard shortcuts (Space, Esc, Left/Right arrows).
3. SELECTED WORK (Filterable Grid):
   - Categories: All / Short-Form & Viral / Narrative & Doc / Music Video / Commercial.
   - 8 rich sample projects stored in a clean JS array.
   - Each project card features: sequence index (`01`, `02`), client, duration, aspect ratio tag (`9:16`, `16:9`), role badge, dynamic CSS gradient placeholder preview, and expanding case-study drawer (Challenge, Edit Technique, Retention Metric, Tools).
4. COLOR & EDIT BREAKDOWN (Before / After Slider):
   - Draggable split-view slider comparing Flat Log profile (`C-Log3 / S-Log3`) vs. Master Graded Look. Fully touch, mouse, and keyboard accessible (`ArrowLeft`, `ArrowRight`).
5. SERVICES ("The Tracks"):
   - Styled as an NLE Track Stack (V3: 3D & VFX, V2: Motion Design, V1: Master Narrative Cut, A1: Foley & Sound Mix, A2: Subtitles & Social Hooks).
   - Interactive expansion reveals deliverables, turnarounds, and starting parameters.
6. PROCESS ("The Cut Workflow"):
   - Assembly -> Rough Cut -> Director's Cut -> Color & Sound -> Final Master Delivery.
   - Horizontal timeline with milestone markers on desktop, vertical rail on mobile.
7. TOOLKIT (Infinite Tape Marquee):
   - Premiere Pro, After Effects, DaVinci Resolve, Blender, Audition, Photoshop, CapCut Pro.
   - Styled like backlit keyboard shortcuts. Direction reverses on wheel scroll.
8. ABOUT (The Editor's Bay):
   - Dual-column layout: Duotone portrait card with parallax effect alongside creative bio, downloadable CV link, and animated counter badges (+200M Views Generated, 4+ Years Cutting, 100% On-Time Delivery).
9. TESTIMONIALS ("Director Review Notes"):
   - Styled as NLE marker feedback cards with timecode stamps (e.g., `00:02:14:18 — "The pacing on this hook doubled our 3-second retention rate."`).
10. CONTACT ("Let's Roll Camera"):
    - Typographic contact form with instant validation, interactive budget selector, and Formspree/mailto toggle.
    - One-click "Copy Email" with micro-toast notification.
11. FOOTER ("The Out Point"):
    - System clock (Varanasi/IST or dynamic browser time), "AVAILABLE FOR WORK" pulsing diode, back-to-top playhead jump.

---

## 5. MOTION, ACCESSIBILITY & TECHNICAL REQUIREMENTS
- Smooth scrolling via Lenis CDN and scroll-triggered animations via GSAP / ScrollTrigger.
- Interactive Custom Cursor: Smooth lagging ring displaying contextual verbs (`PLAY`, `DRAG`, `VIEW`). Auto-disabled on touch devices.
- Subtle procedural film grain overlay via CSS SVG filter.
- Full respect for `@media (prefers-reduced-motion: reduce)`.
- All editable settings isolated in a global `const CONFIG = { ... }` at line 1 of `script.js`.
- Deliverables: 3 complete files (`index.html`, `styles.css`, `script.js`). Do not truncate any code.