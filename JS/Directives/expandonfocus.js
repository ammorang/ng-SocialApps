"use strict";

// directive

function expandOnFocus() {
  return {
    restrict: "A",
    link: function($scope, $element, $attrs) {
      $element.on("focus", () => {
        $element
          .css("width", "500px")
          .css("height", "500px");
      });
      $element.on("blur", () => {
        $element.css("");
      });
    }
  }
}


angular.module("app").component("expandOnFocus", expandOnFocus);



  // Create an expandOnFocus directive that increases the size when item is focused. The
  // size returns to normal on blur. Apply this directive to both form inputs.