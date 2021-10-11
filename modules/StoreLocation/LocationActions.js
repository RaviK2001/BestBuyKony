 function FindLocation(text,map){
   map.clear()
  CallServiceLocation(
        {operationName:'GetStores',params:{'store':text},headers:{}},map
      )
}  

function AddPinsToMap(storeLocation,map){
try{
   map.locationData =storeLocation
 map.fitToBounds(storeLocation)
  map.addPins(storeLocation)
}
  catch{
    
    }
     
}