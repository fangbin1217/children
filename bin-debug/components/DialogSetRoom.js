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
var DialogSetRoom = (function (_super) {
    __extends(DialogSetRoom, _super);
    function DialogSetRoom() {
        return _super.call(this) || this;
    }
    DialogSetRoom.Shared = function () {
        if (DialogSetRoom.shared == null) {
            DialogSetRoom.shared = new DialogSetRoom();
        }
        return DialogSetRoom.shared;
    };
    DialogSetRoom.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    DialogSetRoom.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    DialogSetRoom.prototype.createView = function () {
        //创建对话框父容器
        this.sprcon = new egret.Sprite();
        this.addChild(this.sprcon);
        this.sprcon.x = 0.15 * egret.MainContext.instance.stage.stageWidth;
        this.sprcon.y = 0.15 * egret.MainContext.instance.stage.stageHeight;
        this.sprcon.width = 0.7 * egret.MainContext.instance.stage.stageWidth;
        this.sprcon.height = 0.7 * egret.MainContext.instance.stage.stageHeight;
        var bg = new egret.Shape();
        //0xF5F5DC  0x9C9C9C 0.4
        bg.graphics.beginFill(0x9C9C9C, 0.4);
        bg.graphics.drawRoundRect(0, 0, 0.7 * egret.MainContext.instance.stage.stageWidth, 0.7 * egret.MainContext.instance.stage.stageHeight, 10, 10);
        bg.graphics.endFill();
        this.sprcon.addChild(bg);
        //A容器 标题栏
        this.sprconA = new egret.Sprite();
        this.sprconA.x = 0;
        this.sprconA.y = 0;
        this.sprconA.width = 0.7 * egret.MainContext.instance.stage.stageWidth;
        this.sprconA.height = 0.7 * egret.MainContext.instance.stage.stageHeight / 7;
        this.sprcon.addChild(this.sprconA);
        this.viewTitle();
        //B容器 内容栏
        this.sprconB = new egret.Sprite();
        this.sprconB.x = 0;
        this.sprconB.y = 0.1 * egret.MainContext.instance.stage.stageHeight;
        this.sprconB.width = 0.7 * egret.MainContext.instance.stage.stageWidth;
        this.sprconB.height = 0.6 * egret.MainContext.instance.stage.stageHeight;
        this.sprcon.addChild(this.sprconB);
        this.viewContent();
    };
    DialogSetRoom.prototype.viewTitle = function () {
        var label = new egret.TextField();
        label.text = "开设房间"; //设置文本内容
        //label.width = 4*(0.1*egret.MainContext.instance.stage.stageHeight - 6);
        //label.height = 0.1*egret.MainContext.instance.stage.stageHeight - 5;
        label.size = 0.1 * egret.MainContext.instance.stage.stageHeight - 6; //设置字号大小
        label.textColor = 0x336699; //设置字体颜色
        label.fontFamily = "YouYuan"; //设置字体样式
        label.textAlign = egret.VerticalAlign.MIDDLE;
        label.x = 0.35 * egret.MainContext.instance.stage.stageWidth - (0.1 * egret.MainContext.instance.stage.stageHeight - 6) * 2;
        label.strokeColor = 0x6699cc; //描边颜色
        label.stroke = 2; //描边宽度
        this.sprconA.addChild(label);
        this.close = this.createBitmapByName('icons7_json.close2');
        this.close.touchEnabled = true; //设置可以进行触摸
        this.close.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchClose, this);
        this.close.width = 64;
        this.close.width = 64;
        this.close.x = 0.7 * egret.MainContext.instance.stage.stageWidth - 32;
        this.close.y = -32;
        this.sprconA.addChild(this.close);
    };
    DialogSetRoom.prototype.viewContent = function () {
        var mySpace = 5;
        //bg
        this.dialog = new egret.Shape();
        this.dialog.x = mySpace;
        this.dialog.y = 0;
        //0xF5F5DC  0x9C9C9C 0.4
        this.dialog.graphics.beginFill(0xF5F5DC);
        this.dialog.graphics.drawRoundRect(0, 0, 0.7 * egret.MainContext.instance.stage.stageWidth - 2 * mySpace, 0.7 * 6 * egret.MainContext.instance.stage.stageHeight / 7 - mySpace, 10, 10);
        this.dialog.graphics.endFill();
        this.sprconB.addChild(this.dialog);
        this.setLineSpace();
        //yes bt
        this.yesBtn = this.createBitmapByName('icons7_json.sure');
        this.yesBtn.touchEnabled = true; //设置可以进行触摸
        this.yesBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchYesbtnBegin, this);
        this.yesBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchYesbtnEnd, this);
        var x = (0.7 * egret.MainContext.instance.stage.stageWidth - 10) / 2 - 72;
        var y = 0.6 * egret.MainContext.instance.stage.stageHeight - 80;
        this.yesBtn.x = x;
        this.yesBtn.y = y;
        this.yesBtn.width = 144;
        this.yesBtn.height = 66;
        this.sprconB.addChild(this.yesBtn);
        var smallBig = new SmallBig(x, y, 144, 66);
        smallBig.setPosition(this.yesBtn);
    };
    /** 设置直线 **/
    DialogSetRoom.prototype.setLineSpace = function () {
        var lineSpace = 64;
        var startX = 10;
        var endX = 0.7 * egret.MainContext.instance.stage.stageWidth - 15;
        var startY = (lineSpace - 36) / 2;
        var radioSpace = (lineSpace - 44) / 2;
        var bigFontSpace = (lineSpace - 36) / 2;
        var smallFontSpace = (lineSpace - 20) / 2;
        for (var i = 1; i <= 4; i++) {
            //label
            var firstLabel = new egret.TextField();
            if (i == 1) {
                firstLabel.text = "底分"; //设置文本内容
                var firstLabel2 = new egret.TextField();
                firstLabel2.text = '(2~4人)';
                firstLabel2.size = 20; //设置字号大小
                firstLabel2.textColor = 0xf76807; //设置字体颜色
                firstLabel2.fontFamily = "YouYuan"; //设置字体样式
                firstLabel2.x = 72 + startX;
                firstLabel2.y = smallFontSpace;
                this.sprconB.addChild(firstLabel2);
                //单选按钮组1
                var radio1 = new eui.RadioButton();
                radio1.label = "20分";
                ///设置单选按钮所属组件，同一组件内的只能选择一个单选按钮组
                radio1.groupName = "baseScore1";
                radio1.value = "1";
                radio1.selected = true;
                radio1.x = 72 + startX + 80;
                radio1.y = bigFontSpace;
                radio1.addEventListener(egret.Event.CHANGE, this.onChangeBaseScore, this);
                this.sprconB.addChild(radio1);
                var radio2 = new eui.RadioButton();
                radio2.label = "30分";
                radio2.groupName = "baseScore1";
                radio2.value = "2";
                radio2.x = 75 + startX + 80 + 100;
                radio2.y = radioSpace;
                radio2.addEventListener(egret.Event.CHANGE, this.onChangeBaseScore, this);
                this.sprconB.addChild(radio2);
                var firstLabel3 = new egret.TextField();
                firstLabel3.text = '(5~6人)';
                firstLabel3.size = 20; //设置字号大小
                firstLabel3.textColor = 0xf76807; //设置字体颜色
                firstLabel3.fontFamily = "YouYuan"; //设置字体样式
                firstLabel3.x = 75 + startX + 80 + 200;
                firstLabel3.y = smallFontSpace;
                this.sprconB.addChild(firstLabel3);
                //单选按钮组2
                var radio3 = new eui.RadioButton();
                radio3.label = "10分";
                ///设置单选按钮所属组件，同一组件内的只能选择一个单选按钮组
                radio3.groupName = "baseScore2";
                radio3.value = "1";
                radio3.selected = true;
                radio3.x = 75 + startX + 80 + 280;
                radio3.y = radioSpace;
                radio3.addEventListener(egret.Event.CHANGE, this.onChangeBaseScore, this);
                this.sprconB.addChild(radio3);
                var radio4 = new eui.RadioButton();
                radio4.label = "20分";
                radio4.groupName = "baseScore2";
                radio4.value = "2";
                radio4.x = 75 + startX + 80 + 380;
                radio4.y = radioSpace;
                radio4.addEventListener(egret.Event.CHANGE, this.onChangeBaseScore, this);
                this.sprconB.addChild(radio4);
            }
            else if (i == 2) {
                firstLabel.text = "炸弹"; //设置文本内容
                var firstLabel2 = new egret.TextField();
                //单选按钮组1
                var radio1 = new eui.RadioButton();
                radio1.label = "20分";
                ///设置单选按钮所属组件，同一组件内的只能选择一个单选按钮组
                radio1.groupName = "bomb";
                radio1.value = "1";
                radio1.selected = true;
                radio1.x = 72 + startX + 80;
                radio1.y = startY + radioSpace;
                radio1.addEventListener(egret.Event.CHANGE, this.onChangeBaseScore, this);
                this.sprconB.addChild(radio1);
                var radio2 = new eui.RadioButton();
                radio2.label = "40分";
                radio2.groupName = "bomb";
                radio2.value = "2";
                radio2.x = 75 + startX + 80 + 100;
                radio2.y = startY + radioSpace;
                radio2.addEventListener(egret.Event.CHANGE, this.onChangeBaseScore, this);
                this.sprconB.addChild(radio2);
                var firstLabel3 = new egret.TextField();
                firstLabel3.text = '春天';
                firstLabel3.size = 36; //设置字号大小
                firstLabel3.textColor = 0xf76807; //设置字体颜色
                firstLabel3.fontFamily = "YouYuan"; //设置字体样式
                firstLabel3.x = 75 + startX + 80 + 200;
                firstLabel3.y = startY + bigFontSpace;
                this.sprconB.addChild(firstLabel3);
                //单选按钮组2
                var radio3 = new eui.RadioButton();
                radio3.label = "20分";
                ///设置单选按钮所属组件，同一组件内的只能选择一个单选按钮组
                radio3.groupName = "spring";
                radio3.value = "1";
                radio3.selected = true;
                radio3.x = 75 + startX + 80 + 280;
                radio3.y = startY + radioSpace;
                radio3.addEventListener(egret.Event.CHANGE, this.onChangeBaseScore, this);
                this.sprconB.addChild(radio3);
                var radio4 = new eui.RadioButton();
                radio4.label = "40分";
                radio4.groupName = "spring";
                radio4.value = "2";
                radio4.x = 75 + startX + 80 + 380;
                radio4.y = startY + radioSpace;
                radio4.addEventListener(egret.Event.CHANGE, this.onChangeBaseScore, this);
                this.sprconB.addChild(radio4);
            }
            else if (i == 3) {
                firstLabel.text = "房费"; //设置文本内容
                var firstLabel2 = new egret.TextField();
                //单选按钮组1
                var radio1 = new eui.RadioButton();
                radio1.label = "房主";
                ///设置单选按钮所属组件，同一组件内的只能选择一个单选按钮组
                radio1.groupName = "fee";
                radio1.value = "1";
                radio1.selected = true;
                radio1.x = 72 + startX + 80;
                radio1.y = startY + radioSpace;
                radio1.addEventListener(egret.Event.CHANGE, this.onChangeBaseScore, this);
                this.sprconB.addChild(radio1);
                var radio2 = new eui.RadioButton();
                radio2.label = "AA";
                radio2.groupName = "fee";
                radio2.value = "2";
                radio2.x = 75 + startX + 80 + 100;
                radio2.y = startY + radioSpace;
                radio2.addEventListener(egret.Event.CHANGE, this.onChangeBaseScore, this);
                this.sprconB.addChild(radio2);
                var firstLabel3 = new egret.TextField();
                firstLabel3.text = '6人';
                firstLabel3.size = 36; //设置字号大小
                firstLabel3.textColor = 0xf76807; //设置字体颜色
                firstLabel3.fontFamily = "YouYuan"; //设置字体样式
                firstLabel3.x = 75 + startX + 80 + 200;
                firstLabel3.y = startY + bigFontSpace;
                this.sprconB.addChild(firstLabel3);
                //单选按钮组2
                var radio3 = new eui.RadioButton();
                radio3.label = "黑2,3";
                ///设置单选按钮所属组件，同一组件内的只能选择一个单选按钮组
                radio3.groupName = "way";
                radio3.value = "1";
                radio3.selected = true;
                radio3.x = 75 + startX + 80 + 280;
                radio3.y = startY + radioSpace;
                radio3.addEventListener(egret.Event.CHANGE, this.onChangeBaseScore, this);
                this.sprconB.addChild(radio3);
                var radio4 = new eui.RadioButton();
                radio4.label = "大,小王";
                radio4.groupName = "way";
                radio4.value = "2";
                radio4.x = 75 + startX + 80 + 380;
                radio4.y = startY + radioSpace;
                radio4.addEventListener(egret.Event.CHANGE, this.onChangeBaseScore, this);
                this.sprconB.addChild(radio4);
            }
            else if (i == 4) {
                firstLabel.text = "局数"; //设置文本内容
                var firstLabel2 = new egret.TextField();
                //单选按钮组1
                var radio1 = new eui.RadioButton();
                radio1.label = "两局";
                ///设置单选按钮所属组件，同一组件内的只能选择一个单选按钮组
                radio1.groupName = "times";
                radio1.value = "1";
                radio1.selected = true;
                radio1.x = 72 + startX + 80;
                radio1.y = startY + radioSpace;
                radio1.addEventListener(egret.Event.CHANGE, this.onChangeBaseScore, this);
                this.sprconB.addChild(radio1);
                var radio2 = new eui.RadioButton();
                radio2.label = "三局";
                radio2.groupName = "times";
                radio2.value = "2";
                radio2.x = 75 + startX + 180;
                radio2.y = startY + radioSpace;
                radio2.addEventListener(egret.Event.CHANGE, this.onChangeBaseScore, this);
                this.sprconB.addChild(radio2);
                var radio3 = new eui.RadioButton();
                radio3.label = "五局";
                radio3.groupName = "times";
                radio3.value = "3";
                radio3.x = 75 + startX + 280;
                radio3.y = startY + radioSpace;
                radio3.addEventListener(egret.Event.CHANGE, this.onChangeBaseScore, this);
                this.sprconB.addChild(radio3);
                var radio4 = new eui.RadioButton();
                radio4.label = "七局";
                radio4.groupName = "times";
                radio4.value = "4";
                radio4.x = 75 + startX + 380;
                radio4.y = startY + radioSpace;
                radio4.addEventListener(egret.Event.CHANGE, this.onChangeBaseScore, this);
                this.sprconB.addChild(radio4);
                var radio5 = new eui.RadioButton();
                radio5.label = "十局";
                radio5.groupName = "times";
                radio5.value = "5";
                radio5.x = 75 + startX + 480;
                radio5.y = startY + radioSpace;
                radio5.addEventListener(egret.Event.CHANGE, this.onChangeBaseScore, this);
                this.sprconB.addChild(radio5);
            }
            firstLabel.size = 36; //设置字号大小
            firstLabel.textColor = 0xf76807; //设置字体颜色
            firstLabel.fontFamily = "YouYuan"; //设置字体样式
            firstLabel.x = startX;
            if (i > 1) {
                firstLabel.y = startY + bigFontSpace;
            }
            else {
                firstLabel.y = startY;
            }
            this.sprconB.addChild(firstLabel);
            startY += lineSpace;
            var shp = new egret.Shape();
            shp.graphics.lineStyle(1, 0x999999);
            shp.alpha = 0.3;
            shp.graphics.moveTo(startX, startY);
            shp.graphics.lineTo(endX, startY);
            shp.graphics.endFill();
            this.sprconB.addChild(shp);
        }
    };
    DialogSetRoom.prototype.onChangeBaseScore = function (e) {
        var radioButton = e.target;
        //获取选择到的单选按钮的值
        console.log(radioButton.value);
    };
    DialogSetRoom.prototype.onChangeSpring = function (e) {
        var radioButton = e.target;
        //获取选择到的单选按钮的值
        console.log(radioButton.value);
    };
    DialogSetRoom.prototype.contentView = function () {
    };
    DialogSetRoom.prototype.onTouchClose = function () {
        DialogSetRoom.Shared().getIndexThis().removeChild(this.sprcon);
        Index.Shared().getIndexThis().removeChild(DialogSetRoom.Shared().getIndexThis());
        MySprite.Shared().getIndexThis().removeChild(MySprite.Shared().getIndexThis().sprcon);
        Index.Shared().getIndexThis().removeChild(MySprite.Shared().getIndexThis());
    };
    DialogSetRoom.prototype.onTouchYesbtnBegin = function (e) {
        var target = e.$currentTarget;
        var x = (0.7 * egret.MainContext.instance.stage.stageWidth - 10) / 2 - 72;
        var y = 0.6 * egret.MainContext.instance.stage.stageHeight - 80;
        var smallBig = new SmallBig(x, y, 144, 66);
        var target2 = smallBig.toSmaller(target, 0.8);
        this.sprconB.addChild(target2);
    };
    DialogSetRoom.prototype.onTouchYesbtnEnd = function (e) {
        var target = e.$currentTarget;
        var x = (0.7 * egret.MainContext.instance.stage.stageWidth - 10) / 2 - 72;
        var y = 0.6 * egret.MainContext.instance.stage.stageHeight - 80;
        var smallBig = new SmallBig(x, y, 144, 66);
        var target2 = smallBig.toRecover(target);
        this.sprconB.addChild(target2);
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    DialogSetRoom.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    DialogSetRoom.prototype.getIndexThis = function () {
        return this;
    };
    return DialogSetRoom;
}(eui.Component));
__reflect(DialogSetRoom.prototype, "DialogSetRoom", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=DialogSetRoom.js.map