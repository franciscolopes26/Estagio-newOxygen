sap.ui.define(
  ["sap/ui/demo/nav/controller/BaseController", "sap/ui/core/UIComponent"],
  function (BaseController, UIComponent) {
    "use strict";

    return BaseController.extend("sap.ui.demo.nav.controller.Home", {
      onInit: function () {
        UIComponent.getRouterFor(this).attachTitleChanged(function (oEvent) {
          var sTitle = oEvent.getParameter("title");

          // Example usage: set the browser page title (optional)
          document.title = sTitle;
        });
      },

      onDisplayNotFound: function () {
        // display the "notFound" target without changing the hash
        this.getRouter().getTargets().display("notFound", {
          fromTarget: "home",
        });
      },

      onNavToHardCoded: function () {
        this.getRouter().navTo("HardCoded", {
          // mandatoryValue: "123"
        });
      },

      onNavToMandatory: function () {
        this.getRouter().navTo("MandatoryParameters", {
          mandatoryValue: "123",
        });
      },

      onNavToOptional: function () {
        this.getRouter().navTo("OptionalParameter", {
          optionalValue: "321",
        });
      },

      onNavToQuery: function () {
        this.getRouter().navTo("QueryParameters", {
          oQuery: {
            category: "notebook",
            price: "desc",
          },
        });
      },

      onNavToRestAsString: function () {
        this.getRouter().navTo("RestAsStringParameters", {});
      },

      onNavToEmployee: function () {
        this.getRouter().navTo("SecondPage", {});
      },

    });
  }
);
