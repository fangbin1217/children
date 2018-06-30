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
	 createView(): void {

		/****************SET ROOM***********************/
		this.button = this.createBitmapByName('icons_json.setRoom');	        
        this.button.touchEnabled = true; //设置可以进行触摸
		this.button.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBeginSetRoom, this);
		this.button.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEndSetRoom, this);
		this.button.alpha = 0.9;
		this.button.x = -this.stageW * 2.8/10;
		this.button.y = this.stageH * 2.3/10 - this.stageH * 5.4/20;
        this.button.width = this.stageW * 2.8/10;
        this.button.height = this.stageH * 5.4/10;
		this.button.anchorOffsetX = -this.stageW * 2.8/20;
		this.button.anchorOffsetY = -this.stageH * 5.4/20;
        this.addChild(this.button);

		let tw = egret.Tween.get( this.button );
        tw.to( {x:this.stageW * 2/10 - this.stageW * 2.8/20,y:this.stageH * 2.3/10 - this.stageH * 5.4/20}, 700,egret.Ease.sineOut );
		/****************SET ROOM***********************/
		

		/****************ENTER ROOM***********************/
		this.button2 = this.createBitmapByName('icons_json.enterRoom');	        
        this.button2.touchEnabled = true; //设置可以进行触摸
		this.button2.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBeginEnterRoom, this);
		this.button2.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEndEnterRoom, this);
		this.button2.alpha = 0.9;
		this.button2.x = this.stageW;
		this.button2.y = this.stageH * 2.3/10 - this.stageH * 2.5/20;
        this.button2.width = this.stageW * 2.8/10;
        this.button2.height = this.stageH * 2.5/10;
		this.button2.anchorOffsetX = -this.stageW * 2.8/20;;
		this.button2.anchorOffsetY = -this.stageH * 2.5/20;
        this.addChild(this.button2);

		let tw2 = egret.Tween.get( this.button2 );
        tw2.to( {x:this.stageW * 5.2/10 - this.stageW * 2.8/20,y:this.stageH * 2.3/10 - this.stageH * 2.5/20}, 700,egret.Ease.sineOut );
		/****************ENTER ROOM***********************/


		/****************MY ROOM***********************/
		this.button3 = this.createBitmapByName('icons_json.myRoom');	        
        this.button3.touchEnabled = true; //设置可以进行触摸
		this.button3.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBeginMyRoom, this);
		this.button3.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEndMyRoom, this);
		this.button3.alpha = 0.9;
		this.button3.x = this.stageW;
		this.button3.y = this.stageH * 5.2/10 - this.stageH * 2.5/20;
        this.button3.width = this.stageW * 2.8/10;
        this.button3.height = this.stageH * 2.5/10;
		this.button3.anchorOffsetX = -this.stageW * 2.8/20;
		this.button3.anchorOffsetY = -this.stageH * 2.5/20;
        this.addChild(this.button3);

		let tw3 = egret.Tween.get( this.button3 );
        tw3.to( {x:this.stageW * 5.2/10 - this.stageW * 2.8/20,y:this.stageH * 5.2/10 - this.stageH * 2.5/20}, 700,egret.Ease.sineOut );
		/****************MY ROOM***********************/
    }

	/**
     * 开设房间按下回调
     * Click the button
     */
    private onTouchBeginSetRoom(e: egret.TouchEvent):void {
        
		let target = e.$currentTarget;
		
		target.x = this.stageW * 2/10 - this.stageW * 2.8/20 + this.stageW * 2.8*0.2/10;
		target.y = this.stageH * 2.3/10 - this.stageH * 5.4/20 + this.stageH * 5.4*0.2/10;
		
		target.scaleX = 0.8;
        target.scaleY = 0.8;
        this.addChild(target);
    }

	/**
     * 开设房间弹起回调
     * Click the button
     */
    private onTouchEndSetRoom(e: egret.TouchEvent):void {

		let target = e.$currentTarget;
		target.x = this.stageW * 2/10 - this.stageW * 2.8/20;
		target.y = this.stageH * 2.3/10 - this.stageH * 5.4/20;
		target.scaleX = 1;
        target.scaleY = 1;
        this.addChild(target);
    }

	/**
     * 进入房间按下回调
     * Click the button
     */
    private onTouchBeginEnterRoom(e: egret.TouchEvent):void {
        
		let target = e.$currentTarget;
		
		target.x = this.stageW * 5.2/10 - this.stageW * 2.8/20 + this.stageW * 2.8*0.2/10;
		target.y = this.stageH * 2.3/10 - this.stageH * 2.5/20 + this.stageH * 2.5*0.2/10;
		
		target.scaleX = 0.8;
        target.scaleY = 0.8;
        this.addChild(target);
		//console.log(this.myTop);
    }

	/**
     * 进入房间弹起回调
     * Click the button
     */
    private onTouchEndEnterRoom(e: egret.TouchEvent):void {

		let target = e.$currentTarget;
		target.x = this.stageW * 5.2/10 - this.stageW * 2.8/20;
		target.y = this.stageH * 2.3/10 - this.stageH * 2.5/20;
		target.scaleX = 1;
        target.scaleY = 1;
        this.addChild(target);

		IndexTopBanner.Shared().clearView();
		IndexCenterButton.Shared().clearSetRoom();
		IndexCenterButton.Shared().clearEnterRoom();
		IndexCenterButton.Shared().clearMyRoom();
		this.removeAllLListener();
    }

	/**
     * 我的房间按下回调
     * Click the button
     */
    private onTouchBeginMyRoom(e: egret.TouchEvent):void {
        
		let target = e.$currentTarget;
		
		target.x = this.stageW * 5.2/10 - this.stageW * 2.8/20 + this.stageW * 2.8*0.2/10;
		target.y = this.stageH * 5.2/10 - this.stageH * 2.5/20 + this.stageH * 2.5*0.2/10;
		
		target.scaleX = 0.8;
        target.scaleY = 0.8;
        this.addChild(target);
    }

	/**
     * 我的房间弹起回调
     * Click the button
     */
    private onTouchEndMyRoom(e: egret.TouchEvent):void {

		let target = e.$currentTarget;
		target.x = this.stageW * 5.2/10 - this.stageW * 2.8/20;
		target.y = this.stageH * 5.2/10 - this.stageH * 2.5/20;
		target.scaleX = 1;
        target.scaleY = 1;
        this.addChild(target);
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

	clearSetRoom():void{
		let tw = egret.Tween.get( this.button );
		tw.to( {x:-this.stageW * 2.8/10-this.stageW * 2.8/10,y:this.stageH * 2.3/10 - this.stageH * 5.4/20}, 700,egret.Ease.sineOut );
	}

	clearEnterRoom():void{
		let tw = egret.Tween.get( this.button2 );
		tw.to( {x:this.stageW+this.stageW * 2.8/20,y:this.stageH * 2.3/10 - this.stageH * 2.5/20}, 700,egret.Ease.sineOut );
	}

	clearMyRoom():void{
		let tw = egret.Tween.get( this.button3 );
		tw.to( {x:this.stageW+this.stageW * 2.8/20,y:this.stageH * 5.2/10 - this.stageH * 2.5/20}, 700,egret.Ease.sineOut ).call(this.clearCallback);
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