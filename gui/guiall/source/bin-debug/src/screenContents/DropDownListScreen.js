/**
 * Created by yn on 2014/8/28.
 */
var DropDownListScreen = (function (_super) {
    __extends(DropDownListScreen, _super);
    function DropDownListScreen() {
        _super.call(this);
        /**
         * 皮肤组件
         */
        this.dropDownlist = null;
        this.skinName = "screenContentSkins.DropDownListScreenSkin";
    }
    var __egretProto__ = DropDownListScreen.prototype;
    __egretProto__.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this.dropDownlist) {
            var dp = [];
            for (var i = 1; i < 50; i++) {
                dp.push({ label: "item" + i, toggle: false });
            }
            this.dropDownlist.dataProvider = new egret.gui.ArrayCollection(dp);
            this.dropDownlist.selectedIndex = 0;
        }
    };
    return DropDownListScreen;
})(egret.gui.SkinnableComponent);
DropDownListScreen.prototype.__class__ = "DropDownListScreen";
