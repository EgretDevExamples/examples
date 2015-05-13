/**
 * Created by huanghaiying on 15/3/23.
 */
module input {
    export function testMulti() {
        var input:egret.TextField = new egret.TextField();
        input.type = egret.TextFieldType.INPUT;
        input.multiline = true;
        input.background = true;
        input.backgroundColor = 0xcccccc;
        input.text = "我是一个多行输入文本我非常长\n我自动换行了\n我再一次换行了\nfor the king";
        input.size = 30;
        input.width = 200;
        input.height = 140;
        input.scaleX = input.scaleY = 2;

        return input;
    }

    export function testMultiWithVisible() {
        var input:egret.TextField = new egret.TextField();
        input.type = egret.TextFieldType.INPUT;
        input.multiline = true;
        input.background = true;
        input.backgroundColor = 0xcccccc;
        input.text = "我是一个多行输入文本我非常长\n我自动换行了\n我再一次换行了\nfor the king";
        input.size = 30;
        input.width = 200;
        input.height = 140;

        egret.Tween.get(input, {loop:true}).wait(5000).call(function() {
            input.visible = !input.visible;
        });

        return input;
    }

    export function testMultiWithRemove() {
        var input:egret.TextField = new egret.TextField();
        input.type = egret.TextFieldType.INPUT;
        input.multiline = true;
        input.background = true;
        input.backgroundColor = 0xcccccc;
        input.text = "我是一个多行输入文本我非常长\n我自动换行了\n我再一次换行了\nfor the king";
        input.size = 30;
        input.width = 200;
        input.height = 140;

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

    export function testMultiWithCover() {
        var c:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();

        var input:egret.TextField;
        input = new egret.TextField();
        input.type = egret.TextFieldType.INPUT;
        input.multiline = true;
        input.background = true;
        input.backgroundColor = 0xcccccc;
        input.text = "我是一个多行输入文本我非常长\n我自动换行了\n我再一次换行了\nfor the king";
        input.size = 30;
        input.width = 200;
        input.height = 140;
        c.addChild(input);

        var shape:egret.Shape = new egret.Shape();
        c.addChild(shape);
        shape.graphics.beginFill(0xffff00, 1);
        shape.graphics.drawRect(0, 0, 100, 100);
        shape.graphics.endFill();
        shape.alpha = 0.5;
        shape.touchEnabled = true;

        return c;
    }

    export function testSomeMulti() {
        var c:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();

        var input:egret.TextField;
        input = new egret.TextField();
        input.type = egret.TextFieldType.INPUT;
        input.verticalAlign = egret.VerticalAlign.MIDDLE;
        input.multiline = true;
        input.background = true;
        input.backgroundColor = 0xcccccc;
        input.text = "第一个多行文本";
        input.size = 30;
        input.width = 200;
        input.height = 100;
        c.addChild(input);

        input = new egret.TextField();
        input.type = egret.TextFieldType.INPUT;
        input.textAlign = egret.HorizontalAlign.CENTER;
        input.multiline = true;
        input.background = true;
        input.backgroundColor = 0xcccccc;
        input.text = "第二个多行文本";
        input.size = 30;
        input.width = 200;
        input.height = 100;
        input.y = 120;
        c.addChild(input);

        input = new egret.TextField();
        input.type = egret.TextFieldType.INPUT;
        input.verticalAlign = egret.VerticalAlign.MIDDLE;
        input.textAlign = egret.HorizontalAlign.CENTER;
        input.multiline = true;
        input.background = true;
        input.backgroundColor = 0xcccccc;
        input.text = "第三个多行文本";
        input.size = 30;
        input.width = 200;
        input.height = 100;
        input.y = 240;
        c.addChild(input);
        return c;
    }
}