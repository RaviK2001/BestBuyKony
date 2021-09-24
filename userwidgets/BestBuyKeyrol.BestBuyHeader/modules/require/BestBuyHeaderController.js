define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {

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