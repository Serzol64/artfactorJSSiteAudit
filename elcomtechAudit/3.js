let response = '';
let links = $('body > div.visible-lg.visible-md.title-v1 > header > div.menu-row.with-color.bgnone.colored_dark.sliced.main--menu > div > div.col-md-12 > div.menu-only > nav > div > table > tbody > tr > td.menu-item.dropdown.wide_menu > div > ul > li:nth-child(1) > ul li');

for(let i = 0; i < links.length; i++){ response += location.protocol + '//' + location.host + links.eq(i).children('a').attr('href') + '\n'; }

console.log(response);
