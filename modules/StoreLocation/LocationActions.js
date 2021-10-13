function FindLocation(text,map){
  if(text.trim() !== ''){
    const regex = /^(\w+ ?)*$/; 
    let RegexValid =  regex.test(text);
    if(RegexValid){
      map.clear()
      CallServiceLocation(
        {operationName:'GetStores',params:{'store':text},headers:{}},map
      )
    }
	else{
      alert('Please write a valid city name')
    }
  }
  else{
    alert('Please, write a city name')
  }
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