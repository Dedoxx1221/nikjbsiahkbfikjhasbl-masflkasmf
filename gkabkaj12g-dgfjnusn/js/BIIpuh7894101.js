
    function atomiApplyParams({inputUrl}) {
      try {
        console.log(inputUrl)
        const inputUrlObj = new URL(inputUrl, window.location.origin);
        const currentPageParams = new URLSearchParams(window.location.search);
        const inputUrlParams = new URLSearchParams(inputUrlObj.search);
      
        // Iterate over all parameters in the current page's URL
        for (const [key, value] of currentPageParams) {
          // If the input URL does not already contain the parameter, add it
          if (!inputUrlParams.has(key)) {
            inputUrlParams.append(key, value);
          }
        }
      
        // Construct the final URL
        const finalUrl = inputUrlObj.origin + inputUrlObj.pathname + '?' + inputUrlParams.toString();
        console.log(finalUrl)
        return finalUrl;
      } catch (error) {
        console.log(error);
      }
    }

    function atomiFormatDate(options = { slated: false, addDate: 0 }) {
      try {
        const defaultOptions = {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        };

        const today = new Date();

        if (options.slated) {
          const slatedDate = new Date(today);
          slatedDate.setDate(slatedDate.getDate() + (options.addDate || 0));

          const day = slatedDate.getDate().toString().padStart(2, "0");
          const month = (slatedDate.getMonth() + 1).toString().padStart(2, "0");
          const year = slatedDate.getFullYear();
          return `${day}/${month}/${year}`;
        }

        if(options.addDate){
          today.setDate(today.getDate()+options.addDate)
        }
        const formattedDate = today.toLocaleDateString(undefined, defaultOptions);

        return formattedDate;
      } catch (error) {
        console.log(error);
      }
    };

    function atomiFormatTime() {
      try {
        const now = new Date();
        return now.toLocaleTimeString(undefined, {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        });
      } catch (error) {
        console.log(error);
      }
    };
    function runDelayedFunctions(data) {
      try {
        document.querySelectorAll('.atomicat-delay').forEach(el => el.classList.remove('atomicat-delay'));
        if(data?.setDisplayed){
          localStorage.setItem(data?.setDisplayed, true);
        }
        
      } catch (error) {
        console.log(error);
      }
    }
  
      (function() {
        function atomiRdn(e, t) {
          try {
            return Math.floor(Math.random() * (t - e + 1) + e)
          } catch (error) {
            console.log(error);
          }
        }

        try {
          let initial = atomiRdn(400,700);
          setInterval(() => {
            document.querySelectorAll('.atomicat-random').forEach(el => {
              el.innerText = initial.toString();
            });
            initial += atomiRdn(-1, 2);
          }, 1000);
        } catch (error) {
          console.log(error);
        }
      })();
    
    (function() {
      try {
        document.addEventListener('DOMContentLoaded', function () {
          document.addEventListener("keydown", function (e) {
            e.ctrlKey && e.preventDefault();
          }),
          (document.onkeydown = function (e) {
            if (123 == e.keyCode) return !1;
          }),
          document.addEventListener("contextmenu", (e) => e.preventDefault());
        });
      } catch (error) {
        console.log(error);
      }
    })();
    
    (function() {

    try {
        const conditionalDisplayList = [{"misc":{"type":"container","firstContainer":true,"conditionalDisplay":{"active":true,"visibility":"hidden"}},"contents":[{"misc":{"contentWidth":"fullWidth","type":"container"},"contents":[{"style":{"outer":{"tooltip":{"desktop":"top: 50%; left: 100%; bottom: auto; right: auto; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); -webkit-transition: all .3s ease-in-out; transition: all .3s ease-in-out; margin-left: 10px; border-color: rgba(0, 0, 0, 0) #000 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);","arrow":{"desktop":"top: calc(50% - 5px); right: 100%; left: auto; bottom: auto; border-color: rgba(0, 0, 0, 0) #000 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0); border-right-color: #555;"}}}},"misc":{"type":"video","player":"vturb","lazyLoad":false,"tag":"iframe","autoplay":false,"src":"<div id=\"vid_679244038b7d9b5213ac909a\" style=\"position: relative; width: 100%; padding: 56.25% 0 0;\"> <img id=\"thumb_679244038b7d9b5213ac909a\" src=\"https://images.converteai.net/f26679c7-2e8f-41a6-857e-3763eb20e967/players/679244038b7d9b5213ac909a/thumbnail.jpg\" style=\"position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;\" alt=\"thumbnail\"> <div id=\"backdrop_679244038b7d9b5213ac909a\" style=\" -webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%; \"></div> </div> <script type=\"text/javascript\" id=\"scr_679244038b7d9b5213ac909a\"> var s=document.createElement(\"script\"); s.src=\"https://scripts.converteai.net/f26679c7-2e8f-41a6-857e-3763eb20e967/players/679244038b7d9b5213ac909a/player.js\", s.async=!0,document.head.appendChild(s); </script> <style> .elementor-element:has(#smartplayer) { width: 100%; } </style>","loop":false,"controls":false,"delayed":true,"mute":false},"compKey":"2c4e385a-1630-4553-b9da-79959f27aaf7"}],"style":{"outer":{"background":{"desktop":"rgba(3, 3, 3, 1)"}},"container":{"width":{"mobile":"100%","desktop":"100%"},"flexDirection":{"desktop":"column"}}},"contKey":"41ed0059-31e2-4e40-9bf2-405cdf94a5f3"}],"contKey":"22d8f8c3-1c61-41f7-9b94-07acf2e973c2","style":{"page":{"background":{"desktop":"rgba(0, 0, 0, 1)","mobile":"rgba(0, 0, 0, 1)"}},"outer":{"background":{"desktop":"rgba(0, 0, 0, 1)"}},"container":{"flexDirection":{"desktop":"row"}}}},{"style":{"container":{"width":{"mobile":"100%","desktop":"100%"},"flexDirection":{"desktop":"column"}}},"contents":[{"compKey":"534a424b-129b-46dd-b3c9-bccc987cd250","style":{"text":{"color":"rgba(248, 246, 246, 1)","textAlign":{"desktop":"center"},"fontWeight":{"mobile":"600"},"backgroundImage":"unset","fontSize":{"desktop":"16px","mobile":"14px"}},"outer":{"tooltip":{"desktop":"top: 50%; left: 100%; bottom: auto; right: auto; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); -webkit-transition: all .3s ease-in-out; transition: all .3s ease-in-out; margin-left: 10px; border-color: rgba(0, 0, 0, 0) #000 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);","mobile":"top: 50%; left: 100%; bottom: auto; right: auto; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); -webkit-transition: all .3s ease-in-out; transition: all .3s ease-in-out; margin-left: 10px; border-color: rgba(0, 0, 0, 0) #000 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);","arrow":{"desktop":"top: calc(50% - 5px); right: 100%; left: auto; bottom: auto; border-color: rgba(0, 0, 0, 0) #000 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0); border-right-color: #555;","mobile":"top: calc(50% - 5px); right: 100%; left: auto; bottom: auto; border-color: rgba(0, 0, 0, 0) #000 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0); border-right-color: #555;"}},"paddingTop":{"mobile":"0px"},"background":{"desktop":"rgba(0, 0, 0, 1)"},"paddingRight":{"mobile":"0px"}}},"misc":{"tag":"h1","content":"$random people watching now....","type":"text"}}],"contKey":"f72c73da-ba83-47fb-8773-c68794b08d51","misc":{"contentWidth":"fullWidth","type":"container","conditionalDisplay":{"applicable":"trueAny","visibility":"hidden","active":true}}}];
        conditionalDisplayList.forEach((item) => {
            const { type, conditionalDisplay } = item.misc;
            const { visibility = "visible", logics, applicable = "trueAll" } = conditionalDisplay;
            const key = item?.compKey?.slice(0, 7) || item?.contKey?.slice(0, 7);
            const elementClass = type === "container" ? ".atomicat-container-" + key : ".atomicat-element-container-" + key;
            const targetElement = document.querySelector(elementClass);
            const showItem = () => {
              targetElement.classList.remove("atomicat-hidden");
            }

            const visibilityFxn = (logic) => {
                if(visibility === "visible") {
                  return !logic;
                } else {
                  return logic; 
                }
              }
            const resultArr = [];
            
            if(visibility !== "hideWithoutCondition" &&  logics?.length ) {
              for (let i = 0; i < logics?.length; i++) {
                  const logic = logics[i];
                  const { type } = logic;
                  if(type === "dateAndTime") {
                     const { date, date2, dateCondition = "between" } = logic;
                      const currentDate = new Date().getTime();
                      const fromDate = new Date(date).getTime();
                      const toDate = new Date(date2).getTime();
                      const logicObj = {
                        between: currentDate >= fromDate && currentDate <= toDate,
                        notBetween: currentDate < fromDate || currentDate > toDate,
                      }

                      resultArr.push(logicObj[dateCondition]);
                  } else if(type === "query") {
                     const { query, queryCondition = "include" } = logic;
                    const windowQuery = window.location.search;

                    const urlParams = new URLSearchParams(window.location.search);
                    const param = query.split("=")

                    const includeQuery = param.length > 1 ? urlParams?.get(param[0])?.includes(param[1]) : urlParams?.get(param[0]) != null;
                    const queryObj = {
                      include: includeQuery,
                      exclude: !includeQuery,
                    }

                    resultArr.push(queryObj[queryCondition]);
                  } else if(type === "browser") {
                    const { browsers, browserCondition = "include" } = logic; 
                    const iphoneKeyWords = ["iPhone", "iPad", "iPod", "Macintosh"];
                    const { userAgent } = navigator;
                    const isIphone = iphoneKeyWords.some((item) => userAgent.includes(item));
                    const chromeBrowsers = ["Edg", "OPR"];
                    const nonIphoneAgent = (chromeBrowsers.some(item => userAgent.includes(item)) ? userAgent.replace("Chrome", "") : userAgent)?.replace("Safari", "");
                    const iphoneAgent = userAgent.replace("Safari", "");
                    const isSafariOnIOS = /Safari/.test(userAgent) && !/CriOS|FxiOS|EdgiOS|OPT/.test(userAgent);
                    const updateUserAgent = isIphone ? iphoneAgent : nonIphoneAgent;
                    const isBrowser = isIphone && isSafariOnIOS ? true : browsers.find((browser) => updateUserAgent.includes(isIphone ? browser?.ios : browser?.value)) ? true : false;
                    const browserObj = {
                      include: isBrowser,
                      exclude: !isBrowser
                    }

                    resultArr.push(browserObj[browserCondition]);
                  }
              }


              const allTrue = resultArr.every((item) => item === true);
              const oneTrue = resultArr.some((item) => item === true);

              const applicableObj = {
                trueAll: allTrue,
                trueAny: oneTrue  
              }
              const isApplicable = applicableObj[applicable];

              const visibilityObj = {
                visible: isApplicable,
                hidden: !isApplicable
              }

              const isVisibility = visibilityObj[visibility];

              if(isVisibility) {
                showItem();
              }

            }
            
          })
    } catch (error) {
        return error;
    }
    })();(function() {
          try {
              const clickeventList = [{"compKey":"c200b873-a802-4d78-ba76-a2af96bb71b6","misc":{"type":"button"}},{"compKey":"a3fcfa35-9f4f-47ec-a97d-3ac0ad4e6b65","misc":{"type":"text"}}];
    
    
              clickeventList.forEach((comp, index) => {
                  const compKey = comp?.compKey?.slice(0, 7);
                  const eleType = comp?.misc?.type;
                  const showItemsById = comp?.misc?.showItemsById;
                  const hideAfterClick = comp?.misc?.hideAfterClick;
                  const hideOnComplete = comp?.misc?.hideOnComplete;
                  console.log(comp, "clickevent")
                  if(hideAfterClick) {
                    const hideAfterClickEle = document.querySelector(`.atomicat-hide-after-click-${compKey}`);
                    console.log(hideAfterClickEle, "hideAfterClickEle")
                    if (hideAfterClickEle) {
                      hideAfterClickEle.addEventListener("click", function() {
                          console.log("hideAfterClickEle clicked")
                          hideAfterClickEle.classList.add("atomicat-hidden");
                      })
                    }
                  }
                  if(hideOnComplete) {
                    const hideOnCompleteEle = document.querySelector(`.atomicat-hide-on-complete-${compKey}`);
                    console.log(hideOnCompleteEle, "hideOnCompleteEle")
                    if (hideOnCompleteEle) {
                      hideOnCompleteEle.addEventListener("animationend", function() {
                          console.log("hideOnCompleteEle animationend")
                          hideOnCompleteEle.classList.add("atomicat-hidden");
                      })
                    }
                  }
                  if(showItemsById) {
                    const showItemsByIdEle = document.querySelector(`.atomicat-show-hidden-item-${compKey}`);
                    if(eleType === "progressbar"){
                      showItemsByIdEle.addEventListener("animationend", function() {
                        console.log("animation end")
                        atomiShowItems()
                      })
                    } else{
                      showItemsByIdEle.addEventListener("click", function() {
                        console.log("showItemsByIdEle click")
                        atomiShowItems()
                      })
                    }
                    function atomiShowItems() {
                      showItemsById.forEach((item) => {
                        const hiddenItem = document.querySelector(`#${item}`) || document.querySelector(`.${item}`);
                        if (hiddenItem) {
                          hiddenItem.classList.remove("atomicat-delay");
                        }
                      })
                    }
                  }
              });
    
          } catch (error) {
              console.log(error);
          }
      })();(function() {
          try {
              const animationList = [{"style":{"button":{"fontWeight":{"desktop":"700","mobile":"700"},"fontSize":{"mobile":"16px","desktop":"24px"},"hover":{"animation":"atomicat-animation-pulse 2s infinite linear"},"background":"rgba(0, 236, 32, 1)","boxShadow":"0px 0px 14px 3px rgba(237, 233, 233, 1) ","alignSelf":{"desktop":"center"}},"outer":{"tooltip":{"desktop":"top: 50%; left: 100%; bottom: auto; right: auto; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); -webkit-transition: all .3s ease-in-out; transition: all .3s ease-in-out; margin-left: 10px; border-color: rgba(0, 0, 0, 0) #000 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);","mobile":"top: 50%; left: 100%; bottom: auto; right: auto; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); -webkit-transition: all .3s ease-in-out; transition: all .3s ease-in-out; margin-left: 10px; border-color: rgba(0, 0, 0, 0) #000 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);","arrow":{"mobile":"top: calc(50% - 5px); right: 100%; left: auto; bottom: auto; border-color: rgba(0, 0, 0, 0) #000 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0); border-right-color: #555;","desktop":"top: calc(50% - 5px); right: 100%; left: auto; bottom: auto; border-color: rgba(0, 0, 0, 0) #000 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0); border-right-color: #555;"}},"entranceAnimation":{"desktop":"atomicat-animation-pulse 1s 1 linear"},"background":{"desktop":"rgba"},"marginBottom":{"desktop":"13px"}}},"misc":{"delay":true,"tag":"a","href":"https://hop.clickbank.net/?affiliate=cremasco21&vendor=glycoshiel&pg=dtc","infiniteAnimation":true,"content":"YES, I WANT GLYCOSHIELD NOW!","type":"button","conditionalDisplay":{"active":false}},"compKey":"c200b873-a802-4d78-ba76-a2af96bb71b6"}];
    
              animationList.forEach((animationItem, index) => {
                const { type } = animationItem.misc;
                const key = animationItem?.compKey?.slice(0, 7) || animationItem?.contKey?.slice(0, 7);
                const elementClass = type === "container" ? ".atomicat-container-" + key : ".atomicat-element-container-" + key;
                const targetElement = document.querySelector(elementClass);


                    const observer = new IntersectionObserver(entries => {
                    entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                targetElement.classList.add('atomicat-entrance-animation-' + key);
                            }
                        });
                    });

                    observer.observe(targetElement);
              });
    
          } catch (error) {
              console.log(error);
          }
      })();
          (function() {
            try {
              var vturbvideoId = "679244038b7d9b5213ac909a";
              var SECONDS_TO_DISPLAY = 2883;
              var attempts = 0;
              var elsDisplayed = false;
              var alreadyDisplayedKey = 'alreadyElsDisplayed2941';
              var alreadyElsDisplayed = localStorage.getItem(alreadyDisplayedKey);

              var showHiddenElements = function () {
                elsDisplayed = true;
                runDelayedFunctions();
                localStorage.setItem(alreadyDisplayedKey, true);
              };
              if (alreadyElsDisplayed === 'true') {
                setTimeout(function () {
                  showHiddenElements();
                }, 100);
              } else {
                startWatchVideoProgress();
              }
              function getVideoInstance() {
                if (smartplayer.instances.length > 1) {
                  return smartplayer.instances.find(
                    (instance) => instance.options.id === vturbvideoId
                  );
                }
                return smartplayer.instances[0];
              };
              function startWatchVideoProgress() {
                if (typeof smartplayer === 'undefined' || !(smartplayer.instances && smartplayer.instances.length)) {
                  if (attempts >= 10) return;
                  attempts += 1;
                  return setTimeout(function () {
                    startWatchVideoProgress();
                  }, 1000);
                }
                console.log(smartplayer.instances);
                var videoInstance = getVideoInstance();
                videoInstance.on('timeupdate', () => {
                  if (elsDisplayed || videoInstance.smartAutoPlay) return;
                  console.log("currentTime => " +videoInstance.video.currentTime +" SECONDS_TO_DISPLAY => " +SECONDS_TO_DISPLAY);
                  if (videoInstance.video.currentTime < SECONDS_TO_DISPLAY) return;
                  showHiddenElements();
                });
              };
            } catch (error) {
              console.log(error);
            }
            
          })();
        
