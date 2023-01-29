const path = require('path')

const DATA_DIR_PATH = path.join(__dirname, 'data')
const EXCEL_FILE_PATH = path.join(__dirname, 'data', 'publication.xlsx')

const BUILD_PATHS = {
  TREE: path.join(__dirname, 'data', 'tree.json'),
  RAW: path.join(__dirname, 'data', 'raw.json'),
  REGIONS: path.join(__dirname, 'data', 'regions.json'),
  PROVINCES: path.join(__dirname, 'data', 'provinces.json'),
  CITIES: path.join(__dirname, 'data', 'cities.json'),
  MUNICIPALITIES: path.join(__dirname, 'data', 'municipalities.json')
}

module.exports = {
  DATA_DIR_PATH,
  EXCEL_FILE_PATH,
  BUILD_PATHS
}
