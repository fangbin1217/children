class IndexCenterButton extends eui.Component implements  eui.UIComponent {
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
	 createView(stageW:number, stageH:number, thisM:any): number {
		/****************SET ROOM***********************/
		let button = this.createBitmapByName('pictures_json.button_index1');	        
        button.touchEnabled = true; //设置可以进行触摸
		button.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBeginSetRoom, thisM);
		button.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEndSetRoom, thisM);
		button.alpha = 0.9;
		button.x = -stageW * 2.8/10;
		button.y = stageH * 2.3/10 - stageH * 5.4/20;
        button.width = stageW * 2.8/10;
        button.height = stageH * 5.4/10;
		button.anchorOffsetX = -stageW * 2.8/20;
		button.anchorOffsetY = -stageH * 5.4/20;
        thisM.addChild(button);

		let tw = egret.Tween.get( button );
        tw.to( {x:stageW * 2/10 - stageW * 2.8/20,y:stageH * 2.3/10 - stageH * 5.4/20}, 700,egret.Ease.sineOut );
		/****************SET ROOM***********************/
		

		/****************ENTER ROOM***********************/
		let button2 = this.createBitmapByName('pictures2_json.enterRoom');	        
        button2.touchEnabled = true; //设置可以进行触摸
		button2.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBeginEnterRoom, thisM);
		button2.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEndEnterRoom, thisM);
		button2.alpha = 0.9;
		button2.x = stageW;
		button2.y = stageH * 2.3/10 - stageH * 2.5/20;
        button2.width = stageW * 2.8/10;
        button2.height = stageH * 2.5/10;
		button2.anchorOffsetX = -stageW * 2.8/20;;
		button2.anchorOffsetY = -stageH * 2.5/20;
        thisM.addChild(button2);

		let tw2 = egret.Tween.get( button2 );
        tw2.to( {x:stageW * 5.2/10 - stageW * 2.8/20,y:stageH * 2.3/10 - stageH * 2.5/20}, 700,egret.Ease.sineOut );
		/****************ENTER ROOM***********************/


		/****************MY ROOM***********************/
		let button3 = this.createBitmapByName('pictures2_json.myRoom');	        
        button3.touchEnabled = true; //设置可以进行触摸
		button3.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBeginMyRoom, thisM);
		button3.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEndMyRoom, thisM);
		button3.alpha = 0.9;
		button3.x = stageW;
		button3.y = stageH * 5.2/10 - stageH * 2.5/20;
        button3.width = stageW * 2.8/10;
        button3.height = stageH * 2.5/10;
		button3.anchorOffsetX = -stageW * 2.8/20;;
		button3.anchorOffsetY = -stageH * 2.5/20;
        thisM.addChild(button3);

		let tw3 = egret.Tween.get( button3 );
        tw3.to( {x:stageW * 5.2/10 - stageW * 2.8/20,y:stageH * 5.2/10 - stageH * 2.5/20}, 700,egret.Ease.sineOut );
		/****************MY ROOM***********************/
		return 123;
    }

	/**
     * 开设房间按下回调
     * Click the button
     */
    private onTouchBeginSetRoom(e: egret.TouchEvent):void {
        
		let target = e.$currentTarget;
		
		target.x = this.stage.stageWidth * 2/10 - this.stage.stageWidth * 2.8/20 + this.stage.stageWidth * 2.8*0.2/10;
		target.y = this.stage.stageHeight * 2.3/10 - this.stage.stageHeight * 5.4/20 + this.stage.stageHeight * 5.4*0.2/10;
		
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
		target.x = this.stage.stageWidth * 2/10 - this.stage.stageWidth * 2.8/20;
		target.y = this.stage.stageHeight * 2.3/10 - this.stage.stageHeight * 5.4/20;
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
		
		target.x = this.stage.stageWidth * 5.2/10 - this.stage.stageWidth * 2.8/20 + this.stage.stageWidth * 2.8*0.2/10;
		target.y = this.stage.stageHeight * 2.3/10 - this.stage.stageHeight * 2.5/20 + this.stage.stageHeight * 2.5*0.2/10;
		
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
		target.x = this.stage.stageWidth * 5.2/10 - this.stage.stageWidth * 2.8/20;
		target.y = this.stage.stageHeight * 2.3/10 - this.stage.stageHeight * 2.5/20;
		target.scaleX = 1;
        target.scaleY = 1;
        this.addChild(target);
    }

	/**
     * 我的房间按下回调
     * Click the button
     */
    private onTouchBeginMyRoom(e: egret.TouchEvent):void {
        
		let target = e.$currentTarget;
		
		target.x = this.stage.stageWidth * 5.2/10 - this.stage.stageWidth * 2.8/20 + this.stage.stageWidth * 2.8*0.2/10;
		target.y = this.stage.stageHeight * 5.2/10 - this.stage.stageHeight * 2.5/20 + this.stage.stageHeight * 2.5*0.2/10;
		
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
		target.x = this.stage.stageWidth * 5.2/10 - this.stage.stageWidth * 2.8/20;
		target.y = this.stage.stageHeight * 5.2/10 - this.stage.stageHeight * 2.5/20;
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