var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var IndexCenterButton = (function (_super) {
    __extends(IndexCenterButton, _super);
    function IndexCenterButton() {
        var _this = _super.call(this) || this;
        _this.stageW = egret.MainContext.instance.stage.stageWidth;
        _this.stageH = egret.MainContext.instance.stage.stageHeight;
        _this.createView();
        return _this;
    }
    IndexCenterButton.Shared = function () {
        if (IndexCenterButton.shared == null) {
            IndexCenterButton.shared = new IndexCenterButton();
        }
        return IndexCenterButton.shared;
    };
    IndexCenterButton.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    IndexCenterButton.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    IndexCenterButton.prototype.createView = function () {
        /****************SET ROOM***********************/
        var button = this.createBitmapByName('pictures_json.button_index1');
        button.touchEnabled = true; //设置可以进行触摸
        button.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBeginSetRoom, this);
        button.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEndSetRoom, this);
        button.alpha = 0.9;
        button.x = -this.stageW * 2.8 / 10;
        button.y = this.stageH * 2.3 / 10 - this.stageH * 5.4 / 20;
        button.width = this.stageW * 2.8 / 10;
        button.height = this.stageH * 5.4 / 10;
        button.anchorOffsetX = -this.stageW * 2.8 / 20;
        button.anchorOffsetY = -this.stageH * 5.4 / 20;
        this.addChild(button);
        var tw = egret.Tween.get(button);
        tw.to({ x: this.stageW * 2 / 10 - this.stageW * 2.8 / 20, y: this.stageH * 2.3 / 10 - this.stageH * 5.4 / 20 }, 700, egret.Ease.sineOut);
        /****************SET ROOM***********************/
        /****************ENTER ROOM***********************/
        var button2 = this.createBitmapByName('pictures2_json.enterRoom');
        button2.touchEnabled = true; //设置可以进行触摸
        button2.once(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBeginEnterRoom, this);
        button2.once(egret.TouchEvent.TOUCH_END, this.onTouchEndEnterRoom, this);
        button2.alpha = 0.9;
        button2.x = this.stageW;
        button2.y = this.stageH * 2.3 / 10 - this.stageH * 2.5 / 20;
        button2.width = this.stageW * 2.8 / 10;
        button2.height = this.stageH * 2.5 / 10;
        button2.anchorOffsetX = -this.stageW * 2.8 / 20;
        ;
        button2.anchorOffsetY = -this.stageH * 2.5 / 20;
        this.addChild(button2);
        var tw2 = egret.Tween.get(button2);
        tw2.to({ x: this.stageW * 5.2 / 10 - this.stageW * 2.8 / 20, y: this.stageH * 2.3 / 10 - this.stageH * 2.5 / 20 }, 700, egret.Ease.sineOut);
        /****************ENTER ROOM***********************/
        /****************MY ROOM***********************/
        var button3 = this.createBitmapByName('pictures2_json.myRoom');
        button3.touchEnabled = true; //设置可以进行触摸
        button3.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBeginMyRoom, this);
        button3.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEndMyRoom, this);
        button3.alpha = 0.9;
        button3.x = this.stageW;
        button3.y = this.stageH * 5.2 / 10 - this.stageH * 2.5 / 20;
        button3.width = this.stageW * 2.8 / 10;
        button3.height = this.stageH * 2.5 / 10;
        button3.anchorOffsetX = -this.stageW * 2.8 / 20;
        ;
        button3.anchorOffsetY = -this.stageH * 2.5 / 20;
        this.addChild(button3);
        var tw3 = egret.Tween.get(button3);
        tw3.to({ x: this.stageW * 5.2 / 10 - this.stageW * 2.8 / 20, y: this.stageH * 5.2 / 10 - this.stageH * 2.5 / 20 }, 700, egret.Ease.sineOut);
        /****************MY ROOM***********************/
    };
    /**
     * 开设房间按下回调
     * Click the button
     */
    IndexCenterButton.prototype.onTouchBeginSetRoom = function (e) {
        var target = e.$currentTarget;
        target.x = this.stageW * 2 / 10 - this.stageW * 2.8 / 20 + this.stageW * 2.8 * 0.2 / 10;
        target.y = this.stageH * 2.3 / 10 - this.stageH * 5.4 / 20 + this.stageH * 5.4 * 0.2 / 10;
        target.scaleX = 0.8;
        target.scaleY = 0.8;
        this.addChild(target);
    };
    /**
     * 开设房间弹起回调
     * Click the button
     */
    IndexCenterButton.prototype.onTouchEndSetRoom = function (e) {
        var target = e.$currentTarget;
        target.x = this.stageW * 2 / 10 - this.stageW * 2.8 / 20;
        target.y = this.stageH * 2.3 / 10 - this.stageH * 5.4 / 20;
        target.scaleX = 1;
        target.scaleY = 1;
        this.addChild(target);
    };
    /**
     * 进入房间按下回调
     * Click the button
     */
    IndexCenterButton.prototype.onTouchBeginEnterRoom = function (e) {
        var target = e.$currentTarget;
        target.x = this.stageW * 5.2 / 10 - this.stageW * 2.8 / 20 + this.stageW * 2.8 * 0.2 / 10;
        target.y = this.stageH * 2.3 / 10 - this.stageH * 2.5 / 20 + this.stageH * 2.5 * 0.2 / 10;
        target.scaleX = 0.8;
        target.scaleY = 0.8;
        this.addChild(target);
        //console.log(this.myTop);
    };
    /**
     * 进入房间弹起回调
     * Click the button
     */
    IndexCenterButton.prototype.onTouchEndEnterRoom = function (e) {
        var target = e.$currentTarget;
        target.x = this.stageW * 5.2 / 10 - this.stageW * 2.8 / 20;
        target.y = this.stageH * 2.3 / 10 - this.stageH * 2.5 / 20;
        target.scaleX = 1;
        target.scaleY = 1;
        this.addChild(target);
        var enterRoomSence = EnterRoom.Shared();
        this.parent.parent.addChild(enterRoomSence);
        this.parent.removeChild(IndexTopBanner.Shared());
        this.parent.removeChild(this);
    };
    /**
     * 我的房间按下回调
     * Click the button
     */
    IndexCenterButton.prototype.onTouchBeginMyRoom = function (e) {
        var target = e.$currentTarget;
        target.x = this.stageW * 5.2 / 10 - this.stageW * 2.8 / 20 + this.stageW * 2.8 * 0.2 / 10;
        target.y = this.stageH * 5.2 / 10 - this.stageH * 2.5 / 20 + this.stageH * 2.5 * 0.2 / 10;
        target.scaleX = 0.8;
        target.scaleY = 0.8;
        this.addChild(target);
    };
    /**
     * 我的房间弹起回调
     * Click the button
     */
    IndexCenterButton.prototype.onTouchEndMyRoom = function (e) {
        var target = e.$currentTarget;
        target.x = this.stageW * 5.2 / 10 - this.stageW * 2.8 / 20;
        target.y = this.stageH * 5.2 / 10 - this.stageH * 2.5 / 20;
        target.scaleX = 1;
        target.scaleY = 1;
        this.addChild(target);
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    IndexCenterButton.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return IndexCenterButton;
}(eui.Component));
__reflect(IndexCenterButton.prototype, "IndexCenterButton", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=IndexCenterButton.js.map