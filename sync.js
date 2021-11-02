import fetch from "node-fetch"
import fs from "fs"

// based on https://stackoverflow.com/a/2970667
function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}

// based on http://techslides.com/convert-csv-to-json-in-javascript
function csvToJson(csv, separator=",") {
  const lines = csv.split("\n")
  let result = []
  let headers = lines[0].split(separator).map(camelize)
  for (var i = 1; i < lines.length; i++) {
    let obj = {};
    let currentline = lines[i].split(separator)

    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j]
    }

    result.push(obj)
  }

  return result
}

async function run() {
  // fetch csv file
  const response = await fetch('https://raw.githubusercontent.com/ryanphung/chinese-hanviet-cognates/master/outputs/chinese-hanviet-cognates.tsv')
  const csv = await response.text()
  const json = {
    "words": csvToJson(csv, "\t")
  }

  fs.writeFileSync('db.json', JSON.stringify(json))
}

run()
