class Index extends eui.Component implements  eui.UIComponent {

	private static shared:Index;

	public static Shared() {
        if(Index.shared == null) {
            Index.shared = new Index();
        }
        return Index.shared;
    }

	public sky:any;
	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	protected childrenCreated():void
	{
		super.childrenCreated();
	}

	public banner:any;
	public center:any;
	public bottomer:any;

	 createView(): void {
		 
		//set background image
        this.sky = this.createBitmapByName("bgIndex_jpg");
		this.sky.width = egret.MainContext.instance.stage.stageWidth;
        this.sky.height = egret.MainContext.instance.stage.stageHeight;
        this.addChild(this.sky);

		
		//index top banner
		this.banner = IndexTopBanner.Shared();
		this.banner.createView();
		this.addChild(this.banner);

		//index center pictures
		this.center = IndexCenterButton.Shared();
		this.center.createView();
        this.addChild(this.center);

		//index bottom banner
		this.bottomer = IndexBottomBanner.Shared();
		this.bottomer.createView();
		this.addChild(this.bottomer);
		
		
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