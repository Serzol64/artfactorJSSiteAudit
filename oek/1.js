let menuLinks = $('.nav__link'),
	output = '';
	
for(let i = 0; i < menuLinks.length; i++){ output += menuLinks.eq(i).attr('href') + '\n'; }

console.log(output);
