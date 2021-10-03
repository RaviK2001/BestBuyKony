define({ 

 //Type your controller code here 
	onNavigate: function(){
      this.view.BtnSearch.onClick = () => {FindLocation(this.view.TxtSearchParams.text)}
    }
 }); 