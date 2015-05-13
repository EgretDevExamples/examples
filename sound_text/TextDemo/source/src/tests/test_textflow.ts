/**
 * Created by huanghaiying on 15/3/25.
 */
module input {

    export function testFlow() {
        var c:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        var input:egret.TextField;
        input = new egret.TextField();
        //input.multiline = true;
        input.textFlow = new egret.HtmlTextParser().parser('是否花费 钻石<font color="0x0000ff">20</font>抢购\n<font color="0xffff00">封测登录大礼包</font>？');
        input.size = 30;
        //input.width = 200;
        input.height = 340;
        c.addChild(input);

        egret.Tween.get(c).to({"scaleX" : 2, scaleY:2}, 3000);
        return c;
    }
}