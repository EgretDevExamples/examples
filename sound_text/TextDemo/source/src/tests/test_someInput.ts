/**
 * Created by huanghaiying on 15/3/23.
 */


module input {
    export function testSome() {
        var c:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();

        var input:egret.TextField;
        input = new egret.TextField();
        input.type = egret.TextFieldType.INPUT;
        input.text = "第一个单行文本";
        input.background = true;
        input.backgroundColor = 0xcccccc;
        input.size = 30;
        input.width = 200;
        input.height = 40;
        c.addChild(input);


        input = new egret.TextField();
        input.type = egret.TextFieldType.INPUT;
        input.background = true;
        input.backgroundColor = 0xcccccc;
        input.text = "第二个单行文本";
        input.size = 30;
        input.width = 200;
        input.height = 140;
        input.y = 50;
        c.addChild(input);


        input = new egret.TextField();
        input.type = egret.TextFieldType.INPUT;
        input.text = "第一个多行文本";
        input.size = 30;
        input.width = 200;
        input.height = 140;
        input.y = 100;
        c.addChild(input);


        input = new egret.TextField();
        input.type = egret.TextFieldType.INPUT;
        input.text = "第二个多行文本";
        input.size = 30;
        input.width = 200;
        input.height = 140;
        input.y = 250;
        c.addChild(input);

        return c;
    }
}