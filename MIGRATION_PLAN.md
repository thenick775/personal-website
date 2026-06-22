# personal-website-v3 Migration Plan

## Goal

Rebuild the current personal site in Astro with the same overall vibe, while improving:

- structure and maintainability
- accessibility
- performance and SEO
- responsive layout behavior
- component cleanliness
- visual polish and future motion support

The matrix animation is a first-class requirement. We will either preserve it directly or replace it with a better-performing version that keeps the same feel.

## Source of truth

Current source site:

- `/Users/nickvancise/Desktop/vancise_prof/personal-website-v2`

New Astro site:

- `/Users/nickvancise/Desktop/personal-website-v3`

## Migration principles

1. Preserve content and overall tone first.
2. Do not preserve legacy implementation details unless they are still good.
3. Replace Bootstrap/jQuery-era patterns with static-first Astro components.
4. Fix semantics and accessibility as components are rebuilt.
5. Keep JS minimal and load interactive code only where needed.
6. Preserve or upgrade the matrix hero effect.

## Cleanup targets from v2

- Global CSS sprawl in `static/css/personal.css`
- Hugo shortcode coupling for projects and skills
- Mobile nav collapse alignment/behavior
- Project list horizontal scroll behavior
- Non-semantic clickable `div` controls
- Popup/modal accessibility and structure
- Legacy dependency weight from Bootstrap and jQuery

## Planned v3 architecture

### Top-level pages

- `src/pages/index.astro`

### Layouts

- `src/layouts/SiteLayout.astro`

### Components

- `src/components/site/TopNav.astro`
- `src/components/site/Footer.astro`
- `src/components/hero/HeroSection.astro`
- `src/components/hero/MatrixCanvas.astro`
- `src/components/sections/AboutSection.astro`
- `src/components/sections/SkillsSection.astro`
- `src/components/sections/ProjectsSection.astro`
- `src/components/projects/ProjectCard.astro`
- `src/components/projects/ProjectDetailDialog.astro`
- `src/components/sections/ContactSection.astro`

### Data/content

- `src/data/site.ts`
- `src/data/projects.ts`
- `src/data/skills.ts`
- `src/data/contact.ts`

### Styles

- `src/styles/tokens.css`
- `src/styles/global.css`
- component-scoped CSS inside Astro components where practical

## Delivery phases

### Phase 1: foundation

- remove Astro starter/demo content
- set up site layout, metadata, and global tokens
- define data model for hero/about/skills/projects/contact

### Phase 2: parity rebuild

- rebuild header and nav
- rebuild hero and matrix canvas
- rebuild about and skills sections
- rebuild project cards and project detail UI
- rebuild contact/footer area

### Phase 3: quality pass

- accessibility pass
- image optimization pass
- remove unnecessary JS
- verify responsive behavior
- verify Lighthouse improvements

### Phase 4: refinement

- improve typography and spacing
- improve project card presentation
- add tasteful motion and transitions
- upgrade matrix effect if beneficial

## Matrix animation direction

Current implementation lives in v2 here:

- `static/js/matrix.js`

Plan:

1. Extract its logic into a dedicated Astro-friendly client component.
2. Remove coupling to global functions where possible.
3. Keep lazy rendering behavior.
4. Improve resize handling and cleanup.
5. Make it safe for reduced-motion preferences if needed.

## Success criteria

- Site stays mostly static.
- SEO metadata is clean and explicit.
- JS payload is dramatically smaller than v2.
- No Bootstrap or jQuery dependency is required.
- Nav, projects, and dialog interactions are accessible.
- Matrix hero effect is preserved or improved.
- Theme refinement can happen on a clean base instead of on legacy structure.
