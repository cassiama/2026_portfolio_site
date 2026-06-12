# 2026 Portfolio Site

A portfolio site styled as an homage to the menu UI of **The King of Fighters XI**
(PS2 port) — peak Y2K interface design. The built site is **pure HTML and CSS:
zero client-side JavaScript**. The spinning 3D disc, the cross-page disc/portrait
morphs (CSS View Transitions), and the About-page color picker (`:has()` + radio
inputs) are all stylesheet work.

## Stack

- [Eleventy 3](https://www.11ty.dev/) + Nunjucks templates (build-time only)
- All content lives in YAML under `src/_data/` — no template edits needed to
  update it
- Blog posts are markdown files in `src/blog/posts/`

## Commands

```sh
pnpm install
pnpm dev      # dev server with live reload
pnpm build    # static build into _site/
```

## Editing content

| What | Where |
|---|---|
| Name, menu, social links | `src/_data/site.yaml` |
| About-page facts, bio, tagline | `src/_data/about.yaml` |
| Projects (one block per project) | `src/_data/projects.yaml` |
| Resume sections | `src/_data/resume.yaml` |
| Blog posts | `src/blog/posts/*.md` (front matter: `title`, `date`, `tags`) |

Anything marked `PLACEHOLDER` in the YAML is fake data waiting for the real
thing. The resume "Download PDF" button points at `src/assets/resume.pdf` —
drop a real file there (the directory is passthrough-copied).

## Page ⇄ KOF XI screen map

| Page | Screen |
|---|---|
| `/` | Main Menu (face-on spinning disc, pill menu) |
| `/about/` | Character Setting (portrait box, stat rows, color edit palette) |
| `/projects/` | Character select (portrait ring grid, orbiting text) |
| `/projects/<slug>/` | VS / order select (giant index number, info column) |
| `/blog/` | Challenge grid (numbered coins over the tilted disc) |
| `/blog/<slug>/` | Next Stage (mosaic squares, blue bars) |
| `/contact/` | Continue Service layout (circle icons + callout lines) |
| `/resume/` | Credits (green circles, ◆ headings, rounded font) |

## Fonts

Self-hosted in `src/fonts/`: Archivo Black, Jost (variable), M PLUS Rounded 1c
(latin subsets from Google Fonts, OFL) and WarioWare Inc (public domain, via
fontspace f41008).

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds with a
`--pathprefix` of the repo name and publishes to GitHub Pages (enable
**Settings → Pages → Source: GitHub Actions** once). For a user-root site or
custom domain, delete the `--pathprefix` flag from the workflow.
