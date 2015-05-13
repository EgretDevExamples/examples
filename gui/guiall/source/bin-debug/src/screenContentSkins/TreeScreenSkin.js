var screenContentSkins;
(function (screenContentSkins) {
    var TreeScreenSkin = (function (_super) {
        __extends(TreeScreenSkin, _super);
        function TreeScreenSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.elementsContent = [this.tree_i()];
        }
        var __egretProto__ = TreeScreenSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return TreeScreenSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.tree_i = function () {
            var t = new egret.gui.Tree();
            this.tree = t;
            this.__s(t, ["height", "horizontalCenter", "labelField", "verticalCenter", "width"], [250, 0, "name", 0, 250]);
            return t;
        };
        TreeScreenSkin._skinParts = ["tree"];
        return TreeScreenSkin;
    })(egret.gui.Skin);
    screenContentSkins.TreeScreenSkin = TreeScreenSkin;
    TreeScreenSkin.prototype.__class__ = "screenContentSkins.TreeScreenSkin";
})(screenContentSkins || (screenContentSkins = {}));
