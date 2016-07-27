var fs = require('fs')
var exec = require('child_process').exec
var embed = require('embed-images')

var files = [
  'basics',
  'images',
  'series',
  'registration'
]

files.forEach(function (name) {
  convert('tutorials/' + name + '.ipynb', 'markdown/tutorial-' + name + '.md')
})

function convert (ipynb, markdown) {
  var base = ipynb.replace('tutorials', 'tutorials/build').replace('.ipynb', '')
  var result = ipynb.replace('tutorials', 'tutorials/build').replace('.ipynb', '.md')
  var cmd = 'jupyter nbconvert ' + ipynb + ' --to=markdown --output=' + base

  exec(cmd, function (error, stderr, stdout) {
    if (error) console.error(error)
    if (stderr) console.error(stderr)
    embed(result, markdown)
  })
}