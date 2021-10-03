 function FindLocation(text,map){
  CallServiceLocation(
        {operationName:'GetStores',params:{'store':text},headers:{}},map
      )
}  

function AddPinsToMap(storeLocation,map){
  alert(storeLocation)
  map.addPins(storeLocation)

    
}