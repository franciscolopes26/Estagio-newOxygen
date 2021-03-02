sap.ui.getCore().attachInit(function () {
    sap.ui.require(["sap/ui/core/mvc/XMLView"], function(XMLView) {
     XMLView.create({
     viewName: "HelloWorld.App"}).then(function(myView) {
         myView.placeAt("content");
      });
     });
  });