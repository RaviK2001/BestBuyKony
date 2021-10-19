define({ 

  //Type your controller code here 
  onNavigate(Product){
    this.view.LblProductName.text = Product.LblProductName.text;
    this.view.LblPrice.text =Product.onSale ? 'On Sale! '+ Product.LblPrice.text :Product.LblPrice.text ;
    this.view.LblPrice.skin = Product.LblPrice.skin;
    this.view.ImgProduct.src = Product.ImgProduct.src;
    this.view.LblReview.text = Product.LblReview.text ? Product.LblReview.text : '';
    this.view.LblDescription.text = Product.shortDescription ?Product.shortDescription : 'There is not a description provided';
    this.view.ImgReview.src = `ratings_star_${Math.floor(+Product.stars)}.png`;
    this.view.ImgReview.isVisible = Product.LblReview.text ? true : false
    this.view.FlxReviews.isVisible = Product.LblReview.text ? true : false
    this.view.LblMore.onTouchStart = () => {
      ClickMoreImg(Product);};
    this.view.BestBuyHeader.onClickBack = () => {backProduct(0,'List');};
    if(Product.reviewList){
      this.view.SgmReviews.setData(Product.reviewList);

    }else{
      this.view.SgmReviews.isVisible = false;

    }
    let noReviews = kony.i18n.getLocalizedString("NoReviews");
    this.view.LblReviewCount.text = Product.reviewList ?  this.view.LblReviewCount.text + Product.totalReviews : noReviews;
    this.view.BtnAddToCar.onClick = () => { 
      addToCar(Product);
    };
    this.view.ImgArrow.onTouchEnd =()=> { 
      animationShowHide(this.view.FlxReviews,this.view.FlxReviews.top === '95%' ? true : false,'95%','60%');
      this.view.ImgArrow.src = this.view.FlxReviews.top === '95%' ? 'downarrow.png' : 'uparrow.png';
    };
  },


});  