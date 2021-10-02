define({ 

  //Type your controller code here 
  onNavigate(Product){
    
    this.view.LblProductName.text = Product.LblProductName.text
    this.view.LblPrice.text = Product.LblPrice.text
     this.view.LblPrice.skin =   Product.LblPrice.skin
     this.view.ImgProduct.src = Product.ImgProduct.src
     this.view.LblReview = Product.LblReview.text
     this.view.LblDescription = Product.shortDescription
  }
}); 