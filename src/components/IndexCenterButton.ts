class IndexCenterButton extends eui.Component implements  eui.UIComponent {

	private static shared:IndexCenterButton;

	public static Shared() {
        if(IndexCenterButton.shared == null) {
            IndexCenterButton.shared = new IndexCenterButton();
        }
        return IndexCenterButton.shared;
    }

	private stageW:number;
	private stageH:number;
	public button:any;
	public button2:any;
	public button3:any;
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

	private oneCall():void {
		let smallBig = new SmallBig(IndexCenterButton.Shared().stageW * 2/10,IndexCenterButton.Shared().stageH * 2.3/10,IndexCenterButton.Shared().stageW * 2.8/10,IndexCenterButton.Shared().stageH * 5.4/10);
		smallBig.setPosition(IndexCenterButton.Shared().button);

		IndexCenterButton.Shared().button.touchEnabled = true; //设置可以进行触摸
		IndexCenterButton.Shared().button.addEventListener(egret.TouchEvent.TOUCH_BEGIN, IndexCenterButton.Shared().onTouchBeginSetRoom, IndexCenterButton.Shared().getIndexCenterButtonThis());
		IndexCenterButton.Shared().button.addEventListener(egret.TouchEvent.TOUCH_END, IndexCenterButton.Shared().onTouchEndSetRoom, IndexCenterButton.Shared().getIndexCenterButtonThis());
	}

	private twoCall():void {
		let smallBig = new SmallBig(IndexCenterButton.Shared().stageW * 5.2/10,IndexCenterButton.Shared().stageH * 2.3/10,IndexCenterButton.Shared().stageW * 2.8/10,IndexCenterButton.Shared().stageH * 2.5/10);
		smallBig.setPosition(IndexCenterButton.Shared().button2);

		IndexCenterButton.Shared().button2.touchEnabled = true; //设置可以进行触摸
		IndexCenterButton.Shared().button2.addEventListener(egret.TouchEvent.TOUCH_BEGIN, IndexCenterButton.Shared().onTouchBeginEnterRoom, IndexCenterButton.Shared().getIndexCenterButtonThis());
		IndexCenterButton.Shared().button2.addEventListener(egret.TouchEvent.TOUCH_END, IndexCenterButton.Shared().onTouchEndEnterRoom, IndexCenterButton.Shared().getIndexCenterButtonThis());
	}

	private threeCall():void {
		let smallBig = new SmallBig(IndexCenterButton.Shared().stageW * 5.2/10,IndexCenterButton.Shared().stageH * 5.2/10,IndexCenterButton.Shared().stageW * 2.8/10,IndexCenterButton.Shared().stageH * 2.5/10);
		smallBig.setPosition(IndexCenterButton.Shared().button3);

		IndexCenterButton.Shared().button3.touchEnabled = true; //设置可以进行触摸
		IndexCenterButton.Shared().button3.addEventListener(egret.TouchEvent.TOUCH_BEGIN, IndexCenterButton.Shared().onTouchBeginMyRoom, IndexCenterButton.Shared().getIndexCenterButtonThis());
		IndexCenterButton.Shared().button3.addEventListener(egret.TouchEvent.TOUCH_END, IndexCenterButton.Shared().onTouchEndMyRoom, IndexCenterButton.Shared().getIndexCenterButtonThis());
	}

	 createView(): void {

		/****************SET ROOM***********************/
		this.button = this.createBitmapByName('icons_json.setRoom');	        
		this.button.alpha = 0.9;
		this.button.x = -this.stageW * 2.8/10;
		this.button.y = this.stageH * 2.3/10;
        this.button.width = this.stageW * 2.8/10;
        this.button.height = this.stageH * 5.4/10;
        this.addChild(this.button);
		//动画
		let tw = egret.Tween.get( this.button );
		tw.to( {x:this.stageW * 2/10,y:this.stageH * 2.3/10}, 700,egret.Ease.sineOut ).call(this.oneCall);
		/****************SET ROOM***********************/
		
		/****************ENTER ROOM***********************/
		this.button2 = this.createBitmapByName('icons_json.enterRoom');	        
        this.button2.alpha = 0.9;
		this.button2.x = this.stageW;
		this.button2.y = this.stageH * 2.3/10;
        this.button2.width = this.stageW * 2.8/10;
        this.button2.height = this.stageH * 2.5/10;
        this.addChild(this.button2);
		//动画
		let tw2 = egret.Tween.get( this.button2 );
		tw2.to( {x:this.stageW * 5.2/10,y:this.stageH * 2.3/10}, 700,egret.Ease.sineOut ).call(this.twoCall);
		/****************ENTER ROOM***********************/

		/****************MY ROOM***********************/
		this.button3 = this.createBitmapByName('icons_json.myRoom');	        
        this.button3.alpha = 0.9;
		this.button3.x = this.stageW;
		this.button3.y = this.stageH * 5.2/10;
        this.button3.width = this.stageW * 2.8/10;
        this.button3.height = this.stageH * 2.5/10;
        this.addChild(this.button3);
		//动画
		let tw3 = egret.Tween.get( this.button3 );
		tw3.to( {x:this.stageW * 5.2/10,y:this.stageH * 5.2/10}, 700,egret.Ease.sineOut ).call(this.threeCall);
		/****************MY ROOM***********************/
    }

	/**
     * 开设房间按下回调
     * Click the button
     */
    private onTouchBeginSetRoom(e: egret.TouchEvent):void {
		let target = e.$currentTarget;
		let smallBig = new SmallBig(IndexCenterButton.Shared().stageW * 2/10,IndexCenterButton.Shared().stageH * 2.3/10,IndexCenterButton.Shared().stageW * 2.8/10,IndexCenterButton.Shared().stageH*5.4/10);
		let target2 = smallBig.toSmaller(target, 0.8);

        this.addChild(target2);
    }

	/**
     * 开设房间弹起回调
     * Click the button
     */
    private onTouchEndSetRoom(e: egret.TouchEvent):void {
		let target = e.$currentTarget;
		let smallBig = new SmallBig(IndexCenterButton.Shared().stageW * 2/10,IndexCenterButton.Shared().stageH * 2.3/10,IndexCenterButton.Shared().stageW * 2.8/10,IndexCenterButton.Shared().stageH*5.4/10);
		let target2 = smallBig.toRecover(target);

        this.addChild(target2);

		let mySprite = MySprite.Shared();
		mySprite.createView();
		Index.Shared().getIndexThis().addChild(mySprite);

		let dialog = DialogSetRoom.Shared();
		dialog.createView();
		Index.Shared().getIndexThis().addChild(dialog);
    }

	/**
     * 进入房间按下回调
     * Click the button
     */
    private onTouchBeginEnterRoom(e: egret.TouchEvent):void {
		let target = e.$currentTarget;
		let smallBig = new SmallBig(IndexCenterButton.Shared().stageW * 5.2/10,IndexCenterButton.Shared().stageH * 2.3/10,IndexCenterButton.Shared().stageW * 2.8/10,IndexCenterButton.Shared().stageH * 2.5/10);
		let target2 = smallBig.toSmaller(target, 0.8);
        this.addChild(target2);
    }

	/**
     * 进入房间弹起回调
     * Click the button
     */
    private onTouchEndEnterRoom(e: egret.TouchEvent):void {
		let target = e.$currentTarget;
		let smallBig = new SmallBig(IndexCenterButton.Shared().stageW * 5.2/10,IndexCenterButton.Shared().stageH * 2.3/10,IndexCenterButton.Shared().stageW * 2.8/10,IndexCenterButton.Shared().stageH * 2.5/10);
		let target2 = smallBig.toRecover(target);
        this.addChild(target2);

		IndexTopBanner.Shared().removeChildren();
        IndexCenterButton.Shared().removeChildren();
        IndexBottomBanner.Shared().removeChildren();
        MySprite.Shared().removeChildren();
        MySprite2.Shared().removeChildren();
        Index.Shared().getIndexThis().removeChildren();

		this.removeAllLListener();

		let c = EnterRoom.Shared();
		c.createView();
		Index.Shared().getIndexThis().addChild(c);
    }

	/**
     * 我的房间按下回调
     * Click the button
     */
    private onTouchBeginMyRoom(e: egret.TouchEvent):void { 
		let target = e.$currentTarget;
		let smallBig = new SmallBig(IndexCenterButton.Shared().stageW * 5.2/10,IndexCenterButton.Shared().stageH * 5.2/10,IndexCenterButton.Shared().stageW * 2.8/10,IndexCenterButton.Shared().stageH * 2.5/10);
		let target2 = smallBig.toSmaller(target, 0.8);
        this.addChild(target2);
    }

	/**
     * 我的房间弹起回调
     * Click the button
     */
    private onTouchEndMyRoom(e: egret.TouchEvent):void {
		let target = e.$currentTarget;
		let smallBig = new SmallBig(IndexCenterButton.Shared().stageW * 5.2/10,IndexCenterButton.Shared().stageH * 5.2/10,IndexCenterButton.Shared().stageW * 2.8/10,IndexCenterButton.Shared().stageH * 2.5/10);
		let target2 = smallBig.toRecover(target);
        this.addChild(target2);
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

	clearCallback():void{
		let c = EnterRoom.Shared();
		c.createView();
		Index.Shared().getIndexThis().addChild(c);
		//this.parent.addChild(c);
		Index.Shared().getIndexThis().removeChild(IndexCenterButton.Shared().getIndexCenterButtonThis());
		//this.parent.removeChild(this);
		
	}

	getIndexCenterButtonThis():any{
		return this;
	}

	private removeAllLListener():void{
		this.button.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBeginSetRoom, this);
		this.button.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEndSetRoom, this);
		this.button2.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBeginEnterRoom, this);
		this.button2.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEndEnterRoom, this);
		this.button3.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBeginMyRoom, this);
		this.button3.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEndMyRoom, this);
	}
}