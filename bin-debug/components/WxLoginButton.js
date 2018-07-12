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
var WxLoginButton = (function (_super) {
    __extends(WxLoginButton, _super);
    function WxLoginButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WxLoginButton.btnSkin = {
        type: 'text',
        text: '开 始 游 戏',
        style: {
            left: 22,
            bottom: 160,
            width: 360,
            height: 80,
            lineHeight: 80,
            backgroundColor: 'rgba(160,180,240,0.7)',
            color: '#ffffff',
            textAlign: 'center',
            fontSize: 32,
            borderRadius: 6,
        }
    };
    return WxLoginButton;
}(Object));
__reflect(WxLoginButton.prototype, "WxLoginButton");
//# sourceMappingURL=WxLoginButton.js.map