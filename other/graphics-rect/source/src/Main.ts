//////////////////////////////////////////////////////////////////////////////////////
// 使用graphics进行高级绘制示例
//////////////////////////////////////////////////////////////////////////////////////

class Main extends egret.DisplayObjectContainer {

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event:egret.Event) 
    {
        var shp:egret.Shape = new egret.Shape();
        var colors:number[] = [0xCFF10A,0xffffff,0x68FFC8,0x7D68FF];    
        var i:number = 0;
        var t:number = 0;
        var currentColorIndex:number = 0;
        for(i=0;i<12;i++)
        {
            currentColorIndex = i%4;    
            shp.graphics.beginFill(colors[currentColorIndex]);
            shp.graphics.drawRect(0,(i*30+15),500,20);   
        }
        for(i=0;i<12;i++)
        {
            currentColorIndex = i%4;
            for(t=0;t<6;t++)
            {
                //指定一种简单的单一颜色填充（0xCFF10A）。
                shp.graphics.beginFill(colors[currentColorIndex]);
                //循环绘制圆角矩形
                shp.graphics.drawRoundRect((t*100+i%2*50),
                (i%2==0?(i/2*60):((i-1)/2*60+30)),50,50,13,13);
                shp.graphics.endFill();
                shp.graphics.beginFill(colors[currentColorIndex!=3?currentColorIndex+1:0]);
                shp.graphics.drawRoundRect((t*100+i%2*50+10),
                (i%2==0?(i/2*60+10):((i-1)/2*60+30+10)),30,30,10,10);
                shp.graphics.endFill();
            }
        }
        shp.graphics.lineStyle(4,0xcc3333,1);
        shp.graphics.drawRoundRect(50,30,200,300,20,20);
        shp.graphics.endFill();
        this.addChild(shp);
        shp.x = -50;
        shp.scaleX = shp.scaleY = 2;
    }
}


