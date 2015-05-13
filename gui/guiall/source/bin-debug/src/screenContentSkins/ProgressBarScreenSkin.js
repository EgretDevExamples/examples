var screenContentSkins;
(function (screenContentSkins) {
    var ProgressBarScreenSkin = (function (_super) {
        __extends(ProgressBarScreenSkin, _super);
        function ProgressBarScreenSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.elementsContent = [this.hProgressBar1_i(), this.hProgressBar2_i(), this.vProgressBar_i()];
        }
        var __egretProto__ = ProgressBarScreenSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return ProgressBarScreenSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.hProgressBar2_i = function () {
            var t = new egret.gui.ProgressBar();
            this.hProgressBar2 = t;
            this.__s(t, ["direction", "height", "horizontalCenter", "value", "verticalCenter", "width"], ["rightToLeft", 21, 120, 50, 50, 250]);
            return t;
        };
        __egretProto__.hProgressBar1_i = function () {
            var t = new egret.gui.ProgressBar();
            this.hProgressBar1 = t;
            this.__s(t, ["height", "horizontalCenter", "value", "verticalCenter", "width"], [21, 120, 10, -50, 250]);
            return t;
        };
        __egretProto__.vProgressBar_i = function () {
            var t = new egret.gui.ProgressBar();
            this.vProgressBar = t;
            this.__s(t, ["direction", "height", "horizontalCenter", "hostComponentKey", "value", "verticalCenter", "width"], ["bottomToTop", 250, -120, "VProgressBar", 40, 0, 100]);
            return t;
        };
        ProgressBarScreenSkin._skinParts = ["hProgressBar1", "hProgressBar2", "vProgressBar"];
        return ProgressBarScreenSkin;
    })(egret.gui.Skin);
    screenContentSkins.ProgressBarScreenSkin = ProgressBarScreenSkin;
    ProgressBarScreenSkin.prototype.__class__ = "screenContentSkins.ProgressBarScreenSkin";
})(screenContentSkins || (screenContentSkins = {}));
