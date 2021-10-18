let currentPins = []

function FindLocation(text,map){
  if(text && text.trim() !== ''){
    const regex = /^(\w+ ?)*$/; 
    let RegexValid =  regex.test(text);
    if(RegexValid){
      currentPins.splice(0, currentPins.length)
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
    map.addPins(storeLocation)
    map.locationData = [storeLocation[0]]
    //     map.fitToBounds(storeLocation)
  

    }