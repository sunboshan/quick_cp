const fs = require('fs')
const path = require('path')

const LIST_PATH = path.resolve(__dirname, 'list.txt')
const TEMPLATE_PATH = path.resolve(__dirname, 'template.txt')

const list = readList()
const template = readTemplate()

replaceTemplate(list, template)

function readList() {
  const list = fs.readFileSync(LIST_PATH, {encoding: 'utf-8'})
  return list.trim().split('\n')
}

function readTemplate() {
  const template = fs.readFileSync(TEMPLATE_PATH, {encoding: 'utf-8'})
  return template
}

function replaceTemplate(list, template) {
  let tmpText = ''

  list.slice(0).forEach(e => {
    tmpText = template.replace(/TMP/g, e)
    console.log(tmpText);
    console.log('');
  });
}