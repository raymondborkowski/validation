
window._IntentMediaValidator = (function() {
  var r = document.createElement("p");
  r.id = 'IntentMediaValidator';
  var p = document.createElement("p");
  r.style.cssText = 'background-color: rgba(45, 47, 45, 0.9);text-align: center;padding:50px;font-size: 15px;position: absolute;top: 0;left: 0;width: 100%;height: 100%;line-height: 23px;color: white;z-index: 9999999999;';
  p.style.cssText = 'width: 40%;margin: 0 auto;border-radius: 50px;background: white;padding: 50px;color: black;';

    window.rv = {};
    function toObject(arr) {
      for (var i = 0; i < arr.length; ++i)
        rv[i] = arr[i];
    }

    var imPropsCheck = {
        "hotels": {
            "hotel_city": {"format": /^([a-zA-Z]+\s?)*[a-zA-Z]+$/g,
                          "errorMsg": "City of searched, selected or booked hotel property (in English language)",
                          "required": true,
                          "impName": "hotel_city"
            },
            "hotel_state": {"format": /^[A-Z]{2}$/g,
                          "errorMsg": "2 letter ISO state code of searched, selected or booked hotel property - US & Canada only",
                          "required": true,
                          "impName": "hotel_state"
            },
            "hotel_country": {"format": /^([a-zA-Z]+\s?)*[a-zA-Z]+$/g,
                          "errorMsg": "2 letter ISO country code of searched, selected or booked hotel property",
                          "required": true,
                          "impName": "hotel_country"
            },
            "hotel_airport_code": {"format": /^[A-Z]{3}$/g,
                          "errorMsg": "3 letter airport code - Hotel location (Not required if providing hotel city, state, and country)",
                          "required": true,
                          "impName": "hotel_airport_code"
            },
            "hotel_rooms": {"format": /^[1-9]{1}$/g,
                          "errorMsg": "Number of hotel rooms booked. Integer value greater than 0",
                          "required": true,
                          "impName": "hotel_rooms"
            },
            "site_country": {"format": /^[A-Z]{2}$/g,
                          "errorMsg": "2 letter ISO country code of the website version that was loaded",
                          "required": true,
                          "impName": "site_country"
            },
            "site_language": {"format": /^[a-zA-Z]{2}$/g,
                          "errorMsg": "2 letter ISO code for the language the website page is rendered in",
                          "required": true,
                          "impName": "site_language"
            },
            "site_currency": {"format": /^[A-Z]{3}$/g,
                          "errorMsg": "3 letter ISO currency code for the transaction",
                          "required": true,
                          "impName": "site_currency"
            },
            "travel_date_start": {"format": /(^20\d\d[0-1][0-9][0-3][0-9]$)|(^20\d\d\/[0-1][0-9]\/[0-3][0-9]$)|(^20\d\d-[0-1][0-9]-[0-3][0-9]$)/g,
                          "errorMsg": "Travel start date - required format YYYYMMDD",
                          "required": true,
                          "impName": "travel_date_start"
            },
            "travel_date_end": {"format": /(^20\d\d[0-1][0-9][0-3][0-9]$)|(^20\d\d\/[0-1][0-9]\/[0-3][0-9]$)|(^20\d\d-[0-1][0-9]-[0-3][0-9]$)/g, 
                          "errorMsg": "Travel end date - required format YYYYMMDD",
                          "required": true,
                          "impName": "travel_date_end"
            },
            "adults": {"format": /^[0-9]{1}$/g,
                          "errorMsg": "Number of adults. Integer value",
                          "required": false,
                          "impName": "adults"
            },   
            "children": {"format": /^[0-9]{1}$/g,
                          "errorMsg": "Number of children. Integer value",
                          "required": false,
                          "impName": "children"
            },   
            "seniors": {"format": /^[0-9]{1}$/g,
                          "errorMsg": "Number of seniors. Integer value",
                          "required": false,
                          "impName": "seniors"
            },   
            "travelers": {"format": /^[1-9]{1}$/g,
                          "errorMsg": "Total number of travelers (adults+children+seniors). Integer value greater than 0",
                          "required": true,
                          "impName": "travelers"
            }   
        },
        "flights": {
            "flight_origin": {"format": /^[A-Z]{3}$/g,
                          "errorMsg": "3 letter airport code",
                          "required": true,
                          "impName": "flight_origin"
            },
            "flight_destination": {"format": /^[A-Z]{3}$/g,
                          "errorMsg": "3 letter airport code",
                          "required": true,
                          "impName": "flight_destination"
            },
            "trip_type": {"format": /^roundtrip$|^oneway$/gi,
                          "errorMsg": "oneway or roundtrip",
                          "required": true,
                          "impName": "trip_type"
            },
            "adults": {"format": /^[0-9]{1}$/g,
                          "errorMsg": "Number of adults. Integer value",
                          "required": false,
                          "impName": "adults"
            },   
            "children": {"format": /^[0-9]{1}$/g,
                          "errorMsg": "Number of children. Integer value",
                          "required": false,
                          "impName": "children"
            },   
            "seniors": {"format": /^[0-9]{1}$/g,
                          "errorMsg": "Number of seniors. Integer value",
                          "required": false,
                          "impName": "seniors"
            },   
            "travelers": {"format": /^[1-9]{1}$/g,
                          "errorMsg": "Total number of travelers (adults+children+seniors). Integer value greater than 0",
                          "required": true,
                          "impName": "travelers"
            },
            "site_country": {"format": /^[A-Z]{2}$/g,
                          "errorMsg": "2 letter ISO country code of the website version that was loaded",
                          "required": true,
                          "impName": "site_country"
            },
            "site_language": {"format": /^[a-zA-Z]{2}$/g,
                          "errorMsg": "2 letter ISO code for the language the website page is rendered in",
                          "required": true,
                          "impName": "site_language"
            },
            "site_currency": {"format": /^[A-Z]{3}$/g,
                          "errorMsg": "3 letter ISO currency code for the transaction",
                          "required": true,
                          "impName": "site_currency"
            },
            "travel_date_start": {"format": /(^20\d\d[0-1][0-9][0-3][0-9]$)|(^20\d\d\/[0-1][0-9]\/[0-3][0-9]$)|(^20\d\d-[0-1][0-9]-[0-3][0-9]$)/g,
                          "errorMsg": "Travel start date - required format YYYYMMDD",
                          "required": true,
                          "impName": "travel_date_start"
            },
            "travel_date_end": {"format": /(^20\d\d[0-1][0-9][0-3][0-9]$)|(^20\d\d\/[0-1][0-9]\/[0-3][0-9]$)|(^20\d\d-[0-1][0-9]-[0-3][0-9]$)/g, 
                          "errorMsg": "Travel end date - required format YYYYMMDD",
                          "required": true,
                          "impName": "travel_date_end"
            } 
        },
        "cars": {
            "car_trip_type": {"format": /^roundtrip$|^oneway$/gi,
                          "errorMsg": "oneway or roundtrip",
                          "required": true,
                          "impName": "car_trip_type"
            },
            "car_pickup_location_type": {"format": /^airport$|^city$/gi,
                          "errorMsg": "airport or city",
                          "required": true,
                          "impName": "car_pickup_location_type"
            },
            "car_pickup_airport_code": {"format": /^[A-Z]{3}$/g,
                          "errorMsg": "3 letter airport code",
                          "required": true,
                          "impName": "car_pickup_airport_code"
            },    
            "car_pickup_city": {"format": /^([a-zA-Z]+\s?)*[a-zA-Z]+$/g,
                          "errorMsg": "City name of pickup location",
                          "required": true,
                          "impName": "car_pickup_city"
            },  
            "car_pickup_state": {"format": /^[A-Z]{2}$/g,
                          "errorMsg": "2 letter ISO state code for state of pickup location - US & Canada only",
                          "required": true,
                          "impName": "car_pickup_state"
            },
            "car_pickup_country": {"format": /^[A-Z]{2}$/g,
                          "errorMsg": "2 letter ISO country code of pickup location",
                          "required": true,
                          "impName": "car_pickup_country"
            },
            "car_pickup_time": {"format": /^[0-2]\d[0-5]\d$/g,
                          "errorMsg": "Pickup time per pickup timezone - 0000-2359",
                          "required": true,
                          "impName": "car_pickup_time"
            },
            "car_dropoff_location_type": {"format": /^airport$|^city$/gi,
                          "errorMsg": "airport or city",
                          "required": true,
                          "impName": "car_dropoff_location_type"
            },
            "car_dropoff_airport_code": {"format": /^[A-Z]{3}$/g,
                          "errorMsg": "3 letter airport code",
                          "required": true,
                          "impName": "car_dropoff_airport_code"
            },
            "car_dropoff_city": {"format": /^([a-zA-Z]+\s?)*[a-zA-Z]+$/g,
                          "errorMsg": "City name of dropoff location",
                          "required": true,
                          "impName": "car_dropoff_city"
            },
            "car_dropoff_state": {"format": /^[A-Z]{2}$/g,
                          "errorMsg": "2 letter ISO state code for state of dropoff location - US & Canada only",
                          "required": true,
                          "impName": "car_dropoff_state"
            },
            "car_dropoff_country": {"format": /^[A-Z]{2}$/g,
                          "errorMsg": "2 letter ISO country code of dropoff location",
                          "required": true,
                          "impName": "car_dropoff_country"
            },
            "car_dropoff_time": {"format": /^[0-2]\d[0-5]\d$/g,
                          "errorMsg": "Dropoff time per dropoff timezone - 0000-2359",
                          "required": true,
                          "impName": "car_dropoff_time"
            },
            "site_country": {"format": /^[A-Z]{2}$/g,
                          "errorMsg": "2 letter ISO country code of the website version that was loaded",
                          "required": true,
                          "impName": "site_country"
            },
            "site_language": {"format": /^[a-zA-Z]{2}$/g,
                          "errorMsg": "2 letter ISO code for the language the website page is rendered in",
                          "required": true,
                          "impName": "site_language"
            },
            "site_currency": {"format": /^[A-Z]{3}$/g,
                          "errorMsg": "3 letter ISO currency code for the transaction",
                          "required": true,
                          "impName": "site_currency"
            },
            "travel_date_start": {"format": /(^20\d\d[0-1][0-9][0-3][0-9]$)|(^20\d\d\/[0-1][0-9]\/[0-3][0-9]$)|(^20\d\d-[0-1][0-9]-[0-3][0-9]$)/g,
                          "errorMsg": "Travel start date - required format YYYYMMDD",
                          "required": true,
                          "impName": "travel_date_start"
            },
            "travel_date_end": {"format": /(^20\d\d[0-1][0-9][0-3][0-9]$)|(^20\d\d\/[0-1][0-9]\/[0-3][0-9]$)|(^20\d\d-[0-1][0-9]-[0-3][0-9]$)/g, 
                          "errorMsg": "Travel end date - required format YYYYMMDD",
                          "required": true,
                          "impName": "travel_date_end"
            },
            "adults": {"format": /^[0-9]{1}$/g,
                          "errorMsg": "Number of adults. Integer value",
                          "required": false,
                          "impName": "adults"
            },   
            "children": {"format": /^[0-9]{1}$/g,
                          "errorMsg": "Number of children. Integer value",
                          "required": false,
                          "impName": "children"
            },   
            "seniors": {"format": /^[0-9]{1}$/g,
                          "errorMsg": "Number of seniors. Integer value",
                          "required": false,
                          "impName": "seniors"
            },   
            "travelers": {"format": /^[1-9]{1}$/g,
                          "errorMsg": "Total number of travelers (adults+children+seniors). Integer value greater than 0",
                          "required": true,
                          "impName": "travelers"
            }    
        },
        "hotel_conversion": {
            "total_conversion_value": {"format": /^\d+(\.\d{1,2})?$/g,
                          "errorMsg": "Total conversion value of the hotel, car, flight or package booking - no currency symbol, 2 decimal places",
                          "required": true,
                          "impName": "total_conversion_value"
            },   
            "order_id": {"format": /^.*$/g,
                          "errorMsg": "Order id of the booking",
                          "required": true,
                          "impName": "order_id"
            },   
            "promo_code": {"format": /^Y|N$/gi,
                          "errorMsg": "Was there a promotion code applied? Y/N",
                          "required": true,
                          "impName": "promo_code"
            },   
            "conversion_type": {"format": /^opaque|retail$/gi,
                          "errorMsg": "Type of hotel product that was purchased (if applicable) - OPAQUE/RETAIL",
                          "required": true,
                          "impName": "conversion_type"
            },   
            "hotel_brand_code": {"format": /^[A-Z]{2}$/g,
                          "errorMsg": "Chain code for hotel brand in user's search, or of selected/booked property. E.G. HY",
                          "required": true,
                          "impName": "hotel_brand_code"
            }   
        },
        "flight_conversion": {
            "total_conversion_value": {"format": /^\d+(\.\d{1,2})?$/g,
                          "errorMsg": "Total conversion value of the hotel, car, flight or package booking - no currency symbol, 2 decimal places",
                          "required": true,
                          "impName": "total_conversion_value"
            },   
            "order_id": {"format": /^.*$/g,
                          "errorMsg": "Order id of the booking",
                          "required": true,
                          "impName": "order_id"
            },   
            "promo_code": {"format": /^Y|N$/gi,
                          "errorMsg": "Was there a promotion code applied? Y/N",
                          "required": true,
                          "impName": "promo_code"
            },   
            "flight_carrier_code": {"format": /^[A-Z]{2}$/g,
                          "errorMsg": "Airline code of booked flight. E.G. DL",
                          "required": true,
                          "impName": "flight_carrier_code"
            }   
        },
        "car_conversion": {
            "total_conversion_value": {"format": /^\d+(\.\d{1,2})?$/g,
                          "errorMsg": "Total conversion value of the hotel, car, flight or package booking - no currency symbol, 2 decimal places",
                          "required": true,
                          "impName": "total_conversion_value"
            },   
            "order_id": {"format": /^.*$/g,
                          "errorMsg": "Order id of the booking",
                          "required": true,
                          "impName": "order_id"
            },   
            "promo_code": {"format": /^Y|N$/gi,
                          "errorMsg": "Was there a promotion code applied? Y/N",
                          "required": true,
                          "impName": "promo_code"
            },   
            "conversion_type": {"format": /^opaque|retail$/gi,
                          "errorMsg": "Type of car product that was purchased (if applicable) - OPAQUE/RETAIL",
                          "required": true,
                          "impName": "conversion_type"
            },   
            "car_class": {"format": /^.*$/gi,
                          "errorMsg": "Car class - ECONOMY/COMPACT/INTERMEDIATE/STANDARD/FULL-SIZE/PREMIUM/LUXURY/SUV/MINI-VAN/CONVERTIBLE/PICKUP-TRUCK ",
                          "required": true,
                          "impName": "car_class"
            },   
            "car_rental_agency": {"format": /^.*$/g,
                          "errorMsg": "The name of the car rental agency the user purchased with on the confirmation page - E.G. Enterprise/Avis/National",
                          "required": true,
                          "impName": "car_rental_agency"
            }   
        }
    };

    var log = [];
    var triggerMsg = "";

    function hasPlacement(plc) {
        if(window.IntentMedia && window.im_config) {
            return window.im_config[plc] ? true : false;
        } else {
            return false; 
        }
    }

    function getTargets(plc) {
        var targets = [];
        if(window.im_config[plc].placements) {
            window.im_config[plc].placements.forEach(function(p) {
                if(p.target) {
                    var tgts = p.target.split(',');
                    tgts.forEach(function(tgt) {
                        targets.push(tgt.trim());
                    });
                }
            });
        }

        return targets;
    }

    function getMissingTargets(plc) {
        var missing = [];
        var targets = getTargets(plc);
        targets.forEach(function(a) {
            if(!targetExists(a)) {
                missing.push(a);
            }
        });
        return missing;
    }

    function targetExists(a) {
       return document.querySelectorAll(a).length !== 0;
    }

    function opensRemote() {
        if(window.im_config && window.im_config.ad_units && window.im_config.ad_units.sca && window.im_config.ad_units.sca.exit_unit) {
            return window.im_config.ad_units.sca.exit_unit.placements[0].opens_remote;
        } 
        return false;
    }

    function getFinalExitUnitUrl() {
        if (window.im_config && window.im_config.ad_units && window.im_config.ad_units.sca && window.im_config.ad_units.sca.exit_unit) {
            var url = window.im_config.site.blank_publisher_url;
            if(url.match(/^(http|\/\/).*$/g)) {
                url = url.split('?')[0];
            } else if(url.match(/^\/[^\/].*$/g)) {
                url = '//' + window.location.host + url.split('?')[0];
            } else {
                url = '//' + window.location.host + '/' + url.split('?')[0];
            }
            return url;
        }
    }

    function processBlankPage(e) {
        if(!e.target.response.match(/intent_media_exit_unit_redirector/)){
            log.push({"type": "Missing Exit Unit Blank Page", "name": e.responseURL, "value": "", "msg": "Please host this HTML file (http://shortcut.im/xu) at the above URL."});
        } 
    }

    function checkBlankPage() {
        if(opensRemote()) {
            var url = getFinalExitUnitUrl();
            var oReq = new XMLHttpRequest();
            oReq.addEventListener('loadend', processBlankPage);
            oReq.open("GET", url, true);
            oReq.send();
        }
    }

    function printLog() {
      toObject(log);

        if(log.length > 1) {
          p.innerHTML = '<p id="IM_IM_close" style="top:-30px;right:-30px;cursor:pointer;float:right;font-size:15px;position:relative;">CLOSE X</p>';
          p.innerHTML += '<img class="titleImage" style="width: 50%;display: block;margin: 0 25%;margin-bottom: -40px;margin-top: -60px;" src = "https://d0.awsstatic.com/logos/customers/intent_blue_on_transparent.png">';
            console.group('Intent Media');
            for(var i = 0; i < log.length; i++) {
              p.innerHTML += '<br><br><b>'+ log[i].type + ' on page' + (window.IntentMediaProperties.page_id ? (' ' + window.IntentMediaProperties.page_id) + '</b><br>' : '') + ' ' + log[i].name + '';
                console.groupCollapsed('['+ log[i].type + ' on Page' + (window.IntentMediaProperties.page_id ? (' ' + window.IntentMediaProperties.page_id) : '') + '] ' + log[i].name);
                if(log[i].type === 'Incorrect Parameter') { 
                  p.innerHTML += '<br>Your value: ' + log[i].value;
                  p.innerHTML += '<br>Expected: ' + log[i].msg;
                    console.log('Your value: ' + log[i].value);
                    console.log('Expected: ' + log[i].msg);
                }else if(log[i].type === 'Missing Parameter') {
                    p.innerHTML += '<br>Expected: ' + log[i].msg;
                    console.log('Expected: ' + log[i].msg);
                } else {
                    p.innerHTML += '<br>Message: ' + log[i].msg;
                    console.log('Message: ' + log[i].msg);
                }
                console.groupEnd();
            }
            console.groupEnd();
  document.body.insertBefore(r, document.body.firstChild);
    r.appendChild(p);
        } else {
            console.group('Intent Media');
            console.groupCollapsed('['+ log[0].type + ' on Page' + (window.IntentMediaProperties.page_id ? (' ' + window.IntentMediaProperties.page_id) : '') + '] ' + log[0].name);
            console.log('Message: ' + log[0].msg);
            console.groupEnd();
             p.innerHTML = '<p id="IM_IM_close" style="top:-30px;right:-30px;cursor:pointer;float:right;font-size:15px;position:relative;">CLOSE X</p>';
            p.innerHTML += '<img class="titleImage" style="width: 50%;display: block;margin: 0 25%;margin-bottom: -40px;margin-top: -60px;" src = "https://d0.awsstatic.com/logos/customers/intent_blue_on_transparent.png">';
            p.innerHTML += '<h1 style="padding-top:50px;">No Errors!</h1>';
            console.log('No errors!');
            console.groupEnd();
              document.body.insertBefore(p, document.body.firstChild);
  document.body.insertBefore(r, document.body.firstChild);
  r.appendChild(p);
        }
        log = [];
            document.getElementById('IntentMediaValidator').style.display = 'block';
            document.getElementById('IM_IM_close').addEventListener('click', function () {
                document.getElementById('IntentMediaValidator').style.display = 'none';
            });
    }

    function checkSite() {
        if(window.IntentMedia && window.IntentMediaProperties) {
            if(!window.IntentMediaProperties.site_name) {
                log.push({"type": "Missing Parameter", "name": 'site_name', "value": "", "msg": "Unique ID provided by your Intent Media representative for the site where the tag is firing - all CAPS, no spaces, no special characters E.G. MYSITE_US"});
            } else if(!window.im_config && window.IntentMediaProperties.site_name) {
                log.push({"type": "Incorrect Parameter", "name": 'site_name', "value": window.IntentMediaProperties.site_name, "msg": "Unique ID provided by your Intent Media representative for the site where the tag is firing - all CAPS, no spaces, no special characters E.G. MYSITE_US"});
            }
        }
    }
    
    function checkPage() {
        if(window.IntentMedia && window.IntentMediaProperties) {
            if(!window.IntentMediaProperties.page_id) {
                log.push({"type": "Missing Parameter", "name": 'page_id', "value": "", "msg": "Unique ID provided by your Intent Media representative for the site where the tag is firing - all CAPS, no spaces, no special characters E.G. MYSITE_US"});
            } else if(window.im_config && !window.im_config.page && window.IntentMediaProperties.page_id) {
                log.push({"type": "Incorrect Parameter", "name": 'page_id', "value": window.IntentMediaProperties.page_id, "msg": "Unique ID provided by your Intent Media representative for each page where the tag is firing E.G. hotel.list."});
            }
        }
    }

    function checkHotels(im_params) {
        Object.keys(imPropsCheck.hotels).forEach(function(a) {
            if(a in im_params) {
                if(im_params[a] === null) {im_params[a] = "";}
                if(!im_params[a].toString().match(imPropsCheck.hotels[a].format)) {
                    log.push({"type": "Incorrect Parameter", "name": imPropsCheck.hotels[a].impName, "value": im_params[a], "msg": imPropsCheck.hotels[a].errorMsg}); 
                   }
            } else if (imPropsCheck.hotels[a].required) {
                if(a === 'hotel_airport_code' && ('hotel_city' in im_params || 'hotel_state' in im_params || 'hotel_country' in im_params)) {return;}
                if((a === 'hotel_city' || a === 'hotel_state' || a === 'hotel_country') && 'hotel_airport_code' in im_params) {return;}
                if(a === 'hotel_state' && 'hotel_country' in im_params && (im_params.hotel_country.toLowerCase() !== 'US' || im_params.hotel_country.toLowerCase() !== 'United States')) {return;}
                log.push({"type":  "Missing Parameter", "name": imPropsCheck.hotels[a].impName, "value": "", "msg": imPropsCheck.hotels[a].errorMsg}); 
            }
         });
    }

    function checkFlights(im_params) {
        Object.keys(imPropsCheck.flights).forEach(function(a) {
            if(a in im_params) {
                if(im_params[a] === null) {im_params[a] = "";}
                if(!im_params[a].toString().match(imPropsCheck.flights[a].format)) {
                    log.push({"type": "Incorrect Parameter", "name": imPropsCheck.flights[a].impName, "value": im_params[a], "msg": imPropsCheck.flights[a].errorMsg}); 
                   }
            } else if (imPropsCheck.flights[a].required) {
                log.push({"type":  "Missing Parameter", "name": imPropsCheck.flights[a].impName, "value": "", "msg": imPropsCheck.flights[a].errorMsg}); 
            }
        });
    }

    function checkCars(im_params) {
        Object.keys(imPropsCheck.cars).forEach(function(a) {
            if(a in im_params) {
                if(im_params[a] === null) {im_params[a] = "";}
                if(!im_params[a].toString().match(imPropsCheck.cars[a].format)) {
                    log.push({"type": "Incorrect Parameter", "name": imPropsCheck.cars[a].impName, "value": im_params[a], "msg": imPropsCheck.cars[a].errorMsg}); 
                   }
            } else if (imPropsCheck.cars[a].required) {
                if((a === 'car_dropoff_city' || a === 'car_dropoff_state' || a === 'car_dropoff_country') && 'car_dropoff_location_type' in im_params && im_params.car_dropoff_location_type.match(/^airport$/i)) {return;}
                if((a === 'car_pickup_city' || a === 'car_pickup_state' || a === 'car_pickup_country') && 'car_pickup_location_type' in im_params && im_params.car_pickup_location_type.match(/^airport$/i)) {return;}
                if(a === 'car_pickup_airport' && 'car_pickup_location_type' in im_params && im_params.car_pickup_location_type.match(/^city$/i)) {return;}
                if(a === 'car_dropoff_airport' && 'car_dropoff_location_type' in im_params && im_params.car_dropoff_location_type.match(/^city$/i)) {return;}
                log.push({"type":  "Missing Parameter", "name": imPropsCheck.cars[a].impName, "value": "", "msg": imPropsCheck.cars[a].errorMsg}); 
            }
        });
    }

    function checkConversion(im_params, cType) {
        if(isConfirmationPage()) {
            Object.keys(imPropsCheck[cType]).forEach(function(a) {
                if(a in im_params) {
                    if(im_params[a] === null) {im_params[a] = "";}
                    if(!im_params[a].toString().match(imPropsCheck[cType][a].format)) {
                        log.push({"type": "Incorrect Parameter", "name": imPropsCheck[cType][a].impName, "value": im_params[a], "msg": imPropsCheck[cType][a].errorMsg}); 
                    }
                } else if (imPropsCheck[cType][a].required) {
                    log.push({"type":  "Missing Parameter", "name": imPropsCheck[cType][a].impName, "value": "", "msg": imPropsCheck[cType][a].errorMsg}); 
                } 
            });
        }
    }


    function verifySiteAndPage() {
        checkSite();
        checkPage();
    }

    function verifyIMProps() {
        if(window.IntentMedia && window.im_config && window.im_config.page && (window.im_config.page.inferred_product_category || window.im_config.page.product_path) && window.IntentMediaProperties) {
            var product = window.im_config.page.inferred_product_category || window.im_config.page.product_path;
            if(product === 'flights') {
                checkFlights(window.IntentMediaProperties);
                checkConversion(window.IntentMediaProperties, 'flight_conversion');
            } else if(product === 'hotels') {
                checkHotels(window.IntentMediaProperties);
                checkConversion(window.IntentMediaProperties, 'hotel_conversion');
            } else if(product === 'cars') {
                checkCars(window.IntentMediaProperties);
                checkConversion(window.IntentMediaProperties, 'car_conversion');
            }
        }
    }

    function getTriggerEvent() {
        if(window.im_config && window.im_config.ad_units && window.im_config.ad_units.sca && window.im_config.ad_units.sca.exit_unit) {
            return window.im_config.ad_units.sca.exit_unit.placements[0].remote_polling ? "fill_exit_unit" : "open_exit_unit"; 
        } else if(window.IntentMedia && window.im_config && window.im_config.search_form_checkboxes) {
            return "open_SFC"; 
        } else {
            return "";
        }
    }

    function primeTrigger() {
        if(window.IntentMedia && IntentMedia.trigger) {
            var tmp = IntentMedia.trigger;
            IntentMedia.trigger = function(msg) {
                triggerMsg = msg;
                tmp(msg);
            };
        }
    }

    function verifyTrigger() {
        var evt = getTriggerEvent();
        if(!triggerMsg) {
            log.push({"type": "Event Not Fired", "name": evt, "value": "", "msg": "Please ensure the above event is bound to the search button"});
        } else {
            if(evt !== triggerMsg) {
                log.push({"type": "Incorrect Event Fired", "name": "IntentMedia.trigger", "value": "IntentMedia.trigger('" + triggerMsg + "')", "msg": "Please use " + "IntentMedia.trigger('" +  evt + "')"});
            }
            triggerMsg = "";
        }
    }

    function verifyExitUnits() {
        if(window.IntentMedia && window.im_config && window.im_config.exit_unit) {
            checkBlankPage();
        }
    }

    function verifyPlacement(plc) {
        if(hasPlacement(plc)) {
            var missing = getMissingTargets(plc);
            if(missing.length !== 0) {
                missing.forEach(function(a) {
                    log.push({"type": "Missing Ad Target", "name": a, "value": "", "msg": "No DOM element(s) found using the above CSS selector. Element(s) must exist for ads to display."});
                });
            }
        }
    }

    function isConfirmationPage() {
        if(window.IntentMedia && window.im_config && window.im_config.page) {
            if(window.im_config.page.view === 'CONFIRMATION') {return true;}
        }
        return false;
    }

    function verifyHomePage(e) {
        verifyIMProps();
        verifyPlacement('on_page');
        verifyPlacement('search_form_checkboxes');
        verifyExitUnits();
        verifyTrigger();
        window.setTimeout(printLog, 1000);
        var msg = "[Intent Media] Please click the option to stay on page and check the console for output"; 

        e.returnValue = msg; 
        return msg;
    }

    function loadConfig(configString) {
        window.im_config = JSON.parse(configString).data;
    }

    function initHelper (validator) {
        var oReq = new XMLHttpRequest();
        oReq.addEventListener('loadend', validator);
        oReq.open("GET", window.im_config_url, true);
        oReq.send();
    }

    function initValidate () {
        initHelper(validate);
    }

    function initValidateHomePage () {
        initHelper(validateHomePage);
    }

    function validate(e) {
        window.rv = {};
        loadConfig(e.target.response);
        log.push({"type": "Items Checked", "name": "window.IntentMediaProperties, Exit Unit blank page (if applicable), On-Page ads (if applicable)", "value": "", "msg": "The above items were checked. Any errors found are listed below."});
        verifySiteAndPage();
        verifyIMProps();
        verifyPlacement('on_page');
        verifyPlacement('search_form_checkboxes');
        verifyExitUnits();
        window.setTimeout(printLog, 1000);
    }

    function validateHomePage(e) {
        window.rv = {};
        loadConfig(e.target.response);
        log.push({"type": "Items Checked", "name": "window.IntentMediaProperties, Exit Unit blank page (if applicable), Search Form Compare (if applicable), IntentMedia.trigger", "value": "", "msg": "The above items were checked. Any errors found are listed below."});
        console.info("[Intent Media] Please run a search and check console for output");
        verifySiteAndPage();
        primeTrigger();
        window.addEventListener('beforeunload', verifyHomePage);
    }

    return {"validate": initValidate,
            "validateHomePage": initValidateHomePage};

})();