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
        this.drawBg();
        this.btRewad();
    };
    IndexBottomBanner.prototype.drawBg = function () {
        this.banner = new egret.Shape();
        this.banner.name = "indexBottomBanner";
        var matrix = new egret.Matrix();
        matrix.createGradientBox(this.stageW * 3 / 4, this.stageH * 1.2 / 10);
        //this.banner.graphics.beginFill(0xFAFAFA, 0.1);
        this.banner.graphics.beginGradientFill(egret.GradientType.LINEAR, [0xF1F1F1, 0xF1F1F1], [0, 0.2], [0, 255], matrix);
        this.banner.graphics.drawRoundRect(0, 0, this.stageW * 3 / 4, this.stageH * 1.2 / 10, 10, 10);
        this.banner.graphics.endFill();
        this.banner.x = this.stageW * 1 / 4;
        this.banner.y = this.stageH;
        this.addChild(this.banner);
        var tw = egret.Tween.get(this.banner);
        tw.to({ x: this.stageW * 1 / 4, y: this.stageH * 8.8 / 10 }, 700, egret.Ease.sineOut);
    };
    IndexBottomBanner.prototype.btRewad = function () {
        //reward
        this.bt1 = this.createBitmapByName('icons_json.awardCup');
        this.bt1.touchEnabled = true; //设置可以进行触摸
        this.bt1.x = this.stageW / 5;
        this.bt1.y = this.stageH;
        this.bt1.witdh = this.stageH * 1.2 * 0.8 / 10;
        this.bt1.height = this.stageH * 1.2 * 0.8 / 10;
        this.bt1.alpha = 0.8;
        this.bt1.anchorOffsetX = -this.stageH * 1.2 * 0.8 / 20;
        this.bt1.anchorOffsetY = -this.stageH * 1.2 * 0.8 / 20;
        this.addChild(this.bt1);
        var tw = egret.Tween.get(this.banner);
        tw.to({ x: this.stageW / 5 - this.bt1.width / 2, y: this.stageH * 8.8 / 10 - this.stageH * 1.2 * 0.8 * 0.3 / 10 - this.stageH * 1.2 * 0.8 / 20 }, 700, egret.Ease.sineOut);
    };
    IndexBottomBanner.prototype.clearView = function () {
        var tw = egret.Tween.get(this.banner);
        tw.to({ x: 0, y: -egret.MainContext.instance.stage.stageHeight * 1.2 / 10 }, 700, egret.Ease.sineOut).call(this.clearCallback);
    };
    IndexBottomBanner.prototype.clearCallback = function () {
        Index.Shared().getIndexThis().removeChild(IndexBottomBanner.Shared().getIndexBottomBannerThis());
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