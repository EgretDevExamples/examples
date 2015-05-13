var screenContentSkins;
(function (screenContentSkins) {
    var DropDownListScreenSkin = (function (_super) {
        __extends(DropDownListScreenSkin, _super);
        function DropDownListScreenSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.elementsContent = [this.dropDownlist_i()];
        }
        var __egretProto__ = DropDownListScreenSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return DropDownListScreenSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.dropDownlist_i = function () {
            var t = new egret.gui.DropDownList();
            this.dropDownlist = t;
            this.__s(t, ["height", "horizontalCenter", "verticalCenter", "width"], [40, 0, 0, 200]);
            return t;
        };
        DropDownListScreenSkin._skinParts = ["dropDownlist"];
        return DropDownListScreenSkin;
    })(egret.gui.Skin);
    screenContentSkins.DropDownListScreenSkin = DropDownListScreenSkin;
    DropDownListScreenSkin.prototype.__class__ = "screenContentSkins.DropDownListScreenSkin";
})(screenContentSkins || (screenContentSkins = {}));
