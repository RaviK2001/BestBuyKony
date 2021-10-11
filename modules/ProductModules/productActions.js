let totalPages = 0;
function OnClickProduct(seguiWidget){
  if(seguiWidget.selectedRowItems[0]){
    CallServiceReviews(seguiWidget.selectedRowItems[0]);
  }
  else{
    CallServiceReviews(seguiWidget);

  }
}


function backProduct(id,type,product){
  const currentForm = kony.application.getCurrentForm();
	let nft;
  switch(type){
    case 'Home': 
      nft = new kony.mvc.Navigation("HomeForm");
      nft.navigate(id); 
      break;
      case 'List': 
      nft = new kony.mvc.Navigation("FormProductList");
      nft.navigate();
      break;
      case 'Detaills':
      nft = new kony.mvc.Navigation("ProductDetailsForm"); 
      nft.navigate(product);
      break;
  } 
  kony.application.destroyForm(currentForm.id);


} 

function ClickMoreImg(product) {
  let ntf = new kony.mvc.Navigation("ProductImgForm");
  ntf.navigate(product);
} 

function SetImgs(imgArray){
  const ResultList = [];
  imgArray.forEach(img => {
    ResultList.push({
      'ProductImg' : { 
        'src' : img.href
      }
    });
  });

  return ResultList ;
}

function setPage(number, element,context){
  CallServiceProduct(
    {operationName:context.type === 'categorie' ? 'GetProductList' : 'GetProductBySearch',
     params:{'id': context.type === 'categorie' ? context.id : 0,
             'page' : number,
             'search': context.type === 'search' ? context.search : null  
            },
     headers:{}},
    elements,'product');

}

function calculateTotalPages(total){
  const data = [];
  for(let i = 0; i < total; i++){
    data.push([Math.floor(i + 1).toString(),Math.floor(i + 1).toString()]);
  }
  return data;
}