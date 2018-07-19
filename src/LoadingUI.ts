//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class LoadingUI extends egret.Sprite implements RES.PromiseTaskReporter {

    public constructor() {
        super();
        this.createView();
    }

    private pBar:eui.ProgressBar;

    private textField: egret.TextField;

    private curNum:number;

    private totalNum:number;

    private createView(): void {
        
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.x = 333;
        this.textField.y = 187;
        this.textField.width = 250;
        this.textField.height = 30;
        this.textField.size = 30;
        //this.textField.textAlign = "center";
        
        /*
        this.pBar = new eui.ProgressBar();
        this.pBar.maximum = 200;//设置进度条的最大值
        this.pBar.minimum = 1;//设置进度条的最小值
        this.pBar.width = 200;
        this.pBar.height = 30;

        this.pBar.x = 228;
        this.pBar.y = 170;
        this.addChild(this.pBar);
        this.pBar.value = 0;//设置进度条的初始值
        //用timer来模拟加载进度
        let timer:egret.Timer = new egret.Timer(50,0);
        timer.addEventListener(egret.TimerEvent.TIMER,this.timerHandler,this);
        timer.start();
        */

    }

    private timerHandler():void{
        //console.log(this.curNum,this.totalNum)
        //this.pBar.value += 1;
        //if(this.pBar.value>=100){this.pBar.value=0;}
        
        let percent = Math.round(200*this.curNum/this.totalNum);
        this.pBar.value = percent;
        if(this.pBar.value>=200){this.pBar.value=0;}
        
    }

    public onProgress(current: number, total: number): void {

        this.curNum = current;
        this.totalNum = total;
        
        let percent = Math.round(100*current/total);
        this.textField.text = `已加载...${percent}%`;
        

    }
}
