var links = document.links;
for (var i = 0; i < links.length; i++) {
  var linkHref = links[i].href,
	  getExt = get_url_extension(linkHref);
  
  let isDocument = (getExt === 'doc' || getExt === 'docx') || (getExt === 'pdf' || getExt === 'zip') || (getExt === 'xlsx' || getExt === 'xls');
  
  if(isDocument){
	  fetch(linkHref).then(afterSuccessScan).catch(afterFailedScan);
  }
		
}

function afterSuccessScan(response){
	if(response.ok){ console.log('Документ по ссылке найден: ' + response.url + '\n'); }
}
function afterFailedScan(error){
	console.error('Не удалось найти документ по ссылке: ' + error.url + '\n');
}

function get_url_extension( url ) {
    return url.split(/[#?]/)[0].split('.').pop().trim();
}
