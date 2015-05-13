var screenContentSkins;
(function (screenContentSkins) {
    var BitmapLabelScreenSkin = (function (_super) {
        __extends(BitmapLabelScreenSkin, _super);
        function BitmapLabelScreenSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.elementsContent = [this.__1_i()];
        }
        var __egretProto__ = BitmapLabelScreenSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return BitmapLabelScreenSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.bitmapLabel_i = function () {
            var t = new egret.gui.BitmapLabel();
            this.bitmapLabel = t;
            this.__s(t, ["font", "horizontalCenter", "text", "verticalCenter"], ["font_fnt", 0, "Hello Egret", 0]);
            return t;
        };
        __egretProto__.__1_i = function () {
            var t = new egret.gui.Group();
            this.__s(t, ["bottom", "left", "right", "top"], [50, 50, 50, 50]);
            t.elementsContent = [this.bitmapLabel_i()];
            return t;
        };
        BitmapLabelScreenSkin._skinParts = ["bitmapLabel"];
        return BitmapLabelScreenSkin;
    })(egret.gui.Skin);
    screenContentSkins.BitmapLabelScreenSkin = BitmapLabelScreenSkin;
    BitmapLabelScreenSkin.prototype.__class__ = "screenContentSkins.BitmapLabelScreenSkin";
})(screenContentSkins || (screenContentSkins = {}));
