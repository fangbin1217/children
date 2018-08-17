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

	public sprcon:any;

	 createView(): void {
		this.sprcon = new egret.Sprite();
		this.stageW = egret.MainContext.instance.stage.stageWidth;
		this.stageH = egret.MainContext.instance.stage.stageHeight;

		this.addChild( this.sprcon );
		this.sprcon.x = 0;
		this.sprcon.y = -this.stageH*1.2/10;
		this.sprcon.width = this.stageW;
		this.sprcon.height = this.stageH*1.2/10;

		this.banner = new egret.Shape();
		this.banner.name = "indexTopBanner";
		let matrix:egret.Matrix = new egret.Matrix();
		matrix.createGradientBox(this.stageW*3/4, this.stageH*1.2/10);

        //this.banner.graphics.beginFill(0xFAFAFA, 0.1);
		this.banner.graphics.beginGradientFill(egret.GradientType.LINEAR, [0xF1F1F1, 0xF1F1F1], [0.2, 0], [0, 255], matrix);
        this.banner.graphics.drawRoundRect(0, 0, this.stageW*3/4, this.stageH*1.2/10, 10, 10);
        this.banner.graphics.endFill();
        this.banner.x = 0;
        this.banner.y = 0;
        this.sprcon.addChild(this.banner);
		
		let avatorY = this.stageH*1.2/20 - 23;
		if (Config.avator) {
			//console.log(2);
			let result = new egret.Bitmap();
            result.texture = Config.avator;
			result.x = 0;
			result.y = avatorY;
			this.sprcon.addChild(result);

			let circle: egret.Shape = new egret.Shape();
			circle.graphics.beginFill(0xffffff);
			//circle.graphics.drawCircle(23,23,23);
			circle.graphics.drawRoundRect(0, avatorY, 46, 46, 5, 5);
			circle.graphics.endFill();
			this.sprcon.addChild(circle);

			result.mask = circle;

		} else {
			/*
			let AVATOR = localStorage.getItem('AVATOR');
			if (AVATOR) {
				console.log(1);
				let url = Config.chickrenUrl+AVATOR;
                RES.getResByUrl(url,(event:any, url)=>{
                    let texture: egret.Texture = <egret.Texture>event;
                    let result = new egret.Bitmap();
                    result.texture = texture;

					IndexTopBanner.Shared().getIndexTopBannerThis().sprcon.addChild(result);

					let circle: egret.Shape = new egret.Shape();
					circle.graphics.beginFill(0xffffff);
					//circle.graphics.drawCircle(23,23,23);
					circle.graphics.drawRoundRect(0, 0, 46, 46, 5, 5);
					circle.graphics.endFill();
					IndexTopBanner.Shared().getIndexTopBannerThis().sprcon.addChild(circle);

					result.mask = circle;
                
                },this,RES.ResourceItem.TYPE_IMAGE);
			}
			*/
		}

		let nickName = localStorage.getItem('NICK_NAME');
		let label:egret.TextField = new egret.TextField();
        label.text = nickName;         //设置文本内容
        label.size = 22;                //设置字号大小
        label.textColor = 0xffffff;     //设置字体颜色
        label.fontFamily = "YouYuan";     //设置字体样式
        label.textAlign = egret.VerticalAlign.MIDDLE;
        label.x = 50;
		label.y = avatorY;
        this.sprcon.addChild(label);


		let diamondImg = this.createBitmapByName(Config.imageJsonBtn+'diamond');
		//diamond.width = 64;
        //diamond.width = 64;
        diamondImg.x = 50;
        diamondImg.y = avatorY + 22;
		this.sprcon.addChild(diamondImg);

		let diamondNum = localStorage.getItem('DIAMOND');
		let label2:egret.TextField = new egret.TextField();
        label2.text = diamondNum;         //设置文本内容
        label2.size = 24;                //设置字号大小
        label2.textColor = 0xffffff;     //设置字体颜色
        label2.fontFamily = "YouYuan";     //设置字体样式
        label2.textAlign = egret.VerticalAlign.MIDDLE;
        label2.x = 80;
		label2.y = avatorY + 22;
        this.sprcon.addChild(label2);

		let tw = egret.Tween.get( this.sprcon );
        tw.to( {x:0,y:0}, 700,egret.Ease.sineOut );
    }

	clearView():void{
		let tw = egret.Tween.get( this.sprcon );
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