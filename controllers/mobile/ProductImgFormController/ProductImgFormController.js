define({ 

 //Type your controller code here 
	onNavigate: function(product){
      this.view.BestBuyHeader.onClickBack = () => {OnClickProduct(product);};
      this.view.SmgProductImg.setData(SetImgs(product.images))
    }
 });