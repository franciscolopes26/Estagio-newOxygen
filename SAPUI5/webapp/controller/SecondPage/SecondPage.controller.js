sap.ui.define(
  ["sap/ui/demo/nav/controller/BaseController", "sap/ui/core/UIComponent"],
  function (BaseController, UIComponent) {
    "use strict";

    return BaseController.extend(
      "sap.ui.demo.nav.controller.SecondPage.SecondPage",
      {
        onInit: function () {
          UIComponent.getRouterFor(this).attachTitleChanged(function (oEvent) {
            var sTitle = oEvent.getParameter("title");

            console.log(sTitle)

            // Example usage: set the browser page title (optional)
            document.title = sTitle;
          });

          UIComponent.getRouterFor(this)
            // .getRoute("SecondPage")
            // .attachPatternMatched(this._onObjectMatched, this);
            .attachRoutePatternMatched(this._onObjectMatched, this);
        },

        _onObjectMatched: function (oEvent) {
          // console.log("SecondPage");
        },
      }
    );
  }
);
