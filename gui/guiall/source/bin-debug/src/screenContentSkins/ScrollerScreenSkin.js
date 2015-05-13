var screenContentSkins;
(function (screenContentSkins) {
    var ScrollerScreenSkin = (function (_super) {
        __extends(ScrollerScreenSkin, _super);
        function ScrollerScreenSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.elementsContent = [this.__1_i(), this.__4_i()];
        }
        var __egretProto__ = ScrollerScreenSkin.prototype;
        __egretProto__.__1_i = function () {
            var t = new egret.gui.Rect();
            this.__s(t, ["bottom", "fillAlpha", "left", "right", "strokeAlpha", "strokeColor", "top"], [99, 0, 99, 99, 1, 0x009aff, 99]);
            return t;
        };
        __egretProto__.__2_i = function () {
            var t = new egret.gui.UIAsset();
            t.source = "app_egret_labs_jpg";
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.Group();
            t.elementsContent = [this.__2_i()];
            return t;
        };
        __egretProto__.__4_i = function () {
            var t = new egret.gui.Scroller();
            this.__s(t, ["bottom", "left", "right", "top"], [100, 100, 100, 100]);
            t.viewport = this.__3_i();
            return t;
        };
        return ScrollerScreenSkin;
    })(egret.gui.Skin);
    screenContentSkins.ScrollerScreenSkin = ScrollerScreenSkin;
    ScrollerScreenSkin.prototype.__class__ = "screenContentSkins.ScrollerScreenSkin";
})(screenContentSkins || (screenContentSkins = {}));
