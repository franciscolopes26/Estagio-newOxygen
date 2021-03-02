sap.ui.define(
  ["sap/ui/demo/nav/controller/BaseController", "sap/ui/core/UIComponent"],
  function (BaseController, UIComponent) {
    "use strict";

    return BaseController.extend(
      "sap.ui.demo.nav.controller.SecondPage.SecondPageTop",
      {
        onInit: function () {
          UIComponent.getRouterFor(this)
            .getRoute("SecondPage")
            .attachPatternMatched(this._onObjectMatched, this);
            // .attachRoutePatternMatched(this._onObjectMatched, this);
        },

        _onObjectMatched: function () {
          console.log("SecondPageTop");
        },
      }
    );
  }
);
