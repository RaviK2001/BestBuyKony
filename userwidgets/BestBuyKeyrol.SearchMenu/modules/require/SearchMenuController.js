define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {


      this.view.TxtSearchName.onDone = (txtBox) =>{
        const filter = this.view.ListFilter.selectedKey === 'NotSelected' ? '' :  '&' + this.view.ListFilter.selectedKey;


        if(!txtBox.text) {
          alert('Please write a search criteria');
        } 
        else{
          const regex = /^(\w+ ?)*$/; 
          const searchText = txtBox.text.replace(/\s+/g, '%');

          let RegexValid =  regex.test(searchText);
          if(RegexValid === false){
            alert('Please dont use especial characters');
          }
          else{
            const context = {
              type: 'search', 
              id: 0,
              LastId: 0,
              name: txtBox.text,
              search: txtBox.text + filter,
              filter: filter
            };
            const ntf = new kony.mvc.Navigation("FormProductList");
            ntf.navigate(context);
            this.view.ListFilter.selectedKey =  'NotSelected';
            this.view.TxtSearchName.text = '' ;
          }
        }

      };
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