//Type your code here
function CallServiceLocation(callConfig,type){ 
  kony.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});

  const serviceName = "BestBuyServiceKeyrol";
  const client = kony.sdk.getCurrentInstance(); 

  const service = client.getIntegrationService(serviceName);
  const ErrorMaping = false

  service.invokeOperation(callConfig.operationName, callConfig.headers, callConfig.params,
                          operationSuccess, operationFailure);


  //succes service call
  function operationSuccess(res){    
    const Cities =  MapDataLocation(res) 
    if(Cities.length > 0){
          alert(Cities) 

    }

  }
  //fail to call service 
  function operationFailure(res){ 
    kony.application.dismissLoadingScreen();

    alert('failure in call');

  }

} 

function MapDataLocation(res,elements){ 
  const CityMappedArray = []

  if(res.stores.length > 0) {

    res.products.map((city,i) =>{  

      CityMappedArray.push({

        'hours': city.hours,
        'address': city.address,
        'lng': city.lng,
        'city': city.city,
        'name': city.name,
        'region': city.region,
        'storeId': city.storeId,
        'lat': city.lat,
        'longName': city.longName,


      }) 
    }) 
  }
  else{
    alert('Wrong city name, pls try again') 
  }
  kony.application.dismissLoadingScreen(); 

  return CityMappedArray

} 
