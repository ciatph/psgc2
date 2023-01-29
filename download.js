const fs = require('fs')
const https = require('https')

const downloadExcel = async ({ url, pathToFile }) => {
  try {
    const file = fs.createWriteStream(pathToFile)

    return new Promise((resolve, reject) => {
      https.get(url, (res) => {
        res.pipe(file)

        file.on('finish', () => {
          file.close(() => {
            try {
              resolve(true)
            } catch (err) {
              reject(err.message)
            }
          })
        })
      })
    })
  } catch (err) {
    throw new Error(err.message)
  }
}

module.exports = downloadExcel
