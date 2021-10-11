//Type your code here
function CallServiceReviews(data){ 

  kony.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});
  const operationName = 'GetReviews'
  const params= {'sku': data.sku} 
  const serviceName = "BestBuyServiceKeyrol";
  const client = kony.sdk.getCurrentInstance(); 

  const service = client.getIntegrationService(serviceName);
  const ErrorMaping = false

  service.invokeOperation(operationName, null, params,
                          operationSuccess, operationFailure);


  //succes service call
  function operationSuccess(res){
    MapDataReviews(res, data)

  }
  //fail to call service 
  function operationFailure(res){ 
    kony.application.dismissLoadingScreen();

    alert('failure in call');

  }

}

//map Segment data in categorie
function MapDataReviews(res,data){
  if(res.reviews.length > 0) {
    const arrayReviewsMapped = []
    const total = res.total
    res.reviews.slice(0, 10).map((review,i) =>{  
      arrayReviewsMapped.push({

        'LbReviewTitle':{ 'text' : review.title  },
        'LblReviewAutor': {'text' : review.reviewer[0].name},
        'ImgReview' : {'src' : `ratings_star_${Math.floor(+review.rating)}.png`},
        'LblReview':{'text' : review.comment}

      })
    }) 
    data = {...data, reviewList : arrayReviewsMapped,totalReviews: total}
    let ntf = new kony.mvc.Navigation("ProductDetailsForm");
    ntf.navigate(data)

  }
  kony.application.dismissLoadingScreen(); 
} 
