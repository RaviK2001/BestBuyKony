define({ 

 //Type your controller code here 
  onNavigate: function() {
  kony.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});

   CallService(
               {operationName:'GetCategories',params:{'id':'cat00000'},headers:{}},
               'MainCategories',
               {lbl:this.view.LblHome,widget: this.view.SgmCategories}
              )
   
   this.view.SgmCategories.onRowClick = OnClickCategorie
      this.view.SgmCategories.onRowClick = OnClickCategorie
      kony.application.dismissLoadingScreen();
    
   backButton = this.view.BestBuyHeader 
   backButton.onClickBack = () => {back(this.view.LblHome,this.view.SgmCategories)} 

    // this.view.SgmCategories.onRowDisplay = onRowDispCallback
   
	// api.CallApi("yes",this.view.LblHome.text  )  
  }
   
 }); 
