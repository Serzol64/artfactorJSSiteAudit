let response = '';
let links = $('.product-box_link, .news_item_link');

for(let i = 0; i < links.length; i++){ response += location.protocol + '//' + location.host + links.eq(i).attr('href') + '\n'; }

console.log(response);
