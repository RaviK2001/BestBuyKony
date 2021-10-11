define({ 

  onNavigate: function(id) { 

    elements = {lbl:this.view.LblHome,widget: this.view.SgmCategories, backButton: this.view.BestBuyHeader};
    CallServiceCategorie(
      {operationName:'GetCategories',params:{'id': id && id!==0? id : 'cat00000'},headers:{}},elements,'categorie'
    );

    this.view.SgmCategories.onRowClick = OnClickCategorie;

    this.view.BestBuyHeader.onClickBack = () => {backCategorie(elements);};
    AnimateNormaSegment(this.view.SgmCategories)
  
  
     
  
  },

});