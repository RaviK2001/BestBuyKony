define({ 

  onNavigate: function(id) {

    elements = {lbl:this.view.LblHome,widget: this.view.SgmCategories, backButton: this.view.BestBuyHeader};
    CallServiceCategorie(
      {operationName:'GetCategories',params:{'id': id? id : 'cat00000'},headers:{}},elements,'categorie'
    );

    this.view.SgmCategories.onRowClick = OnClickCategorie;

    this.view.BestBuyHeader.onClickBack = () => {backCategorie(elements);};
    
    var transformObject = kony.ui.makeAffineTransform();
    var transformProp2 = kony.ui.makeAffineTransform();
    transformProp2.translate(200, 0);
transformObject.translate(0,0);
animationDef = {
 "0": {
                "transform": transformProp2

    },
   
    "100": {
        "transform": transformObject
    }
};

animationConfig = {
    duration: 0.5,
    fillMode: kony.anim.FILL_MODE_FORWARDS
};
animationDefObject = kony.ui.createAnimation(
    animationDef
);
   this.view.SgmCategories.setAnimations({
    visible: {
        definition: animationDefObject,
        config: animationConfig,
        callbacks: null
    }
});
  }
});