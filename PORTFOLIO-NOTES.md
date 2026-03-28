# Portfolio Update Notes

## Adding new projects from RFP work

When an RFP leads to a built product (whether won or not, whether AHD or personal):

- **Won the bid**: Add as a live project (no demo label) once deployed
- **Didn't win / speculative build**: Add as a demo (`demo: true` in portfolio.ts)
- **In progress**: Add with an "In Progress" note once there's something to show

This applies to both AHD projects and personal/solo builds. If you built it, it belongs in the portfolio.

### Future: categorize by type
If the portfolio grows significantly, consider adding category filters (e.g., Dashboards, Municipal Websites, Community Platforms, Non-Gov) instead of a single flat grid.

### Where to update
- `src/data/portfolio.ts` — add the project entry
- `public/portfolio/` — add a screenshot (1420x722, use `npx capture-website-cli`)
