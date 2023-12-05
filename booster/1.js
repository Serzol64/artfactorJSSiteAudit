var links = document.links;
let output = '';
for (var i = 0; i < links.length; i++) {
  var linkHref = links[i].href;
  output += linkHref + '\n';
}

console.log(output);
