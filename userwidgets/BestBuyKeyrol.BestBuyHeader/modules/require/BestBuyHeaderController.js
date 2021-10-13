define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this.view.SgmMenu.onRowClick = () => {
        const currentForm = kony.application.getCurrentForm();

        let ntf = new kony.mvc.Navigation(this.view.SgmMenu.selectedRowItems[0].FormName);
        ntf.navigate()
        menu.isVisible = false;
        if( kony.application.getCurrentForm().id !== currentForm.id){
          kony.application.destroyForm(currentForm.id)

        }
      }
     
      const menu = this.view.FlxMenu
      this.view.FlxBreadMenu.onTouchStart = () => {
        if (menu.left === '-87%') {
          animationShowHideMenu(menu,this.view,'-87%','0%');

        } else {
          animationShowHideMenu(menu,this.view,'-87%','0%');
        }
      }

      this.view.Flxsearch.onTouchStart = () => {
        animationShowHide(this.view.SearchMenu,this.view.SearchMenu.isHided,'100%','0%')
        this.view.SearchMenu.isHided = !this.view.SearchMenu.isHided
        this.view.SearchMenu.isModalContainer = !this.view.SearchMenu.isHided 
        this.view.zIndex = this.view.SearchMenu.isHided ? 1 : 3

      }
      this.view.SearchMenu.onClickCancel = () => {
        animationShowHide(this.view.SearchMenu,this.view.SearchMenu.isHided,'100%','0%')
        this.view.SearchMenu.isHided = !this.view.SearchMenu.isHided
        this.view.SearchMenu.isModalContainer = !this.view.SearchMenu.isHided 
        this.view.zIndex = this.view.SearchMenu.isHided ? 1 : 3

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

