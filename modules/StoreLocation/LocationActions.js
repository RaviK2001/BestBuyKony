function FindLocation(text){
   CallServiceLocation(
        {operationName:'GetStores',params:{'store':text},headers:{}}
      )
} 