define({ 

  onNavigate: function(id) { 
    if(!id && id!==0){ 
      this.view.BestBuyHeader.TopSeach = '100%'
      this.view.BestBuyHeader.isHided = true
      this.view.BestBuyHeader.isModalContainer = false

      this.view.BestBuyHeader.zIndex = 1
    }
    elements = {lbl:this.view.LblHome,widget: this.view.SgmCategories, backButton: this.view.BestBuyHeader};
    CallServiceCategorie(
      {operationName:'GetCategories',params:{'id': id && id!==0? id : 'cat00000'},headers:{}},elements,'categorie'
    );

    this.view.SgmCategories.onRowClick = OnClickCategorie;

    this.view.BestBuyHeader.onClickBack = () => {backCategorie(elements);};

    const animation = AnimateNormaSegment()
    this.view.SgmCategories.setAnimations({
      visible: {
        definition: animation.animationDef,
        config: animation.config, 
        callbacks: null
      } 
    }); 


  },

});