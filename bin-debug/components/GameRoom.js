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
var GameRoom = (function (_super) {
    __extends(GameRoom, _super);
    function GameRoom() {
        return _super.call(this) || this;
    }
    GameRoom.Shared = function () {
        if (GameRoom.shared == null) {
            GameRoom.shared = new GameRoom();
        }
        return GameRoom.shared;
    };
    GameRoom.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GameRoom.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    GameRoom.prototype.createView = function () {
        //set background image
        this.bg = this.createBitmapByName("bgGame_jpg");
        this.bg.width = egret.MainContext.instance.stage.stageWidth;
        this.bg.height = egret.MainContext.instance.stage.stageHeight;
        this.addChild(this.bg);
        //sprcon
        this.sprcon = new egret.Sprite();
        this.sprcon.x = 0;
        this.sprcon.y = 0;
        this.sprcon.width = egret.MainContext.instance.stage.stageWidth;
        this.sprcon.height = egret.MainContext.instance.stage.stageHeight * 1.2 / 10;
        this.addChild(this.sprcon);
        //back button 
        this.goBack = this.createBitmapByName('icons7_json.backward');
        this.goBack.touchEnabled = true; //设置可以进行触摸
        this.goBack.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchSmall, this);
        this.goBack.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchBackIndex, this);
        this.goBack.x = 0;
        this.goBack.y = 0;
        var w = egret.MainContext.instance.stage.stageHeight * 1.2 / 10;
        var h = egret.MainContext.instance.stage.stageHeight * 1.2 / 10;
        this.goBack.width = w;
        this.goBack.height = h;
        this.sprcon.addChild(this.goBack);
        var smallBig = new SmallBig(0, 0, w, h);
        smallBig.setPosition(this.goBack);
    };
    GameRoom.prototype.onTouchSmall = function (e) {
        GameRoom.Shared().getThis().goBack.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchSmall, this);
        var target = e.$currentTarget;
        var smallBig = new SmallBig(0, 0, egret.MainContext.instance.stage.stageHeight * 1.2 / 10, egret.MainContext.instance.stage.stageHeight * 1.2 / 10);
        var target2 = smallBig.toSmaller(target, 0.8);
        GameRoom.Shared().getThis().sprcon.addChild(target2);
    };
    GameRoom.prototype.onTouchBackIndex = function (e) {
        GameRoom.Shared().getThis().goBack.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchBackIndex, this);
        var target = e.$currentTarget;
        var smallBig = new SmallBig(0, 0, egret.MainContext.instance.stage.stageHeight * 1.2 / 10, egret.MainContext.instance.stage.stageHeight * 1.2 / 10);
        var target2 = smallBig.toRecover(target);
        GameRoom.Shared().getThis().sprcon.addChild(target2);
        Index.Shared().getIndexThis().removeChildren();
        Index.Shared().getIndexThis().createView();
    };
    GameRoom.prototype.getThis = function () {
        return this;
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    GameRoom.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return GameRoom;
}(eui.Component));
__reflect(GameRoom.prototype, "GameRoom", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=GameRoom.js.map