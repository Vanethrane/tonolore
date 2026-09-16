# Ton-o-Lore

Knowledge-graph rabbit holes: subjects (One Piece today; Star Wars, basketball, etc. next) expand through entities and typed connections.

## Stack

- **Client:** React + Vite (`client/`)
- **Server:** Express + PostgreSQL (`server/`)
- **Seeds / generators:** `scripts/`

## Pipeline

```
seed subject  →  entities + relationships
generate pages  →  HTML in `pages`
API + React UI  →  browse connections
```

## Seed a subject

Subject packages live in `scripts/subjects/<id>/`:

```
scripts/subjects/one-piece/
  index.js   # id, name, rootSlug, theme, copyright, aliases
  data.js    # entities + explicit relationships
```

Copy `scripts/subjects/_template/` for a new subject, then:

```bash
cd server
npm run seed:subject -- one-piece
npm run generate:pages:onepiece
```

## Expand One Piece deeper

```bash
cd server
npm run expand:onepiece    # Wikidata universe + Wikipedia fair-use thumbs
npm run seed:onepiece
npm run generate:pages:onepiece
```

Images are **fair-use identification thumbnails** (≤360px Wikipedia pageimages): credited, labeled `fair_use`, used only for commentary/identification — not free artwork.

## Dev

```bash
# terminal 1
cd server && npm run dev

# terminal 2
cd client && npm run dev
```

API defaults to `http://localhost:3001`. Set `DATABASE_URL` in the repo-root `.env`.

## Static docs preview

To rebuild the database-backed pages into `docs/` and serve the static site locally:

```bash
node serve-docs.js
```

This will export the current database content into the static HTML pages under `docs/` and then serve the site locally at `http://localhost:4173/`.

For GitHub Pages, the workflow already uploads the `docs/` folder as the artifact. The static pages should be published from `docs/`, not from the repo root.
