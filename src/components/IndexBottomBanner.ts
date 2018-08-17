class IndexBottomBanner extends eui.Component implements  eui.UIComponent {

	public banner:any;

	public bt1:any;
	public bt12:any;

	private static shared:IndexBottomBanner;

	public static Shared() {
        if(IndexBottomBanner.shared == null) {
            IndexBottomBanner.shared = new IndexBottomBanner();
        }
        return IndexBottomBanner.shared;
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
		this.drawBg();
		this.btRewad();
		
    }

	private drawBg():void{
		this.banner = new egret.Shape();
		this.banner.name = "indexBottomBanner";
		let matrix:egret.Matrix = new egret.Matrix();
		matrix.createGradientBox(this.stageW*3/4, this.stageH*1.2/10);

        //this.banner.graphics.beginFill(0xFAFAFA, 0.1);
		this.banner.graphics.beginGradientFill(egret.GradientType.LINEAR, [0xF1F1F1, 0xF1F1F1], [0, 0.2], [0, 255], matrix);
        this.banner.graphics.drawRoundRect(0, 0, this.stageW*3/4, this.stageH*1.2/10, 10, 10);
        this.banner.graphics.endFill();
        this.banner.x = this.stageW*1/4;
        this.banner.y = this.stageH;
		
        this.addChild(this.banner);


		let tw = egret.Tween.get( this.banner );
        tw.to( {x:this.stageW*1/4,y:this.stageH*8.8/10}, 700,egret.Ease.sineOut );
	}

	private btRewad():void{
		//reward
		this.bt1 = this.createBitmapByName(Config.imageJsonPre+'rewards');	        
		this.bt1.touchEnabled = true; //设置可以进行触摸
		this.bt1.x = this.stageW /5;
		this.bt1.y = this.stageH;
		this.bt1.witdh = this.stageH * 1.2*0.8/10;
        this.bt1.height = this.stageH * 1.2*0.8/10;
		this.bt1.alpha = 0.8;
		this.bt1.anchorOffsetX = -this.stageH * 1.2*0.8/20;
		this.bt1.anchorOffsetY = -this.stageH * 1.2*0.8/20;
		this.addChild(this.bt1);
		let tw = egret.Tween.get( this.banner );
        tw.to( {x:this.stageW /5-this.bt1.width/2,y:this.stageH*8.8/10 - this.stageH * 1.2*0.8*0.3/10-this.stageH * 1.2*0.8/20}, 700,egret.Ease.sineOut );
	}

	clearView():void{
		let tw = egret.Tween.get( this.banner );
		tw.to( {x:0,y:-egret.MainContext.instance.stage.stageHeight*1.2/10}, 700,egret.Ease.sineOut ).call(this.clearCallback);
	}

	clearCallback():void{
		Index.Shared().getIndexThis().removeChild(IndexBottomBanner.Shared().getIndexBottomBannerThis());
	}

	getIndexBottomBannerThis():any{
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