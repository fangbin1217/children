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
		this.banner = new egret.Sprite();
		this.addChild(this.banner);
		let topMask = new egret.Shape();
		topMask.name = "indexTopBanner";
        topMask.graphics.beginFill(0xFAFAFA, 0.1);
        topMask.graphics.drawRoundRect(0, 0, this.stageW, this.stageH*1.2/10, 20, 20);
        topMask.graphics.endFill();
        topMask.x = 0;
        topMask.y = -this.stageH*1.2/10;
        this.banner.addChild(topMask);
		let tw = egret.Tween.get( topMask );
        tw.to( {x:0,y:0}, 700,egret.Ease.sineOut );
    }

	clearView():void{
		let tw = egret.Tween.get( this.banner );
		tw.to( {x:0,y:-egret.MainContext.instance.stage.stageHeight*1.2/10}, 700,egret.Ease.sineOut ).call(this.clearCallback);
	}

	clearCallback():void{
		this.parent.removeChild(this);
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