/*
 * URL/id config for tecdo_tokopedia.all_js_readable_url_configurable.js
 *
 * 这份配置只覆盖 all_js_readable.js 里实际出现的 JS 链路：
 * - TrackingSdk 外部脚本
 * - deeplink
 * - 动态 trackerScript
 * - collectFeature / collectHtml
 * - errorPixelBase / fraudJudge
 * - clickPrimary / clickAppLink / clickAffiliate
 * - visibility
 * - bidId
 *
 * HTML 里的素材图和 impression 像素不在 all_js_readable.js 内，
 * 所以没有放进这份 READABLE_CONFIG。
 */
window.BRX_READABLE_CONFIG = {
  "ids": {
    "bidId": "g3id8aa92896f2662be2b000v6f000071781660315394"
  },
  "urls": {
    "trackingSdk": "https://cdn.roai.cloud/dsp-sdk/js/TrackingSdk-latest.min.js",
    "deeplink": "tokopedia://home",
    "trackerScript": "https://sg.aibidstat.top/st/f?b_d=g3id8aa92896f2662be2b000v6f000071781660315394&affiliate_id=264&ad_group_id=40407&bundle=com.fugo.wow&ip=139.0.76.95&schain=chartboost.com%2Cwww.jiatoutrade.com&device_id=be7b636a-0999-461f-9f4b-4a5774cf8d8c",
    "collectFeature": "https://sg.aibidstat.top/ft/e?b_d=g3id8aa92896f2662be2b000v6f000071781660315394&affiliate_id=264&ad_group_id=40407&bundle=com.fugo.wow&ip=139.0.76.95&schain=chartboost.com%2Cwww.jiatoutrade.com&device_id=be7b636a-0999-461f-9f4b-4a5774cf8d8c",
    "errorPixelBase": "https://sg.aibidstat.top/fc?bid_id=g3id8aa92896f2662be2b000v6f000071781660315394&affiliate_id=264&country=IDN&ad_group_id=40407&bundle=com.fugo.wow&ip=139.0.76.95&schain=chartboost.com%2Cwww.jiatoutrade.com&device_id=be7b636a-0999-461f-9f4b-4a5774cf8d8c&ad_id=407960&os=Android&publisher_id=JT12001255&id_key=be7b636a-0999-461f-9f4b-4a5774cf8d8c",
    "fraudJudge": "https://sg.aibidstat.top/fj?b_d=g3id8aa92896f2662be2b000v6f000071781660315394&affiliate_id=264&country=IDN&ad_group_id=40407&bundle=com.fugo.wow&ip=139.0.76.95&schain=chartboost.com%2Cwww.jiatoutrade.com&device_id=be7b636a-0999-461f-9f4b-4a5774cf8d8c&ad_id=407960&os=Android&publisher_id=JT12001255&id_key=be7b636a-0999-461f-9f4b-4a5774cf8d8c&t=1&ust=true&tracking_fj_exp_layer_id=8&tracking_fj_exp_group_id=18&tracking_fj_exp_id=114&tracking_fj_exp_param=%7B%22block%22%3A%5B%22risk_ip_38%22%2C%22risk_geo_ip_affiliate%22%2C%22risk_geo_ip%22%5D%2C%22mark%22%3A%5B%22risk_IPC_not_bounce%22%2C%22risk_User_Agent_not_bounce%22%2C%22risk_Referer_not_bounce%22%5D%7D&first_ssp=chartboost.com&domain=",
    "clickPrimary": "https://sg.aibidstat.top/click?bid_id=g3id8aa92896f2662be2b000v6f000071781660315394&campaign_id=1797&ad_group_id=40407&ad_id=407960&creative_id=25639&device_id=be7b636a-0999-461f-9f4b-4a5774cf8d8c&affiliate_id=264&id_key=be7b636a-0999-461f-9f4b-4a5774cf8d8c&bundle=com.fugo.wow&p_ad_group_id=35797&gold_bid=0.5&country=IDN&adv_id=710&exp_id=88&imp_expire=&gen_cr_id=&tmp_id=0&sku_id=&traffic_exp_id=76&adv_billing_price=&replace_creative_id=&cr_exp_id=&dpa_type=0&deeplink_url_type=0&buyer_uid=&user_id=2460110298&ip=139.0.76.95&domain=&tag_id=banner&ori_bid_id=&ad_billing_type=1&offer_id=176819302&ab_exp_id=eyIxIjo4OCwiMiI6MjMsIjMiOjIwMCwiNCI6NzYsIjUiOjM3LCI2IjoxMzIsIjciOjAsIjgiOjExNCwiMTAiOjAsIjExIjoxNTQsIjEzIjoxNjUsIjE1IjoyMTUsIjE2IjoyNTEsIjE4IjowLCIxOSI6MzQ0LCIyMCI6MzYwLCIyMSI6MzUzLCIyMiI6MCwiMjMiOjM1OCwiMjQiOjAsIjI1IjozNzMsIjI2IjowLCIyNyI6MH0&a_domain=com.tokopedia.tkpd&adv_package_domain=com.tokopedia.tkpd&traffic_bundle_domain=com.fugo.wow&ad_format=BANNER&os=Android&device_type=PHONE&traffic_type=1&platform=1&response_type=1&device_id_2=be7b636a-0999-461f-9f4b-4a5774cf8d8c&device_id_2_type=gaid&ad_flag=1&carty_one_id=CAESEDz-6Uc8s0Rav80dOAtKOyE&package_name=com.tokopedia.tkpd&first_ssp=chartboost.com&device_ext=e30&fze_budget_flag=0&ad_width=320&ad_height=50&device_make=Xiaomi&device_model=2312DRA50G&osv=15&city=BEKASI&region=JB&connection_type=2&carrier=FirstMedia&lang=EN&lon=106.9835&lat=-6.2808&ua=Mozilla%2F5.0+%28Linux%3B+Android+15%3B+2312DRA50G+Build%2FAQ3A.240912.001%3B+wv%29+AppleWebKit%2F537.36+%28KHTML%2C+like+Gecko%29+Version%2F4.0+Chrome%2F148.0.7778.215+Mobile+Safari%2F537.36&ppi=&hwv=&h=692&w=360&utcoffset=",
    "clickAppLink": "https://tokopedia.app.link/FxrzUgpjcYb?%243p=a_adeliver&~click_id=g3id8aa92896f2662be2b000v6f000071781660315394&~campaign_id=1797&~secondary_publisher=14382&utm_campaign=adlv-act-14382-adeliver-act-ord-pg-id51pgce51-0000-alon-adlv&~campaign=adlv-act-14382-adeliver-act-ord-pg-id51pgce51-0000-alon-adlv&~channel=14382_264",
    "clickAffiliate": "https://click.trackstate.net/aff_c?offer_id=176819302&affiliate_id=14382&aff_sub5=264_chartboost.com_com.fugo.wow&aff_sub2=g3id8aa92896f2662be2b000v6f000071781660315394&gaid=be7b636a-0999-461f-9f4b-4a5774cf8d8c&device_id=be7b636a-0999-461f-9f4b-4a5774cf8d8c&aff_sub3=1797&aff_sub4=&transaction_id=g3id8aa92896f2662be2b000v6f000071781660315394&async=true&auto_redirect=false",
    "collectHtml": "https://sg.aibidstat.top/st/c?b_d=g3id8aa92896f2662be2b000v6f000071781660315394&affiliate_id=264&ad_group_id=40407&bundle=com.fugo.wow&ip=139.0.76.95&schain=chartboost.com%2Cwww.jiatoutrade.com&device_id=be7b636a-0999-461f-9f4b-4a5774cf8d8c",
    "visibility": "https://sg.aibidstat.top/visibility?bid_id=g3id8aa92896f2662be2b000v6f000071781660315394&ad_group_id=40407&ad_id=407960&creative_id=25639&device_id=be7b636a-0999-461f-9f4b-4a5774cf8d8c&affiliate_id=264&bundle=com.fugo.wow&first_ssp=chartboost.com&adv_id=710&country=IDN&ad_format=BANNER&deeplink_url_type=0&domain=&response_type=1&device_id_2=be7b636a-0999-461f-9f4b-4a5774cf8d8c&device_id_2_type=gaid&carty_one_id=CAESEDz-6Uc8s0Rav80dOAtKOyE"
  }
};
