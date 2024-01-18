# Whitepaper Template


## Tasks

### Compile

This compiles paper.md

```bash
#!/bin/bash
# --template template.tex \
# -H glossaries.tex \
pandoc \
 --template template.tex \
-H glossaries.tex \
--citeproc \
--bibliography=references.bib \
--standalone \
--embed-resources \
 paper.md \
--lua-filter=pandoc-gls.lua \
--pdf-engine=tectonic \
-o document.pdf
```