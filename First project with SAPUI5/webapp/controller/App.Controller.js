sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";
    return Controller.extend("HelloWorld.App", {
        onShowHello : function () {
            MessageToast.show("Hello World");
        }
    });
});