class Index extends eui.Component implements  eui.UIComponent {

	private static shared:Index;

	public static Shared() {
        if(Index.shared == null) {
            Index.shared = new Index();
        }
        return Index.shared;
    }

	public constructor() {
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
		//set background image
        let sky = this.createBitmapByName("bgIndex_jpg");
		sky.width = egret.MainContext.instance.stage.stageWidth;
        sky.height = egret.MainContext.instance.stage.stageHeight;
        this.addChild(sky);

		//index top banner
		let a = IndexTopBanner.Shared();
		a.createView();
		this.addChild(a);

		//index center pictures
		let b = IndexCenterButton.Shared();
		b.createView();
        this.addChild(b);
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