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
var MySprite = (function (_super) {
    __extends(MySprite, _super);
    function MySprite() {
        return _super.call(this) || this;
    }
    MySprite.Shared = function () {
        if (MySprite.shared == null) {
            MySprite.shared = new MySprite();
        }
        return MySprite.shared;
    };
    MySprite.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    MySprite.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    MySprite.prototype.createView = function () {
        this.sprcon = new egret.Sprite();
        this.addChild(this.sprcon);
        this.sprite = new egret.Shape();
        this.sprite.graphics.beginFill(0x111111, 0.5);
        this.sprite.graphics.drawRect(0, 0, egret.MainContext.instance.stage.stageWidth, egret.MainContext.instance.stage.stageHeight);
        this.sprite.graphics.endFill();
        this.sprite.x = 0;
        this.sprite.y = 0;
        this.sprcon.addChild(this.sprite);
        this.sprite2 = new egret.Shape();
        this.sprite2.graphics.beginFill(0x111111);
        this.sprite2.graphics.drawRect(0, 0, egret.MainContext.instance.stage.stageWidth, egret.MainContext.instance.stage.stageHeight);
        this.sprite2.graphics.endFill();
        this.sprite2.x = 0;
        this.sprite2.y = 0;
        this.sprcon.addChild(this.sprite2);
        this.sprite.touchEnabled = true; //遮罩接收触摸事件 就不会传递下去
        //MySprite.Shared().getIndexThis().touchChildren = false;
        this.sprite.mask = this.sprite2;
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    MySprite.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    MySprite.prototype.getIndexThis = function () {
        return this;
    };
    return MySprite;
}(eui.Component));
__reflect(MySprite.prototype, "MySprite", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=MySprite.js.map