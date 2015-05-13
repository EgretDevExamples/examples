var skins;
(function (skins) {
    var ocean;
    (function (ocean) {
        var PanelSkin = (function (_super) {
            __extends(PanelSkin, _super);
            function PanelSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["maxWidth", "minHeight", "minWidth"], [710, 230, 470]);
                this.elementsContent = [this.__3_i(), this.moveArea_i(), this.contentGroup_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var __egretProto__ = PanelSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return PanelSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["percentHeight", "source", "percentWidth"], [100, "panel_headeback_png", 100]);
                return t;
            };
            __egretProto__.contentGroup_i = function () {
                var t = new egret.gui.Group();
                this.contentGroup = t;
                this.__s(t, ["bottom", "clipAndEnableScrolling", "left", "right", "top"], [0, true, 7, 7, 50]);
                return t;
            };
            __egretProto__.moveArea_i = function () {
                var t = new egret.gui.Group();
                this.moveArea = t;
                this.__s(t, ["height", "left", "right"], [50, 6, 6]);
                t.elementsContent = [this.__4_i(), this.titleDisplay_i()];
                return t;
            };
            __egretProto__.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["percentHeight", "source", "percentWidth"], [100, "panel_back_png", 100]);
                return t;
            };
            __egretProto__.titleDisplay_i = function () {
                var t = new egret.gui.Label();
                this.titleDisplay = t;
                this.__s(t, ["fontFamily", "left", "maxDisplayedLines", "minHeight", "right", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter"], ["Tahoma", 5, 1, 28, 5, 26, "标题", "center", 0x727070, "middle", 0]);
                return t;
            };
            PanelSkin._skinParts = ["titleDisplay", "moveArea", "contentGroup"];
            return PanelSkin;
        })(egret.gui.Skin);
        ocean.PanelSkin = PanelSkin;
        PanelSkin.prototype.__class__ = "skins.ocean.PanelSkin";
    })(ocean = skins.ocean || (skins.ocean = {}));
})(skins || (skins = {}));
