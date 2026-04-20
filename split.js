const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const styleContent = html.substring(html.indexOf('<style>') + 7, html.indexOf('</style>')).trim();
const scriptContent = html.substring(html.indexOf('<script>') + 8, html.indexOf('</script>', html.indexOf('<script>'))).trim();

let newHtml = html;
const fullStyleTag = html.substring(html.indexOf('<style>'), html.indexOf('</style>') + 8);
newHtml = newHtml.replace(fullStyleTag, '<link rel="stylesheet" href="style.css">');

const fullScriptTag = html.substring(html.indexOf('<script>'), html.indexOf('</script>', html.indexOf('<script>')) + 9);
newHtml = newHtml.replace(fullScriptTag, '<script src="app.js"></script>');

fs.writeFileSync('style.css', styleContent);
fs.writeFileSync('app.js', scriptContent);
fs.writeFileSync('index.html', newHtml);
console.log("Successfully split index.html into style.css and app.js");
