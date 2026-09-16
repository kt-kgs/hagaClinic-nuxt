# 芳賀胃腸科内科クリニック Webサイト

Nuxt 3 + Nuxt Content + UnoCSS で構築。

## お知らせを追加するときのファイル名

`content/news/` に追加するファイルは `YYMMDD-英小文字のスラッグ.md` にすること。

```
260916-influenza-vaccination.md  →  /news/260916-influenza-vaccination
```

ドット区切り（`260916.influenza-vaccination.md`）にすると日付がURLから消え、毎年繰り返すお知らせで翌年の記事とURLが衝突して表示されなくなる。

詳細と背景は [CLAUDE.md](./CLAUDE.md) を参照。

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
