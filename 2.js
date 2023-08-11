let response = '';
let links = $('.owl-item');

for(let i = 0; i < links.length; i++){ response += location.protocol + '//' + location.host + links.eq(i).children('a').attr('href') + '\n'; }

console.log(response);
