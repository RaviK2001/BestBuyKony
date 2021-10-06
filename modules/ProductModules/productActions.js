function OnClickProduct(seguiWidget){
  if(seguiWidget.selectedRowItems[0]){
    CallServiceReviews(seguiWidget.selectedRowItems[0])
  }
  else{
    CallServiceReviews(seguiWidget)

  }
}


function backProduct(id){
  if(id){
    let ntf = new kony.mvc.Navigation("HomeForm");
    ntf.navigate(id);
  }

  else{
    let ntf = new kony.mvc.Navigation("FormProductList");
    ntf.navigate();
  }

}

function ClickMoreImg(product) {
  let ntf = new kony.mvc.Navigation("ProductImgForm");
  ntf.navigate(product)
} 

function SetImgs(imgArray){
  const ResultList = []
  imgArray.forEach(img => {
    ResultList.push({
      'ProductImg' : { 
        'src' : img.href
      }
    })
  })

  return ResultList 
}

function fetchReviews(segment){

}