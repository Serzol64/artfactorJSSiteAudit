let response = '';
let links = $('.product_page>div');

for(let i = 0; i < links.length; i++){ response += location.protocol + '//' + location.host + links.eq(i).children('a').attr('href') + '\n'; }

console.log(response);
