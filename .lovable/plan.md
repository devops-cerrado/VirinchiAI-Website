

## Plan: Match Website Color Scheme to Virinchi Logo (Purple & Accents)

### Overview
Replace the current red-based color scheme with a purple/violet primary palette that matches the Virinchi logo colors. This touches CSS variables, utility classes, gradients, and hardcoded color values across the codebase.

### Color Palette
- **Primary**: `hsl(270, 70%, 55%)` — vibrant purple (replacing red `hsl(1, 76%, 55%)`)
- **Primary light gradient end**: `hsl(280, 80%, 70%)` — lighter purple/violet for gradients
- **Accent glow**: purple-toned glows and shadows
- **Background blurs**: purple-tinted instead of red/purple-900

### Changes

#### 1. `src/index.css` — CSS Variables
- Light mode: Change `--primary` from `1 76% 55%` to `270 70% 55%`, `--accent` same, `--ring` same
- Dark mode: Same primary/accent/ring updates
- Update `--sidebar-primary` and `--sidebar-ring` in both modes
- Rename `.gradient-text-red` → `.gradient-text-brand` with purple gradient
- Rename `.glow-red` → `.glow-brand` with purple box-shadow
- Update scroll progress bar color (already uses `var(--primary)`, so auto)

#### 2. `tailwind.config.ts` — Keyframes
- Update `pulse-glow` keyframe to use `var(--primary)` (already does, so no change needed)

#### 3. `src/components/sections/Hero.tsx`
- Change `bg-purple-900/20` blur to a matching purple shade (it's already purple, keep it)
- Update `gradient-text-red` class usage to `gradient-text-brand`

#### 4. `src/components/sections/CTABanner.tsx`
- Change hardcoded `hsl(1 76% 55%)` and `hsl(1 76% 35%)` gradient to purple equivalents

#### 5. `src/components/sections/Pricing.tsx`
- `glow-red` class → `glow-brand`

#### 6. `src/components/layout/Navbar.tsx`
- Announcement bar uses `bg-primary/90` — works automatically via CSS var

#### 7. `src/components/FloatingDemo.tsx`
- Uses `animate-pulse-glow` — works automatically via CSS var

All other components use Tailwind's `text-primary`, `bg-primary`, `border-primary` etc., which will automatically update when CSS variables change. No modifications needed for those files.

### Files Modified
- `src/index.css` (CSS variables + utility classes)
- `src/components/sections/Hero.tsx` (gradient class rename)
- `src/components/sections/CTABanner.tsx` (hardcoded gradient colors)
- `src/components/sections/Pricing.tsx` (glow class rename)

