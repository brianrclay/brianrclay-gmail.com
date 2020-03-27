
const fs = require('fs');

let header1 = fs.readFileSync('./header1.js', { encoding: 'utf8' });
let header2 = fs.readFileSync('./header2.js', { encoding: 'utf8' });
let footer = fs.readFileSync('./footer.js', { encoding: 'utf8' });

var dir = fs.readdir('./js-icons', (err, files) => {
  if (err) {
    console.log(err);
  } else {
    files.forEach(function (item, index) {
      // Get SVG Contents and name
      var targetSVG = fs.readFileSync('./js-icons/' + files[index], { encoding: 'utf8' });
      var svgStart = targetSVG.indexOf('{...props}>') + 11;
      var svgEnd = targetSVG.indexOf('</svg>');
      var svgContents = targetSVG.substring(svgStart, svgEnd);
      var svgName = files[index].slice(0, files[index].toString().indexOf('.js'));

      var svgWithColorProp = svgContents.replace(/fill="#19212C"|fill="#121417"/g, 'fill={color}')
      
      // Create JS file using svgName and append contents of svgContents
      fs.writeFile(
        './output/' + svgName + '.js',
        header1 + " " + svgName + " " + header2 + '\n' + svgWithColorProp + footer,
        function (err) {
          if (err) throw err;
        });
    })
  }
})