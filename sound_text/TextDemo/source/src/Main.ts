/**
 * Copyright (c) 2014,Egret-Labs.org
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Egret-Labs.org nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

class Main extends egret.DisplayObjectContainer {

    /**
     * 加载进度界面
     * Process interface loading
     */
    private loadingView: LoadingUI;

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        //设置加载进度界面
        //Config to load process interface
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);

        //初始化Resource资源加载库
        //initiate Resource loading library
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/resource.json", "resource/");
    }
    /**
     * 配置文件加载完成,开始预加载preload资源组。
     * configuration file loading is completed, start to pre-load the preload resource group
     */
    private onConfigComplete(event: RES.ResourceEvent): void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.loadGroup("preload");
    }
    /**
     * preload资源组加载完成
     * Preload resource group is loaded
     */
    private onResourceLoadComplete(event: RES.ResourceEvent): void {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            this.createGameScene();
        }
    }
    /**
    * 资源组加载出错
     *  The resource group loading failed
    */
    private onResourceLoadError(event: RES.ResourceEvent): void {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    }
    /**
     * preload资源组加载进度
     * Loading process of preload resource group
     */
    private onResourceProgress(event: RES.ResourceEvent): void {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    }

    private textContainer: egret.Sprite;
    /**
     * 创建游戏场景
     * Create a game scene
     */
    private createGameScene(): void {

        //红色文本
        var label1:egret.TextField = new egret.TextField();
        label1.textColor = 0xff0000;
        label1.text = "红色";
        this.addChild( label1 );

        //绿色文本
        var label2:egret.TextField = new egret.TextField();
        label2.x = 80;
        label2.textColor = 0x00ff00;
        label2.text = "绿色";
        this.addChild( label2 );

        //蓝色文本
        var label3:egret.TextField = new egret.TextField();
        label3.x = 160;
        label3.textColor = 0x0000ff;
        label3.text = "蓝色";
        this.addChild( label3 );

        //宋体
        var label4:egret.TextField = new egret.TextField();
        label4.x = 240;
        label4.fontFamily = "宋体";
        label4.text = "宋体";
        this.addChild( label4 );

        //左对齐文本
        var label5:egret.TextField = new egret.TextField();
        label5.textAlign = egret.HorizontalAlign.LEFT;
        label5.y = 50;
        //label9.width = 100;
        //label9.lineSpacing = 20;
        label5.text = "水平居左";
        this.addChild( label5 );

        //水平居中文本
        var label6:egret.TextField = new egret.TextField();
        label6.width = 450;
        label6.y = 50;
        label6.textAlign = egret.HorizontalAlign.CENTER;
        label6.text = "水平居中";
        this.addChild( label6 );

        //水平居右文本
        var label7:egret.TextField = new egret.TextField();
        label7.width = 450;
        label7.y = 50;
        label7.textAlign = egret.HorizontalAlign.RIGHT;
        label7.text = "水平居右";
        this.addChild( label7 );

        //垂直居中本文
        var label8:egret.TextField = new egret.TextField();
        label8.width = 450;
        label8.height = 450;
        label8.textAlign = egret.HorizontalAlign.CENTER;
        label8.verticalAlign = egret.VerticalAlign.MIDDLE;
        label8.text = "垂直居中";
        this.addChild( label8 );

        //文本旋转45度
        var label12:egret.TextField = new egret.TextField();
        label12.width = 450;
        label12.x = 50;
        label12.y = 100;
        label12.rotation = 45;
        label12.text = "旋转45度";
        this.addChild( label12 );

        //scaleX
        var label13:egret.TextField = new egret.TextField();
        label13.width = 450;
        label13.y = 200;
        label13.scaleX = 0.5;
        label13.text = "scaleX为0.5";
        this.addChild( label13 );

        //scaleY
        var label14:egret.TextField = new egret.TextField();
        label14.width = 450;
        label14.y = 250;
        label14.scaleY = 2;
        label14.text = "scaleY为2";
        this.addChild( label14 );

        //加粗
        var label15:egret.TextField = new egret.TextField();
        label15.width = 450;
        label15.x = 200;
        label15.y = 100;
        label15.skewX = 50;
        label15.text = "X轴Skew";
        this.addChild( label15 );

        //斜体
        var label16:egret.TextField = new egret.TextField();
        label16.width = 450;
        label16.x = 350;
        label16.y = 100;
        label16.skewY = 30;
        label16.text = "Y轴Skew";
        this.addChild( label16 );

        //绘制一个绿色文字，同时带有红色描边
        var strokeLabel:egret.TextField = new egret.TextField();
        strokeLabel.width = 450;
        strokeLabel.x = 300;
        strokeLabel.y = 200;
        strokeLabel.textColor = 0x00ff00;//设置文本颜色
        strokeLabel.text = "描边";
        strokeLabel.strokeColor = 0xff0000;//设置描边颜色
        strokeLabel.stroke = 2;//设置描边的宽度
        this.addChild(strokeLabel);

        //加粗
        var label17:egret.TextField = new egret.TextField();
        label17.width = 450;
        label17.x = 150;
        label17.y = 150;
        label17.bold = true;
        label17.text = "加粗";
        this.addChild( label17 );

        //斜体
        var label18:egret.TextField = new egret.TextField();
        label18.width = 450;
        label18.x = 250;
        label18.y = 150;
        label18.italic = true;
        label18.text = "斜体";
        this.addChild( label18 );

        //半透明字体
        var label19:egret.TextField = new egret.TextField();
        label19.width = 450;
        label19.x = 200;
        label19.y = 250;
        label19.alpha = 0.5;
        label19.text = "半透明";
        this.addChild( label19 );

        //20号字体
        var label20:egret.TextField = new egret.TextField();
        label20.width = 450;
        label20.x = 300;
        label20.y = 250;
        label20.size = 20;
        label20.text = "20号";
        this.addChild( label20 );

        //富文本
        var tx:egret.TextField = new egret.TextField;
        tx.width = 400;
        tx.y = 300;
        tx.textColor = 0;
        tx.size = 20;
        tx.fontFamily = "微软雅黑";
        tx.textAlign = egret.HorizontalAlign.CENTER;
        tx.textFlow = <Array<egret.ITextElement>>[
            {text: "富文本：妈妈再也不用担心我在", style: {"size": 12, "textColor": 0xffffff}}
            , {text: "Egret", style: {"textColor": 0x336699, "size": 60, "strokeColor": 0x6699cc, "stroke": 2}}
            , {text: "里说一句话不能包含各种", style: {"fontFamily": "楷体", "textColor": 0xffffff}}
            , {text: "五", style: {"textColor": 0xff0000}}
            , {text: "彩", style: {"textColor": 0x00ff00}}
            , {text: "缤", style: {"textColor": 0xf000f0}}
            , {text: "纷", style: {"textColor": 0x00ffff}}
            , {text: "、", style: {"textColor": 0xffffff}}
            , {text: "大", style: {"size": 36, "textColor": 0xffffff}}
            , {text: "小", style: {"size": 6, "textColor": 0xffffff}}
            , {text: "不", style: {"size": 16, "textColor": 0xffffff}}
            , {text: "一", style: {"size": 24, "textColor": 0xffffff}}
            , {text: "、", style: {"textColor": 0xffffff}}
            , {text: "格", style: {"italic": true, "textColor": 0x00ff00}}
            , {text: "式", style: {"size": 16, "textColor": 0xf000f0}}
            , {text: "各", style: {"italic": true, "textColor": 0xf06f00}}
            , {text: "样", style: {"fontFamily": "楷体", "textColor": 0xffffff}}
            , {text: "", style: {"textColor": 0xffffff}}
            , {text: "的文字了！", style: {"textColor": 0xffffff}}
        ];

        this.addChild(tx);

        //不同格式的文本输入
        this.initText();
     }

    private initText():void {
        //egret.Profiler.getInstance().run();

        var container:egret.Sprite = new egret.Sprite();
        this.addChild(container);
        var currentChild;

        container.x = 100;
        container.y = 450;
        container.graphics.beginFill(0xff0000, 1);
        container.graphics.drawRect(0, 0, 380, 400);
        container.graphics.endFill();

        var testInfo = {};
        testInfo["single"] = input.testSingle;
        testInfo["multi"] = input.testMulti;

        testInfo["sinVisible"] = input.testSingleWithVisible;
        testInfo["mulVisible"] = input.testMultiWithVisible;

        testInfo["sinCover"] = input.testSingleWithCover;
        testInfo["mulCover"] = input.testMultiWithCover;

        testInfo["sinRm"] = input.testSingleWithRemove;
        testInfo["mulRm"] = input.testMultiWithRemove;

        testInfo["sinSome"] = input.testSomeSingle;
        testInfo["mulSome"] = input.testSomeMulti;

        testInfo["password"] = input.testPassword;
        //testInfo["reload"] = input.testReload;
        testInfo["textChange"] = input.testTextFieldChangeText;
        testInfo["textAdd"] = input.testAddText;

        testInfo["textFlow"] = input.testFlow;


        var i:number = 0;
        for (var key in testInfo)
        {
            var text:egret.TextField = new egret.TextField();
            this.addChild(text);
            text.stroke = 2;
            text.strokeColor = 0xff0000;
            text.x = 0;
            text.y = 20 * i + 450;
            text.size = 18;
            text.text = key;
            text.touchEnabled = true;
            text.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
                if (currentChild) {
                    egret.Tween.removeTweens(currentChild);
                }
                container.removeChildren();

                currentChild = testInfo[this.text].call(null);
                container.addChild(currentChild);

                //label.text = this.text;
            }, text);
            i++;
        }
    }
}


