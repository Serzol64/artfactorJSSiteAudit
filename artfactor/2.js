let links = $('.mainp-projects-list li');

for(let i = 0; i < links.length; i++){ if(links.eq(i).css('display') !== 'none'){ window.open(location.protocol + '//' + location.host + links.eq(i).children('a').attr('href'), '_blank'); } }
