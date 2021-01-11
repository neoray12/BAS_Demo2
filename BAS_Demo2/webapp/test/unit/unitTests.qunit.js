/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sap/demo/BAS_Demo2/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
