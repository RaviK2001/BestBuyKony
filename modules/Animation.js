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
  
         widget.animate(animationDefObject, animationConfig, null)
         
  }