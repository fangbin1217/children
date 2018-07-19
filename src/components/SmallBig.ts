class SmallBig  {
    public positionX:number;
    public positionY:number;
    public containW:number;
    public containH:number;
    /**
     * x:对象的x初始位置
     * y:对象的y初始位置
     * w:对象的宽
     * h:对象的高
     */
    constructor(x:number, y:number,w:number,h:number) {
        this.positionX = x;
        this.positionY = y;
        this.containW = w;
        this.containH = h;
	}
    setPosition(spr:any):any{
        spr.x = this.positionX-this.containW/2;
        spr.y = this.positionY-this.containH/2;
        spr.anchorOffsetX = -this.containW/2;
		spr.anchorOffsetY = -this.containH/2;
        return spr;
    }
	toSmaller(target:any, scale:number): any {
        target.scaleX = scale;
        target.scaleY = scale;
        target.x = this.positionX-this.containW/2 + (1-scale)*this.containW;
		target.y = this.positionY-this.containH/2 + (1-scale)*this.containH;
        return target;
    }
    toBigger(target:any, scale:number): any {
        target.scaleX = scale;
        target.scaleY = scale;
        target.x = this.positionX-this.containW/2 - (scale-1)*this.containW;
		target.y = this.positionY-this.containH/2 - (scale-1)*this.containH;
        return target;
    }
    toRecover(target:any): any {
        target.scaleX = 1;
        target.scaleY = 1;
		target.x = this.positionX-this.containW/2;
		target.y = this.positionY-this.containH/2;
        return target;
    }
}