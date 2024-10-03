const fs = require('fs');
const path = require('path')
const YAML = require('yaml')

const file = fs.readFileSync(path.join(__dirname,"/objeto.yml"),'utf-8')
const estYaml = YAML.parse(file)

console.log(typeof estYaml)
console.table(estYaml);