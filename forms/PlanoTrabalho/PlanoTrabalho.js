//preenche campos ZOOM
function setSelectedZoomItem(selectedItem) {
    var OBJETIVOESTRATEGICO = "cObjEstrategico";
    var LINHAACAO = "cLinhaAcao";
    var AREAATUACAO ="";
    var NATUREZA = "";
   
    //Recebe o nome do campo zoom
    var campoZOOM = selectedItem.inputId;
    //separa string
    var linha = campoZOOM.split('___');


    //compara para verificar se o zoom é o campo centro de custo
    if (linha[0] == OBJETIVOESTRATEGICO) {  
        //LIMPA COLUNAS
        window[LINHAACAO].clear();
        reloadZoomFilterValues(LINHAACAO, "cObjetivo," + selectedItem["cCodigo"]);
        window[LINHAACAO].disable(false);
     
    }
    
    
}

function removedZoomItem(removedItem) {
	var OBJETIVOESTRATEGICO = "cObjEstrategico";
	var LINHAACAO = "cLinhaAcao";
	  
    //Recebe o nome do campo zoom
    var campoZOOM = removedItem.inputId;

    //separa string para campos filho
    var linha = campoZOOM.split('___');
 
    if (linha[0] == OBJETIVOESTRATEGICO) {        
        window[LINHAACAO].clear();
        window[LINHAACAO].disable(true);
        
    } 

}

function setZoomData(instance, value) {
    window[instance].setValue(value);
}




var acc = document.getElementsByClassName("accordion_acao");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}