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
execSync('echo "The \\\`images\\\` data type in Thunder is used to represent a collection of images or volumes. It can be used to represent movie data — when the images come from different points in time — but it can also be used for more generic image collections. \\\`images\\\` can be loaded from several on-disk formats, including tiff, png, and binary, and \\\`images\\\` can also be constructed directly from a list or ndarray. Methods are available for aggregation, statistics, filtering, and preprocessing, as well as writing to external formats. Here we provide a full list of "loading" functions as well as "methods" available on an \\\`images\\\` object after loading.\n" >> markdown/images.md')
execSync('myopts ' + basepath + 'images/readers.py -t loading >> markdown/images.md')
execSync('echo "\n" >> markdown/images.md')
execSync('myopts ' + basepath + 'images/images.py -c Images -t methods >> markdown/images.md')
execSync('echo "\n" >> markdown/images.md')

execSync('echo "# series\n" > markdown/series.md')
execSync('echo "The \\\`series\\\` data type in Thunder is used to represent a collection of one-dimensional records that share a common index. It can be used to represent time series data — when the index is time — but it can also be used for more generic series data. \\\`series\\\` data can be loaded from several on-disk formats, including binary and text, and \\\`series\\\` data can also be constructed directly from a list or ndarray. Methods are available for aggregation, statistics, filtering, and preprocessing, as well as writing to external formats. Here we provide a full list of "loading" functions as well as "methods" available on an \\\`series\\\` object after loading.\n" >> markdown/series.md')
execSync('myopts ' + basepath + 'series/readers.py -t loading >> markdown/series.md')
execSync('echo "\n" >> markdown/series.md')
execSync('myopts ' + basepath + 'series/series.py -c Series -t methods >> markdown/series.md')
execSync('echo "\n" >> markdown/series.md')
