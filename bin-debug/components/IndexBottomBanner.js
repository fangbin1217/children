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
var IndexBottomBanner = (function (_super) {
    __extends(IndexBottomBanner, _super);
    function IndexBottomBanner() {
        var _this = _super.call(this) || this;
        _this.stageW = egret.MainContext.instance.stage.stageWidth;
        _this.stageH = egret.MainContext.instance.stage.stageHeight;
        return _this;
    }
    IndexBottomBanner.Shared = function () {
        if (IndexBottomBanner.shared == null) {
            IndexBottomBanner.shared = new IndexBottomBanner();
        }
        return IndexBottomBanner.shared;
    };
    IndexBottomBanner.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    IndexBottomBanner.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    IndexBottomBanner.prototype.createView = function () {
        this.banner = new egret.Shape();
        this.banner.name = "indexBottomBanner";
        this.banner.graphics.beginFill(0xFAFAFA, 0.1);
        this.banner.graphics.drawRoundRect(0, 0, this.stageW, this.stageH * 1.2 / 10, 20, 20);
        this.banner.graphics.endFill();
        this.banner.x = 0;
        this.banner.y = -this.stageH * 1.2 / 10;
        this.addChild(this.banner);
        var tw = egret.Tween.get(this.banner);
        tw.to({ x: 0, y: 0 }, 700, egret.Ease.sineOut);
    };
    IndexBottomBanner.prototype.clearView = function () {
        var tw = egret.Tween.get(this.banner);
        tw.to({ x: 0, y: -egret.MainContext.instance.stage.stageHeight * 1.2 / 10 }, 700, egret.Ease.sineOut).call(this.clearCallback);
    };
    IndexBottomBanner.prototype.clearCallback = function () {
        Index.Shared().getIndexThis().removeChild(IndexTopBanner.Shared().getIndexTopBannerThis());
        //this.parent.removeChild(this);
    };
    IndexBottomBanner.prototype.getIndexBottomBannerThis = function () {
        return this;
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    IndexBottomBanner.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return IndexBottomBanner;
}(eui.Component));
__reflect(IndexBottomBanner.prototype, "IndexBottomBanner", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=IndexBottomBanner.js.map