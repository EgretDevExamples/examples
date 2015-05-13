var screenContentSkins;
(function (screenContentSkins) {
    var TogglesScreenSkin = (function (_super) {
        __extends(TogglesScreenSkin, _super);
        function TogglesScreenSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.elementsContent = [this.__15_i()];
        }
        var __egretProto__ = TogglesScreenSkin.prototype;
        __egretProto__.__10_i = function () {
            var t = new egret.gui.HorizontalLayout();
            t.gap = 20;
            return t;
        };
        __egretProto__.__11_i = function () {
            var t = new egret.gui.RadioButton();
            this.__s(t, ["label", "selected", "value"], ["Radio Button 1", true, "Data1"]);
            return t;
        };
        __egretProto__.__12_i = function () {
            var t = new egret.gui.RadioButton();
            this.__s(t, ["label", "value"], ["Radio Button 2", "Data2"]);
            return t;
        };
        __egretProto__.__13_i = function () {
            var t = new egret.gui.RadioButton();
            this.__s(t, ["label", "value"], ["Radio Button 3", "Data3"]);
            return t;
        };
        __egretProto__.__14_i = function () {
            var t = new egret.gui.Group();
            t.layout = this.__10_i();
            t.elementsContent = [this.__11_i(), this.__12_i(), this.__13_i()];
            return t;
        };
        __egretProto__.__15_i = function () {
            var t = new egret.gui.Group();
            this.__s(t, ["horizontalCenter", "verticalCenter"], [0, 0]);
            t.layout = this.__1_i();
            t.elementsContent = [this.__4_i(), this.__9_i(), this.__14_i()];
            return t;
        };
        __egretProto__.__1_i = function () {
            var t = new egret.gui.VerticalLayout();
            this.__s(t, ["gap", "horizontalAlign", "verticalAlign"], [30, "contentJustify", "middle"]);
            return t;
        };
        __egretProto__.__2_i = function () {
            var t = new egret.gui.HorizontalLayout();
            t.gap = 20;
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.ToggleSwitch();
            t.selected = true;
            return t;
        };
        __egretProto__.__4_i = function () {
            var t = new egret.gui.Group();
            t.layout = this.__2_i();
            t.elementsContent = [this.__3_i()];
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.HorizontalLayout();
            t.gap = 20;
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.CheckBox();
            this.__s(t, ["label", "selected"], ["Check Box 1", true]);
            return t;
        };
        __egretProto__.__7_i = function () {
            var t = new egret.gui.CheckBox();
            t.label = "Check Box 2";
            return t;
        };
        __egretProto__.__8_i = function () {
            var t = new egret.gui.CheckBox();
            t.label = "Check Box 3";
            return t;
        };
        __egretProto__.__9_i = function () {
            var t = new egret.gui.Group();
            t.layout = this.__5_i();
            t.elementsContent = [this.__6_i(), this.__7_i(), this.__8_i()];
            return t;
        };
        return TogglesScreenSkin;
    })(egret.gui.Skin);
    screenContentSkins.TogglesScreenSkin = TogglesScreenSkin;
    TogglesScreenSkin.prototype.__class__ = "screenContentSkins.TogglesScreenSkin";
})(screenContentSkins || (screenContentSkins = {}));
