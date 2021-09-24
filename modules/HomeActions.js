//Type your code here
function OnClickCategorie(seguiWidget, sectionNumber, rowNumber, selectedState){

  CallService(
    {operationName:'GetCategories',params:{"id": seguiWidget.selectedRowItems[0].id},headers:{}},
    'SecondaryCategorie',
    {widget: seguiWidget}
  )

} 

function back(lbl,widget){
  CallService(
    {operationName:'GetCategories',params:{"id": backButton.backId},headers:{}},
    'SecondaryCategorie',
    {lbl,widget: widget}
  )
 
}
