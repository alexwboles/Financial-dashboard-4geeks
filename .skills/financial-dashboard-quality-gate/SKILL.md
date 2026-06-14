---
name: financial-dashboard-quality-gate
description: Apply a release-readiness quality gate for the Financial Dashboard frontend by enforcing accessibility, performance, and metadata checks before merge.
---

# Financial Dashboard Quality Gate

## Objective

Ensure every frontend change maintains baseline accessibility, performance, and deployment-readiness standards for this project.

## Inputs

- Modified frontend files under `frontend/src` and `frontend/index.html`
- Current branch diff (`git diff`)
- Build output from `npm run build`

## Outputs

- A short checklist result with pass/fail status for each criterion
- Concrete file edits required to fix failures
- A final validation note confirming build success and no regressions in introduced patterns

## Acceptance criteria

1. Accessibility semantics:
- Landmark structure includes a unique main region.
- Error states use live-region semantics (`role="alert"` or polite/assertive `aria-live`).
- Decorative icons are hidden from assistive tech.

2. Keyboard and focus:
- A skip-link path to the main content exists.
- Focus visibility is preserved and clearly styled.

3. Chart accessibility:
- Each chart has an accessible text summary via figure/figcaption or equivalent labeling.

4. Metadata and deployment hygiene:
- `frontend/index.html` includes a meaningful title and description.

5. Performance-aware frontend behavior:
- Heavy visualization components are loaded lazily or split from the critical entry bundle when feasible.

6. Validation:
- `npm run build` completes successfully.
