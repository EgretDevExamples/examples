var screenContentSkins;
(function (screenContentSkins) {
    var TabBarScreenSkin = (function (_super) {
        __extends(TabBarScreenSkin, _super);
        function TabBarScreenSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.elementsContent = [this.bar_i(), this.label_i()];
        }
        var __egretProto__ = TabBarScreenSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return TabBarScreenSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__2_i = function () {
            var t = {};
            t.label = "数据2";
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = {};
            t.label = "数据3";
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.ArrayCollection();
            t.source = [this.__1_i(), this.__2_i(), this.__3_i()];
            return t;
        };
        __egretProto__.bar_i = function () {
            var t = new egret.gui.TabBar();
            this.bar = t;
            this.__s(t, ["horizontalCenter", "verticalCenter"], [0, 90]);
            t.dataProvider = this.__5_i();
            return t;
        };
        __egretProto__.label_i = function () {
            var t = new egret.gui.Label();
            this.label = t;
            this.__s(t, ["fontFamily", "horizontalCenter", "maxDisplayedLines", "text", "textColor", "verticalCenter"], ["微软雅黑", 0, 1, "选中第1项", 0x727070, -98.5]);
            return t;
        };
        __egretProto__.__1_i = function () {
            var t = {};
            t.label = "数据1";
            return t;
        };
        TabBarScreenSkin._skinParts = ["bar", "label"];
        return TabBarScreenSkin;
    })(egret.gui.Skin);
    screenContentSkins.TabBarScreenSkin = TabBarScreenSkin;
    TabBarScreenSkin.prototype.__class__ = "screenContentSkins.TabBarScreenSkin";
})(screenContentSkins || (screenContentSkins = {}));
