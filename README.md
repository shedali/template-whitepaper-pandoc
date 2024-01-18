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
pandoc \
 --toc \
--template template.tex \
-H glossaries.tex default.yaml \
--citeproc \
--bibliography=references.bib \
--standalone \
--embed-resources \
 -s paper/index.md \
 -f markdown \
 -t latex \
 -o doc.tex \
--lua-filter=filters/pandoc-gls.lua \
--lua-filter=filters/include-files.lua \
--pdf-engine=tectonic

pdflatex doc.tex \
&& makeglossaries doc \
 && pdflatex doc.tex \
 && pdflatex doc.tex 
```


### Compile glossaries

```bash
bun convert-glossaries-csv-tex.js
```


### Lint glossaries

```bash
csvlint glossaries.csv
```