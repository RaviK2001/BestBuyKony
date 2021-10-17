//Type your code here
function animationShowHide(widget,status,hide,show,view){ 
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
  widget.animate(animationDefObject, animationConfig, {
    animationStart:()=>{
      if(view){
        view.zIndex = 3; 
      }
    },
    animationEnd:()=>{
      if(view){
        status = !status 
        view.zIndex = status ? 1 : 3

      } 

    }});    
}

function animationShowHideMenu(widget,view,hide,show){
  animationDef = { 
    "100": {
      "left": widget.left === '-87%' ? show : hide  
    } 
  };

  animationConfig = {
    duration: 0.5,
    fillMode: kony.anim.FILL_MODE_FORWARDS
  };
  animationDefObject = kony.ui.createAnimation(
    animationDef
  );
  widget.animate(animationDefObject, animationConfig, {
    animationStart:()=>{
      view.zIndex = 3; 
    },
    animationEnd:()=>{
      view.zIndex = widget.left === '-87%' ? 1 : 3
      view.FlxBody.isModalContainer = widget.left ===  '-87%' ? false : true

    }});    
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