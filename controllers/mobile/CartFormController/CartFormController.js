define({ 

 //Type your controller code here 
	onNavigate: function(){
     cartEmpty(this.view.FlxBody,this.view.FlxNoItems);
      if(this.view.FlxBody.isVisible){
      this.view.SgmCart.setData(cart)
      this.view.Lbltotal.text = `total ${calculateTotal()}`
      }
  
    }
 });