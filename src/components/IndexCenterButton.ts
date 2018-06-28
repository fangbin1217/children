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
	
	private constructor() {
		super();
		this.stageW = egret.MainContext.instance.stage.stageWidth;
		this.stageH = egret.MainContext.instance.stage.stageHeight;
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
		/****************SET ROOM***********************/
		let button = this.createBitmapByName('pictures_json.button_index1');	        
        button.touchEnabled = true; //设置可以进行触摸
		button.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBeginSetRoom, this);
		button.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEndSetRoom, this);
		button.alpha = 0.9;
		button.x = -this.stageW * 2.8/10;
		button.y = this.stageH * 2.3/10 - this.stageH * 5.4/20;
        button.width = this.stageW * 2.8/10;
        button.height = this.stageH * 5.4/10;
		button.anchorOffsetX = -this.stageW * 2.8/20;
		button.anchorOffsetY = -this.stageH * 5.4/20;
        this.addChild(button);

		let tw = egret.Tween.get( button );
        tw.to( {x:this.stageW * 2/10 - this.stageW * 2.8/20,y:this.stageH * 2.3/10 - this.stageH * 5.4/20}, 700,egret.Ease.sineOut );
		/****************SET ROOM***********************/
		

		/****************ENTER ROOM***********************/
		let button2 = this.createBitmapByName('pictures2_json.enterRoom');	        
        button2.touchEnabled = true; //设置可以进行触摸
		button2.once(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBeginEnterRoom, this);
		button2.once(egret.TouchEvent.TOUCH_END, this.onTouchEndEnterRoom, this);
		button2.alpha = 0.9;
		button2.x = this.stageW;
		button2.y = this.stageH * 2.3/10 - this.stageH * 2.5/20;
        button2.width = this.stageW * 2.8/10;
        button2.height = this.stageH * 2.5/10;
		button2.anchorOffsetX = -this.stageW * 2.8/20;;
		button2.anchorOffsetY = -this.stageH * 2.5/20;
        this.addChild(button2);

		let tw2 = egret.Tween.get( button2 );
        tw2.to( {x:this.stageW * 5.2/10 - this.stageW * 2.8/20,y:this.stageH * 2.3/10 - this.stageH * 2.5/20}, 700,egret.Ease.sineOut );
		/****************ENTER ROOM***********************/


		/****************MY ROOM***********************/
		let button3 = this.createBitmapByName('pictures2_json.myRoom');	        
        button3.touchEnabled = true; //设置可以进行触摸
		button3.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBeginMyRoom, this);
		button3.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEndMyRoom, this);
		button3.alpha = 0.9;
		button3.x = this.stageW;
		button3.y = this.stageH * 5.2/10 - this.stageH * 2.5/20;
        button3.width = this.stageW * 2.8/10;
        button3.height = this.stageH * 2.5/10;
		button3.anchorOffsetX = -this.stageW * 2.8/20;;
		button3.anchorOffsetY = -this.stageH * 2.5/20;
        this.addChild(button3);

		let tw3 = egret.Tween.get( button3 );
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

		let enterRoomSence = EnterRoom.Shared();
		this.parent.parent.addChild(enterRoomSence);
		
		this.parent.removeChild(IndexTopBanner.Shared());
		this.parent.removeChild(this);
		
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
}