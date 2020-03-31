const fs = require('fs');
const { execSync } = require("child_process");
const template = require('lodash.template')

const iconTemplate = fs.readFileSync('./templates/icon.js', { encoding: 'utf8' })
const compiled = template(iconTemplate)

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

      var svgWithColorProp = svgContents.replace(/fill="#19212C"|fill="#121417"|fill="#2F73DA"/g, 'fill={color}')

      // Check for fragment
      const regexp = /path/g;
      const pathCount = [...svgWithColorProp.matchAll(regexp)].length;
      const hasClipPath = svgWithColorProp.indexOf('clipPath') !== -1

      // Create JS file using svgName and append contents of svgContents
      fs.writeFile(
        './output/' + svgName + '.js',
        compiled({
          iconName: svgName,
          icon: svgWithColorProp,
          fragment: pathCount > 1 || hasClipPath,
        }),
        function (err) {
          if (err) throw err;
        });
    })
  }
})