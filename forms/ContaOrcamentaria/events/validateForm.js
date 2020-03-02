function validateForm(form){
	if (form.getValue("cCodigo") == null || form.getValue("cCodigo") == "" ) {
        throw "O campo código precisa ser informado.";
    }
	
	if (form.getValue("cDescricao") == null || form.getValue("cDescricao") == "" ) {
        throw "A descrição precisa ser informada.";
    }
	
}