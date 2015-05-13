var skins;
(function (skins) {
    var ocean;
    (function (ocean) {
        var HSliderSkin = (function (_super) {
            __extends(HSliderSkin, _super);
            function HSliderSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["minHeight", "minWidth"], [13, 100]);
                this.elementsContent = [this.track_i(), this.trackHighlight_i(), this.thumb_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var __egretProto__ = HSliderSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return HSliderSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.thumb_i = function () {
                var t = new egret.gui.Button();
                this.thumb = t;
                this.__s(t, ["height", "skinName", "verticalCenter", "width"], [24, skins.ocean.HSliderThumbSkin, 0, 24]);
                return t;
            };
            __egretProto__.trackHighlight_i = function () {
                var t = new egret.gui.UIAsset();
                this.trackHighlight = t;
                this.__s(t, ["height", "source", "verticalCenter"], [8, "hslider_fill_png", 0]);
                return t;
            };
            __egretProto__.track_i = function () {
                var t = new egret.gui.UIAsset();
                this.track = t;
                this.__s(t, ["height", "source", "verticalCenter", "percentWidth"], [8, "hslider_track_png", 0, 100]);
                return t;
            };
            HSliderSkin._skinParts = ["track", "trackHighlight", "thumb"];
            return HSliderSkin;
        })(egret.gui.Skin);
        ocean.HSliderSkin = HSliderSkin;
        HSliderSkin.prototype.__class__ = "skins.ocean.HSliderSkin";
    })(ocean = skins.ocean || (skins.ocean = {}));
})(skins || (skins = {}));
