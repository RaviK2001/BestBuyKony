//Type your code here
const cart = []

function cartEmpty(flxBody,FlxNoItems) {
  if(cart.length > 0) { 
    flxBody.isVisible = true;
    FlxNoItems.isVisible = false;
  }   
  else{
    flxBody.isVisible = false;
    FlxNoItems.isVisible = true;
  }
}

function addToCar(item){
  const FormatedItem = {
    'LblName': {
      'text':  item.LblProductName.text
    },
    'LblPrice': {
      'text' : item.LblPrice.text,
      'skin' : item.LblPrice.skin
    },
    'ImgDelete' : {
      'src': 'cartremoveitem.png'
    }
  }
  cart.push(FormatedItem)
  alert('Product added to cart')
    alert(cart)


}
function calculateTotal(){
  let total = 0;

  cart.forEach(item => {
    total = total + +item.LblPrice.text
  })

  return total
} 

function isNew(){
  let New = false;

  cart.forEach(item => {
    if(item.new)
    {
      New = true
    }
  })

  return New ? 'Shipping may be delayed' : 'Normal shipping schedule'
}

function isOnSale(){
  let onSale = false;

  cart.forEach(item => {
    if(item.onSale)
    {
      onSale = true
    }
  })

  return onSale ? 'skinOffer' : 'defLabel'
}