/**
 * Created by yn on 2014/9/10.
 */
var CustomItemRenderer = (function (_super) {
    __extends(CustomItemRenderer, _super);
    function CustomItemRenderer() {
        _super.call(this);
        this.hostComponentKey = "CustomItemRender";
    }
    var __egretProto__ = CustomItemRenderer.prototype;
    __egretProto__.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this.toggleSwitch)
            this.toggleSwitch.addEventListener(egret.Event.CHANGE, this.touchDown, this);
    };
    __egretProto__.touchDown = function (event) {
        this.data.toggle = this.toggleSwitch.selected;
    };
    __egretProto__.dataChanged = function () {
        _super.prototype.dataChanged.call(this);
        if (this.toggleSwitch) {
            this.toggleSwitch.selected = this.data.toggle;
        }
    };
    return CustomItemRenderer;
})(egret.gui.ItemRenderer);
CustomItemRenderer.prototype.__class__ = "CustomItemRenderer";
