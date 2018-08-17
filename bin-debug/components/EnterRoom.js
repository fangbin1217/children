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
var EnterRoom = (function (_super) {
    __extends(EnterRoom, _super);
    function EnterRoom() {
        return _super.call(this) || this;
    }
    EnterRoom.Shared = function () {
        if (EnterRoom.shared == null) {
            EnterRoom.shared = new EnterRoom();
        }
        return EnterRoom.shared;
    };
    EnterRoom.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    EnterRoom.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    EnterRoom.prototype.createView = function () {
        var sky = this.createBitmapByName("bgIndex_jpg");
        sky.width = egret.MainContext.instance.stage.stageWidth;
        sky.height = egret.MainContext.instance.stage.stageHeight;
        this.addChild(sky);
        //sprcon
        this.sprcon = new egret.Sprite();
        this.sprcon.x = 0;
        this.sprcon.y = -egret.MainContext.instance.stage.stageHeight * 1.2 / 10;
        this.addChild(this.sprcon);
        //banner bg
        var topMask = new egret.Shape();
        topMask.name = "indexTopBanner2";
        var matrix = new egret.Matrix();
        matrix.createGradientBox(egret.MainContext.instance.stage.stageWidth * 3 / 4, egret.MainContext.instance.stage.stageHeight * 1.2 / 10);
        topMask.graphics.beginGradientFill(egret.GradientType.LINEAR, [0xF1F1F1, 0xF1F1F1], [0.2, 0], [0, 255], matrix);
        topMask.graphics.drawRoundRect(0, 0, egret.MainContext.instance.stage.stageWidth * 3 / 4, egret.MainContext.instance.stage.stageHeight * 1.2 / 10, 20, 20);
        topMask.graphics.endFill();
        this.sprcon.addChild(topMask);
        //back button 
        this.goBack = this.createBitmapByName(Config.imageJsonPre + 'backward');
        this.goBack.touchEnabled = true; //设置可以进行触摸
        this.goBack.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchSmall, this);
        this.goBack.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchBackIndex, this);
        this.goBack.width = egret.MainContext.instance.stage.stageHeight * 1.2 / 10;
        this.goBack.height = egret.MainContext.instance.stage.stageHeight * 1.2 / 10;
        this.sprcon.addChild(this.goBack);
        //banner effect
        var tw = egret.Tween.get(this.sprcon);
        tw.to({ x: 0, y: 0 }, 700, egret.Ease.sineOut).call(this.goBackCall);
    };
    EnterRoom.prototype.goBackCall = function () {
        EnterRoom.Shared().getEnterRoomThis().smallBig = new SmallBig(0, 0, egret.MainContext.instance.stage.stageHeight * 1.2 / 10, egret.MainContext.instance.stage.stageHeight * 1.2 / 10);
        EnterRoom.Shared().getEnterRoomThis().smallBig.setPosition(EnterRoom.Shared().getEnterRoomThis().goBack);
        /*
        EnterRoom.Shared().getEnterRoomThis().goBack.x = -egret.MainContext.instance.stage.stageHeight*1.2/20;
        EnterRoom.Shared().getEnterRoomThis().goBack.y = -egret.MainContext.instance.stage.stageHeight*1.2/20;
        EnterRoom.Shared().getEnterRoomThis().goBack.anchorOffsetX = -egret.MainContext.instance.stage.stageHeight*1.2/20;
        EnterRoom.Shared().getEnterRoomThis().goBack.anchorOffsetY = -egret.MainContext.instance.stage.stageHeight*1.2/20;
        */
    };
    EnterRoom.prototype.onTouchSmall = function (e) {
        EnterRoom.Shared().getEnterRoomThis().goBack.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchSmall, this);
        var target = e.$currentTarget;
        var smallBig = new SmallBig(0, 0, egret.MainContext.instance.stage.stageHeight * 1.2 / 10, egret.MainContext.instance.stage.stageHeight * 1.2 / 10);
        var target2 = smallBig.toSmaller(target, 0.8);
        /*
        target.scaleX = 0.8;
        target.scaleY = 0.8;
        target.x = -egret.MainContext.instance.stage.stageHeight*1.2/20+egret.MainContext.instance.stage.stageHeight*1.2*0.2/10;
        target.y = -egret.MainContext.instance.stage.stageHeight*1.2/20+egret.MainContext.instance.stage.stageHeight*1.2*0.2/10;
        */
        EnterRoom.Shared().getEnterRoomThis().sprcon.addChild(target2);
    };
    EnterRoom.prototype.onTouchBackIndex = function (e) {
        EnterRoom.Shared().getEnterRoomThis().goBack.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchBackIndex, this);
        var target = e.$currentTarget;
        var smallBig = new SmallBig(0, 0, egret.MainContext.instance.stage.stageHeight * 1.2 / 10, egret.MainContext.instance.stage.stageHeight * 1.2 / 10);
        var target2 = smallBig.toRecover(target);
        /*
        target.scaleX = 1;
        target.scaleY = 1;
        target.x = -egret.MainContext.instance.stage.stageHeight*1.2/20;
        target.y = -egret.MainContext.instance.stage.stageHeight*1.2/20;
        */
        EnterRoom.Shared().getEnterRoomThis().sprcon.addChild(target2);
        /*
        //index
        let a = IndexTopBanner.Shared();
        a.createView();
        Index.Shared().getIndexThis().addChild(a);
        //this.parent.addChild(a);
        let b = IndexCenterButton.Shared();
        b.createView();
        Index.Shared().getIndexThis().addChild(b);
        //this.removeChild(this.sprcon);
        EnterRoom.Shared().getEnterRoomThis().removeChild(this.sprcon);
        Index.Shared().getIndexThis().removeChild(this);
        */
        Index.Shared().getIndexThis().removeChildren();
        Index.Shared().getIndexThis().createView();
    };
    EnterRoom.prototype.getEnterRoomThis = function () {
        return this;
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    EnterRoom.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return EnterRoom;
}(eui.Component));
__reflect(EnterRoom.prototype, "EnterRoom", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=EnterRoom.js.map