define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {
	this.view.SgmMenu.onRowClick = MenuCLick
    this.view.FlxBreadMenu.onTouchStart = () => {
    if (this.view.FlxMenu.isVisible == false) {
        this.view.FlxMenu.isVisible = true;
    } else {
        this.view.FlxMenu.isVisible = false;
    }

    }
		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {
            defineGetter(this, 'BackId', () => {
                return this._BackId;
            });
            defineSetter(this, 'BackId', value => {
                this._BackId = value;
            });
        }
	};
});

function MenuCLick(segment){
  
      let ntf = new kony.mvc.Navigation(segment.selectedRowItems[0].FormName);
    ntf.navigate()
}