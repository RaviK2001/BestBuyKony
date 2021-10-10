define({ 

 //Type your controller code here 
	onNavigate: function(product){
      this.view.BestBuyHeader.onClickBack = () => {backProduct(0,'Detaills',product);};
      this.view.SmgProductImg.setData(SetImgs(product.images))
    },
   
  
 });