define({ 
	onNavigate : function(method,ProductId,Name){
      this.view.LblResults.text = method + ' for: ' + Name
      //elements = {widget: this.view.SgmProductList}

   CallService(
               {operationName:'GetCategories',params:{'id':'cat00000'},headers:{}},
               elements,'product'
              )
   
   this.view.SgmProductList.onRowClick = OnClickProduct
    
   this.view.BestBuyHeader.onClickBack = () => {backProduct(ProductId)}
    }
 });
  