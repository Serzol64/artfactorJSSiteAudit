var links = document.links;
let linksList = '';
for (var i = 0; i < links.length; i++) {
  var linkHref = links[i].href;
  
  linksList += linkHref + '\n';
}

console.log(linksList);
