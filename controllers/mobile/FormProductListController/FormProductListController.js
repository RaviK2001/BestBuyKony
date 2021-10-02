define({ 
	onNavigate : function(context){
      this.view.LblResults.text = context.type + ' for: ' + context.name
      elements = {widget: this.view.SgmProductList,NothingToDisplay: this.view.NothingToDisplay}
   CallServiceProduct(
               {operationName:'GetProductList',params:{'id':context.id},headers:{}},
               elements,'product'
              )
   this.view.SgmProductList.onRowClick = OnClickProduct
 
    
   this.view.BestBuyHeader.onClickBack = () => {backProduct(context.LastId)}
    }
 });
   