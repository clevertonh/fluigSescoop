function validateForm(form){
	if (form.getValue("cCodigo") == null || form.getValue("cCodigo") == "" ) {
        throw "O campo código precisa ser informado.";
    }
	
	if (form.getValue("cLinhaAcao") == null || form.getValue("cLinhaAcao") == "" ) {
        throw "A descrição da ação precisa ser informada.";
    }

	if (form.getValue("cObjEstrategico") == null || form.getValue("cObjEstrategico") == "" ) {
        throw "É necessário selecionar um Objetivo Estratégico.";
    }
	
}