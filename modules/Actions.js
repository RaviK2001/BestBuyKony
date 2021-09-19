//Type your code here
function onRowClick(seguiWidget, sectionNumber, rowNumber, selectedState){
Categories[rowNumber].subCategories = [{"LblCategorie":seguiWidget.LblCategorie + "sub1" }]

seguiWidget.setData(Categories[rowNumber].subCategories)

BackCategories.isVisibleback === true ? null : BackCategories.isVisibleback = true


  /*
   alert(rowData.LblCategorie)
  alert(subCategories[index])
  */ 
}

function onBackClick(){
  
}