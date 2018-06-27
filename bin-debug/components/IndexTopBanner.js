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
        return _super.call(this) || this;
    }
    IndexTopBanner.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    IndexTopBanner.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    IndexTopBanner.prototype.createView = function (stageW, stageH, thisM) {
        var sprcon = new egret.Sprite();
        thisM.addChild(sprcon);
        var topMask = new egret.Shape();
        topMask.name = "indexTopBanner";
        topMask.graphics.beginFill(0xFAFAFA, 0.1);
        topMask.graphics.drawRect(0, 0, stageW, stageH * 1.2 / 10);
        topMask.graphics.endFill();
        topMask.x = 0;
        topMask.y = -stageH * 1.2 / 10;
        sprcon.addChild(topMask);
        var tw = egret.Tween.get(topMask);
        tw.to({ x: 0, y: 0 }, 700, egret.Ease.sineOut);
        return sprcon;
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