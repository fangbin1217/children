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
        this.sprcon = new egret.Sprite();
        this.stageW = egret.MainContext.instance.stage.stageWidth;
        this.stageH = egret.MainContext.instance.stage.stageHeight;
        this.addChild(this.sprcon);
        this.sprcon.x = 0;
        this.sprcon.y = -this.stageH * 1.2 / 10;
        this.sprcon.width = this.stageW;
        this.sprcon.height = this.stageH * 1.2 / 10;
        this.banner = new egret.Shape();
        this.banner.name = "indexTopBanner";
        var matrix = new egret.Matrix();
        matrix.createGradientBox(this.stageW * 3 / 4, this.stageH * 1.2 / 10);
        //this.banner.graphics.beginFill(0xFAFAFA, 0.1);
        this.banner.graphics.beginGradientFill(egret.GradientType.LINEAR, [0xF1F1F1, 0xF1F1F1], [0.2, 0], [0, 255], matrix);
        this.banner.graphics.drawRoundRect(0, 0, this.stageW * 3 / 4, this.stageH * 1.2 / 10, 10, 10);
        this.banner.graphics.endFill();
        this.banner.x = 0;
        this.banner.y = 0;
        this.sprcon.addChild(this.banner);
        var avatorY = this.stageH * 1.2 / 20 - 23;
        if (Config.avator) {
            console.log(2);
            var result = new egret.Bitmap();
            result.texture = Config.avator;
            result.x = 0;
            result.y = avatorY;
            this.sprcon.addChild(result);
            var circle = new egret.Shape();
            circle.graphics.beginFill(0xffffff);
            //circle.graphics.drawCircle(23,23,23);
            circle.graphics.drawRoundRect(0, avatorY, 46, 46, 5, 5);
            circle.graphics.endFill();
            this.sprcon.addChild(circle);
            result.mask = circle;
        }
        else {
            /*
            let AVATOR = localStorage.getItem('AVATOR');
            if (AVATOR) {
                console.log(1);
                let url = Config.chickrenUrl+AVATOR;
                RES.getResByUrl(url,(event:any, url)=>{
                    let texture: egret.Texture = <egret.Texture>event;
                    let result = new egret.Bitmap();
                    result.texture = texture;

                    IndexTopBanner.Shared().getIndexTopBannerThis().sprcon.addChild(result);

                    let circle: egret.Shape = new egret.Shape();
                    circle.graphics.beginFill(0xffffff);
                    //circle.graphics.drawCircle(23,23,23);
                    circle.graphics.drawRoundRect(0, 0, 46, 46, 5, 5);
                    circle.graphics.endFill();
                    IndexTopBanner.Shared().getIndexTopBannerThis().sprcon.addChild(circle);

                    result.mask = circle;
                
                },this,RES.ResourceItem.TYPE_IMAGE);
            }
            */
        }
        var nickName = localStorage.getItem('NICK_NAME');
        var label = new egret.TextField();
        label.text = nickName; //设置文本内容
        label.size = 22; //设置字号大小
        label.textColor = 0xffffff; //设置字体颜色
        label.fontFamily = "YouYuan"; //设置字体样式
        label.textAlign = egret.VerticalAlign.MIDDLE;
        label.x = 50;
        label.y = avatorY;
        this.sprcon.addChild(label);
        var diamondImg = this.createBitmapByName(Config.imageJsonBtn + 'diamond');
        //diamond.width = 64;
        //diamond.width = 64;
        diamondImg.x = 50;
        diamondImg.y = avatorY + 22;
        this.sprcon.addChild(diamondImg);
        var diamondNum = localStorage.getItem('DIAMOND');
        var label2 = new egret.TextField();
        label2.text = diamondNum; //设置文本内容
        label2.size = 24; //设置字号大小
        label2.textColor = 0xffffff; //设置字体颜色
        label2.fontFamily = "YouYuan"; //设置字体样式
        label2.textAlign = egret.VerticalAlign.MIDDLE;
        label2.x = 80;
        label2.y = avatorY + 22;
        this.sprcon.addChild(label2);
        var tw = egret.Tween.get(this.sprcon);
        tw.to({ x: 0, y: 0 }, 700, egret.Ease.sineOut);
    };
    IndexTopBanner.prototype.clearView = function () {
        var tw = egret.Tween.get(this.sprcon);
        tw.to({ x: 0, y: -egret.MainContext.instance.stage.stageHeight * 1.2 / 10 }, 700, egret.Ease.sineOut).call(this.clearCallback);
    };
    IndexTopBanner.prototype.clearCallback = function () {
        Index.Shared().getIndexThis().removeChild(IndexTopBanner.Shared().getIndexTopBannerThis());
        //this.parent.removeChild(this);
    };
    IndexTopBanner.prototype.getIndexTopBannerThis = function () {
        return this;
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