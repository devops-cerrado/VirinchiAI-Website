

## Plan: Add Pricing Tab and Reorganize Content

### Changes

1. **`src/constants/navLinks.ts`** — Add `{ label: "Pricing", path: "/pricing" }` between Solutions and About Us.

2. **Create `src/pages/PricingPage.tsx`** — New page with the Pricing section and CTABanner.

3. **`src/App.tsx`** — Add route `<Route path="/pricing" element={<PricingPage />} />`.

4. **`src/pages/Home.tsx`** — Remove the `<Pricing />` component (keep all other sections flowing in sequence).

5. **`src/pages/SolutionsPage.tsx`** — Remove the `<Pricing />` import and component.

6. **Spelling/grammar fixes** — Review all section content for typos and correct sentences across `solutionsData.ts`, `agentData.ts`, `pricingData.ts`, and section components.

