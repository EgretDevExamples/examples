class StateOver extends egret.DisplayObjectContainer
{
	private _btnStart:egret.Sprite;

	private _bg:egret.Bitmap;
	private _txt:egret.TextField;
	private _txtTitle:egret.TextField;

	public constructor()
	{
		super();
		if(this.stage)
		{
			this.init();
		}
		else
		{
			this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
		}

	}
	private onAddToStage(event:egret.Event){
        //设置加载进度界面
        this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
        this.init();
    }

    private init()
    {
		//游戏结束界面
    	var stageW:number = this.stage.stageWidth;
    	var stageH:number = this.stage.stageHeight;


        this._bg = new egret.Bitmap();
        this._bg.texture = RES.getRes("overPage");
        this._bg.width = this.stage.stageWidth;
        this._bg.height = this.stage.stageHeight;
        this._bg.touchEnabled = true;
        this._bg.addEventListener(egret.TouchEvent.TOUCH_TAP,this.tapHandler,this);
        this.addChild(this._bg);

		//显示得分
        this._txt = new egret.TextField();
        this._txt.textColor = 0x000000;
        this._txt.textAlign = egret.HorizontalAlign.RIGHT;
        this._txt.width = 300;
        this._txt.size = 60;
        this._txt.text = MainUI.totalScore.toString();
        this._txt.x = 0;
        this._txt.y = 215;
        this.addChild(this._txt);
        this._txtTitle = new egret.TextField();
        this._txtTitle.textColor = 0x000000;
        this._txtTitle.textAlign = egret.HorizontalAlign.CENTER;
        this._txtTitle.width = 200;
        this._txtTitle.size = 26;
        this._txtTitle.text = this.getTitle();
        this._txtTitle.x = (stageW - this._txtTitle.width)/2;
        this._txtTitle.y = 325;
        this.addChild(this._txtTitle);

    }
    private tapHandler(e:egret.TouchEvent)
    {
    	this.dispatchEvent(new egret.Event("GameStart"));
    }
    private getText():string
    {
		//根据得分计算打败了全国的多少玩家
		//并且结算获得了什么称号
		//其实都是随机的，作者太懒了-_-|||
    	var rank:number = 68.9;
    	//MainUI.totalScore = 1100;
    	if(MainUI.totalScore > 1500)
    	{
    		rank = Math.random() * 10.00 + 90.00;
    	}
    	else if(MainUI.totalScore > 1000)
    	{
    		rank = Math.random() * 10.00 + 80.00;
    	}
    	else if(MainUI.totalScore > 500)
    	{
    		rank = Math.random() * 10.00 + 70.00;
    	}
    	else
    	{
    		rank = Math.random() * 10.00 + 60.00;
    	}
    	if(MainUI.totalScore == 0)
    	{
    		rank = 0;
    	}
    	rank = Math.floor(rank * 100)/100;
    	//rank = rank/100;
    	return "恭喜你获得了总分\n" + MainUI.totalScore.toString() + "\n击败了全国" + rank.toString() + "%的玩家"
    			+"\n获得了称号\n“"+this.getTitle()+"”";
    }
    private getTitle():string
    {
    	var a = ["烧鸡达人","金牌减肥教练","贱贱的笑了","猪是念来过倒","药不能停","最佳备胎"];
    	var index = Math.floor(Math.random() * a.length);
    	return a[index];
    }
}