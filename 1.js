/*
 * Source: inline script 1
 * Generated from /Users/zheng/Documents/zed/banner/tokopedia.txt
 * Notes:
 * - Full inline JS control flow is preserved.
 * - String-table lookups were expanded.
 * - Hex-encoded strings were decoded where they were directly visible.
 * - Key one-letter functions were renamed based on behavior.
 * - Local generated variables remain when renaming them would risk changing scope.
 */

"use strict";

function hexDecode(hex) {
  let text = "";
  for (let index = 0; index < hex.length; index += 2) {
    text += String.fromCharCode(parseInt(hex.slice(index, index + 2), 16));
  }
  return text;
}

window.__de = hexDecode;

(function patchDomInspectionGetters() {
  try {
    const blockedStackNeedle = "webcontentassessor";
    const hiddenMarkup = "<div></div>";
    const innerHtmlGetter = Object.getOwnPropertyDescriptor(Element.prototype, "innerHTML").get;
    const outerHtmlGetter = Object.getOwnPropertyDescriptor(Element.prototype, "outerHTML").get;

    function isInspectionRead() {
      const stack = String(new Error().stack || "");
      const calledByBlockedReader = stack.split("\n").some((line) => line.indexOf(blockedStackNeedle) > -1);
      const nodeAppendChildLooksHooked = window.Node.prototype.appendChild
        .toString()
        .indexOf("mediafilter") > -1;
      return calledByBlockedReader || nodeAppendChildLooksHooked;
    }

    Object.defineProperty(Element.prototype, "innerHTML", {
      get() {
        return isInspectionRead() ? hiddenMarkup : innerHtmlGetter.call(this);
      },
    });

    Object.defineProperty(Element.prototype, "om", {
      get() {
        return innerHtmlGetter.call(this);
      },
    });

    Object.defineProperty(Element.prototype, "outerHTML", {
      get() {
        return isInspectionRead() ? hiddenMarkup : outerHtmlGetter.call(this);
      },
    });
  } catch (error) {
  }
})();
