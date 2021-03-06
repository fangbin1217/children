var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var DebugPlatform = (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var params = "p1=postP1&p2=post2";
                        var getInfoUrl = Config.chickrenUrl + 'test/getuserinfo';
                        var request = new egret.HttpRequest();
                        request.responseType = egret.HttpResponseType.TEXT;
                        //设置为 POST 请求
                        request.open(getInfoUrl, egret.HttpMethod.POST);
                        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
                        request.send(params);
                        request.once(egret.Event.COMPLETE, function (event) {
                            var request = event.currentTarget;
                            var res = JSON.parse(request.response);
                            //console.log(res);
                            if (res.code == 0) {
                                var userInfo = res.data;
                                //设置本地缓存
                                localStorage.setItem('USER_ID', userInfo.USER_ID);
                                localStorage.setItem('NICK_NAME', userInfo.NICK_NAME);
                                localStorage.setItem('AVATOR', userInfo.AVATOR);
                                localStorage.setItem('DIAMOND', userInfo.DIAMOND);
                                //加载服务端图片
                                var url = Config.chickrenUrl + userInfo.AVATOR;
                                RES.getResByUrl(url, function (event, url) {
                                    var texture = event;
                                    Config.avator = texture;
                                    resolve(res);
                                    //console.log(Config.avator);
                                }, _this, RES.ResourceItem.TYPE_IMAGE);
                            }
                            else {
                                //如果获取用户信息失败，弹窗提示去登录
                                resolve(res);
                            }
                            //resolve(res);
                        }, _this);
                        request.once(egret.IOErrorEvent.IO_ERROR, function (event) {
                            reject('io error');
                        }, _this);
                    })];
            });
        });
    };
    DebugPlatform.prototype.getUserAvator = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var AVATOR;
            return __generator(this, function (_a) {
                AVATOR = localStorage.getItem('AVATOR');
                if (AVATOR) {
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            //加载服务端图片
                            var url = Config.chickrenUrl + AVATOR;
                            RES.getResByUrl(url, function (event, url) {
                                var texture = event;
                                Config.avator = texture;
                                resolve(texture);
                                //console.log(Config.avator);
                            }, _this, RES.ResourceItem.TYPE_IMAGE);
                        })];
                }
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loginUrl;
            return __generator(this, function (_a) {
                loginUrl = Config.chickrenUrl + 'test/login';
                //console.log(loginUrl);
                window.location.href = loginUrl;
                return [2 /*return*/];
            });
        });
    };
    return DebugPlatform;
}());
__reflect(DebugPlatform.prototype, "DebugPlatform", ["Platform"]);
if (!window.platform) {
    window.platform = new DebugPlatform();
}
//# sourceMappingURL=Platform.js.map