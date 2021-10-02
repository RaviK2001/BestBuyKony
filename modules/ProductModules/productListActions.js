function OnClickProduct(seguiWidget, sectionNumber, rowNumber, selectedState){
    var ntf = new kony.mvc.Navigation("ProductDetailsForm");

      ntf.navigate(seguiWidget.selectedRowItems[0])
  }


function backProduct(id,name){
 var ntf = new kony.mvc.Navigation("HomeForm");
      ntf.navigate(id);
  

}
