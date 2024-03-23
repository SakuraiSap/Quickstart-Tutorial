sap.ui.define([
    'sap/m/Button',
    'sap/m/MessageToast'
], (Button, MessageToast) => {
    "use strict";
    new Button({
        text: "Ready...",
        press: function(){
            MessageToast.show("Hello world")
        }
    }).placeAt("content");
});