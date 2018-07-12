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
	 createView(): void {
		 
		//set background image
        this.sky = this.createBitmapByName("bgIndex_jpg");
		this.sky.width = egret.MainContext.instance.stage.stageWidth;
        this.sky.height = egret.MainContext.instance.stage.stageHeight;
        this.addChild(this.sky);

		
		//index top banner
		let a = IndexTopBanner.Shared();
		a.createView();
		this.addChild(a);

		//index center pictures
		let b = IndexCenterButton.Shared();
		b.createView();
        this.addChild(b);

		//index bottom banner
		let c = IndexBottomBanner.Shared();
		c.createView();
		this.addChild(c);
		
		
	

		/*
		let mySprite = MySprite.Shared();
		
		mySprite.createView();
		
		this.addChild(mySprite);
		*/
		
		
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