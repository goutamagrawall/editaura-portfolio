# EDITAURA — Cinematic NLE Design System & Token Specification
**Project:** EDITAURA (Cinematic Portfolio for Nishant Agrawal — @editaura36)  
**Role:** Award-Winning Creative Technologist, Art Director & Staff Frontend Engineer  
**Date:** October 2026  
**Document:** `DESIGN.md` (System Tokens & Aesthetic Protocol)

---

## 1. Design Philosophy & Core Metaphor

### "The Digital Cutting Room" (NLE Workspace)
EDITAURA is built on the physical and psychological reality of high-end Non-Linear Editing suites (DaVinci Resolve Studio, Adobe Premiere Pro, Avid Media Composer, After Effects). The user does not merely visit a web page; they enter an active, dark-room timeline session.

- **Cadence & Rhythm:** Pacing mirrors film editing. Hard-cuts for hero transitions, J-cuts (audio/text preceding visual reveal), and fluid 24fps scrub dynamics.
- **Precision Engineering:** Monospaced SMPTE timecodes (`HH:MM:SS:FF`), SMPTE safe-title zones, broadcast test overlays, track headers (V3, V2, V1, A1, A2), and VU audio meters.
- **Tactile Feedback:** Backlit console buttons, metallic anodized surface sheens, magnetic cursor snapping, and instant color LUT switching.

---

## 2. Color Systems & Dark / Light Theme Engine

The interface features an instantaneous, persistent Dual-Theme Engine switching between **Dark Mode** (the default darkroom NLE console) and **Light Mode** (architectural daylight studio). Both modes preserve the signature **Electric Cyan** accent identity while maintaining strict WCAG AA/AAA contrast ratios. Changes are saved to `localStorage` and smoothly transitioned via CSS variables (`cubic-bezier(0.16, 1, 0.3, 1)`).

### Theme 01: Default "Dark Mode" (Obsidian Darkroom & Electric Cyan)
*Inspired by professional editing suites (DaVinci Resolve, Premiere Pro) in calibrated low-ambient conditions. Prevents eye fatigue during long timeline sessions.*

| Token | Value | Semantic Intent |
|---|---|---|
| `--bg-primary` | `#0B0B0C` | Deep obsidian darkroom floor |
| `--bg-surface` | `#151517` | Anodized console deck, timeline clips, cards |
| `--bg-surface-elevated` | `#1E1E22` | Modal trays, tooltips, active states |
| `--text-primary` | `#EDEAE3` | Warm bone white (95% luminance, zero harsh glare) |
| `--text-muted` | `#8A8A8F` | Neutral 18% gray reference point |
| `--text-dim` | `#545458` | Secondary timecodes, inactive tracks, metadata |
| `--accent` | `#56DEFF` | Electric Cyan (SMPTE Tally / Precision Laser) |
| `--accent-rgb` | `86, 222, 255` | RGB tuple for procedural glows and canvas |
| `--accent-glow` | `rgba(86, 222, 255, 0.32)` | Glow for recording markers & active playhead |
| `--btn-text` | `#0B0B0C` | High-contrast dark text on electric cyan buttons |
| `--hairline` | `rgba(237, 234, 227, 0.08)`| Timeline grid lines, 1px separation borders |
| `--hairline-strong`| `rgba(237, 234, 227, 0.18)`| Focused frames, safe-area bounds |
| `--badge-bg` | `rgba(86, 222, 255, 0.08)`| Pill indicators, clip badges |

### Theme 02: "Light Mode" (Daylight Studio Architecture)
*High-contrast editorial daytime studio aesthetic with pristine white cards, deep obsidian typography, and luminance-balanced electric cyan.*

| Token | Value | Semantic Intent |
|---|---|---|
| `--bg-primary` | `#F4F6F8` | Architectural daylight slate floor |
| `--bg-surface` | `#FFFFFF` | Crisp white console modules & elevated cards |
| `--bg-surface-elevated` | `#ECEEF1` | Recessed timeline tracks & active hover surfaces |
| `--text-primary` | `#0D1217` | Deep obsidian ink (WCAG AAA contrast on light surfaces) |
| `--text-muted` | `#4B5565` | Refined slate gray (WCAG AA compliant for descriptions) |
| `--text-dim` | `#7A8799` | Subdued metadata, SMPTE secondary marks |
| `--accent` | `#009BC9` | Calibrated Electric Cyan (high contrast against light bg) |
| `--accent-rgb` | `0, 155, 201` | RGB tuple for light-mode glows and canvas |
| `--accent-glow` | `rgba(0, 155, 201, 0.25)` | Daylight cyan ambient halo |
| `--btn-text` | `#FFFFFF` | Crisp white text on cyan CTA buttons |
| `--hairline` | `rgba(13, 18, 23, 0.08)` | Delicate 1px structural dividing lines |
| `--hairline-strong`| `rgba(13, 18, 23, 0.16)` | Viewfinder crop marks & card borders |
| `--badge-bg` | `rgba(0, 155, 201, 0.08)` | Subtly tinted status pill backgrounds |

---

## 3. Typography Hierarchy & Scaled System

### Font Stacks
1. **Display & Editorial Headlines:** `'Instrument Serif', 'Playfair Display', serif`
   - Expresses director-level distinction, cinematic taste, dramatic editorial emphasis.
