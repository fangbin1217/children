class Index extends eui.Component implements  eui.UIComponent {

	private stageW:number;
	private stageH:number;
	public constructor(stageW:number,stageH:number) {
		super();
		this.stageW = stageW;
		this.stageH = stageH;
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
		sky.width = this.stageW;
        sky.height = this.stageH;
        this.addChild(sky);

		//index top banner
		this.addChild(IndexTopBanner.Shared());

		//index center pictures
        this.addChild(IndexCenterButton.Shared());
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