---
title: title
metadata-file: glossary.yml
classes: report
biblatex: true
titlepage: true
coverpage: true
logo: logo.png
colorlinks: true
glossary: true
bibliography: references.bib
abstract: the abstract
include-after:
  - \clearpage
  - \printglossaries
references:
  - id: fenner2012a
    title: Some reference
    author:
      - family: Fenner
        given: Martin
    container-title: Nature Materials
    volume: 11
    URL: https://dx.doi.org/10.1038/nmat3283
    DOI: 10.1038/nmat3283
    issue: 4
    publisher: Nature Publishing Group
    page: 261-263
    type: article-journal
    issued:
      year: 2012
      month: 3
---

\clearpage

## Table of Contents

include other files like this

include.md

It's a weird syntax but it's the new IA writer content block format, so you can use that to transclude documents.

References look like this

[@fenner2012a]

\index{index phrase}

Glossary items look like this (+abbreviation)

## glossary


testing

## References