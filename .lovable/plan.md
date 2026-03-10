

## Plan: Consolidate All Content onto Landing Page with Anchor Navigation

### Overview
Merge all page content into the Home page as sections with `id` attributes. Convert nav links from route-based (`/platform`) to anchor-based (`/#platform`) so clicking scrolls to the relevant section. Keep Pricing as a separate route per the previous request.

### Changes

#### 1. `src/pages/Home.tsx`
- Add a **WhyVirinchi** section (inline the content from `WhyVirinchiPage.tsx` — the reasons grid)
- Add an **About** section (inline the content from `AboutPage.tsx` — stats + mission/global cards)
- Wrap each major section in a `<div id="...">` or add `id` to existing section wrappers
- Section order: Hero → Why Virinchi → Pre-Built Agents → Platform → Bolt → Agent Studio → Data Integration → Governance → Solutions → About → CTA

#### 2. `src/constants/navLinks.ts`
- Change paths to hash anchors for sections on the landing page:
  - `"/#why-virinchi"`, `"/#platform"`, `"/#solutions"`, `"/pricing"` (stays as route), `"/#about"`

#### 3. `src/components/layout/Navbar.tsx`
- Replace `<NavLink>` with `<a>` tags for hash links, keeping `<NavLink>` only for `/pricing`
- Add smooth scroll behavior on click for hash links
- Handle active state based on scroll position or simplify to just highlight on click

#### 4. `src/App.tsx`
- Remove routes for `/why-virinchi`, `/platform`, `/solutions`, `/about`
- Keep `/pricing` route
- Keep `Home` as the `/` route

#### 5. Section components (`Platform.tsx`, `Solutions.tsx`, etc.)
- Add `id` attributes to each section's root element (e.g., `id="platform"`, `id="solutions"`)

#### 6. Cleanup
- Delete standalone pages: `WhyVirinchiPage.tsx`, `PlatformPage.tsx`, `SolutionsPage.tsx`, `AboutPage.tsx` (or leave unused)

