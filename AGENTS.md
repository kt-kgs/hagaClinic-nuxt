# AGENTS.md

芳賀胃腸科内科クリニックのWebサイト（Nuxt 3 + Nuxt Content + UnoCSS）。記事は `content/` 配下の Markdown で、Nuxt Studio から編集されることもある。

## content/news/ のファイル名

- 新規ファイルは `YYMMDD-英小文字のスラッグ.md`（例: `260916-influenza-vaccination.md`）。ドット区切りにすると Nuxt Content が日付をURLから取り除くため、翌年の同じ内容のお知らせとURLが衝突し、新しい記事が表示されなくなる。
- 日付は frontmatter の `date` と揃える。
- 既存のドット区切りファイルはリネームしない。公開中のURLが変わるため、一括対応は Issue #9 で保留中。
- 規則に反するファイル名を見つけたら指摘する。

## content/ のその他のディレクトリ

`inspections/` `conditions/` `doctors/` の `100.` などの数字プレフィックスは表示順の制御用。URLには現れないのでリネームしない。

## 開発

```bash
npm run dev    # http://localhost:3000
npm run build
```
