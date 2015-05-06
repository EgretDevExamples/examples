/**
 * 粒子演示
 */

class Main extends egret.DisplayObjectContainer {

    /**
     * 加载进度界面
     */
    private loadingView:LoadingUI;

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event:egret.Event) {
        //设置加载进度界面
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);

        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/resource.json", "resource/");
    }

    /**
     * 配置文件加载完成,开始预加载preload资源组。
     */
    private onConfigComplete(event:RES.ResourceEvent):void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.loadGroup("preload");
    }

    /**
     * preload资源组加载完成
     */
    private onResourceLoadComplete(event:RES.ResourceEvent):void {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            this.createGameScene();
        }
    }

    /**
     * preload资源组加载进度
     */
    private onResourceProgress(event:RES.ResourceEvent):void {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    }

    private configList:Array<string> = ["fireworks","fire","sun","jellyfish"];
    private configIndex:number = -1;
    private textureList:Array<string> = ["blood","star","energy","magic"];
    private textureIndex:number = 0;
    private system:particle.ParticleSystem;
    private btn1:egret.TextField;
    private btn2:egret.TextField;

    /**
     * 创建游戏场景
     */
    private createGameScene():void {
        egret.Profiler.getInstance().run();

        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

        this.btn1 = new egret.TextField();
        this.btn1.text = "换效果";
        this.addChild(this.btn1);

        this.btn1.x = 180;
        this.btn1.width = 100;
        this.btn1.height = 50;
        this.btn1.touchEnabled = true;
        this.btn1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.changeEffect, this);

        this.btn2 = new egret.TextField();
        this.btn2.text = "换纹理";
        this.addChild(this.btn2);

        this.btn2.x = 180;
        this.btn2.y = 50;
        this.btn2.width = 100;
        this.btn2.height = 50;
        this.btn2.touchEnabled = true;
        this.btn2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.changeTexture, this);

        this.changeEffect();
    }

    private onClick(event):void {
        if(event.target == this.btn1 || event.target == this.btn2) {
            return;
        }
        this.system.emitterX = event.stageX;
        this.system.emitterY = event.stageY;
    }

    private changeEffect():void {
        this.configIndex++;
        if (this.configIndex >= this.configList.length) {
            this.configIndex = 0;
        }
        var s = this.configList[this.configIndex];
        var textureS = this.textureList[this.textureIndex];
        var texture = RES.getRes(textureS);
        var config = RES.getRes(s + "_json");

        if (this.system) {
            this.system.stop();
            this.removeChild(this.system);
        }

        this.system = new particle.GravityParticleSystem(texture, config);
        this.addChild(this.system);
        this.system.start();
    }

    private changeTexture():void {
        this.textureIndex++;
        if (this.textureIndex >= this.textureList.length) {
            this.textureIndex = 0;
        }
        var s = this.textureList[this.textureIndex];
        var texture = RES.getRes(s);
        this.system.changeTexture(texture);
    }
}


