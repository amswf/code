function initPageLink(clickTrackers, collectError, lp) {
    document.getElementById('jt_banner_wrap').onclick =  function(e) {
        let eventId="";if(window.TrackingSdk)try{let r=TrackingSdk.trackEvent("click",{"b_id":"g3id8aa92896f2662be2b000v6f000071781660315394"});eventId=r?.eventId}catch(c){}

        if (clickTrackers && typeof clickTrackers === "object" && clickTrackers.length) {
            for (var i = 0; i < clickTrackers.length; i++) {
                if (window.navigator.sendBeacon) {
                    navigator.sendBeacon(clickTrackers[i]);
                } else {
                    var img = new Image();
                    img.src = clickTrackers[i];
                }
            }
        }
        var landingPageUrl = '' || lp;
        if (landingPageUrl) {
            if (typeof mraid !== 'undefined' && typeof mraid.open === 'function') {
                mraid.open(landingPageUrl);
            } else {
                window.open(landingPageUrl, '_blank');
            }
        } else {
            collectError && collectError('lp_missing')
        }
    }
}

function addTrackers(clickTrackers, collectError, lp) {
    initPageLink(clickTrackers, collectError, lp);
}
