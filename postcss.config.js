module.exports = {
    plugins: [
        require('postcss-remove-selectors')({
            selectors: [/.*\.fas-/]
        }),
    ],
 };

 /*
var fs = require('fs');
var postcss = require('postcss')
var remove = require('postcss-remove-selectors')

const data = fs.readFileSync('css/cssclasses/sci-fi.css', { encoding: 'utf8' });
const css = data.toString();

//var options = {rulesToRemove: ['.fas-h1-display'], map: false} // css-byebye
//var options = {'.fas-h1-display': '*'} // postcss-remove-rules
//var options = ['.fas-h1-display'] // postcss-remove-classes
var options = { selectors: ['.fas-', 'body.fas-'] } // postcss-remove-selectors

console.log(options)
var result = postcss(remove(options)).process(css).css
console.log(typeof(result))
//fs.writeFileSync('postcss/cssclasses/sci-fi.css', result);


module.exports = {
    plugins: {
        remove
    },
}*/