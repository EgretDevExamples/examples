var skins;
(function (skins) {
    var ocean;
    (function (ocean) {
        var ItemRendererSkin = (function (_super) {
            __extends(ItemRendererSkin, _super);
            function ItemRendererSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.height = 85;
                this.elementsContent = [this.__4_i(), this.__5_i(), this.labelDisplay_i()];
                this.states = [
                    new egret.gui.State("up", [
                        new egret.gui.SetProperty("labelDisplay", "textColor", 0x111111)
                    ]),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("__4", "source", "list_item_select_png"),
                        new egret.gui.SetProperty("labelDisplay", "textColor", 0xf0f0f0)
                    ]),
                    new egret.gui.State("disabled", [])
                ];
            }
            var __egretProto__ = ItemRendererSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return ItemRendererSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.__5_i = function () {
                var t = new egret.gui.Rect();
                this.__s(t, ["fillAlpha", "height", "strokeAlpha", "strokeColor", "strokeWeight", "percentWidth"], [0, .5, 1, 0x888888, .5, 100]);
                return t;
            };
            __egretProto__.labelDisplay_i = function () {
                var t = new egret.gui.Label();
                this.labelDisplay = t;
                this.__s(t, ["fontFamily", "left", "size", "text", "verticalCenter"], ["Tahoma", 32, 24, "测试数据", 0]);
                return t;
            };
            __egretProto__.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__4 = t;
                this.__s(t, ["percentHeight", "source", "percentWidth"], [100, "list_item_normal_png", 100]);
                return t;
            };
            ItemRendererSkin._skinParts = ["labelDisplay"];
            return ItemRendererSkin;
        })(egret.gui.Skin);
        ocean.ItemRendererSkin = ItemRendererSkin;
        ItemRendererSkin.prototype.__class__ = "skins.ocean.ItemRendererSkin";
    })(ocean = skins.ocean || (skins.ocean = {}));
})(skins || (skins = {}));
