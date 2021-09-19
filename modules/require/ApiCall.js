define(function () {
 
    function CallApi(type,payload){ 
      if(type === "yes"){
       }
      else{
       } 
    }
  
   return {
 
       CallApi: CallApi
   };
 
});
/*
define(function () {
   const serviceName = 'BestBuyKeyrolService';
   const integrationObj = KNYMobileFabric.getIntegrationService(serviceName);

   const operationName =  "GetAllPlayers";
const data= {"per_page": "<place-holder>","page": "<place-holder>"};
const headers= {"X-RapidAPI-Host": "<place-holder>","X-RapidAPI-Key": "<place-holder>"}; 
integrationObj.invokeOperation(operationName, headers, data, operationSuccess, operationFailure);

function operationSuccess(res){
    // code for success call back
}
function operationFailure(res){
    // code for failure call back
}
});
*/