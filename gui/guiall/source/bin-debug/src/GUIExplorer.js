/**
 * Gui示例，具体逻辑课参考 screenContents 目录 皮肤可参考screenContentSkins
 */
var GUIExplorer = (function (_super) {
    __extends(GUIExplorer, _super);
    function GUIExplorer() {
        _super.call(this);
        this.gap = 300; //布局分割值
        /**
        *预定义类，用于对象反射
        * */
        this.classDefine = new egret.gui.ArrayCollection([
            AlertScreen,
            AnimationScreen,
            BitmapLabelScreen,
            ButtonScreen,
            TogglesScreen,
            TreeScreen,
            TitleWindowScreen,
            PanelScreen,
            LabelScreen,
            LayoutScreen,
            ListScreen,
            ListCustomScreen,
            ProgressBarScreen,
            ScrollerScreen,
            SliderScreen,
            TabBarScreen,
            DropDownListScreen
        ]);
        /*
        * 缓存创建的对象
        * */
        this.classInstanceCache = {};
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var __egretProto__ = GUIExplorer.prototype;
    __egretProto__.onAddToStage = function (event) {
        //注入自定义的素材解析器
        egret.Injector.mapClass("egret.gui.IAssetAdapter", AssetAdapter);
        var skintype = window["getCurrentTest"]();
        // this.setSkinType("simple");
        this.loading = new Loading();
        this.loading.contentSize(this.stage.stageWidth, this.stage.stageHeight);
        this.addChildAt(this.loading, 0);
        this.setSkinType(skintype);
    };
    /*
    * 设置皮肤类型
    * */
    __egretProto__.setSkinType = function (type) {
        GUIExplorer.skinType = type;
        var path;
        switch (type) {
            case "ocean":
                egret.gui.Theme.load("resource/theme/theme_ocean.thm");
                path = "resource/resource_ocean.json";
                break;
            case "simple":
                egret.gui.Theme.load("resource/theme/theme_simple.thm");
                path = "resource/resource_simple.json";
                break;
        }
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComp, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onGroupProgress, this);
        RES.loadConfig(path, "resource/");
        RES.loadGroup("global");
    };
    __egretProto__.clear = function () {
        var screens = RES.getRes("screens_json");
        this.mainList.dataProvider = new egret.gui.ArrayCollection(screens);
        this.mainList.addEventListener(egret.gui.ListEvent.ITEM_CLICK, this.onItemClick, this);
        this.mainList.selectedIndex = 0;
        var obj = {};
        obj.item = this.mainList.selectedItem;
        this.onItemClick(obj);
        this.uiStage.validateNow();
    };
    __egretProto__.onGroupComp = function (event) {
        switch (event.groupName) {
            case "global":
                RES.loadGroup("skin");
                break;
            case "skin":
                this.createExporer();
                this.clear();
                this.removeChild(this.loading);
                break;
        }
    };
    __egretProto__.onGroupProgress = function (event) {
        this.loading.setProgress(Math.floor(event.itemsLoaded / event.itemsTotal * 100), "正在加载资源");
    };
    __egretProto__.createExporer = function () {
        //实例化GUI根容器，本容器用来存放GUI组建，GUI组建不能直接加入到显示对象中
        var uiStage = new egret.gui.UIStage();
        this.uiStage = uiStage;
        this.addChild(uiStage);
        //素材和非GUI显示对象包装器。
        var asset = new egret.gui.UIAsset();
        asset.source = "app_back_png";
        asset.percentHeight = asset.percentWidth = 100;
        asset.fillMode = egret.BitmapFillMode.REPEAT;
        uiStage.addElement(asset);
        this.listBack = new egret.gui.UIAsset();
        this.listBack.source = "app_list_back_png";
        this.listBack.width = this.gap;
        this.listBack.bottom = 0;
        this.listBack.top = 0;
        uiStage.addElement(this.listBack);
        var headerGroup = new egret.gui.Group();
        headerGroup.width = this.gap;
        headerGroup.height = 90;
        uiStage.addElement(headerGroup);
        var asset = new egret.gui.UIAsset();
        asset.source = "app_header_back_png";
        asset.fillMode = egret.BitmapFillMode.REPEAT;
        asset.cacheAsBitmap = true;
        asset.percentWidth = asset.percentHeight = 100;
        headerGroup.addElement(asset);
        var logo = new egret.gui.UIAsset();
        logo.source = "app_logo_png";
        logo.bottom = 5;
        logo.left = 20;
        headerGroup.addElement(logo);
        var title = new egret.gui.Label();
        title.text = "Egret GUI";
        title.size = 18;
        title.right = 20;
        title.bottom = 10;
        headerGroup.addElement(title);
        var list = new egret.gui.List();
        this.mainList = list;
        list.width = this.gap;
        list.top = 90;
        list.bottom = 0;
        uiStage.addElement(list);
        list.addEventListener(egret.gui.ListEvent.ITEM_CLICK, this.onItemClick, this);
        switch (GUIExplorer.skinType) {
            case "ocean":
                title.textColor = 0xffffff;
                list.skinName = "skins.ocean.ListSkin";
                list.itemRendererSkinName = "skins.ocean.ScreenItemRendererSkin";
                break;
            case "simple":
                title.textColor = 0x111111;
                list.skinName = "skins.simple.ListSkin";
                list.itemRendererSkinName = "skins.simple.ScreenItemRendererSkin";
                break;
        }
        this.componentGroup = new egret.gui.Group();
        this.componentGroup.percentHeight = 100;
        this.componentGroup.left = this.gap;
        this.componentGroup.right = 0;
        uiStage.addElement(this.componentGroup);
    };
    __egretProto__.onItemClick = function (event) {
        this.componentGroup.removeAllElements();
        var className = event.item + "Screen";
        var clazz;
        if (egret.hasDefinition(className)) {
            clazz = egret.getDefinitionByName(className);
            //缓存一下，免得反复重复创建
            if (this.classInstanceCache.hasOwnProperty(className)) {
                this.componentGroup.addElement(this.classInstanceCache[className]);
            }
            else {
                var screenContent = new clazz();
                screenContent.percentHeight = 100;
                screenContent.percentWidth = 100;
                this.componentGroup.addElement(screenContent);
                this.classInstanceCache[className] = screenContent;
            }
        }
    };
    return GUIExplorer;
})(egret.DisplayObjectContainer);
GUIExplorer.prototype.__class__ = "GUIExplorer";
