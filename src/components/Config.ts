class Config extends eui.Component implements  eui.UIComponent {

	private static shared:Config;

    static apiUrl = 'http://www.myshared.fb/test.php';

	public static Shared() {
        if(Config.shared == null) {
            Config.shared = new Config();
        }
        return Config.shared;
    }

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

	public getIndexThis():any{
		return this;
	}
}