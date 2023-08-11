let response = '';
let links = $('.table-type-block.item-views.table-elements .row > div');

for(let i = 0; i < links.length; i++){ response += location.protocol + '//' + location.host + links.eq(i).children('a').attr('href') + '\n'; }

console.log(response);
