//Type your code here
function AnimateNormaSegment(){
  let transformObject = kony.ui.makeAffineTransform();
  let transformProp2 = kony.ui.makeAffineTransform();
  transformProp2.translate(200, 0);
  transformObject.translate(0,0);
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
  
  return {
    animationDef: SegmentAnimationDefObject,
    config: SegmentAnimationConfig
  }
}

function animateDeleteCartItem(row,currentForm){


    let transformObject3 = kony.ui.makeAffineTransform();
    let transformObject4 = kony.ui.makeAffineTransform();

    transformObject3.translate(1000,0);
    transformObject4.scale(1,0);
    transformObject4.translate(1000,0);

  let animationObject = kony.ui.createAnimation({
    "50": {
            "left": '100%',

      //             "stepConfig": {
      //                 "timingFunction": kony.anim.LINEAR
      //             }
    },
    "100": {
//       'height' : '0.1%'
//             "transform": transformObject4,


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
    widgets: ['FlsMainCart'],
    animation: animationDefObject
  });
}