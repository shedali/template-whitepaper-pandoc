import { parse } from 'csv-parse/sync';
import assert from 'assert';
const output = []
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
const contents = String(readFileSync(join("./glossaries.csv")));
const result = parse(contents);
let line = ''
console.log(result);
result.map(def => {
  line += `
\\newglossaryentry{${def[0]}}{%
  name={${def[1]}},
  description={${def[2]}}
}`
})

writeFileSync("glossaries.tex", line)
