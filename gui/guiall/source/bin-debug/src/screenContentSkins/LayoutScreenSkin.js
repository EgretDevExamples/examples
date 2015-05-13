var screenContentSkins;
(function (screenContentSkins) {
    var LayoutScreenSkin = (function (_super) {
        __extends(LayoutScreenSkin, _super);
        function LayoutScreenSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.elementsContent = [this.__4_i()];
        }
        var __egretProto__ = LayoutScreenSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return LayoutScreenSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__2_i = function () {
            var t = new egret.gui.Group();
            this.__s(t, ["bottom", "left", "right", "top"], [5, 5, 5, 5]);
            t.elementsContent = [this.panel_i()];
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.Group();
            this.__s(t, ["height", "horizontalCenter", "verticalCenter", "width"], [400, 0, 0, 400]);
            t.elementsContent = [this.__1_i(), this.__2_i(), this.vleftLine_i(), this.vMiddleLine_i(), this.vRightLine_i(), this.hTopLine_i(), this.hMiddleLine_i(), this.hBottomLine_i()];
            return t;
        };
        __egretProto__.__4_i = function () {
            var t = new egret.gui.Group();
            this.__s(t, ["horizontalCenter", "verticalCenter"], [0, 0]);
            t.elementsContent = [this.__3_i(), this.topCheck_i(), this.topLeftCheck_i(), this.topRightCheck_i(), this.leftChcek_i(), this.leftTopCheck_i(), this.leftBottomCheck_i()];
            return t;
        };
        __egretProto__.hBottomLine_i = function () {
            var t = new egret.gui.Rect();
            this.hBottomLine = t;
            this.__s(t, ["bottom", "fillColor", "height", "left", "right", "visible"], [5, 0x707070, 1, -20, -20, false]);
            return t;
        };
        __egretProto__.hMiddleLine_i = function () {
            var t = new egret.gui.Rect();
            this.hMiddleLine = t;
            this.__s(t, ["fillColor", "height", "left", "right", "verticalCenter", "visible"], [0x707070, 1, -20, -20, 0, false]);
            return t;
        };
        __egretProto__.hTopLine_i = function () {
            var t = new egret.gui.Rect();
            this.hTopLine = t;
            this.__s(t, ["fillColor", "height", "left", "right", "top", "visible"], [0x707070, 1, -20, -20, 5, false]);
            return t;
        };
        __egretProto__.leftBottomCheck_i = function () {
            var t = new egret.gui.CheckBox();
            this.leftBottomCheck = t;
            this.__s(t, ["bottom", "left"], [0, -50]);
            return t;
        };
        __egretProto__.leftChcek_i = function () {
            var t = new egret.gui.CheckBox();
            this.leftChcek = t;
            this.__s(t, ["left", "verticalCenter"], [-50, 0]);
            return t;
        };
        __egretProto__.leftTopCheck_i = function () {
            var t = new egret.gui.CheckBox();
            this.leftTopCheck = t;
            this.__s(t, ["left", "top"], [-50, 0]);
            return t;
        };
        __egretProto__.panel_i = function () {
            var t = new egret.gui.UIAsset();
            this.panel = t;
            this.__s(t, ["height", "source", "width", "x", "y"], [200, "app_layout_item_png", 200, 50, 50]);
            return t;
        };
        __egretProto__.__1_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [440, 0, "app_layout_back_png", 0, 440]);
            return t;
        };
        __egretProto__.topCheck_i = function () {
            var t = new egret.gui.CheckBox();
            this.topCheck = t;
            this.__s(t, ["horizontalCenter", "top"], [0, -50]);
            return t;
        };
        __egretProto__.topLeftCheck_i = function () {
            var t = new egret.gui.CheckBox();
            this.topLeftCheck = t;
            this.__s(t, ["left", "top"], [0, -50]);
            return t;
        };
        __egretProto__.topRightCheck_i = function () {
            var t = new egret.gui.CheckBox();
            this.topRightCheck = t;
            this.__s(t, ["right", "top"], [0, -50]);
            return t;
        };
        __egretProto__.vMiddleLine_i = function () {
            var t = new egret.gui.Rect();
            this.vMiddleLine = t;
            this.__s(t, ["bottom", "fillColor", "horizontalCenter", "top", "visible", "width"], [-20, 0x707070, 0, -20, false, 1]);
            return t;
        };
        __egretProto__.vRightLine_i = function () {
            var t = new egret.gui.Rect();
            this.vRightLine = t;
            this.__s(t, ["bottom", "fillColor", "right", "top", "visible", "width"], [-20, 0x707070, 5, -20, false, 1]);
            return t;
        };
        __egretProto__.vleftLine_i = function () {
            var t = new egret.gui.Rect();
            this.vleftLine = t;
            this.__s(t, ["bottom", "fillColor", "left", "top", "visible", "width"], [-20, 0x707070, 5, -20, false, 1]);
            return t;
        };
        LayoutScreenSkin._skinParts = ["panel", "vleftLine", "vMiddleLine", "vRightLine", "hTopLine", "hMiddleLine", "hBottomLine", "topCheck", "topLeftCheck", "topRightCheck", "leftChcek", "leftTopCheck", "leftBottomCheck"];
        return LayoutScreenSkin;
    })(egret.gui.Skin);
    screenContentSkins.LayoutScreenSkin = LayoutScreenSkin;
    LayoutScreenSkin.prototype.__class__ = "screenContentSkins.LayoutScreenSkin";
})(screenContentSkins || (screenContentSkins = {}));
