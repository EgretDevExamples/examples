var skins;
(function (skins) {
    var ocean;
    (function (ocean) {
        var TitleWindowSkin = (function (_super) {
            __extends(TitleWindowSkin, _super);
            function TitleWindowSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["maxWidth", "minHeight", "minWidth"], [710, 230, 470]);
                this.elementsContent = [this.__3_i(), this.moveArea_i(), this.contentGroup_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var __egretProto__ = TitleWindowSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return TitleWindowSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["percentHeight", "source", "percentWidth"], [100, "panel_headeback_png", 100]);
                return t;
            };
            __egretProto__.closeButton_i = function () {
                var t = new egret.gui.UIAsset();
                this.closeButton = t;
                this.__s(t, ["right", "source", "verticalCenter"], [10, "titlewindow_close_png", 0]);
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
                t.elementsContent = [this.__4_i(), this.titleDisplay_i(), this.closeButton_i()];
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
            TitleWindowSkin._skinParts = ["titleDisplay", "closeButton", "moveArea", "contentGroup"];
            return TitleWindowSkin;
        })(egret.gui.Skin);
        ocean.TitleWindowSkin = TitleWindowSkin;
        TitleWindowSkin.prototype.__class__ = "skins.ocean.TitleWindowSkin";
    })(ocean = skins.ocean || (skins.ocean = {}));
})(skins || (skins = {}));
