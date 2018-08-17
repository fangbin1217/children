class Config extends eui.Component implements  eui.UIComponent {

	private static shared:Config;

	static chickrenUrl = 'http://api.chickren.fb/';

    static apiUrl = 'http://api.chickren.fb/room/save';

	static imageJsonPre = 'icons9_json.';

	static imageJsonBtn = 'icons10_json.';

	static avator:any;

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