//Type your code here
function CallService(callConfig,type,dom){ 
  let ResultList = [];

  if(kony.store.getItem(callConfig.params.id) !== null){
    dom.widget.setData(kony.store.getItem(callConfig.params.id)) 
  }
  else{
    const serviceName = "BestBuyServiceKeyrol";
    const client = kony.sdk.getCurrentInstance();

    const service = client.getIntegrationService(serviceName);


    service.invokeOperation(callConfig.operationName, callConfig.headers, callConfig.params,
                            operationSuccess, operationFailure);
  }

	//succes service call
  function operationSuccess(res){
       
    if(type === 'MainCategories' ){
      lblHome = dom.lbl;
      kony.store.getItem(res.categories[0].id) ? 
        dom.widget.setData(kony.store.getItem(res.categories[0].id)) :
      MapData(res)


    }
    else if(type ==='SecondaryCategorie'){
     const prevId = res.categories[0].path[res.categories[0].path.length - 1]
     alert(prevId)
      backButton.backId = prevId.id 
      backButton.isVisibleback = !!backButton.backId
      kony.store.getItem(res.categories[0].id) ? 
        dom.widget.setData(kony.store.getItem(res.categories[0].id)) :
      MapData(res)

 
    }
  } 
	//fail to call service
  function operationFailure(res){ 
    // code for failure call back
    alert('failure in call');
  }
  
	//map Segment data
  function MapData(res){
    res.categories[0].subCategories.forEach((categorie) =>{ 
      ResultList.push({ 
        LblCategorie:{
          'text' : categorie.name
        },
        'id': categorie.id
      })
    })
    kony.store.setItem(res.categories[0].id, ResultList)
    dom.widget.setData(ResultList)
  } 
}
