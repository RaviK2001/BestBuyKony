//Type your code here
function CallService(callConfig,dom,type){ 
  let ResultList = [];
  if(kony.store.getItem(callConfig.params.id) !== null){
    dom.widget.setData(kony.store.getItem(callConfig.params.id).subCategories)
    CategorieDeep = kony.store.getItem(callConfig.params.id).path.length

    const prevId = kony.store.getItem(callConfig.params.id).path.length - 2
    dom.backButton.backId = prevId ? prevId.id : 'cat00000'
    dom.backButton.isVisibleback = kony.store.getItem(callConfig.params.id).path.length > 1 ? true : false
  }
  else{
    kony.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});

    const serviceName = "BestBuyServiceKeyrol";
    const client = kony.sdk.getCurrentInstance();

    const service = client.getIntegrationService(serviceName);


    service.invokeOperation(callConfig.operationName, callConfig.headers, callConfig.params,
                            operationSuccess, operationFailure);
    kony.application.dismissLoadingScreen();

  }


  //succes service call
  function operationSuccess(res){
    switch(type){
      case 'categorie':
        try{
          const prevId = res.categories[0].path[res.categories[0].path.length - 2] 
          dom.backButton.backId = prevId.id 
        }
        catch{
          dom.backButton.backId = 'cat00000'
          }
          dom.backButton.isVisibleback = res.categories[0].path.length > 1 ? true : false
          CategorieDeep = res.categories[0].path.length
          if( kony.store.getItem(res.categories[0].id))
          {
            dom.widget.setData(kony.store.getItem(res.categories[0].id))
          }
        else{
          MapDataCategorie(res, dom.widget) 
        }
        break;
      case 'product':
        MapDataProduct(res, dom.widget)
        break;
    } 
  }
  //fail to call service 
  function operationFailure(res){ 
    alert('failure in call');
  }

}


//map Segment data in categorie
function MapDataCategorie(res,segment){
  res.categories[0].subCategories.forEach((categorie,i) =>{ 
    res.categories[0].subCategories[i] = {
      LblCategorie:{
        'text' : categorie.name 
      },
      'id': categorie.id
    }
  })
  kony.store.setItem(res.categories[0].id,res.categories[0])
  segment.setData(res.categories[0].subCategories)
} 
//map Segment data in categorie
function MapDataProduct(res,segment){
  res.categories[0].subCategories.forEach((categorie,i) =>{ 
    res.categories[0].subCategories[i] = {
      LblCategorie:{ 
        'text' : categorie.name 
      },
      'id': categorie.id
    }
  })
  kony.store.setItem(res.categories[0].id,res.categories[0])
  segment.setData(res.categories[0].subCategories)
} 
