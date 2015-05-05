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
       // egret.Profiler.getInstance().run();
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
        RES.loadGroup("TestArmature");
    }
    /**
     * preload资源组加载完成
     * Preload resource group is loaded
     */
    private onResourceLoadComplete(event: RES.ResourceEvent): void {
        if(event.groupName == "TestArmature"){
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
        if (event.groupName == "TestArmature") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    }

    /**
     * 创建游戏场景
     * Create a game scene
     */
    private createGameScene(): void {

        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouch,this);

        var gestureImage = this.createBitmapByName("gestures_png");
        gestureImage.x = 200;
        gestureImage.y = 10;
        egret.MainContext.instance.stage.addChild(gestureImage);
        this.createMotorcycleExp();

        //根据name关键字，异步获取一个json配置文件，name属性请参考resources/resource.json配置文件的内容。
        // Get asynchronously a json configuration file according to name keyword. As for the property of name please refer to the configuration file of resources/resource.json.
        //RES.getResAsync("description", this.startAnimation, this)
    }
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name: string): egret.Bitmap {
        var result: egret.Bitmap = new egret.Bitmap();
        var texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
    private actionArray;
    private actionFlag;
    private container;

    private armature;
    private armatureDisplay;
    /**创建骨骼模型**/
    private createMotorcycleExp():void
    {
        this.actionArray = ["stop","run","run2","squat","oneLegStand","oneLegStand2","float","pushUp"]
        this.container = new egret.DisplayObjectContainer();

        egret.MainContext.instance.stage.addChild(this.container);
        this.container.x = 250;
        this.container.y = 350;

        var skeletonData = RES.getRes("skeleton_json");
        var textureData = RES.getRes("texture_json");
        var texture = RES.getRes("texture_png");

        var factory = new dragonBones.EgretFactory();
        factory.addSkeletonData(dragonBones.DataParser.parseDragonBonesData(skeletonData));
        factory.addTextureAtlas(new dragonBones.EgretTextureAtlas(texture, textureData));

        this.armature = factory.buildArmature("Robot");
        this.armatureDisplay = this.armature.getDisplay();
        dragonBones.WorldClock.clock.add(this.armature);
        this.container.addChild(this.armatureDisplay);
        this.armatureDisplay.x = 0;
        this.armatureDisplay.y = 0;
        this.actionFlag = 0;
        this.armature.animation.gotoAndPlay(this.actionArray[this.actionFlag]);
        egret.Ticker.getInstance().register(function (advancedTime) {
            dragonBones.WorldClock.clock.advanceTime(advancedTime / 1000);
        }, this);

        this.myTimer = new egret.Timer(10);
        this.myTimer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
    }
    private tapFlagNum;
    private entityFlagNumX = 0;

    private beginPointX;
    private beginPointY;
    private endPointX;
    private endPointY;
    private myTimer:egret.Timer;

    private moveFlag;

    private onTouch(evt:egret.TouchEvent):void {
        evt.stopPropagation();
        switch (evt.type) {
            case egret.TouchEvent.TOUCH_BEGIN:
                this.tapFlagNum = 0;
                this.moveFlag = false;

                this.beginPointX = evt.stageX;
                this.beginPointY = evt.stageY;
                this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
                if (!this.myTimer.running) {
                    this.myTimer.start();
                }
                break;
            case egret.TouchEvent.TOUCH_END:
                if (this.stage.hasEventListener(egret.TouchEvent.TOUCH_END)) {
                    this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
                }
                this.endPointX = evt.stageX;
                this.endPointY = evt.stageY;
                var flag:boolean = Math.abs(this.endPointX-this.beginPointX)>Math.abs(this.endPointY-this.beginPointY)?true:false;
                if(flag) {
                    this.moveFlag = true;
                    if (this.endPointX < 240) {
                        this.endPointX = 240;
                    }
                    if (this.endPointX > 560) {
                        this.endPointX = 560;
                    }
                    if ((this.container.x - this.endPointX) > 4) {
                        this.entityFlagNumX = -2;
                        this.container.scaleX = 1;
                    }
                    if ((this.container.x - this.endPointX) < -4) {
                        this.entityFlagNumX = 2;
                        this.container.scaleX = -1;
                    }
                    if (this.armature.animation.lastAnimationName != "run") {
                        this.armature.animation.gotoAndPlay("run");
                    }
                    if (!this.myTimer.running) {
                        this.myTimer.start();
                    }
                }else{
                    if(this.endPointY-this.beginPointY>0){
                        if (this.armature.animation.lastAnimationName != "squat") {
                            this.armature.animation.gotoAndPlay("squat");
                        }
                    }else{
                        if (this.armature.animation.lastAnimationName != "float") {
                            this.armature.animation.gotoAndPlay("float");
                        }
                    }

                }

                break;
            case egret.TouchEvent.TOUCH_TAP:
                this.myTimer.stop();
                this.moveFlag = false;
                this.tapFlagNum = 0;

                this.actionFlag++;
                if (this.actionFlag == this.actionArray.length) {
                    this.actionFlag = 0;
                };
                this.armature.animation.gotoAndPlay(this.actionArray[this.actionFlag]);
                break;
            default:
                break;
        }
    }

    private onTimer(evt:egret.TimerEvent):void {
        if (this.moveFlag) {
            if (Math.abs(this.container.x - this.endPointX) < 4) {
                this.entityFlagNumX = 0;
            }
            this.container.x += this.entityFlagNumX;
            if (Math.abs(this.container.x - this.endPointX) < 4) {
                if (this.armature.animation.lastAnimationName != "stop") {
                    this.armature.animation.gotoAndPlay("stop");
                }
                this.myTimer.stop();
                this.moveFlag = false;
            };
        } else {
            this.tapFlagNum++;
            if (this.tapFlagNum > 9) {
                if (this.stage.hasEventListener(egret.TouchEvent.TOUCH_TAP)) {
                    this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
                };
                if (!this.stage.hasEventListener(egret.TouchEvent.TOUCH_END)) {
                    this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
                };
                this.myTimer.stop();
                this.tapFlagNum = 0;
            }
        }
    }
}


