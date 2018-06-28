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
var Index = (function (_super) {
    __extends(Index, _super);
    function Index(stageW, stageH) {
        var _this = _super.call(this) || this;
        _this.stageW = stageW;
        _this.stageH = stageH;
        _this.createView();
        return _this;
    }
    Index.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Index.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    Index.prototype.createView = function () {
        //set background image
        var sky = this.createBitmapByName("bgIndex_jpg");
        sky.width = this.stageW;
        sky.height = this.stageH;
        this.addChild(sky);
        //index top banner
        this.addChild(IndexTopBanner.Shared());
        //index center pictures
        this.addChild(IndexCenterButton.Shared());
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    Index.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return Index;
}(eui.Component));
__reflect(Index.prototype, "Index", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Index.js.map