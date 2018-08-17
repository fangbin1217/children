/** 
 * 平台数据接口。
 * 由于每款游戏通常需要发布到多个平台上，所以提取出一个统一的接口用于开发者获取平台数据信息
 * 推荐开发者通过这种方式封装平台逻辑，以保证整体结构的稳定
 * 由于不同平台的接口形式各有不同，白鹭推荐开发者将所有接口封装为基于 Promise 的异步形式
 */
declare interface Platform {

    getUserInfo(): Promise<any>;

    getUserAvator(): Promise<any>;

    login(): Promise<any>

}

class DebugPlatform implements Platform {
    async getUserInfo() {
        return new Promise((resolve, reject) => {
            let params = "p1=postP1&p2=post2";
            let getInfoUrl = Config.chickrenUrl + 'test/getuserinfo';
            let request = new egret.HttpRequest();
            request.responseType = egret.HttpResponseType.TEXT;
            //设置为 POST 请求
            request.open(getInfoUrl,egret.HttpMethod.POST);
            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
            request.send(params);
            request.once(egret.Event.COMPLETE, (event:egret.Event) => {
                let request = <egret.HttpRequest>event.currentTarget;
                let res = JSON.parse(request.response);
                //console.log(res);
                if (res.code == 0) {
                    let userInfo = res.data;
                    //设置本地缓存
                    localStorage.setItem('USER_ID', userInfo.USER_ID);
                    localStorage.setItem('NICK_NAME', userInfo.NICK_NAME);
                    localStorage.setItem('AVATOR', userInfo.AVATOR);
                    localStorage.setItem('DIAMOND', userInfo.DIAMOND);
                //加载服务端图片
                let url = Config.chickrenUrl+userInfo.AVATOR;
                RES.getResByUrl(url,(event:any, url)=>{
                    let texture: egret.Texture = <egret.Texture>event;
                    Config.avator = texture;
                    resolve(res);
                    
                    //console.log(Config.avator);
                },this,RES.ResourceItem.TYPE_IMAGE);

                } else {
                    //如果获取用户信息失败，弹窗提示去登录
                    resolve(res);
                }
                //resolve(res);
            }, this);

            request.once(egret.IOErrorEvent.IO_ERROR, (event:egret.Event) => {
                reject('io error');
            }, this);

        

        });
    }

    async getUserAvator() {
        let AVATOR = localStorage.getItem('AVATOR');
		if (AVATOR) {
            return new Promise((resolve, reject) => {
                //加载服务端图片
                let url = Config.chickrenUrl+AVATOR;
                RES.getResByUrl(url,(event:any, url)=>{
                    let texture: egret.Texture = <egret.Texture>event;
                    Config.avator = texture;
                    resolve(texture);
                    
                    //console.log(Config.avator);
                },this,RES.ResourceItem.TYPE_IMAGE);
            
            });
        }
    }

    


    async login() {
        let loginUrl = Config.chickrenUrl + 'test/login';
        //console.log(loginUrl);
        window.location.href = loginUrl;
    }
}




if (!window.platform) {
    window.platform = new DebugPlatform();
}



declare let platform: Platform;

declare interface Window {

    platform: Platform
}





