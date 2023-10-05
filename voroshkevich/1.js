let response = '';
let links = $('.menu__list>li');

for(let i = 1; i < links.length; i++){ if(links.eq(i).children('a').attr('href')){ response += location.protocol + '//' + location.host + links.eq(i).children('a').attr('href') + '\n'; } }

console.log(response);
