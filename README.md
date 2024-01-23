# Whitepaper Template


- uses include-files lua filter to recursively include referenced file
https://github.com/pandoc/lua-filters/tree/master/include-files

- csv based glossary
- abbreviated glossary references with glossary-gls
- index
- table of contents
- markdown transclusion
- front page and logo

## Add cover page

add coverpdf

then set cover: true in frontmatter

## Tasks

### Compile

This compiles paper.md

```bash
#!/bin/bash
# rm doc*;
bun paper/flatten.ts paper.md > paper/output.md

bun convert-glossaries-csv-tex.js \
&& pandoc \
 --toc \
--template template.tex \
-H header.tex \
-H glossaries.tex default.yaml \
--lua-filter=filters/pandoc-gls.lua \
--lua-filter=filters/include-files.lua \
--citeproc \
--bibliography=/Users/franz/dev/shedali/knowledge/all.bib \
--standalone \
# --embed-resources \
 -s paper/output.md \
 -f markdown \
 -t latex \
 -o doc.tex \
--pdf-engine=tectonic && pdflatex doc.tex \
&& pdflatex doc.tex \
&& makeglossaries doc && echo makeglossaries run\
&& pdflatex doc.tex && open doc.pdf
```


### Compile glossaries

```bash
bun convert-glossaries-csv-tex.js
```


### Lint glossaries

```bash
csvlint glossaries.csv
```