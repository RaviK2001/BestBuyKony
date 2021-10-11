//Type your code here
function animationShowHide(widget,status,hide,show){
  animationDef = {
    "100": {
      "top": status === true ? show : hide  
    } 
  };

  animationConfig = {
    duration: 0.5,
    fillMode: kony.anim.FILL_MODE_FORWARDS
  };
  animationDefObject = kony.ui.createAnimation(
    animationDef
  );
  widget.animate(animationDefObject, animationConfig, null);    
}

function CarPriceAnimation(currentForm){
  let transformObject = kony.ui.makeAffineTransform();
  let transformObject2 = kony.ui.makeAffineTransform();

  transformObject.rotate3D(180, 0,1,0);
  transformObject2.rotate3D(0, 0,1,0);

  animationDef = {
    '0':{
      "transform": transformObject

    },
    "100": {
      "transform": transformObject2

    } 
  };

  animationConfig = {
    duration: 1.5,
    fillMode: kony.anim.FILL_MODE_FORWARDS
  };
  animationDefObject = kony.ui.createAnimation(
    animationDef
  );
  currentForm.Lbltotal.animate(animationDefObject, animationConfig,{animationEnd:()=>{
    currentForm.Lbltotal.text = `${calculateTotal()}`;

  }});    

}