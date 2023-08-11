let response = '';
let links = $('.desktop .menu ul li');

for(let i = 1; i < links.length; i++){ response += location.protocol + '//' + location.host + links.eq(i).children('a').attr('href') + '\n'; }

console.log(response);
