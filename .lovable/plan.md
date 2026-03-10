

## Plan: Add Light/Dark Mode Toggle

Currently the site only has dark mode CSS variables (`:root` defines dark colors). The `next-themes` package is already installed but not used for theme switching.

### Changes

1. **`src/index.css`** — Add a light mode `:root` with light colors, move current dark values under `.dark`
2. **`index.html`** — Add `class="dark"` to `<html>` so dark is default
3. **`src/App.tsx`** — Wrap app with `<ThemeProvider>` from `next-themes` (attribute="class", defaultTheme="dark")
4. **`src/components/layout/Navbar.tsx`** — Add a Sun/Moon toggle button in the desktop nav (right side, before Sign In) and in the mobile drawer, using `useTheme()` from `next-themes`

### Light Mode Color Palette
- Background: white/near-white (`0 0% 100%`)
- Foreground: dark (`240 10% 10%`)
- Card: light gray (`0 0% 97%`)
- Border: light gray (`240 6% 90%`)
- Muted: medium gray tones
- Primary stays the same red (`1 76% 55%`)

### Glass card & utility adjustments
- The `glass-card` utility and section backgrounds use `bg-card/60`, `bg-background` etc. which will automatically adapt via CSS variables — no component changes needed beyond the navbar toggle.

