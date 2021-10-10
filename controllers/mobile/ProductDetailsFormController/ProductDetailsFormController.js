define({ 

  //Type your controller code here 
  onNavigate(Product){
    this.view.LblProductName.text = Product.LblProductName.text
    this.view.LblPrice.text = Product.LblPrice.text
     this.view.LblPrice.skin =   Product.LblPrice.skin
     this.view.ImgProduct.src = Product.ImgProduct.src
     this.view.LblReview.text =  Product.LblReview.text
     this.view.LblDescription.text = Product.shortDescription ?Product.shortDescription : 'There is not a description provided'
     this.view.ImgReview.src = `ratings_star_${Math.floor(+Product.LblReview.text)}.png`
     this.view.LblMore.onTouchStart = () => {
       ClickMoreImg(Product)}
     this.view.BestBuyHeader.onClickBack = () => {backProduct(0,'List')}
     this.view.SgmReviews.setData(Product.reviewList)
     this.view.LblReviewCount.text = Product.totalReviews
     this.view.BtnAddToCar.onClick = () => { 
       addToCar(Product) 
     }
     this.view.ImgArrow.onTouchEnd =()=> { 
animationShowHide(this.view.FlxReviews,this.view.FlxReviews.top === '94%' ? true : false,'94%','60%')
this.view.ImgArrow.src = this.view.FlxReviews.top === '94%' ? 'uparrow.png' : 'downarrow.png'
     } 
  },
  

});  