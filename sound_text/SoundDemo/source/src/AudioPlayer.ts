/**
 * Created by egret on 4/24/15.
 */
class AudioPlayer extends egret.gui.Group
{
    private myPanel:egret.gui.Panel;
    public constructor() {
        super();
    }
    public createChildren(): void {
        super.createChildren();
        //创建Panel
        this.myPanel = new egret.gui.Panel();
        //this.myPanel.skinName = "uiskins.PanelSkin";
        this.myPanel.title = "Audio Player";
        this.myPanel.x = 40;
        this.myPanel.y = 40;
        this.myPanel.width = 400;
        this.myPanel.height = 150;
        this.addElement(this.myPanel);
        this.myPanel.validateNow();

        //添加一个Button控制音乐播放与停止
        var btn:egret.gui.Button = new egret.gui.Button();
        btn.label = "Play";
        btn.horizontalCenter = 0;
        btn.verticalCenter = 0;
        //添加事件侦听
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btnTouchHandler,this);
        this.myPanel.addElement(btn);
    }
    private btnTouchHandler(evt:egret.TouchEvent):void {
        var sound:egret.Sound = RES.getRes("sound");
        sound.type = egret.Sound.MUSIC;

        console.log("button touched");

        //点击按钮，音乐在播放和停止状态间转换
        if(evt.target.label == "Play")
        {
            sound.play();
            evt.target.label = "Stop";
        } else
        {
            sound.pause();
            evt.target.label = "Play";
        }
    }

}
