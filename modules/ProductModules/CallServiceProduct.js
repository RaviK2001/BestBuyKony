//Type your code here
function CallServiceProduct(callConfig,elements,type,filter){ 
  kony.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});

  const serviceName = "BestBuyServiceKeyrol";
  const client = kony.sdk.getCurrentInstance(); 

  const service = client.getIntegrationService(serviceName);

  service.invokeOperation(callConfig.operationName, callConfig.headers, callConfig.params,
                          operationSuccessProduct, operationFailure);


  //succes service call
  function operationSuccessProduct(res){
    LastProductId = callConfig.headers.id;

    MapDataProduct(res, elements,filter);

    elements.LblPage.text = `page ${callConfig.params.page} of ${totalPages}`;

    if(totalPages === 1){
      elements.listPages.isVisible = false;
    }else if(totalPages === 0){
      elements.listPages.isVisible = false;

      elements.LblPage.isVisible = false;
    }
    else{
      elements.LblPage.isVisible = true;

      elements.listPages.isVisible = true;

      if( elements.listPages.masterData !== calculateTotalPages(totalPages)){
        elements.listPages.masterData = calculateTotalPages(totalPages);

      }
      elements.listPages.selectedKey = callConfig.params.page;
    }


  }
  //fail to call service 
  function operationFailure(res){ 
    kony.application.dismissLoadingScreen();

    alert('failure in call');
    backProduct(elements.backId,'Home');


  }

} 

//map Segment data in categorie
function MapDataProduct(res,elements,filter){ 
  try{

    if(res.products.length > 0) {
      let MainImg = '';
      const arry = [];
      totalPages = res.totalPages;
      res.products.map((product,i) =>{  
        product.images.forEach((image) =>{
          if(image.primary === true){
            MainImg = image.href;
          } 
        });

        arry.push({

          'LblProductName':{ 'text' : product.name  },
          'id': product.id ,
          'LblPrice': {'text' : 
                       '$'+ product.salePrice, 'skin' :product.onSale ? 'skinOfferProductList' : 'SkinNormalText' },
          'ImgProduct' : {'src' : MainImg},
          'LblFreeShipping':{
            'isVisible' : product.freeShippingEligible,  
          },
          'LblReview':{
            'text': product.customerReviewAverage ? 'Avg User Rating: '+product.customerReviewAverage : ''
          },
          'stars' : product.customerReviewAverage,
          'shortDescription': product.shortDescription,
          'backId' : product.categoryPath[product.categoryPath.length - 1].id,
          'sku' : product.sku , 
          'images': product.images,
          'new': product.new ? product.new : false,
          'onSale': product.onSale,
          'price': product.salePrice
        });


      }) ; 
      if(filter === '&freeShipping=false'){
        const result =  arry.filter(a => a.LblFreeShipping.isVisible === false);
        elements.widget.setData(result) ; 

      }
      else{
        elements.widget.setData(arry) ;
      }
      elements.noItems.isVisible = false
      elements.widget.isVisible = true
    }
    else{
      alert('Theres no produucts to show at this moment');
      elements.widget.setData([]);
      elements.noItems.isVisible = true
      elements.widget.isVisible = false

    }
    kony.application.dismissLoadingScreen(); 
  }
  catch(e){
    alert('Error');
    backProduct(elements.backId,'Home');
  }
} 
