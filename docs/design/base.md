# Design System Prompt: Compact Mobile-Only System

## 1. System Core & Colors

* 
**Concept:** High-contrast mobile-only layout using a strict dual-color hierarchy for conversion architecture. Grayscale base with zero decorative accent or semantic validation colors.


* **Tokens:**
* 
`{colors.primary}`: `#000000` (All primary CTAs, active states, dark theme toggles, footers/bottom navs) 


* 
`{colors.canvas}`: `#ffffff` (Default light surface background) 


* 
`{colors.canvas-soft}`: `#efefef` / `#f3f3f3` (Chips, input fields, subtle tertiary pills) 


* 
`{colors.ink}`: `#000000` (Primary text on light surfaces) 


* 
`{colors.body}`: `#5e5e5e` (Secondary copy, captions, subheaders, icons) 


* 
`{colors.on-dark}`: `#ffffff` (All text on dark bands/surfaces) 


* 
`{colors.link}`: `#0000ee` (Browser-default blue for inline legal text only) 





## 2. Typography (Pretendard Only)

* 
**Family:** `Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif`.


* 
**Rules:** Sentence-case for headings/buttons. No all-caps for display typography. Neutral tracking (no letter-spacing adjustments).


* **Hierarchy:**
* `{typography.display-xxl}`: 52px | Weight 700 | LH 64px (Hero numbers/ratios) 


* `{typography.display-xl}`: 36px | Weight 700 | LH 44px (Main headlines) 


* `{typography.display-md}`: 24px / 20px | Weight 700 | LH 32px (Card & Section titles) 


* `{typography.body-lg}`: 18px | Weight 500 | LH 24px (Lead text, bottom actions) 


* `{typography.body-md}`: 16px | Weight 400 | LH 24px (Default body copy) 


* `{typography.body-md-strong}`: 16px | Weight 500 | LH 20px (Buttons, bold inline items) 


* `{typography.body-sm}`: 14px | Weight 400 | LH 20px (Captions, labels, metadata) 





## 3. Shapes & Elevation

* **Border Radius:**
* 
`{rounded.none}`: 0px (Full-bleed webviews, edge-to-edge mobile sections) 


* 
`{rounded.md}`: 8px (Form fields, text inputs, images) 


* 
`{rounded.xl}`: 16px (Canonical mobile card radius — content cards, bento blocks) 


* 
`{rounded.pill}`: 999px (Interactive elements — default CTAs, tags, chips) 




* **Elevation Layers:**
* 
`Level 0 (Flat)`: Default for standard content surfaces.


* 
`Level 1 (Subtle)`: `rgba(0,0,0,0.12) 0px 4px 16px 0px` (List cards, secondary actions).


* 
`Level 2 (Deep)`: `rgba(0,0,0,0.16) 0px 4px 16px 0px` (Sticky/Floating bottom action areas).





## 4. Spacing & Mobile Layout Rhythm

* 
**Base Scale:** 4px increments. `{spacing.sm}`: 8px | `{spacing.md}`: 12px / 16px | `{spacing.lg}`: 16px / 24px | `{spacing.2xl}`: 24px | `{spacing.3xl}`: 32px.


* **Layout Rhythm:**
* Inter-card structural gaps: `{spacing.3xl}` (32px). Internal card stack padding: `{spacing.sm}` (8px).




* **Mobile Constraints (< 600px):**
* Full edge-to-edge container adaptation with consistent inline screen padding (gutter: 16px).


* Grid/List items collapse strictly to vertical 1-up stacks.


* Navigation collapses to a fixed top header (14rem/56px height) and a fixed bottom native-feeling tab bar.


* Touch targets optimized strictly to `≥ 44px` layout height for accessible tapping.





## 5. Core Components Block

* `button-primary`: Fill `{colors.primary}` | Text `{colors.on-dark}` | Radius `{rounded.pill}` | Font `{typography.body-md-strong}` | Min-height: 56px.


* `button-secondary`: Fill `{colors.canvas}` | Text `{colors.ink}` | Radius `{rounded.pill}` | Border 1px `#e2e2e2`.


* `button-subtle`: Fill `{colors.canvas-soft}` | Text `{colors.ink}` | Radius `{rounded.pill}`.


* `card-content`: Fill `{colors.canvas}` | Radius `{rounded.xl}` | Padding `{spacing.2xl}`.


* `text-input`: Fill `{colors.canvas-soft}` | Text `{colors.ink}` | Radius `{rounded.md}` | Padding `{spacing.lg}` | Min-height: 56px.



## 6. Do's and Don'ts

* 
**Do:** Use pure black pills for high-priority mobile actions exclusively. Maintain 4:3 hard-edge layout proportions for in-app imagery. Ensure strict touch target minimum heights.


* 
**Don't:** Introduce decorative gradient fills, secondary accent colors, or semantic status tones. Do not apply dropshadows to standard cards unless elevated via Level 1 or 2. Do not use horizontal multi-link navbar components.