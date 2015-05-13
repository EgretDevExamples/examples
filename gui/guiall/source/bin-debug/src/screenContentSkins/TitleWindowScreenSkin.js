var screenContentSkins;
(function (screenContentSkins) {
    var TitleWindowScreenSkin = (function (_super) {
        __extends(TitleWindowScreenSkin, _super);
        function TitleWindowScreenSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.elementsContent = [this.button_i()];
        }
        var __egretProto__ = TitleWindowScreenSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return TitleWindowScreenSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.button_i = function () {
            var t = new egret.gui.Button();
            this.button = t;
            this.__s(t, ["horizontalCenter", "label", "verticalCenter"], [0, "Show TitleWindow", 0]);
            return t;
        };
        TitleWindowScreenSkin._skinParts = ["button"];
        return TitleWindowScreenSkin;
    })(egret.gui.Skin);
    screenContentSkins.TitleWindowScreenSkin = TitleWindowScreenSkin;
    TitleWindowScreenSkin.prototype.__class__ = "screenContentSkins.TitleWindowScreenSkin";
})(screenContentSkins || (screenContentSkins = {}));
