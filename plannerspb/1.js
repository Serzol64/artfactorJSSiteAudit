let response = '';
let links = $('.menu > li');

for(let i = 0; i < links.length; i++){ response += links.eq(i).children('a').attr('href') + '\n'; }

console.log(response);
