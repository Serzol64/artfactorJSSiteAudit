var links = document.links,
	subData = $('.catalog__table table a');
for (var i = 0; i < links.length; i++) {
  var linkHref = links[i].href,
	  getExt = get_url_extension(linkHref);
  
  let isDocument = getExt === 'jpg' || (getExt === 'doc' || getExt === 'docx') || (getExt === 'pdf' || getExt === 'zip') || (getExt === 'xlsx' || getExt === 'xls');
  
  if(isDocument){
	  fetch(linkHref).then(afterSuccessScan).catch(afterFailedScan);
  }
		
}

for(var j = 0; j < subData.length; j++){ fetch(subData[j]).then(afterSuccessScan).catch(afterFailedScan); }


function afterSuccessScan(response){
	if(response.ok){ console.log(response.url + ' +\n'); }
	else{ console.error(response.url + ' -\n'); }
}
function afterFailedScan(error){
	console.error(error.url + ' -\n');
}

function get_url_extension( url ) {
    return url.split(/[#?]/)[0].split('.').pop().trim();
}
