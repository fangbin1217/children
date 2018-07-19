var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SmallBig = (function () {
    /**
     * x:对象的x初始位置
     * y:对象的y初始位置
     * w:对象的宽
     * h:对象的高
     */
    function SmallBig(x, y, w, h) {
        this.positionX = x;
        this.positionY = y;
        this.containW = w;
        this.containH = h;
    }
    SmallBig.prototype.setPosition = function (spr) {
        spr.x = this.positionX - this.containW / 2;
        spr.y = this.positionY - this.containH / 2;
        spr.anchorOffsetX = -this.containW / 2;
        spr.anchorOffsetY = -this.containH / 2;
        return spr;
    };
    SmallBig.prototype.toSmaller = function (target, scale) {
        target.scaleX = scale;
        target.scaleY = scale;
        target.x = this.positionX - this.containW / 2 + (1 - scale) * this.containW;
        target.y = this.positionY - this.containH / 2 + (1 - scale) * this.containH;
        return target;
    };
    SmallBig.prototype.toBigger = function (target, scale) {
        target.scaleX = scale;
        target.scaleY = scale;
        target.x = this.positionX - this.containW / 2 - (scale - 1) * this.containW;
        target.y = this.positionY - this.containH / 2 - (scale - 1) * this.containH;
        return target;
    };
    SmallBig.prototype.toRecover = function (target) {
        target.scaleX = 1;
        target.scaleY = 1;
        target.x = this.positionX - this.containW / 2;
        target.y = this.positionY - this.containH / 2;
        return target;
    };
    return SmallBig;
}());
__reflect(SmallBig.prototype, "SmallBig");
//# sourceMappingURL=SmallBig.js.map