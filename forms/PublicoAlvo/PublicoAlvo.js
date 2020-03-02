//preenche campos ZOOM
function setSelectedZoomItem(selectedItem) {
    var CLASSIFICACAO = "classificacao";
   
   
    //Recebe o nome do campo zoom
    var campoZOOM = selectedItem.inputId;
    //separa string
    var linha = campoZOOM.split('___');

    if (linha[0] == CLASSIFICACAO) {  
    	  $('#codclassificacao').val(selectedItem["cCodigo"]);
     
    }
    
    
}

function removedZoomItem(removedItem) {
	var CLASSIFICACAO = "classificacao";
	  
    //Recebe o nome do campo zoom
    var campoZOOM = removedItem.inputId;

    //separa string para campos filho
    var linha = campoZOOM.split('___');
 
    if (linha[0] == CLASSIFICACAO) {        
    	$('#codclassificacao').val('');
    } 

}

function setZoomData(instance, value) {
    window[instance].setValue(value);
}