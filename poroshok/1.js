let response = '';
let links = $('.footer__list--item');

for(let i = 0; i < links.length; i++){ if(links.eq(i).children('a').attr('href')){ response += location.protocol + '//' + location.host + links.eq(i).children('a').attr('href') + '\n'; } }

console.log(response);
