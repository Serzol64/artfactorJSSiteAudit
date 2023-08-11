let response = '';
let links = $('.dropdown-filter .dropdown-menu > a');

for(let i = 1; i < links.length; i++){ response += location.protocol + '//' + location.host + links.eq(i).attr('href') + '\n'; }

console.log(response);
