/**
 * Created by huanghaiying on 15/3/25.
 */
module input {

    export function testPassword() {
        var c:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        var input:egret.TextField;
        input = new egret.TextField();
        input.type = egret.TextFieldType.INPUT;
        input.background = true;
        input.backgroundColor = 0xcccccc;
        input.text = "单行";
        input.size = 30;
        input.width = 200;
        input.y = 0;
        input.x = 10;
        input.height = 40;
        c.addChild(input);

        input = new egret.TextField();
        input.type = egret.TextFieldType.INPUT;
        input.background = true;
        input.backgroundColor = 0xcccccc;
        input.multiline = true;
        input.text = "我是个多行文本";
        input.size = 30;
        input.width = 200;
        input.height = 100;
        input.y = 50;
        input.x = 10;
        c.addChild(input);

        input = new egret.TextField();
        input.type = egret.TextFieldType.INPUT;
        input.background = true;
        input.backgroundColor = 0xcccccc;
        input.displayAsPassword = true;
        input.text = "单行";
        input.size = 30;
        input.width = 200;
        input.y = 160;
        input.x = 10;
        input.height = 40;
        c.addChild(input);

        input = new egret.TextField();
        input.type = egret.TextFieldType.INPUT;
        input.background = true;
        input.backgroundColor = 0xcccccc;
        input.displayAsPassword = true;
        input.multiline = true;
        input.text = "我是个多行文本";
        input.size = 30;
        input.width = 200;
        input.height = 100;
        input.y = 210;
        input.x = 10;
        c.addChild(input);

        return c;
    }

}