var screenContentSkins;
(function (screenContentSkins) {
    var PanelScreenSkin = (function (_super) {
        __extends(PanelScreenSkin, _super);
        function PanelScreenSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.elementsContent = [this.__2_i()];
        }
        var __egretProto__ = PanelScreenSkin.prototype;
        __egretProto__.__1_i = function () {
            var t = new egret.gui.Button();
            this.__s(t, ["horizontalCenter", "label", "verticalCenter"], [0, "Button", 0]);
            return t;
        };
        __egretProto__.__2_i = function () {
            var t = new egret.gui.Panel();
            this.__s(t, ["height", "horizontalCenter", "title", "verticalCenter", "width"], [300, 0, "Panel", 0, 400]);
            t.elementsContent = [this.__1_i()];
            return t;
        };
        return PanelScreenSkin;
    })(egret.gui.Skin);
    screenContentSkins.PanelScreenSkin = PanelScreenSkin;
    PanelScreenSkin.prototype.__class__ = "screenContentSkins.PanelScreenSkin";
})(screenContentSkins || (screenContentSkins = {}));
