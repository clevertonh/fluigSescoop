//preenche campos ZOOM
function setSelectedZoomItem(selectedItem) {
    var OBJETIVOESTRATEGICO = "cObjEstrategico";
   
   
    //Recebe o nome do campo zoom
    var campoZOOM = selectedItem.inputId;
    //separa string
    var linha = campoZOOM.split('___');


    //compara para verificar se o zoom é o campo centro de custo
    if (linha[0] == OBJETIVOESTRATEGICO) {  
    	  $('#cObjetivo').val(selectedItem["cCodigo"]);
     
    }
    
    
}

function removedZoomItem(removedItem) {
	var OBJETIVOESTRATEGICO = "cObjEstrategico";
	  
    //Recebe o nome do campo zoom
    var campoZOOM = removedItem.inputId;

    //separa string para campos filho
    var linha = campoZOOM.split('___');
 
    if (linha[0] == OBJETIVOESTRATEGICO) {        
    	$('#cObjetivo').val('');
    } 

}

function setZoomData(instance, value) {
    window[instance].setValue(value);
}