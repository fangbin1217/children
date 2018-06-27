class IndexTopBanner extends eui.Component implements  eui.UIComponent {

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
	 createView(stageW:number, stageH:number, thisM:any): Object {
		let sprcon:egret.Sprite = new egret.Sprite();
		thisM.addChild(sprcon);
		let topMask = new egret.Shape();
		topMask.name = "indexTopBanner";
        topMask.graphics.beginFill(0xFAFAFA, 0.1);
        topMask.graphics.drawRect(0, 0, stageW, stageH*1.2/10);
        topMask.graphics.endFill();
        topMask.x = 0;
        topMask.y = -stageH*1.2/10;
        sprcon.addChild(topMask);
		let tw = egret.Tween.get( topMask );
        tw.to( {x:0,y:0}, 700,egret.Ease.sineOut );
		return sprcon;
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