#! /usr/bin/env node
var shell = require('shelljs')

var postTitle = process.argv[2]

var kebabTitle = postTitle
  .replace(/([a-z])([A-Z])/g, '$1-$2') // get all lowercase letters that are near to uppercase ones
  .replace(/[\s_]+/g, '-') // replace all spaces and low dash
  .toLowerCase()

var date = new Date()

const template = `
---
title: ${postTitle}
date: '${date.toISOString()}'
gitrepo: 'https://github.com/masbossun/bossun-blog/blob/master/content/blog/${kebabTitle}/index.md'
---
`

shell.mkdir('-p', './content/blog/' + kebabTitle)
shell.touch('./content/blog/' + kebabTitle + '/index.md')
shell.exec(`echo "${template}" >> ./content/blog/${kebabTitle}/index.md`)
shell.exec(
  `./node_modules/.bin/prettier --write ./content/blog/${kebabTitle}/index.md`
)
console.log(postTitle)
