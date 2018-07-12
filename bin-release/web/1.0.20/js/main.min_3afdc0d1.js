var __reflect=this&&this.__reflect||function(t,e,n){t.__class__=e,n?n.push(e):n=[e],t.__types__=t.__types__?n.concat(t.__types__):n},__extends=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);n.prototype=e.prototype,t.prototype=new n},__awaiter=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))(function(r,s){function a(t){try{h(i.next(t))}catch(e){s(e)}}function o(t){try{h(i["throw"](t))}catch(e){s(e)}}function h(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(a,o)}h((i=i.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function n(t){return function(e){return i([t,e])}}function i(n){if(r)throw new TypeError("Generator is already executing.");for(;h;)try{if(r=1,s&&(a=s[2&n[0]?"return":n[0]?"throw":"next"])&&!(a=a.call(s,n[1])).done)return a;switch(s=0,a&&(n=[0,a.value]),n[0]){case 0:case 1:a=n;break;case 4:return h.label++,{value:n[1],done:!1};case 5:h.label++,s=n[1],n=[0];continue;case 7:n=h.ops.pop(),h.trys.pop();continue;default:if(a=h.trys,!(a=a.length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){h=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){h.label=n[1];break}if(6===n[0]&&h.label<a[1]){h.label=a[1],a=n;break}if(a&&h.label<a[2]){h.label=a[2],h.ops.push(n);break}a[2]&&h.ops.pop(),h.trys.pop();continue}n=e.call(t,h)}catch(i){n=[6,i],s=0}finally{r=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var r,s,a,o,h={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:n(0),"throw":n(1),"return":n(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o},EnterRoom=function(t){function e(){return t.call(this)||this}return __extends(e,t),e.Shared=function(){return null==e.shared&&(e.shared=new e),e.shared},e.prototype.partAdded=function(e,n){t.prototype.partAdded.call(this,e,n)},e.prototype.childrenCreated=function(){t.prototype.childrenCreated.call(this)},e.prototype.createView=function(){this.sprcon=new egret.Sprite,this.addChild(this.sprcon);var t=new egret.Shape;t.name="indexTopBanner2";var e=new egret.Matrix;e.createGradientBox(3*egret.MainContext.instance.stage.stageWidth/4,1.2*egret.MainContext.instance.stage.stageHeight/10),t.graphics.beginGradientFill(egret.GradientType.LINEAR,[15856113,15856113],[.2,0],[0,255],e),t.graphics.drawRoundRect(0,0,3*egret.MainContext.instance.stage.stageWidth/4,1.2*egret.MainContext.instance.stage.stageHeight/10,20,20),t.graphics.endFill(),t.x=0,t.y=1.2*-egret.MainContext.instance.stage.stageHeight/10,this.sprcon.addChild(t),this.goBack=this.createBitmapByName("icons_json.goBack"),this.goBack.touchEnabled=!0,this.goBack.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchBackIndex,this),this.goBack.alpha=.8,this.goBack.x=10,this.goBack.y=1.2*-egret.MainContext.instance.stage.stageHeight/10,this.sprcon.addChild(this.goBack);var n=egret.Tween.get(t);n.to({x:0,y:0},700,egret.Ease.sineOut);var i=egret.Tween.get(this.goBack);i.to({x:0,y:0},700,egret.Ease.sineOut)},e.prototype.onTouchBackIndex=function(){this.goBack.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchBackIndex,this);var t=IndexTopBanner.Shared();t.createView(),Index.Shared().getIndexThis().addChild(t);var n=IndexCenterButton.Shared();n.createView(),Index.Shared().getIndexThis().addChild(n),e.Shared().getEnterRoomThis().removeChild(this.sprcon),Index.Shared().getIndexThis().removeChild(this)},e.prototype.getEnterRoomThis=function(){return this},e.prototype.createBitmapByName=function(t){var e=new egret.Bitmap,n=RES.getRes(t);return e.texture=n,e},e}(eui.Component);__reflect(EnterRoom.prototype,"EnterRoom",["eui.UIComponent","egret.DisplayObject"]);var AssetAdapter=function(){function t(){}return t.prototype.getAsset=function(t,e,n){function i(i){e.call(n,i,t)}if(RES.hasRes(t)){var r=RES.getRes(t);r?i(r):RES.getResAsync(t,i,this)}else RES.getResByUrl(t,i,this,RES.ResourceItem.TYPE_IMAGE)},t}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var Main=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.createChildren=function(){t.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(t){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var e=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",e),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(t){console.log(t)})},e.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(n){switch(n.label){case 0:return[4,this.loadResource()];case 1:return n.sent(),this.createGameScene(),[4,RES.getResAsync("description_json")];case 2:return t=n.sent(),this.startAnimation(t),[4,platform.login()];case 3:return n.sent(),[4,platform.getUserInfo()];case 4:return e=n.sent(),console.log(e),[2]}})})},e.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),t=new LoadingUI,this.stage.addChild(t),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return n.sent(),[4,this.loadTheme()];case 2:return n.sent(),[4,RES.loadGroup("preload",0,t)];case 3:return n.sent(),this.stage.removeChild(t),[3,5];case 4:return e=n.sent(),console.error(e),[3,5];case 5:return[2]}})})},e.prototype.loadTheme=function(){var t=this;return new Promise(function(e,n){var i=new eui.Theme("resource/default.thm.json",t.stage);i.addEventListener(eui.UIEvent.COMPLETE,function(){e()},t)})},e.prototype.createGameScene=function(){var t=Index.Shared();t.createView(),this.addChild(t)},e.prototype.createBitmapByName=function(t){var e=new egret.Bitmap,n=RES.getRes(t);return e.texture=n,e},e.prototype.startAnimation=function(t){var e=this,n=new egret.HtmlTextParser,i=t.map(function(t){return n.parse(t)}),r=this.textfield,s=-1,a=function(){s++,s>=i.length&&(s=0);var t=i[s];r.textFlow=t;var n=egret.Tween.get(r);n.to({alpha:1},200),n.wait(2e3),n.to({alpha:0},200),n.call(a,e)};a()},e.prototype.uiCompHandler=function(t){},e}(eui.UILayer);__reflect(Main.prototype,"Main");var DebugPlatform=function(){function t(){}return t.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,{nickName:"username"}]})})},t.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2]})})},t}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var ThemeAdapter=function(){function t(){}return t.prototype.getTheme=function(t,e,n,i){function r(t){e.call(i,t)}function s(e){e.resItem.url==t&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,s,null),n.call(i))}var a=this;"undefined"!=typeof generateEUI?egret.callLater(function(){e.call(i,generateEUI)},this):"undefined"!=typeof generateEUI2?RES.getResByUrl("resource/gameEui.json",function(t,n){window.JSONParseClass.setData(t),r(t),egret.callLater(function(){e.call(i,generateEUI2)},a)},this,RES.ResourceItem.TYPE_JSON):(RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,s,null),RES.getResByUrl(t,r,this,RES.ResourceItem.TYPE_TEXT))},t}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);var DialogSetRoom=function(t){function e(){return t.call(this)||this}return __extends(e,t),e.Shared=function(){return null==e.shared&&(e.shared=new e),e.shared},e.prototype.partAdded=function(e,n){t.prototype.partAdded.call(this,e,n)},e.prototype.childrenCreated=function(){t.prototype.childrenCreated.call(this)},e.prototype.createView=function(){this.sprcon=new egret.Sprite,this.addChild(this.sprcon),this.sprcon.x=.15*egret.MainContext.instance.stage.stageWidth,this.sprcon.y=.15*egret.MainContext.instance.stage.stageHeight,this.dialog=new egret.Shape,this.dialog.graphics.beginFill(10263708,.4),this.dialog.graphics.drawRoundRect(0,0,.7*egret.MainContext.instance.stage.stageWidth,.7*egret.MainContext.instance.stage.stageHeight,10,10),this.dialog.graphics.endFill(),this.sprcon.addChild(this.dialog);var t=new egret.TextField;t.text="开设房间",t.width=4*(.1*egret.MainContext.instance.stage.stageHeight-6),t.height=.1*egret.MainContext.instance.stage.stageHeight-5,t.size=.1*egret.MainContext.instance.stage.stageHeight-6,t.textColor=15627776,t.fontFamily="YouYuan",t.x=.35*egret.MainContext.instance.stage.stageWidth-2*(.1*egret.MainContext.instance.stage.stageHeight-6),t.strokeColor=15308410,t.stroke=1,this.sprcon.addChild(t),this.close=this.createBitmapByName("close_png"),this.close.touchEnabled=!0,this.close.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchClose,this),this.close.width=48,this.close.x=.7*egret.MainContext.instance.stage.stageWidth-24,this.close.y=-24,this.sprcon.addChild(this.close);var e=new egret.Shape;e.graphics.beginFill(16119260),e.graphics.drawRoundRect(0,0,.7*egret.MainContext.instance.stage.stageWidth-10,.6*egret.MainContext.instance.stage.stageHeight-5,10,10),e.graphics.endFill(),e.x=5,e.y=.1*egret.MainContext.instance.stage.stageHeight,this.sprcon.addChild(e)},e.prototype.onTouchClose=function(){e.Shared().getIndexThis().removeChild(this.sprcon),Index.Shared().getIndexThis().removeChild(e.Shared().getIndexThis()),MySprite.Shared().getIndexThis().removeChild(MySprite.Shared().getIndexThis().sprcon),Index.Shared().getIndexThis().removeChild(MySprite.Shared().getIndexThis())},e.prototype.createBitmapByName=function(t){var e=new egret.Bitmap,n=RES.getRes(t);return e.texture=n,e},e.prototype.getIndexThis=function(){return this},e}(eui.Component);__reflect(DialogSetRoom.prototype,"DialogSetRoom",["eui.UIComponent","egret.DisplayObject"]);var LoadingUI=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.x=200,this.textField.y=160,this.textField.width=250,this.textField.height=50,this.textField.size=30,this.textField.textAlign="center"},e.prototype.onProgress=function(t,e){var n=Math.round(100*t/e);this.textField.text="已加载..."+n+"%"},e}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var Index=function(t){function e(){return t.call(this)||this}return __extends(e,t),e.Shared=function(){return null==e.shared&&(e.shared=new e),e.shared},e.prototype.partAdded=function(e,n){t.prototype.partAdded.call(this,e,n)},e.prototype.childrenCreated=function(){t.prototype.childrenCreated.call(this)},e.prototype.createView=function(){this.sky=this.createBitmapByName("bgIndex_jpg"),this.sky.width=egret.MainContext.instance.stage.stageWidth,this.sky.height=egret.MainContext.instance.stage.stageHeight,this.addChild(this.sky);var t=IndexTopBanner.Shared();t.createView(),this.addChild(t);var e=IndexCenterButton.Shared();e.createView(),this.addChild(e);var n=IndexBottomBanner.Shared();n.createView(),this.addChild(n)},e.prototype.createBitmapByName=function(t){var e=new egret.Bitmap,n=RES.getRes(t);return e.texture=n,e},e.prototype.getIndexThis=function(){return this},e}(eui.Component);__reflect(Index.prototype,"Index",["eui.UIComponent","egret.DisplayObject"]);var IndexBottomBanner=function(t){function e(){var e=t.call(this)||this;return e.stageW=egret.MainContext.instance.stage.stageWidth,e.stageH=egret.MainContext.instance.stage.stageHeight,e}return __extends(e,t),e.Shared=function(){return null==e.shared&&(e.shared=new e),e.shared},e.prototype.partAdded=function(e,n){t.prototype.partAdded.call(this,e,n)},e.prototype.childrenCreated=function(){t.prototype.childrenCreated.call(this)},e.prototype.createView=function(){this.drawBg(),this.btRewad()},e.prototype.drawBg=function(){this.banner=new egret.Shape,this.banner.name="indexBottomBanner";var t=new egret.Matrix;t.createGradientBox(3*this.stageW/4,1.2*this.stageH/10),this.banner.graphics.beginGradientFill(egret.GradientType.LINEAR,[15856113,15856113],[0,.2],[0,255],t),this.banner.graphics.drawRoundRect(0,0,3*this.stageW/4,1.2*this.stageH/10,10,10),this.banner.graphics.endFill(),this.banner.x=1*this.stageW/4,this.banner.y=this.stageH,this.addChild(this.banner);var e=egret.Tween.get(this.banner);e.to({x:1*this.stageW/4,y:8.8*this.stageH/10},700,egret.Ease.sineOut)},e.prototype.btRewad=function(){this.bt1=this.createBitmapByName("icons_json.awardCup"),this.bt1.touchEnabled=!0,this.bt1.x=this.stageW/5,this.bt1.y=this.stageH,this.bt1.witdh=1.2*this.stageH*.8/10,this.bt1.height=1.2*this.stageH*.8/10,this.bt1.alpha=.8,this.bt1.anchorOffsetX=1.2*-this.stageH*.8/20,this.bt1.anchorOffsetY=1.2*-this.stageH*.8/20,this.addChild(this.bt1);var t=egret.Tween.get(this.banner);t.to({x:this.stageW/5-this.bt1.width/2,y:8.8*this.stageH/10-1.2*this.stageH*.8*.3/10-1.2*this.stageH*.8/20},700,egret.Ease.sineOut)},e.prototype.clearView=function(){var t=egret.Tween.get(this.banner);t.to({x:0,y:1.2*-egret.MainContext.instance.stage.stageHeight/10},700,egret.Ease.sineOut).call(this.clearCallback)},e.prototype.clearCallback=function(){Index.Shared().getIndexThis().removeChild(e.Shared().getIndexBottomBannerThis())},e.prototype.getIndexBottomBannerThis=function(){return this},e.prototype.createBitmapByName=function(t){var e=new egret.Bitmap,n=RES.getRes(t);return e.texture=n,e},e}(eui.Component);__reflect(IndexBottomBanner.prototype,"IndexBottomBanner",["eui.UIComponent","egret.DisplayObject"]);var IndexCenterButton=function(t){function e(){var e=t.call(this)||this;return e.stageW=egret.MainContext.instance.stage.stageWidth,e.stageH=egret.MainContext.instance.stage.stageHeight,e}return __extends(e,t),e.Shared=function(){return null==e.shared&&(e.shared=new e),e.shared},e.prototype.partAdded=function(e,n){t.prototype.partAdded.call(this,e,n)},e.prototype.childrenCreated=function(){t.prototype.childrenCreated.call(this)},e.prototype.createView=function(){this.button=this.createBitmapByName("icons_json.setRoom"),this.button.touchEnabled=!0,this.button.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchBeginSetRoom,this),this.button.addEventListener(egret.TouchEvent.TOUCH_END,this.onTouchEndSetRoom,this),this.button.alpha=.9,this.button.x=2.8*-this.stageW/10,this.button.y=2.3*this.stageH/10-5.4*this.stageH/20,this.button.width=2.8*this.stageW/10,this.button.height=5.4*this.stageH/10,this.button.anchorOffsetX=2.8*-this.stageW/20,this.button.anchorOffsetY=5.4*-this.stageH/20,this.addChild(this.button);var t=egret.Tween.get(this.button);t.to({x:2*this.stageW/10-2.8*this.stageW/20,y:2.3*this.stageH/10-5.4*this.stageH/20},700,egret.Ease.sineOut),this.button2=this.createBitmapByName("icons_json.enterRoom"),this.button2.touchEnabled=!0,this.button2.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchBeginEnterRoom,this),this.button2.addEventListener(egret.TouchEvent.TOUCH_END,this.onTouchEndEnterRoom,this),this.button2.alpha=.9,this.button2.x=this.stageW,this.button2.y=2.3*this.stageH/10-2.5*this.stageH/20,this.button2.width=2.8*this.stageW/10,this.button2.height=2.5*this.stageH/10,this.button2.anchorOffsetX=2.8*-this.stageW/20,this.button2.anchorOffsetY=2.5*-this.stageH/20,this.addChild(this.button2);var e=egret.Tween.get(this.button2);e.to({x:5.2*this.stageW/10-2.8*this.stageW/20,y:2.3*this.stageH/10-2.5*this.stageH/20},700,egret.Ease.sineOut),this.button3=this.createBitmapByName("icons_json.myRoom"),this.button3.touchEnabled=!0,this.button3.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchBeginMyRoom,this),this.button3.addEventListener(egret.TouchEvent.TOUCH_END,this.onTouchEndMyRoom,this),this.button3.alpha=.9,this.button3.x=this.stageW,this.button3.y=5.2*this.stageH/10-2.5*this.stageH/20,this.button3.width=2.8*this.stageW/10,this.button3.height=2.5*this.stageH/10,this.button3.anchorOffsetX=2.8*-this.stageW/20,this.button3.anchorOffsetY=2.5*-this.stageH/20,this.addChild(this.button3);var n=egret.Tween.get(this.button3);n.to({x:5.2*this.stageW/10-2.8*this.stageW/20,y:5.2*this.stageH/10-2.5*this.stageH/20},700,egret.Ease.sineOut)},e.prototype.onTouchBeginSetRoom=function(t){var e=t.$currentTarget;e.x=2*this.stageW/10-2.8*this.stageW/20+2.8*this.stageW*.2/10,e.y=2.3*this.stageH/10-5.4*this.stageH/20+5.4*this.stageH*.2/10,e.scaleX=.8,e.scaleY=.8,this.addChild(e)},e.prototype.onTouchEndSetRoom=function(t){var e=t.$currentTarget;e.x=2*this.stageW/10-2.8*this.stageW/20,e.y=2.3*this.stageH/10-5.4*this.stageH/20,e.scaleX=1,e.scaleY=1,this.addChild(e);var n=MySprite.Shared();n.createView(),Index.Shared().getIndexThis().addChild(n);var i=DialogSetRoom.Shared();i.createView(),Index.Shared().getIndexThis().addChild(i)},e.prototype.onTouchBeginEnterRoom=function(t){var e=t.$currentTarget;e.x=5.2*this.stageW/10-2.8*this.stageW/20+2.8*this.stageW*.2/10,e.y=2.3*this.stageH/10-2.5*this.stageH/20+2.5*this.stageH*.2/10,e.scaleX=.8,e.scaleY=.8,this.addChild(e)},e.prototype.onTouchEndEnterRoom=function(t){var n=t.$currentTarget;n.x=5.2*this.stageW/10-2.8*this.stageW/20,n.y=2.3*this.stageH/10-2.5*this.stageH/20,n.scaleX=1,n.scaleY=1,this.addChild(n),IndexTopBanner.Shared().clearView(),e.Shared().clearSetRoom(),e.Shared().clearEnterRoom(),e.Shared().clearMyRoom(),this.removeAllLListener()},e.prototype.onTouchBeginMyRoom=function(t){var e=t.$currentTarget;e.x=5.2*this.stageW/10-2.8*this.stageW/20+2.8*this.stageW*.2/10,e.y=5.2*this.stageH/10-2.5*this.stageH/20+2.5*this.stageH*.2/10,e.scaleX=.8,e.scaleY=.8,this.addChild(e)},e.prototype.onTouchEndMyRoom=function(t){var e=t.$currentTarget;e.x=5.2*this.stageW/10-2.8*this.stageW/20,e.y=5.2*this.stageH/10-2.5*this.stageH/20,e.scaleX=1,e.scaleY=1,this.addChild(e)},e.prototype.createBitmapByName=function(t){var e=new egret.Bitmap,n=RES.getRes(t);return e.texture=n,e},e.prototype.clearSetRoom=function(){var t=egret.Tween.get(this.button);t.to({x:2.8*-this.stageW/10-2.8*this.stageW/10,y:2.3*this.stageH/10-5.4*this.stageH/20},700,egret.Ease.sineOut)},e.prototype.clearEnterRoom=function(){var t=egret.Tween.get(this.button2);t.to({x:this.stageW+2.8*this.stageW/20,y:2.3*this.stageH/10-2.5*this.stageH/20},700,egret.Ease.sineOut)},e.prototype.clearMyRoom=function(){var t=egret.Tween.get(this.button3);t.to({x:this.stageW+2.8*this.stageW/20,y:5.2*this.stageH/10-2.5*this.stageH/20},700,egret.Ease.sineOut).call(this.clearCallback)},e.prototype.clearCallback=function(){var t=EnterRoom.Shared();t.createView(),Index.Shared().getIndexThis().addChild(t),Index.Shared().getIndexThis().removeChild(e.Shared().getIndexCenterButtonThis())},e.prototype.getIndexCenterButtonThis=function(){return this},e.prototype.removeAllLListener=function(){this.button.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchBeginSetRoom,this),this.button.removeEventListener(egret.TouchEvent.TOUCH_END,this.onTouchEndSetRoom,this),this.button2.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchBeginEnterRoom,this),this.button2.removeEventListener(egret.TouchEvent.TOUCH_END,this.onTouchEndEnterRoom,this),this.button3.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchBeginMyRoom,this),this.button3.removeEventListener(egret.TouchEvent.TOUCH_END,this.onTouchEndMyRoom,this)},e}(eui.Component);__reflect(IndexCenterButton.prototype,"IndexCenterButton",["eui.UIComponent","egret.DisplayObject"]);var IndexTopBanner=function(t){function e(){var e=t.call(this)||this;return e.stageW=egret.MainContext.instance.stage.stageWidth,e.stageH=egret.MainContext.instance.stage.stageHeight,e}return __extends(e,t),e.Shared=function(){return null==e.shared&&(e.shared=new e),e.shared},e.prototype.partAdded=function(e,n){t.prototype.partAdded.call(this,e,n)},e.prototype.childrenCreated=function(){t.prototype.childrenCreated.call(this)},e.prototype.createView=function(){this.banner=new egret.Shape,this.banner.name="indexTopBanner";var t=new egret.Matrix;t.createGradientBox(3*this.stageW/4,1.2*this.stageH/10),this.banner.graphics.beginGradientFill(egret.GradientType.LINEAR,[15856113,15856113],[.2,0],[0,255],t),this.banner.graphics.drawRoundRect(0,0,3*this.stageW/4,1.2*this.stageH/10,10,10),this.banner.graphics.endFill(),this.banner.x=0,this.banner.y=1.2*-this.stageH/10,this.addChild(this.banner);var e=egret.Tween.get(this.banner);e.to({x:0,y:0},700,egret.Ease.sineOut)},e.prototype.clearView=function(){var t=egret.Tween.get(this.banner);t.to({x:0,y:1.2*-egret.MainContext.instance.stage.stageHeight/10},700,egret.Ease.sineOut).call(this.clearCallback)},e.prototype.clearCallback=function(){Index.Shared().getIndexThis().removeChild(e.Shared().getIndexTopBannerThis())},e.prototype.getIndexTopBannerThis=function(){return this},e.prototype.createBitmapByName=function(t){var e=new egret.Bitmap,n=RES.getRes(t);return e.texture=n,e},e}(eui.Component);__reflect(IndexTopBanner.prototype,"IndexTopBanner",["eui.UIComponent","egret.DisplayObject"]);var MySprite=function(t){function e(){return t.call(this)||this}return __extends(e,t),e.Shared=function(){return null==e.shared&&(e.shared=new e),e.shared},e.prototype.partAdded=function(e,n){t.prototype.partAdded.call(this,e,n)},e.prototype.childrenCreated=function(){t.prototype.childrenCreated.call(this)},e.prototype.createView=function(){this.sprcon=new egret.Sprite,this.addChild(this.sprcon),this.sprite=new egret.Shape,this.sprite.graphics.beginFill(1118481,.5),this.sprite.graphics.drawRect(0,0,egret.MainContext.instance.stage.stageWidth,egret.MainContext.instance.stage.stageHeight),this.sprite.graphics.endFill(),this.sprite.x=0,this.sprite.y=0,this.sprcon.addChild(this.sprite),this.sprite2=new egret.Shape,this.sprite2.graphics.beginFill(1118481),this.sprite2.graphics.drawRect(0,0,egret.MainContext.instance.stage.stageWidth,egret.MainContext.instance.stage.stageHeight),this.sprite2.graphics.endFill(),this.sprite2.x=0,this.sprite2.y=0,this.sprcon.addChild(this.sprite2),this.sprite.touchEnabled=!0,this.sprite.mask=this.sprite2},e.prototype.createBitmapByName=function(t){var e=new egret.Bitmap,n=RES.getRes(t);return e.texture=n,e},e.prototype.getIndexThis=function(){return this},e}(eui.Component);__reflect(MySprite.prototype,"MySprite",["eui.UIComponent","egret.DisplayObject"]);var WxLoginButton=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.btnSkin={type:"text",text:"开 始 游 戏",style:{left:22,bottom:160,width:360,height:80,lineHeight:80,backgroundColor:"rgba(160,180,240,0.7)",color:"#ffffff",textAlign:"center",fontSize:32,borderRadius:6}},e}(Object);__reflect(WxLoginButton.prototype,"WxLoginButton");