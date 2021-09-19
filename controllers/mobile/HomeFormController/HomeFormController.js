define({ 

 //Type your controller code here 
  onNavigate: function() {
    this.view.SgmCategories.onRowClick = onRowClick
    this.view.BestBuyHeader.onClickBack = onBackClick
    BackCategories = this.view.BestBuyHeader

   
      const api = require('ApiCall')
	// api.CallApi("yes",this.view.LblHome.text  )
      this.view.LblHome.text = trye
  }
   
 }); 
