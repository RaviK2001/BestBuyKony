define({ 

 //Type your controller code here 
	onNavigate: function(){
       cartEmpty(this.view.FlxBody,this.view.FlxNoItems);
      if(this.view.FlxBody.isVisible){
      this.view.SgmCart.setData(cart)
      this.view.Lbltotal.text = `total: ${calculateTotal()}`
      this.view.Lbltotal.skin = isOnSale()
      this.view.LblDelay.text = isNew()
	kony.application.registerForIdleTimeout(5, ()=>{
      const ntfHome = new kony.mvc.Navigation("HomeForm");
      ntfHome.navigate(); 
    })
      }
  
    }
 });