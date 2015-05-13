var screenContentSkins;
(function (screenContentSkins) {
    var ListCustomScreenSkin = (function (_super) {
        __extends(ListCustomScreenSkin, _super);
        function ListCustomScreenSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.elementsContent = [this.__1_i(), this.listCustom_i()];
        }
        var __egretProto__ = ListCustomScreenSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return ListCustomScreenSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.listCustom_i = function () {
            var t = new egret.gui.List();
            this.listCustom = t;
            this.__s(t, ["bottom", "itemRenderer", "left", "right", "top"], [110, new egret.gui.ClassFactory(CustomItemRenderer), 50, 50, 110]);
            return t;
        };
        __egretProto__.__1_i = function () {
            var t = new egret.gui.Rect();
            this.__s(t, ["bottom", "left", "right", "top"], [110, 50, 50, 110]);
            return t;
        };
        ListCustomScreenSkin._skinParts = ["listCustom"];
        return ListCustomScreenSkin;
    })(egret.gui.Skin);
    screenContentSkins.ListCustomScreenSkin = ListCustomScreenSkin;
    ListCustomScreenSkin.prototype.__class__ = "screenContentSkins.ListCustomScreenSkin";
})(screenContentSkins || (screenContentSkins = {}));
