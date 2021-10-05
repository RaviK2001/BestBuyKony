define({ 
  onNavigate : function(context){
          elements = {widget: this.view.SgmProductList,lastId: 0 }
     
          this.view.SgmProductList.onRowClick = OnClickProduct

    if( kony.store.getItem('LastProductList') && !context){
      elements.lastId = kony.store.getItem('LastProductList').LastId
      let ProductContext = kony.store.getItem('LastProductList')
      this.view.LblResults.text = ProductContext.type + ' for: ' + ProductContext.name
      CallServiceProduct(
        {operationName:'GetProductList',params:{'id':ProductContext.id},headers:{}},
        elements,'product'
      )
      this.view.BestBuyHeader.onClickBack = () => {backProduct(ProductContext.LastId)}
    }

    else{
      elements.lastId = context.LastId
       kony.store.setItem('LastProductList', context)
      this.view.LblResults.text = context.type + ' for: ' + context.name
      CallServiceProduct(
        {operationName:'GetProductList',params:{'id':context.id},headers:{}},
        elements,'product'
      )
      this.view.BestBuyHeader.onClickBack = () => {backProduct(context.LastId)}
    }
//    this.view.NothingToDisplay.isVisible = this.view.SgmProductList.data  ? false : true
    //Segment animation
    this.view.SgmProductList.setAnimations({
    visible: {
        definition: SegmentAnimationDefObject, 
        config: SegmentAnimationConfig,
        callbacks: null
    }
});
    

  }

});
