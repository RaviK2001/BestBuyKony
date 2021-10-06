define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {
          this.view.TxtSearchName.onDone = (txtBox) =>{
                var regex = /^[A-Za-z0-9 ]+$/
     let RegexValid =  regex.test(txtBox.text.replace)
            if(searchText ==='') {
              alert('Please write a search criteria')
            } 
            else{
              if(RegexValid === false){
                alert('Please dont use especial characters')
              }
              else{
               const searchText = txtBox.text.replace(/\s+/g, '%')
            CallServiceProduct(
      {operationName:'GetProductBySearch',params:{"search": searchText},headers:{}}
    )
              }
            }

          }
		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {
            defineGetter(this, 'isHided', () => {
                return this._isHided;
            });
            defineSetter(this, 'isHided', value => {
                this._isHided = value;
            });
        }
	};
});