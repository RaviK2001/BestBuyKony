define({ 

  onNavigate: function(id) {

    elements = {lbl:this.view.LblHome,widget: this.view.SgmCategories, backButton: this.view.BestBuyHeader};
    CallServiceCategorie(
      {operationName:'GetCategories',params:{'id': id? id : 'cat00000'},headers:{}},elements,'categorie'
    );

    this.view.SgmCategories.onRowClick = OnClickCategorie;

    this.view.BestBuyHeader.onClickBack = () => {backCategorie(elements);};
    
  
   this.view.SgmCategories.setAnimations({
    visible: {
        definition: animationDefObject,
        config: animationConfig,
        callbacks: null
    }
});
  }
});