let response = '';
let links = $('.header-bottom-menu > li');

for(let i = 1; i < links.length; i++){ if(links.eq(i).children('a').attr('href')){ response += location.protocol + '//' + location.host + links.eq(i).children('a').attr('href') + '\n'; } }

console.log(response);
