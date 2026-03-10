

## Plan: Add Light/Dark Mode Toggle

### Changes

1. **`src/index.css`** — Current dark values become light `:root` defaults; add `.dark` class with the existing dark palette
2. **`index.html`** — Add `class="dark"` to `<html>` so dark is the default
3. **`src/App.tsx`** — Wrap app with `<ThemeProvider>` from `next-themes` (attribute="class", defaultTheme="dark")
4. **`src/components/layout/Navbar.tsx`** — Add Sun/Moon toggle button before "Sign In" on desktop and in mobile drawer, using `useTheme()`

### Light Mode Colors (`:root`)
- Background: `0 0% 100%`, Foreground: `240 10% 10%`
- Card: `0 0% 97%`, Border: `240 6% 90%`
- Muted: `220 9% 75%` / foreground `220 9% 40%`
- Primary stays `1 76% 55%`

### No other component changes needed
CSS variable-based classes (`bg-background`, `text-foreground`, `glass-card`, etc.) will automatically adapt.

