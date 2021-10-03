//Type your code here
function CallServiceProduct(callConfig,elements,type){ 
  kony.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});

  const serviceName = "BestBuyServiceKeyrol";
  const client = kony.sdk.getCurrentInstance(); 

  const service = client.getIntegrationService(serviceName);
  const ErrorMaping = false

  service.invokeOperation(callConfig.operationName, callConfig.headers, callConfig.params,
                          operationSuccess, operationFailure);


  //succes service call
  function operationSuccess(res){
    MapDataProduct(res, elements)
    LastProductId = callConfig.headers.id

  }
  //fail to call service 
  function operationFailure(res){ 
    kony.application.dismissLoadingScreen();

    alert('failure in call');

  }

} 

//map Segment data in categorie
function MapDataProduct(res,elements){ 
  if(res.products.length > 0) {
    let MainImg = ''
    const arry = []

    res.products.map((product,i) =>{  
      product.images.forEach((image) =>{
        if(image.primary === true){
          MainImg = image.href
        } 
      })
      arry.push({

        'LblProductName':{ 'text' : product.name  },
        'id': product.id ,
        'LblPrice': {'text' : product.salePrice, 'skin' :product.onSale ? 'skinOffer' : 'SkinNormalText' },
        'ImgProduct' : {'src' : MainImg},
        'LblFreeShipping':{
          'isVisible' : product.freeShippingEligible,  
        },
        'LblReview':{
          'text': product.customerReviewAverage
        },
        'shortDescription': product.shortDescription,
        'backId' : product.categoryPath[product.categoryPath.length - 1].id,
        'sku' : product.sku

      })
    }) 
    elements.widget.setData(arry) 

  }
  else{
    alert('Error, Cant display categories at this moment')
    backProduct(elements.backId)
    elements.widget.setData([])
  }
  kony.application.dismissLoadingScreen(); 
} 
