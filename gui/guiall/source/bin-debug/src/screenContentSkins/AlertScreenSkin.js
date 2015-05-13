var screenContentSkins;
(function (screenContentSkins) {
    var AlertScreenSkin = (function (_super) {
        __extends(AlertScreenSkin, _super);
        function AlertScreenSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.elementsContent = [this.button_i()];
        }
        var __egretProto__ = AlertScreenSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return AlertScreenSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.button_i = function () {
            var t = new egret.gui.Button();
            this.button = t;
            this.__s(t, ["horizontalCenter", "label", "verticalCenter"], [0, "Show Alert", 0]);
            return t;
        };
        AlertScreenSkin._skinParts = ["button"];
        return AlertScreenSkin;
    })(egret.gui.Skin);
    screenContentSkins.AlertScreenSkin = AlertScreenSkin;
    AlertScreenSkin.prototype.__class__ = "screenContentSkins.AlertScreenSkin";
})(screenContentSkins || (screenContentSkins = {}));
