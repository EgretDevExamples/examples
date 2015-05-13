var screenContentSkins;
(function (screenContentSkins) {
    var ListScreenSkin = (function (_super) {
        __extends(ListScreenSkin, _super);
        function ListScreenSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.elementsContent = [this.__1_i(), this.list_i()];
        }
        var __egretProto__ = ListScreenSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return ListScreenSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.list_i = function () {
            var t = new egret.gui.List();
            this.list = t;
            this.__s(t, ["bottom", "left", "right", "top"], [110, 50, 50, 110]);
            return t;
        };
        __egretProto__.__1_i = function () {
            var t = new egret.gui.Rect();
            this.__s(t, ["bottom", "left", "right", "top"], [110, 50, 50, 110]);
            return t;
        };
        ListScreenSkin._skinParts = ["list"];
        return ListScreenSkin;
    })(egret.gui.Skin);
    screenContentSkins.ListScreenSkin = ListScreenSkin;
    ListScreenSkin.prototype.__class__ = "screenContentSkins.ListScreenSkin";
})(screenContentSkins || (screenContentSkins = {}));
