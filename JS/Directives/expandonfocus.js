"use strict";

function expandOnFocus() {
  return {
    restrict: "A",
    link: function($scope, $element, $attrs) {
      $element.on("focus", () => {
        $element.css("height", "200px");
      });
      $element.on("blur", () => {
        $element.css("height", "initial");
      });
    }
  };
}


angular
  .module("app")
  .directive("expandOnFocus", expandOnFocus);
