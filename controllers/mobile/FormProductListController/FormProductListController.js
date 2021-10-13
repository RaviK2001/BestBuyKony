define({ 
  onNavigate : function(context){
    elements = {widget: this.view.SgmProductList,lastId: 0,LblPage: this.view.LblCurrentPage,listPages:this.view.ListBoxPage };
    this.view.SgmProductList.onRowClick = OnClickProduct;
    const ProductContext = kony.store.getItem('LastProductList');
    elements.lastId = context ? context.LastId : ProductContext.LastId;
    context ? kony.store.setItem('LastProductList', context) : null;


    CallServiceProduct(
      {operationName:context ? context.type === 'categorie' ? 'GetProductList' : 'GetProductBySearch' : ProductContext.type === 'categorie' ? 'GetProductList' : 'GetProductBySearch',
       params:{'id': context ? context.id : ProductContext.id,
               'page' : 1,
               'search': context ? context.type === 'search' ? context.search : null  : ProductContext.type === 'search' ? ProductContext.search : null
              },
       headers:{}},
      elements,'product',context.filter
    );

    this.view.LblResults.text = context ? context.type ==='search' ? 'Results for: ' + context.name 
    : 'Category: ' + context.name 
    : ProductContext.type ==='search' ? 'Results for: ' + ProductContext.name 
    : 'Category: ' + ProductContext.name

    this.view.BestBuyHeader.onClickBack = () => {
      backProduct(context ? context.LastId : ProductContext.LastId,'Home');};

    this.view.ListBoxPage.masterData = calculateTotalPages();
    this.view.ListBoxPage.selectedKey = 1
    this.view.ListBoxPage.onSelection = () => {
      setPage(this.view.ListBoxPage.selectedKey, elements, context ? context : ProductContext);
    };
    //Segment animation
    const animation = AnimateNormaSegment()
    this.view.SgmProductList.setAnimations({
      visible: {
        definition: animation.animationDef,
        config: animation.config, 
        callbacks: null
      } 
    }); 

  }

});
