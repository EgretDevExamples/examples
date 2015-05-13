var screenContentSkins;
(function (screenContentSkins) {
    var LabelScreenSkin = (function (_super) {
        __extends(LabelScreenSkin, _super);
        function LabelScreenSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.elementsContent = [this.__8_i()];
        }
        var __egretProto__ = LabelScreenSkin.prototype;
        __egretProto__.__1_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "percentHeight", "text", "textColor", "percentWidth"], ["微软雅黑", 100, "左对齐文本", 0x727070, 100]);
            return t;
        };
        __egretProto__.__2_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "percentHeight", "text", "textAlign", "textColor", "percentWidth"], ["微软雅黑", 100, "水平居中文本", "center", 0x727070, 100]);
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "percentHeight", "text", "textAlign", "textColor", "percentWidth"], ["微软雅黑", 100, "右对齐文本", "right", 0x727070, 100]);
            return t;
        };
        __egretProto__.__4_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "percentHeight", "text", "textColor", "verticalAlign", "percentWidth"], ["微软雅黑", 100, "垂直居中文本", 0x727070, "middle", 100]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "percentHeight", "text", "textColor", "verticalAlign", "percentWidth"], ["微软雅黑", 100, "底对齐文本", 0x727070, "bottom", 100]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["bold", "fontFamily", "percentHeight", "text", "textAlign", "textColor", "verticalAlign", "percentWidth"], [true, "微软雅黑", 100, "粗体文本", "right", 0x727070, "bottom", 100]);
            return t;
        };
        __egretProto__.__7_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "percentHeight", "italic", "text", "textAlign", "textColor", "verticalAlign", "percentWidth"], ["微软雅黑", 100, true, "斜体文本", "center", 0x727070, "middle", 100]);
            return t;
        };
        __egretProto__.__8_i = function () {
            var t = new egret.gui.Group();
            this.__s(t, ["bottom", "left", "right", "top"], [50, 50, 50, 50]);
            t.elementsContent = [this.__1_i(), this.__2_i(), this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i()];
            return t;
        };
        return LabelScreenSkin;
    })(egret.gui.Skin);
    screenContentSkins.LabelScreenSkin = LabelScreenSkin;
    LabelScreenSkin.prototype.__class__ = "screenContentSkins.LabelScreenSkin";
})(screenContentSkins || (screenContentSkins = {}));
