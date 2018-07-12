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
        //banner 2
        this.sprcon = new egret.Sprite();
        this.addChild(this.sprcon);
        var topMask = new egret.Shape();
        topMask.name = "indexTopBanner2";
        var matrix = new egret.Matrix();
        matrix.createGradientBox(egret.MainContext.instance.stage.stageWidth * 3 / 4, egret.MainContext.instance.stage.stageHeight * 1.2 / 10);
        topMask.graphics.beginGradientFill(egret.GradientType.LINEAR, [0xF1F1F1, 0xF1F1F1], [0.2, 0], [0, 255], matrix);
        topMask.graphics.drawRoundRect(0, 0, egret.MainContext.instance.stage.stageWidth * 3 / 4, egret.MainContext.instance.stage.stageHeight * 1.2 / 10, 20, 20);
        topMask.graphics.endFill();
        topMask.x = 0;
        topMask.y = -egret.MainContext.instance.stage.stageHeight * 1.2 / 10;
        this.sprcon.addChild(topMask);
        //back to index 
        this.goBack = this.createBitmapByName('icons4_json.backward');
        this.goBack.touchEnabled = true; //设置可以进行触摸
        this.goBack.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBackIndex, this);
        this.goBack.alpha = 0.8;
        this.goBack.x = 10;
        this.goBack.y = -egret.MainContext.instance.stage.stageHeight * 1.2 / 10;
        //goBack.width = this.stageW * 2.8/10;
        //goBack.height = this.stageH * 2.5/10;
        this.sprcon.addChild(this.goBack);
        var tw = egret.Tween.get(topMask);
        tw.to({ x: 0, y: 0 }, 700, egret.Ease.sineOut);
        var tw2 = egret.Tween.get(this.goBack);
        tw2.to({ x: 0, y: 0 }, 700, egret.Ease.sineOut);
    };
    EnterRoom.prototype.onTouchBackIndex = function () {
        this.goBack.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBackIndex, this);
        //index
        var a = IndexTopBanner.Shared();
        a.createView();
        Index.Shared().getIndexThis().addChild(a);
        //this.parent.addChild(a);
        var b = IndexCenterButton.Shared();
        b.createView();
        Index.Shared().getIndexThis().addChild(b);
        //this.removeChild(this.sprcon);
        EnterRoom.Shared().getEnterRoomThis().removeChild(this.sprcon);
        Index.Shared().getIndexThis().removeChild(this);
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