2. **Interface, Body & Narrative:** `'Space Grotesk', 'Inter', -apple-system, sans-serif`
   - Expresses clean technical legibility, geometric modernism, high readability at small scales.
3. **SMPTE Timecode, Metrics & HUD Data:** `'JetBrains Mono', 'SF Mono', Consolas, monospace`
   - Expresses sub-frame accuracy, timecode counters, file sequences, frame rates, and NLE tracks.

### Scale Matrix

| Level | Size (Desktop / Mobile) | Line Height | Letter Spacing | Font Family | Usage |
|---|---|---|---|---|---|
| `Display 1` | `clamp(3.2rem, 7vw, 6.8rem)` | 1.02 | `-0.035em` | Instrument Serif (Italic) | Hero statements, Cold Open |
| `Display 2` | `clamp(2.4rem, 4.5vw, 4.2rem)` | 1.1 | `-0.025em` | Instrument Serif / Space Grotesk | Section headers, Chapter titles |
| `Heading 3` | `clamp(1.4rem, 2.5vw, 2.0rem)` | 1.25 | `-0.015em` | Space Grotesk | Card titles, Track headers |
| `Heading 4` | `1.15rem` | 1.4 | `0.02em` | Space Grotesk (600) | Drawer headers, Service modules |
| `Body Large` | `1.125rem` | 1.65 | `0.005em` | Space Grotesk (400) | Editorial intros, About bio |
| `Body Base` | `0.95rem` | 1.6 | `0.01em` | Space Grotesk (400) | Project descriptions, Reviews |
| `Timecode HUD`| `clamp(0.85rem, 1.2vw, 1.05rem)`| 1.0 | `0.08em` | JetBrains Mono (700) | SMPTE counter `00:00:00:00` |
| `Micro Metadata`| `0.72rem` | 1.3 | `0.1em` | JetBrains Mono (500) | Safe area markers, aspect tags |

---

## 4. Layout Grids & Cinema Safe-Area Geometry

- **Aspect Ratio Standard:** `2.39:1` (Anamorphic CinemaScope) for hero frames; `16:9` and `9:16` for video deliverables.
- **HUD Safe Areas:**
  - 80% Action Safe & 90% Title Safe guides visible on Cold Open hero frame.
  - Viewfinder crosshair at `x: 50%, y: 50%` with tick marks at 20px, 40px offsets.
- **Layout Max Width:** Dynamic fluid canvas calibrated for native 100% display scale:
  - Mobile (`< 768px`): `100%`, `padding: 0 20px - 24px`
  - Tablet (`768px - 1024px`): `--container-max-w: 1440px`, `padding: 0 32px 0 76px` (clearing side rail)
  - Desktop (`1025px - 1439px`): `--container-max-w: 1560px`, `padding: 0 40px 0 84px`
  - Large Desktop (`1440px - 1719px`): `--container-max-w: 1640px`, `padding: 0 48px 0 92px`
  - Full HD & Ultrawide (`>= 1720px`): `--container-max-w: 1760px`, `padding: 0 48px 0 92px`
- **HUD & Scrubber:** 100% full-bleed edge-to-edge hardware console spanning the entire monitor width.
- **NLE Track Grid:** CSS Grid with multi-track flex layers mimicking timeline tracks `V3`, `V2`, `V1`, `A1`, `A2`.

---

## 5. Motion Tokens & Physics

- **Lenis Smooth Scroll:** `lerp: 0.1`, `duration: 1.2`, `smoothTouch: false` (native touch scroll retained for zero iOS friction).
- **GSAP Easing Standards:**
  - Hard Cut Transition: `expo.out` (0.45s)
  - Color Grade Dissolve: `cubic-bezier(0.16, 1, 0.3, 1)` (400ms)
  - Modal Scale In: `back.out(1.2)` (0.5s)
  - Drawer Expansion: `power3.inOut` (0.4s)
- **Timecode-to-Scroll Math:**
  - Standard Project Duration: 3600 frames (2 minutes 30 seconds at 24fps) or dynamic 24fps calculation:
    `frames = Math.floor(scrollRatio * (24 * 60 * 2.5))` -> `[00:02:30:00]`.
- **Reduced Motion (`prefers-reduced-motion: reduce`):**
  - Instant opacity switches, Lenis disabled, cursor lag disabled, static frames.

---

## 6. Audio-Visual Immersion & Interactive Elements

- **Custom Cinema Cursor:** Dual-element ring + center dot with trailing physics. Dynamically mutates into state tags (`PLAY`, `VIEW`, `DRAG`, `SCRUB`, `LOG/REC`) on hoverable zones.
- **Procedural Film Grain:** Hardware-accelerated SVG noise texture overlay set to `pointer-events: none; opacity: 0.035; mix-blend-mode: overlay;`.
- **Before/After Split Slider:** Interactive dual-view comparing desaturated Log flat gamma (`C-Log3 / S-Log3`) against fully graded Rec.709 cinema master.
- **NLE Hotkeys:** Accessible keyboard shortcuts (`Space` to toggle reel, `Esc` to close modal/drawer/tray, `ArrowLeft/Right` for scrubber step, `1` / `D` for Dark Mode, `2` / `L` for Light Mode, `T` to toggle theme).
