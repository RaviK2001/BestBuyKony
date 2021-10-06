//Global variables for categories
let CategoriesState = []
let CategorieDeep = 0
let elements = null 
let LastCall = null 

function OnClickCategorie(seguiWidget, sectionNumber, rowNumber, selectedState){
  if(CategorieDeep < 3){
    CallServiceCategorie(
      {operationName:'GetCategories',params:{"id": seguiWidget.selectedRowItems[0].id},headers:{}},
      elements,'categorie'
    )
  }	else{
    var ntf = new kony.mvc.Navigation("FormProductList");
    const context = {
      type: 'categorie', 
      id: seguiWidget.selectedRowItems[0].id,
      LastId: LastCall,
      name: seguiWidget.selectedRowItems[0].LblCategorie.text
    }

      ntf.navigate(context)
  }
} 

function backCategorie(item){ 
  CallServiceCategorie( 
    {operationName:'GetCategories',params:{"id": item.backButton.backId},headers:{}},
    item,'categorie'
  )
 
}