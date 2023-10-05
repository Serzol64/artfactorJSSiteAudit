let response = '';
let links = $('.public__wrap > a');

for(let i = 0; i < links.length; i++){ if(links.eq(i).attr('href')){ response += location.protocol + '//' + location.host + links.eq(i).attr('href') + '\n'; } }

console.log(response);
