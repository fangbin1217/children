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
        var _this = _super.call(this) || this;
        _this.defaultImg = 'icons9_json.sitDown';
        return _this;
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
        this.sprcon.height = egret.MainContext.instance.stage.stageHeight * 1 / 5;
        this.addChild(this.sprcon);
        var shp = new egret.Shape();
        shp.graphics.lineStyle(1, 0xffffff);
        shp.graphics.moveTo(0, egret.MainContext.instance.stage.stageHeight * 1 / 5);
        shp.graphics.lineTo(egret.MainContext.instance.stage.stageWidth, egret.MainContext.instance.stage.stageHeight * 1 / 5);
        shp.graphics.endFill();
        this.addChild(shp);
        this.createOne();
        //sprcon2
        this.sprcon2 = new egret.Sprite();
        this.sprcon2.x = 0;
        this.sprcon2.y = egret.MainContext.instance.stage.stageHeight * 1 / 5;
        this.sprcon2.width = egret.MainContext.instance.stage.stageWidth / 8;
        this.sprcon2.height = egret.MainContext.instance.stage.stageHeight * 3 / 5;
        this.addChild(this.sprcon2);
        //sprcon3
        this.sprcon3 = new egret.Sprite();
        this.sprcon3.x = egret.MainContext.instance.stage.stageWidth * 1 / 4;
        this.sprcon3.y = egret.MainContext.instance.stage.stageHeight * 1 / 5;
        this.sprcon3.width = egret.MainContext.instance.stage.stageWidth * 3 / 4;
        this.sprcon3.height = egret.MainContext.instance.stage.stageHeight * 3 / 5;
        this.addChild(this.sprcon3);
        //sprcon4
        this.sprcon4 = new egret.Sprite();
        this.sprcon4.x = egret.MainContext.instance.stage.stageWidth * 7 / 8;
        this.sprcon4.y = egret.MainContext.instance.stage.stageHeight * 1 / 5;
        this.sprcon4.width = egret.MainContext.instance.stage.stageWidth / 8;
        this.sprcon4.height = egret.MainContext.instance.stage.stageHeight * 3 / 5;
        this.addChild(this.sprcon4);
        this.createTwo();
        var shp3 = new egret.Shape();
        shp3.graphics.lineStyle(1, 0xffffff);
        shp3.graphics.moveTo(egret.MainContext.instance.stage.stageWidth / 8, egret.MainContext.instance.stage.stageHeight / 5);
        shp3.graphics.lineTo(egret.MainContext.instance.stage.stageWidth / 8, egret.MainContext.instance.stage.stageHeight * 4 / 5);
        shp3.graphics.endFill();
        this.addChild(shp3);
        var shp4 = new egret.Shape();
        shp4.graphics.lineStyle(1, 0xffffff);
        shp4.graphics.moveTo(egret.MainContext.instance.stage.stageWidth * 7 / 8, egret.MainContext.instance.stage.stageHeight / 5);
        shp4.graphics.lineTo(egret.MainContext.instance.stage.stageWidth * 7 / 8, egret.MainContext.instance.stage.stageHeight * 4 / 5);
        shp4.graphics.endFill();
        this.addChild(shp4);
        //sprcon5
        this.sprcon5 = new egret.Sprite();
        this.sprcon5.x = 0;
        this.sprcon5.y = egret.MainContext.instance.stage.stageHeight * 4 / 5;
        this.sprcon5.width = egret.MainContext.instance.stage.stageWidth;
        this.sprcon5.height = egret.MainContext.instance.stage.stageHeight / 5;
        this.addChild(this.sprcon5);
        var shp2 = new egret.Shape();
        shp2.graphics.lineStyle(1, 0xffffff);
        shp2.graphics.moveTo(0, egret.MainContext.instance.stage.stageHeight * 4 / 5);
        shp2.graphics.lineTo(egret.MainContext.instance.stage.stageWidth, egret.MainContext.instance.stage.stageHeight * 4 / 5);
        shp2.graphics.endFill();
        this.addChild(shp2);
    };
    GameRoom.prototype.createOne = function () {
        //back button 
        this.goBack = this.createBitmapByName(Config.imageJsonPre + 'backward');
        this.goBack.touchEnabled = true; //设置可以进行触摸
        this.goBack.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchSmall, this);
        this.goBack.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchBackIndex, this);
        this.goBack.x = 0;
        this.goBack.y = 0;
        var w = 60;
        var h = 60;
        this.goBack.width = w;
        this.goBack.height = h;
        this.sprcon.addChild(this.goBack);
        var smallBig = new SmallBig(0, 0, w, h);
        smallBig.setPosition(this.goBack);
        //leftTop
        var leftTop = this.createBitmapByName(Config.imageJsonPre + 'seat5');
        leftTop.x = egret.MainContext.instance.stage.stageWidth / 7;
        leftTop.y = 0;
        leftTop.width = 64;
        leftTop.height = 64;
        this.sprcon.addChild(leftTop);
        //centerTop
        var centerTop = this.createBitmapByName(Config.imageJsonPre + 'seat4');
        centerTop.x = egret.MainContext.instance.stage.stageWidth * 3 / 7;
        centerTop.y = 0;
        centerTop.width = 64;
        centerTop.height = 64;
        this.sprcon.addChild(centerTop);
        //rightTop
        var rightTop = this.createBitmapByName(Config.imageJsonPre + 'seat3');
        rightTop.x = egret.MainContext.instance.stage.stageWidth * 5 / 7;
        rightTop.y = 0;
        rightTop.width = 64;
        rightTop.height = 64;
        this.sprcon.addChild(rightTop);
    };
    GameRoom.prototype.createTwo = function () {
        //myLeft
        var myLeft = this.createBitmapByName(Config.imageJsonPre + 'seat6');
        myLeft.x = 0;
        myLeft.y = 0;
        myLeft.width = 64;
        myLeft.height = 64;
        this.sprcon2.addChild(myLeft);
        //myRight
        var myRight = this.createBitmapByName(Config.imageJsonPre + 'seat2');
        myRight.x = 0;
        myRight.y = 0;
        myRight.width = 64;
        myRight.height = 64;
        this.sprcon4.addChild(myRight);
    };
    GameRoom.prototype.onTouchSmall = function (e) {
        GameRoom.Shared().getThis().goBack.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchSmall, this);
        var target = e.$currentTarget;
        var smallBig = new SmallBig(0, 0, 60, 60);
        var target2 = smallBig.toSmaller(target, 0.8);
        GameRoom.Shared().getThis().sprcon.addChild(target2);
    };
    GameRoom.prototype.onTouchBackIndex = function (e) {
        GameRoom.Shared().getThis().goBack.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchBackIndex, this);
        var target = e.$currentTarget;
        var smallBig = new SmallBig(0, 0, 60, 60);
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