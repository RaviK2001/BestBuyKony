function OnClickProduct(seguiWidget, sectionNumber, rowNumber, selectedState){
    CallService(
      {operationName:'GetCategories',params:{"id": seguiWidget.selectedRowItems[0].id},headers:{}},
      elements,'product'
    )
  }


function back(id,name){
  CallService(  
    {operationName:'GetCategories',params:{"id": widget.backButton.backId},headers:{}},
    elements,'categorie'
  )

}
