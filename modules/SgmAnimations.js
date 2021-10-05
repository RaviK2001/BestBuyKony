//Type your code here
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