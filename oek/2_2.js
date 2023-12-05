var links = document.links;
for (var i = 0; i < links.length; i++) {
  var linkHref = links[i].href;
  
  fetch(linkHref).then(afterSuccessScan).catch(afterFailedScan);
		
}

function afterSuccessScan(response){
	if(response.ok){ 
		console.log(response.url + ' - \n');  
	}
	else if(response.status === 404){
		console.error(response.url + ' +\n');
	}
}
function afterFailedScan(error){
	if(error.status === 404){ console.error(error.url + ' +\n'); }
	else{ console.log(error.url + ' - \n'); }
}
