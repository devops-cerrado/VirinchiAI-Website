

## Plan: Replace V Logo with Uploaded Virinchi AI Logo

Copy the uploaded logo to `src/assets/virinchi_full_logo_bg_removed.png`, then update both `Navbar.tsx` and `Footer.tsx` to replace the `<div>` containing the "V" letter with an `<img>` tag importing the logo. Remove the "Virinchi AI" text span since the logo already contains the brand name.

### Files to change:
1. **Copy** `user-uploads://virinchi_full_logo_bg_removed.png` → `src/assets/virinchi_full_logo_bg_removed.png`
2. **`src/components/layout/Navbar.tsx`** — Import the logo, replace the "V" div + "Virinchi AI" text with `<img src={logo} alt="Virinchi AI" className="h-8" />`
3. **`src/components/layout/Footer.tsx`** — Same replacement

