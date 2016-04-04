var fs = require('fs')
var path = require('path')
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

var basepath = '~/github/thunder-project/thunder/thunder/'

execSync('echo "# images\n" > markdown/images.md')
execSync('echo "Description of images objects\n" >> markdown/images.md')
execSync('myopts ' + basepath + 'images/readers.py -t loading >> markdown/images.md')
execSync('echo "\n" >> markdown/images.md')
execSync('myopts ' + basepath + 'images/images.py -c Images -t methods >> markdown/images.md')
execSync('echo "\n" >> markdown/images.md')

execSync('echo "# series\n" > markdown/series.md')
execSync('echo "Description of series objects\n" >> markdown/series.md')
execSync('myopts ' + basepath + 'series/readers.py -t loading >> markdown/series.md')
execSync('echo "\n" >> markdown/series.md')
execSync('myopts ' + basepath + 'series/series.py -c Series -t methods >> markdown/series.md')
execSync('echo "\n" >> markdown/series.md')
