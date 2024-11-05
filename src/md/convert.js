const { readFileSync } = require('fs');
const unified = require('unified');
const remarkParse = require('remark-parse');
const remarkHtml = require('remark-html');

const file = readFileSync('nodule.md', 'utf8');
const tree = unified()
  .use(remarkParse)
  .use(remarkHtml)
  .processSync(file);

console.log(stringify(tree));
