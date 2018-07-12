class IndexTopBanner extends eui.Component implements  eui.UIComponent {

	public banner:any;

	private static shared:IndexTopBanner;

	public static Shared() {
        if(IndexTopBanner.shared == null) {
            IndexTopBanner.shared = new IndexTopBanner();
        }
        return IndexTopBanner.shared;
    }

	private stageW:number;
	private stageH:number;
	private constructor() {
		super();
		this.stageW = egret.MainContext.instance.stage.stageWidth;
		this.stageH = egret.MainContext.instance.stage.stageHeight;
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
		this.banner = new egret.Shape();
		this.banner.name = "indexTopBanner";
		let matrix:egret.Matrix = new egret.Matrix();
		matrix.createGradientBox(this.stageW*3/4, this.stageH*1.2/10);

        //this.banner.graphics.beginFill(0xFAFAFA, 0.1);
		this.banner.graphics.beginGradientFill(egret.GradientType.LINEAR, [0xF1F1F1, 0xF1F1F1], [0.2, 0], [0, 255], matrix);
        this.banner.graphics.drawRoundRect(0, 0, this.stageW*3/4, this.stageH*1.2/10, 10, 10);
        this.banner.graphics.endFill();
        this.banner.x = 0;
        this.banner.y = -this.stageH*1.2/10;
        this.addChild(this.banner);
		let tw = egret.Tween.get( this.banner );
        tw.to( {x:0,y:0}, 700,egret.Ease.sineOut );
    }

	clearView():void{
		let tw = egret.Tween.get( this.banner );
		tw.to( {x:0,y:-egret.MainContext.instance.stage.stageHeight*1.2/10}, 700,egret.Ease.sineOut ).call(this.clearCallback);
	}

	clearCallback():void{
		Index.Shared().getIndexThis().removeChild(IndexTopBanner.Shared().getIndexTopBannerThis());
		//this.parent.removeChild(this);
	}

	getIndexTopBannerThis():any{
		return this;
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