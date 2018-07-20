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
var Config = (function (_super) {
    __extends(Config, _super);
    function Config() {
        return _super.call(this) || this;
    }
    Config.Shared = function () {
        if (Config.shared == null) {
            Config.shared = new Config();
        }
        return Config.shared;
    };
    Config.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Config.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    Config.prototype.getIndexThis = function () {
        return this;
    };
    Config.apiUrl = 'http://www.myshared.fb/test.php';
    return Config;
}(eui.Component));
__reflect(Config.prototype, "Config", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Config.js.map