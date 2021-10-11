//Type your code here
function CallServiceCategorie(callConfig,elements,type){ 
  try{
    let ResultList = [];
    if(kony.store.getItem(callConfig.params.id) !== null){
      elements.widget.setData(kony.store.getItem(callConfig.params.id).subCategories);
      CategorieDeep = kony.store.getItem(callConfig.params.id).path.length;
      let pathValue = kony.store.getItem(callConfig.params.id).path.slice(1).map((path) =>{
        return path.name;
      }) ;
      const path = pathValue.length > 0 ? '->' + pathValue.join('->') : '';
      elements.lbl.text = path ? 'Home' + path : 'Home';
      try{ 
        const cached = kony.store.getItem(callConfig.params.id);
        const prevId = cached.path[cached.path.length - 2];
        elements.backButton.backId = prevId.id;
        if(CategorieDeep === 3){
          LastCall = cached.path[cached.path.length - 1].id;
        }
      }
      catch{
        elements.backButton.backId = 'cat00000';
        }
        elements.backButton.isVisibleback = kony.store.getItem(callConfig.params.id).path.length > 1 ? true : false;
    }
    else{

      kony.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});

      const serviceName = "BestBuyServiceKeyrol";
      const client = kony.sdk.getCurrentInstance();

      const service = client.getIntegrationService(serviceName);


      service.invokeOperation(callConfig.operationName, callConfig.headers, callConfig.params,
                              operationSuccess, operationFailure);
      kony.application.dismissLoadingScreen();
    }}catch{
      alert('Nothin to display');
      }



      //succes service call
      function operationSuccess(res){
        try{
          const prevId = res.categories[0].path[res.categories[0].path.length - 2] ;
          elements.backButton.backId = prevId.id ;
          elements.backButton.isVisibleback = res.categories[0].path.length > 1 ? true : false;
          CategorieDeep = res.categories[0].path.length;
          let pathValue = res.categories[0].path.slice(1) .map((path) =>{
            return path['name'];
          }) ;
          if(CategorieDeep === 3){
            LastCall = res.categories[0].path[res.categories[0].path.length - 1].id;
          }
          elements.lbl.text = 'home/' + pathValue.join('/') ;
        }
        catch{
          elements.backButton.backId = 'cat00000';
          }
		try{
          if( kony.store.getItem(res.categories[0].id))
          {
            elements.widget.setData(kony.store.getItem(res.categories[0].id));
          }
        else{
          MapDataCategorie(res, elements.widget) ;
        }
        }
  catch{
    alert('No subcategories/products  found for the selected category');
    } 

        kony.application.dismissLoadingScreen();

      }
  //fail to call service 
  function operationFailure(res){ 
    alert('failure in call');
    kony.application.dismissLoadingScreen();

  }



}


//map Segment data in categorie
function MapDataCategorie(res,segment){
  if(res.categories[0].subCategories.length > 0) {
    res.categories[0].subCategories.forEach((categorie,i) =>{ 
      res.categories[0].subCategories[i] = {
        LblCategorie:{
          'text' : categorie.name 
        },
        'id': categorie.id,

      };
    });
    kony.store.setItem(res.categories[0].id,res.categories[0]);
    segment.setData(res.categories[0].subCategories);
  }
  else{
    alert('no subcategories available ') ;

  }
    
} 

