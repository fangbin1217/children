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
var IndexTopBanner = (function (_super) {
    __extends(IndexTopBanner, _super);
    function IndexTopBanner() {
        var _this = _super.call(this) || this;
        _this.stageW = egret.MainContext.instance.stage.stageWidth;
        _this.stageH = egret.MainContext.instance.stage.stageHeight;
        return _this;
    }
    IndexTopBanner.Shared = function () {
        if (IndexTopBanner.shared == null) {
            IndexTopBanner.shared = new IndexTopBanner();
        }
        return IndexTopBanner.shared;
    };
    IndexTopBanner.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    IndexTopBanner.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    IndexTopBanner.prototype.createView = function () {
        this.banner = new egret.Sprite();
        this.addChild(this.banner);
        var topMask = new egret.Shape();
        topMask.name = "indexTopBanner";
        topMask.graphics.beginFill(0xFAFAFA, 0.1);
        topMask.graphics.drawRoundRect(0, 0, this.stageW, this.stageH * 1.2 / 10, 20, 20);
        topMask.graphics.endFill();
        topMask.x = 0;
        topMask.y = -this.stageH * 1.2 / 10;
        this.banner.addChild(topMask);
        var tw = egret.Tween.get(topMask);
        tw.to({ x: 0, y: 0 }, 700, egret.Ease.sineOut);
    };
    IndexTopBanner.prototype.clearView = function () {
        var tw = egret.Tween.get(this.banner);
        tw.to({ x: 0, y: -egret.MainContext.instance.stage.stageHeight * 1.2 / 10 }, 700, egret.Ease.sineOut).call(this.clearCallback);
    };
    IndexTopBanner.prototype.clearCallback = function () {
        this.parent.removeChild(this);
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    IndexTopBanner.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return IndexTopBanner;
}(eui.Component));
__reflect(IndexTopBanner.prototype, "IndexTopBanner", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=IndexTopBanner.js.map