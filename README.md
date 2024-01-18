# Whitepaper Template

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