let response = '';
var links = [],
    el = document.querySelectorAll('.navbar-nav>li');

el.forEach(function( item ) {
            var link = item.querySelector( 'a' ).getAttribute('href');
            links.push( link );
});
for (var i = 0; i < links.length; i++) {
            response += location.protocol + '//' + location.host + links[i] + '\n';
};

console.log(response);
