let response = '';
let links = $('.partners-list > a');

for(let i = 1; i < links.length; i++){ response += location.protocol + '//' + location.host + links.eq(i).attr('href') + '\n'; }

console.log(response);
