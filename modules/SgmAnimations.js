//Type your code here
function AnimateNormaSegment(widget){
  let transformObject = kony.ui.makeAffineTransform();
  let transformProp2 = kony.ui.makeAffineTransform();
  transformProp2.translate(200, 0);
  transformObject.translate(0,-100);
  animationDef = {
    "0": {
      "transform": transformProp2 

    },

    "100": {
      "transform": transformObject
    }
  };

  SegmentAnimationConfig = {
    duration: 0.5,
    fillMode: kony.anim.FILL_MODE_FORWARDS
  };
  SegmentAnimationDefObject = kony.ui.createAnimation(
    animationDef
  );
  widget.setAnimations({
    visible: {
      definition: SegmentAnimationDefObject,
      config: SegmentAnimationConfig,  
      callbacks: null
    } 
  }); 
}

function animateDeleteCartItem(row,currentForm){


    let transformObject = kony.ui.makeAffineTransform();
    let transformObject2 = kony.ui.makeAffineTransform();

    transformObject.translate(1000,0);
    transformObject2.scale(1,0);
    transformObject2.translate(1000,0);

  let animationObject = kony.ui.createAnimation({
    "50": {
            "transform": transformObject,
//       "left": "100%",

      //             "stepConfig": {
      //                 "timingFunction": kony.anim.LINEAR
      //             }
    },
    "100": {
//       'height' : '0.1%'
            "transform": transformObject2,


    }
  });
  let animationConfig = {
    duration: 2,
    fillMode: kony.anim.FILL_MODE_FORWARDS
  };
  let animationCallbacks = {
    "animationEnd": function() {
      cart.splice(row.rowIndex,1);

      mapCart(currentForm);
    }
  };
  let animationDefObject = {
    definition: animationObject,
    config: animationConfig,
    callbacks: animationCallbacks
  };
  currentForm.SgmCart.animateRows({
    rows: [row],
    widgets: [],
    animation: animationDefObject
  });
}