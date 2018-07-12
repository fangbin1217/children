class DialogSetRoom extends eui.Component implements  eui.UIComponent {

	private static shared:DialogSetRoom;

	public static Shared() {
        if(DialogSetRoom.shared == null) {
            DialogSetRoom.shared = new DialogSetRoom();
        }
        return DialogSetRoom.shared;
    }

	public constructor() {
		super();
	}

	public dialog:any;

    public close:any;

    public sprcon:any;

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	 createView(): void {
		this.sprcon = new egret.Sprite();
		this.addChild( this.sprcon );
		this.sprcon.x = 0.15*egret.MainContext.instance.stage.stageWidth;
		this.sprcon.y = 0.15*egret.MainContext.instance.stage.stageHeight;
		this.dialog = new egret.Shape();
        this.dialog.graphics.beginFill(0x9C9C9C, 0.4);
        this.dialog.graphics.drawRoundRect(0, 0, 0.7*egret.MainContext.instance.stage.stageWidth, 0.7*egret.MainContext.instance.stage.stageHeight,10,10);
        this.dialog.graphics.endFill();
        //this.dialog.x = 0.15*egret.MainContext.instance.stage.stageWidth;
        //this.dialog.y = 0.15*egret.MainContext.instance.stage.stageHeight;
		this.sprcon.addChild(this.dialog);


		let label:egret.TextField = new egret.TextField();
        label.text = "开设房间";         //设置文本内容
        label.width = 4*(0.1*egret.MainContext.instance.stage.stageHeight - 6);
        label.height = 0.1*egret.MainContext.instance.stage.stageHeight - 5;
        label.size = 0.1*egret.MainContext.instance.stage.stageHeight - 6;                //设置字号大小
        label.textColor = 0x336699;     //设置字体颜色
        label.fontFamily = "YouYuan";     //设置字体样式
        label.x = 0.35*egret.MainContext.instance.stage.stageWidth - 2*(0.1*egret.MainContext.instance.stage.stageHeight - 6);
        label.strokeColor = 0x6699cc;   //描边颜色
        label.stroke = 2;               //描边宽度
		this.sprcon.addChild(label);

        //var image = new  eui.Image();
        //image.source = "resource/assets/close.png";
        this.close = this.createBitmapByName('icons4_json.close2');	 
        this.close.touchEnabled = true; //设置可以进行触摸
        this.close.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchClose, this);
        this.close.width = 64;
        this.close.width = 64;
        this.close.x = 0.7*egret.MainContext.instance.stage.stageWidth - 32;
        this.close.y = - 32;
        this.sprcon.addChild(this.close);


		let dialog2 = new egret.Shape();
        dialog2.graphics.beginFill(0xF5F5DC);
        dialog2.graphics.drawRoundRect(0, 0, 0.7*egret.MainContext.instance.stage.stageWidth-10, 0.6*egret.MainContext.instance.stage.stageHeight-5,10,10);
        dialog2.graphics.endFill();
        dialog2.x = 5;
        dialog2.y = 0.1*egret.MainContext.instance.stage.stageHeight;
		this.sprcon.addChild(dialog2);


        //单选按钮组
        let radio1:eui.RadioButton = new eui.RadioButton();
        radio1.label = "选项 A";
        ///设置单选按钮所属组件，同一组件内的只能选择一个单选按钮组
        radio1.groupName = "Group1";
        radio1.value = "A";
        radio1.selected = true;
        radio1.x = 10;
        radio1.y = 0.1*egret.MainContext.instance.stage.stageHeight;
        radio1.addEventListener(egret.Event.CHANGE,this.onChange,this);
        this.sprcon.addChild(radio1);

        let radio2:eui.RadioButton = new eui.RadioButton();
        radio2.label = "选项 B";
        radio2.groupName = "Group1";
        radio2.value = "B";
        radio2.x = 100;
        radio2.y = 0.1*egret.MainContext.instance.stage.stageHeight;
        radio2.addEventListener(egret.Event.CHANGE,this.onChange,this);
        this.sprcon.addChild(radio2);

    }

    private onChange(e:egret.Event){
        let radioButton = <eui.RadioButton>e.target;
        //获取选择到的单选按钮的值
        console.log(radioButton.value);
    }

    private contentView():void{
        
    }

    private onTouchClose():void{
        DialogSetRoom.Shared().getIndexThis().removeChild(this.sprcon);
        Index.Shared().getIndexThis().removeChild(DialogSetRoom.Shared().getIndexThis());
        MySprite.Shared().getIndexThis().removeChild(MySprite.Shared().getIndexThis().sprcon);
        Index.Shared().getIndexThis().removeChild(MySprite.Shared().getIndexThis());

    }

	/**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

	public getIndexThis():any{
		return this;
	}
}