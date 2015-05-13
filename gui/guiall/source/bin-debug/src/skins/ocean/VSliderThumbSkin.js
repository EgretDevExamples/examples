var skins;
(function (skins) {
    var ocean;
    (function (ocean) {
        var VSliderThumbSkin = (function (_super) {
            __extends(VSliderThumbSkin, _super);
            function VSliderThumbSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var __egretProto__ = VSliderThumbSkin.prototype;
            __egretProto__.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["fillMode", "percentHeight", "source", "percentWidth"], ["scale", 100, "vslider_thumb_png", 100]);
                return t;
            };
            return VSliderThumbSkin;
        })(egret.gui.Skin);
        ocean.VSliderThumbSkin = VSliderThumbSkin;
        VSliderThumbSkin.prototype.__class__ = "skins.ocean.VSliderThumbSkin";
    })(ocean = skins.ocean || (skins.ocean = {}));
})(skins || (skins = {}));
