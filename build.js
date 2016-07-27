var fs = require('fs')
var path = require('path')
var conf = require('./conf')
var exec = require('child_process').exec
var execSync = require('child_process').execSync

var cmd = 'cat repos.txt | ecosystem-docs sync && cat repos.txt | ecosystem-docs read'
exec(cmd, function (error, stdout, stderr) {
  var repositories = stdout.split('\n')
  repositories = repositories.slice(0, repositories.length - 1)
  repositories.forEach(function (repository) {
    data = JSON.parse(repository)
    fs.writeFileSync(path.join('markdown/', data.name + '.md'), data.readme)
  })
})

var thunderpath = conf.thunderpath

execSync('echo "# image loading\n" > markdown/image-loading.md')
execSync('echo "Here is complete documentation for loading image data.\n" >> markdown/image-loading.md')
execSync('myopts ' + thunderpath + 'images/readers.py >> markdown/image-loading.md')

execSync('echo "# image methods\n" > markdown/image-methods.md')
execSync('echo "Here is complete documentation for methods on image data.\n" >> markdown/image-methods.md')
execSync('myopts ' + thunderpath + 'images/images.py -c Images  >> markdown/image-methods.md')

execSync('echo "# series loading\n" > markdown/series-loading.md')
execSync('echo "Here is complete documentation for loading series data.\n" >> markdown/series-loading.md')
execSync('myopts ' + thunderpath + 'series/readers.py >> markdown/series-loading.md')

execSync('echo "# series methods\n" > markdown/series-methods.md')
execSync('echo "Here is complete documentation for methods on series data.\n" >> markdown/series-methods.md')
execSync('myopts ' + thunderpath + 'series/series.py -c Series >> markdown/series-methods.md')
