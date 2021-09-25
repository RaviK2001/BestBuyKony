//Type your code here
function OnClickCategorie(seguiWidget, sectionNumber, rowNumber, selectedState){
  if(CategorieDeep < 3){
    CallService(
      {operationName:'GetCategories',params:{"id": seguiWidget.selectedRowItems[0].id},headers:{}},
      elements,'categorie'
    )
  }	else{
    var ntf = new kony.mvc.Navigation("FormProductList");
      ntf.navigate('categorie',seguiWidget.selectedRowItems[0].id,seguiWidget.selectedRowItems[0].name);
  }
} 

function backCategorie(item){
  alert(item)
  CallService( 
    {operationName:'GetCategories',params:{"id": item.backButton.backId},headers:{}},
    item,'categorie'
  )
 
}
