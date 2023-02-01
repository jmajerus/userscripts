// ==UserScript==
// @name         CheckAllClientFixedIp
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Check checkboxes to set fixed IP addresses for all Unifi clients.
// @author       You
// @match        http://unifi.ui.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ui.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    function checkAll() {
      var clients = document.querySelectorAll('form[name="clientPropertiesConfigureNetworkCtrl.form"]');
      for(var i = 0; i < clients.length; i++) {
          var client = clients[i];
          var checkbox = client.querySelector('input[name="clientFixedIp"]');
          var saveButton = client.querySelector('button[class~="saveClient"]');
          checkbox.checked = true;
          //saveButton.click();
      }
		}
    var button;
    button = document.createElement("Button");
    button.innerHTML = "Fixed IP";
    button.style =
    button.onclick = checkAll();
    var panel = document.body;
    panel.appendChild(button);

})();
