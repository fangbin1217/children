class MySprite2 extends eui.Component implements  eui.UIComponent {

	private static shared:MySprite2;

	public static Shared() {
        if(MySprite2.shared == null) {
            MySprite2.shared = new MySprite2();
        }
        return MySprite2.shared;
    }

	public constructor() {
		super();
	}

	public sprite:any;
	public sprite2:any;
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
		this.sprite = new egret.Shape();
        this.sprite.graphics.beginFill(0x111111, 0.5);
        this.sprite.graphics.drawRect(0, 0, egret.MainContext.instance.stage.stageWidth, egret.MainContext.instance.stage.stageHeight);
        this.sprite.graphics.endFill();
        this.sprite.x = 0;
        this.sprite.y = 0;
		this.sprcon.addChild(this.sprite);

		this.sprite2 = new egret.Shape();
        this.sprite2.graphics.beginFill(0x111111);
        this.sprite2.graphics.drawRect(0, 0, egret.MainContext.instance.stage.stageWidth, egret.MainContext.instance.stage.stageHeight);
        this.sprite2.graphics.endFill();
        this.sprite2.x = 0;
        this.sprite2.y = 0;
		this.sprcon.addChild(this.sprite2);
        this.sprite.touchEnabled = true;         //遮罩接收触摸事件 就不会传递下去
        //MySprite.Shared().getIndexThis().touchChildren = false;
		this.sprite.mask = this.sprite2;
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