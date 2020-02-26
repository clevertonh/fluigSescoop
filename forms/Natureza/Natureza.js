//preenche campos ZOOM
function setSelectedZoomItem(selectedItem) {
    var AREA_ATUACAO = "areaatuacao";
   
   
    //Recebe o nome do campo zoom
    var campoZOOM = selectedItem.inputId;
    //separa string
    var linha = campoZOOM.split('___');

    if (linha[0] == AREA_ATUACAO) {  
    	  $('#codigoarea').val(selectedItem["cCodigo"]);
     
    }
    
    
}

function removedZoomItem(removedItem) {
	var AREA_ATUACAO = "areaatuacao";
	  
    //Recebe o nome do campo zoom
    var campoZOOM = removedItem.inputId;

    //separa string para campos filho
    var linha = campoZOOM.split('___');
 
    if (linha[0] == AREA_ATUACAO) {        
    	$('#codigoarea').val('');
    } 

}

function setZoomData(instance, value) {
    window[instance].setValue(value);
}