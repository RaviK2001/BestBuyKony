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
    map.addPins(storeLocation)

    map.locationData = [{lat:storeLocation[0].lat,lon:storeLocation[0].lon,
                         name: storeLocation[0].name, desc: storeLocation[0].desc,navigateAndZoom:true}]
    //     map.fitToBounds(storeLocation)
  }
  catch(e){
alert(e)
    }

    }