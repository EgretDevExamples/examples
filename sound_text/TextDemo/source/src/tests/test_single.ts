/**
 * Created by huanghaiying on 15/3/23.
 */

module input {
    export function testSingle() {
        var input:egret.TextField;
        input = new egret.TextField();
        input.background = true;
        input.backgroundColor = 0xcccccc;
        input.type = egret.TextFieldType.INPUT;
        input.text = "我是一个单行输入文本";
        input.size = 30;
        input.width = 320;
        input.height = 40;

        return input;
    }

    export function testSingleWithVisible() {
        var input:egret.TextField;
        input = new egret.TextField();
        input.background = true;
        input.backgroundColor = 0xcccccc;
        input.type = egret.TextFieldType.INPUT;
        input.text = "我是一个单行输入文本";
        input.size = 30;
        input.width = 320;
        input.height = 40;

        egret.Tween.get(input, {loop:true}).wait(5000).call(function() {
            input.visible = !input.visible;
        });

        return input;
    }

    export function testSingleWithRemove() {
        var input:egret.TextField;
        input = new egret.TextField();
        input.background = true;
        input.backgroundColor = 0xcccccc;
        input.type = egret.TextFieldType.INPUT;
        input.text = "我是一个单行输入文本";
        input.size = 30;
        input.width = 320;
        input.height = 40;

        var parent;
        egret.Tween.get(input, {loop:true}).wait(5000).call(function() {
            if (input.parent) {
                parent = input.parent;
                parent.removeChild(input);
            }
            else if (parent) {
                parent.addChild(input);
            }
        });

        return input;
    }

    export function testSingleWithCover() {
        var c:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();

        var input:egret.TextField;
        input = new egret.TextField();
        input.background = true;
        input.backgroundColor = 0xcccccc;
        input.type = egret.TextFieldType.INPUT;
        input.text = "我是一个单行输入文本";
        input.size = 30;
        input.width = 320;
        input.height = 40;
        c.addChild(input);

        var shape:egret.Shape = new egret.Shape();
        c.addChild(shape);
        shape.alpha = 0.5;
        shape.graphics.beginFill(0xffff00, 1);
        shape.graphics.drawRect(0, 0, 100, 100);
        shape.graphics.endFill();
        shape.touchEnabled = true;

        return c;
    }

    export function testSomeSingle() {
        var c:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();

        var input:egret.TextField;
        input = new egret.TextField();
        input.type = egret.TextFieldType.INPUT;
        input.verticalAlign = egret.VerticalAlign.MIDDLE;
        input.text = "第一个单行文本";
        input.background = true;
        input.backgroundColor = 0xcccccc;
        input.size = 30;
        input.width = 200;
        input.height = 100;
        c.addChild(input);

        input = new egret.TextField();
        input.type = egret.TextFieldType.INPUT;
        input.text = "第二个单行文本";
        input.background = true;
        input.backgroundColor = 0xcccccc;
        input.textAlign = egret.HorizontalAlign.CENTER;
        input.size = 30;
        input.width = 200;
        input.height = 100;
        input.y = 120;
        c.addChild(input);

        input = new egret.TextField();
        input.type = egret.TextFieldType.INPUT;
        input.text = "第三个单行文本";
        input.background = true;
        input.backgroundColor = 0xcccccc;
        input.verticalAlign = egret.VerticalAlign.MIDDLE;
        input.textAlign = egret.HorizontalAlign.CENTER;
        input.size = 30;
        input.width = 200;
        input.height = 100;
        input.y = 240;
        c.addChild(input);
        return c;
    }
}