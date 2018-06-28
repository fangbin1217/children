class EnterRoom extends eui.Component implements  eui.UIComponent {

    private static shared:EnterRoom;

	public static Shared() {
        if(EnterRoom.shared == null) {
            EnterRoom.shared = new EnterRoom();
        }
        return EnterRoom.shared;
    }

	private constructor() {
		super();
		this.createView();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	 createView(): void {
		//banner 2
		let sprcon:egret.Sprite = new egret.Sprite();
		this.addChild(sprcon);
		let topMask = new egret.Shape();
		topMask.name = "indexTopBanner";
        topMask.graphics.beginFill(0xFAFAFA, 0.1);
        topMask.graphics.drawRect(0, 0, egret.MainContext.instance.stage.stageWidth, egret.MainContext.instance.stage.stageHeight*1.2/10);
        topMask.graphics.endFill();
        topMask.x = 0;
        topMask.y = -egret.MainContext.instance.stage.stageHeight*1.2/10;
        this.addChild(topMask);
		let tw = egret.Tween.get( topMask );
        tw.to( {x:0,y:0}, 700,egret.Ease.sineOut );
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
}