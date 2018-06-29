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
	private topMask:any;
	 createView(): void {
		//banner 2
		this.sprcon = new egret.Sprite();
		this.addChild( this.sprcon );

		let topMask = new egret.Shape();
		topMask.name = "indexTopBanner2";
        topMask.graphics.beginFill(0xFAFAFA, 0.1);
        topMask.graphics.drawRoundRect(0, 0, egret.MainContext.instance.stage.stageWidth, egret.MainContext.instance.stage.stageHeight*1.2/10, 20, 20);
        topMask.graphics.endFill();
        topMask.x = 0;
        topMask.y = -egret.MainContext.instance.stage.stageHeight*1.2/10;
        this.sprcon.addChild(topMask);
		//back to index 
		let goBack = this.createBitmapByName('icons_json.goBack');	        
        goBack.touchEnabled = true; //设置可以进行触摸
		goBack.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBackIndex, this);
		goBack.alpha = 0.8;
		goBack.x = 10;
		goBack.y = 0;
        //goBack.width = this.stageW * 2.8/10;
        //goBack.height = this.stageH * 2.5/10;
        this.sprcon.addChild(goBack);
		
		let tw = egret.Tween.get( topMask );
        tw.to( {x:0,y:0}, 700,egret.Ease.sineOut );
		
    }

	private onTouchBackIndex():void {
		//
		
		//let tw = egret.Tween.get( this.topMask );
		//tw.to( {x:0,y:-egret.MainContext.instance.stage.stageHeight*1.2/10}, 700,egret.Ease.sineOut).call(this.myCack, this);

		//index
		let a = IndexTopBanner.Shared();
		a.createView();
		this.parent.addChild(a);
		let b = IndexCenterButton.Shared();
		b.createView();
		this.parent.parent.addChild(b);
		this.removeChild(this.sprcon);
		this.parent.removeChild(this);

	}

	private myCack():void {
		//this.parent.removeChild(this);
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