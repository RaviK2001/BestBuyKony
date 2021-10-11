//Type your code here
const cart = [];

function mapCart(view){
  cartEmpty(view.FlxBody,view.FlxNoItems);
  if(view.FlxBody.isVisible){ 
    view.SgmCart.setData(cart)
    view.Lbltotal.text = `${calculateTotal()}`
    view.Lbltotal.skin = isOnSale()
    view.LblDelay.text = isNew()
  }



}

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
  item = {...item,BtnDeleteCar: {
          'src': 'cartremoveitem.png',
          'onClick': function(eventobject,context){
          const row = {
          sectionIndex: 0,
          rowIndex: context.rowIndex
         };

  const currentForm = kony.application.getCurrentForm();
try{
    animateDeleteCartItem(row,currentForm);

  CarPriceAnimation(currentForm );
}catch(e){
  alert(e);
}

}.bind(this)
}
};
cart.push(item);
alert('Product added to cart');

}
function calculateTotal(){
  let total = 0;

  cart.forEach(item => {
    total = total + Math.ceil(+item.LblPrice.text);
  });

  return total;
} 

function isNew(){
  let New = false;

  cart.forEach(item => {
    if(item.new)
    {
      New = true;
    }
  });
  return New ? 'Shipping may be delayed' : 'Normal shipping schedule';
}

function isOnSale(){
  let onSale = false;

  cart.forEach(item => {
    if(item.LblPrice.skin === 'skinOffer')
    {
      onSale = true;
    }
  });
  return onSale ? 'skinOffer' : 'SkinLbltotalPrice';
}