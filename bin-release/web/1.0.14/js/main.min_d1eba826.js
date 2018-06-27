var __reflect=this&&this.__reflect||function(e,t,n){e.__class__=t,n?n.push(t):n=[t],e.__types__=e.__types__?n.concat(e.__types__):n},__extends=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);n.prototype=t.prototype,e.prototype=new n},__awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(i,a){function o(e){try{c(r.next(e))}catch(t){a(t)}}function s(e){try{c(r["throw"](e))}catch(t){a(t)}}function c(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(o,s)}c((r=r.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(i)throw new TypeError("Generator is already executing.");for(;c;)try{if(i=1,a&&(o=a[2&n[0]?"return":n[0]?"throw":"next"])&&!(o=o.call(a,n[1])).done)return o;switch(a=0,o&&(n=[0,o.value]),n[0]){case 0:case 1:o=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,a=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(o=c.trys,!(o=o.length>0&&o[o.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!o||n[1]>o[0]&&n[1]<o[3])){c.label=n[1];break}if(6===n[0]&&c.label<o[1]){c.label=o[1],o=n;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(n);break}o[2]&&c.ops.pop(),c.trys.pop();continue}n=t.call(e,c)}catch(r){n=[6,r],a=0}finally{i=o=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var i,a,o,s,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:n(0),"throw":n(1),"return":n(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},AssetAdapter=function(){function e(){}return e.prototype.getAsset=function(e,t,n){function r(r){t.call(n,r,e)}if(RES.hasRes(e)){var i=RES.getRes(e);i?r(i):RES.getResAsync(e,r,this)}else RES.getResByUrl(e,r,this,RES.ResourceItem.TYPE_IMAGE)},e}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var LoadingUI=function(e){function t(){var t=e.call(this)||this;return t.createView(),t}return __extends(t,e),t.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=480,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},t.prototype.onProgress=function(e,t){this.textField.text="Loading..."+e+"/"+t},t}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var Main=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.createChildren=function(){e.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(e){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var t=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",t),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(e){console.log(e)})},t.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:return[4,this.loadResource()];case 1:return n.sent(),this.createGameScene(),[4,RES.getResAsync("description_json")];case 2:return e=n.sent(),this.startAnimation(e),[4,platform.login()];case 3:return n.sent(),[4,platform.getUserInfo()];case 4:return t=n.sent(),console.log(t),[2]}})})},t.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),e=new LoadingUI,this.stage.addChild(e),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return n.sent(),[4,this.loadTheme()];case 2:return n.sent(),[4,RES.loadGroup("preload",0,e)];case 3:return n.sent(),this.stage.removeChild(e),[3,5];case 4:return t=n.sent(),console.error(t),[3,5];case 5:return[2]}})})},t.prototype.loadTheme=function(){var e=this;return new Promise(function(t,n){var r=new eui.Theme("resource/default.thm.json",e.stage);r.addEventListener(eui.UIEvent.COMPLETE,function(){t()},e)})},t.prototype.createGameScene=function(){var e=this.createBitmapByName("bgIndex_jpg");this.addChild(e);var t=this.stage.stageWidth,n=this.stage.stageHeight;e.width=t,e.height=n;var r=new IndexTopBanner,i=r.createView(t,n,this);this.myTop=i;var a=new IndexCenterButton;a.createView(t,n,this)},t.prototype.createBitmapByName=function(e){var t=new egret.Bitmap,n=RES.getRes(e);return t.texture=n,t},t.prototype.startAnimation=function(e){var t=this,n=new egret.HtmlTextParser,r=e.map(function(e){return n.parse(e)}),i=this.textfield,a=-1,o=function(){a++,a>=r.length&&(a=0);var e=r[a];i.textFlow=e;var n=egret.Tween.get(i);n.to({alpha:1},200),n.wait(2e3),n.to({alpha:0},200),n.call(o,t)};o()},t.prototype.uiCompHandler=function(e){},t}(eui.UILayer);__reflect(Main.prototype,"Main");var DebugPlatform=function(){function e(){}return e.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,{nickName:"username"}]})})},e.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2]})})},e}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var ThemeAdapter=function(){function e(){}return e.prototype.getTheme=function(e,t,n,r){function i(e){t.call(r,e)}function a(t){t.resItem.url==e&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,a,null),n.call(r))}var o=this;"undefined"!=typeof generateEUI?egret.callLater(function(){t.call(r,generateEUI)},this):"undefined"!=typeof generateEUI2?RES.getResByUrl("resource/gameEui.json",function(e,n){window.JSONParseClass.setData(e),i(e),egret.callLater(function(){t.call(r,generateEUI2)},o)},this,RES.ResourceItem.TYPE_JSON):(RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,a,null),RES.getResByUrl(e,i,this,RES.ResourceItem.TYPE_TEXT))},e}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);var IndexCenterButton=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this)},t.prototype.createView=function(e,t,n){var r=this.createBitmapByName("pictures_json.button_index1");r.touchEnabled=!0,r.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchBeginSetRoom,n),r.addEventListener(egret.TouchEvent.TOUCH_END,this.onTouchEndSetRoom,n),r.alpha=.9,r.x=2.8*-e/10,r.y=2.3*t/10-5.4*t/20,r.width=2.8*e/10,r.height=5.4*t/10,r.anchorOffsetX=2.8*-e/20,r.anchorOffsetY=5.4*-t/20,n.addChild(r);var i=egret.Tween.get(r);i.to({x:2*e/10-2.8*e/20,y:2.3*t/10-5.4*t/20},700,egret.Ease.sineOut);var a=this.createBitmapByName("pictures2_json.enterRoom");a.touchEnabled=!0,a.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchBeginEnterRoom,n),a.addEventListener(egret.TouchEvent.TOUCH_END,this.onTouchEndEnterRoom,n),a.alpha=.9,a.x=e,a.y=2.3*t/10-2.5*t/20,a.width=2.8*e/10,a.height=2.5*t/10,a.anchorOffsetX=2.8*-e/20,a.anchorOffsetY=2.5*-t/20,n.addChild(a);var o=egret.Tween.get(a);o.to({x:5.2*e/10-2.8*e/20,y:2.3*t/10-2.5*t/20},700,egret.Ease.sineOut);var s=this.createBitmapByName("pictures2_json.myRoom");s.touchEnabled=!0,s.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchBeginMyRoom,n),s.addEventListener(egret.TouchEvent.TOUCH_END,this.onTouchEndMyRoom,n),s.alpha=.9,s.x=e,s.y=5.2*t/10-2.5*t/20,s.width=2.8*e/10,s.height=2.5*t/10,s.anchorOffsetX=2.8*-e/20,s.anchorOffsetY=2.5*-t/20,n.addChild(s);var c=egret.Tween.get(s);return c.to({x:5.2*e/10-2.8*e/20,y:5.2*t/10-2.5*t/20},700,egret.Ease.sineOut),123},t.prototype.onTouchBeginSetRoom=function(e){var t=e.$currentTarget;t.x=2*this.stage.stageWidth/10-2.8*this.stage.stageWidth/20+2.8*this.stage.stageWidth*.2/10,t.y=2.3*this.stage.stageHeight/10-5.4*this.stage.stageHeight/20+5.4*this.stage.stageHeight*.2/10,t.scaleX=.8,t.scaleY=.8,this.addChild(t)},t.prototype.onTouchEndSetRoom=function(e){var t=e.$currentTarget;t.x=2*this.stage.stageWidth/10-2.8*this.stage.stageWidth/20,t.y=2.3*this.stage.stageHeight/10-5.4*this.stage.stageHeight/20,t.scaleX=1,t.scaleY=1,this.addChild(t)},t.prototype.onTouchBeginEnterRoom=function(e){var t=e.$currentTarget;t.x=5.2*this.stage.stageWidth/10-2.8*this.stage.stageWidth/20+2.8*this.stage.stageWidth*.2/10,t.y=2.3*this.stage.stageHeight/10-2.5*this.stage.stageHeight/20+2.5*this.stage.stageHeight*.2/10,t.scaleX=.8,t.scaleY=.8,this.addChild(t)},t.prototype.onTouchEndEnterRoom=function(e){var t=e.$currentTarget;t.x=5.2*this.stage.stageWidth/10-2.8*this.stage.stageWidth/20,t.y=2.3*this.stage.stageHeight/10-2.5*this.stage.stageHeight/20,t.scaleX=1,t.scaleY=1,this.addChild(t)},t.prototype.onTouchBeginMyRoom=function(e){var t=e.$currentTarget;t.x=5.2*this.stage.stageWidth/10-2.8*this.stage.stageWidth/20+2.8*this.stage.stageWidth*.2/10,t.y=5.2*this.stage.stageHeight/10-2.5*this.stage.stageHeight/20+2.5*this.stage.stageHeight*.2/10,t.scaleX=.8,t.scaleY=.8,this.addChild(t)},t.prototype.onTouchEndMyRoom=function(e){var t=e.$currentTarget;t.x=5.2*this.stage.stageWidth/10-2.8*this.stage.stageWidth/20,t.y=5.2*this.stage.stageHeight/10-2.5*this.stage.stageHeight/20,t.scaleX=1,t.scaleY=1,this.addChild(t)},t.prototype.createBitmapByName=function(e){var t=new egret.Bitmap,n=RES.getRes(e);return t.texture=n,t},t}(eui.Component);__reflect(IndexCenterButton.prototype,"IndexCenterButton",["eui.UIComponent","egret.DisplayObject"]);var IndexTopBanner=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this)},t.prototype.createView=function(e,t,n){var r=new egret.Sprite;n.addChild(r);var i=new egret.Shape;i.name="indexTopBanner",i.graphics.beginFill(16448250,.1),i.graphics.drawRect(0,0,e,1.2*t/10),i.graphics.endFill(),i.x=0,i.y=1.2*-t/10,r.addChild(i);var a=egret.Tween.get(i);return a.to({x:0,y:0},700,egret.Ease.sineOut),r},t.prototype.createBitmapByName=function(e){var t=new egret.Bitmap,n=RES.getRes(e);return t.texture=n,t},t}(eui.Component);__reflect(IndexTopBanner.prototype,"IndexTopBanner",["eui.UIComponent","egret.DisplayObject"]);