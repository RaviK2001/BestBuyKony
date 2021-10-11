define({ 

 //Type your controller code here 
	onNavigate: function(){
      mapCart(this.view);
	kony.application.registerForIdleTimeout(5, ()=>{
      const ntfHome = new kony.mvc.Navigation("HomeForm");
      ntfHome.navigate(); 
    });
      },
  
  
 });