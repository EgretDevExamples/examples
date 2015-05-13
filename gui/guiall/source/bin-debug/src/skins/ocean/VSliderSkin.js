var skins;
(function (skins) {
    var ocean;
    (function (ocean) {
        var VSliderSkin = (function (_super) {
            __extends(VSliderSkin, _super);
            function VSliderSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["minHeight", "minWidth"], [13, 13]);
                this.elementsContent = [this.track_i(), this.trackHighlight_i(), this.thumb_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var __egretProto__ = VSliderSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return VSliderSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.thumb_i = function () {
                var t = new egret.gui.Button();
                this.thumb = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "width"], [24, 0, skins.ocean.VSliderThumbSkin, 24]);
                return t;
            };
            __egretProto__.trackHighlight_i = function () {
                var t = new egret.gui.UIAsset();
                this.trackHighlight = t;
                this.__s(t, ["fillMode", "horizontalCenter", "source", "width"], ["repeat", 0, "vslider_fill_png", 8]);
                return t;
            };
            __egretProto__.track_i = function () {
                var t = new egret.gui.UIAsset();
                this.track = t;
                this.__s(t, ["percentHeight", "horizontalCenter", "source", "width"], [100, 0, "vslider_track_png", 8]);
                return t;
            };
            VSliderSkin._skinParts = ["track", "trackHighlight", "thumb"];
            return VSliderSkin;
        })(egret.gui.Skin);
        ocean.VSliderSkin = VSliderSkin;
        VSliderSkin.prototype.__class__ = "skins.ocean.VSliderSkin";
    })(ocean = skins.ocean || (skins.ocean = {}));
})(skins || (skins = {}));
