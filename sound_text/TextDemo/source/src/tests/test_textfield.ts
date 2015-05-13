/**
 * Created by huanghaiying on 15/3/25.
 */
module input {
    export function random(min, max) {
        return Math.round(Math.random() * (max - min)) + min;
    }

    export function getTextStr() {
        var allText = "可以创建一个新的分支，也可以查看当前仓库里所有的分支。git branch test创建名为test的分支，可以用git checkout test切换到test分支工作。如果仓库下的某分支不用了，可以用“git branch -d”命令把这个分支删掉。如果你想要删除的分支还没有被合并到其它分支中去，那么就不能用“git branch -d”来删除它，需要改用“git branch -D”来强制删除。从暂存区恢复文件到工作区git checkout  --  <file>；有可以把Git 仓库（隐藏目录中的那些文件）导出到工作目录中；可以切换到某分支进行工作。Git把所有的历史提交信息全部存储在“Git目录”里，它就是一个Git项目的仓库；你对本地的源代码进行编辑修改后创建的提交也都会先保存在这里面，然后再推送到远端的服务器。当我们把项目目录和“Git目录”一起拷到其它电脑里，它能马上正常的工作（所有的提交信息全都保存在Git目录里）；甚至可以只把“Git目录”拷走也行，但是要再签出（checkout）一次。git checkout -- filename 这个是恢复到某文件修改前的版本，这样你做的本地修改都忽略不见了；如果不带具体文件名，只会提示更改记录，并不会做任何更新。git-checkout -f ，可以使用 -f 选项导出文件，覆盖本地修改，这样就可以将您带回到一个干净的状态。";
        var rand1 = random(10, 20);
        var result = "";
        for (var i = 0; i < rand1; ++i) {
            var rand2 = random(0, allText.length - 1);
            result += allText.substring(rand2, rand2 + 1);
        }
        return result;
    }

    export function testTextFieldChangeText() {

        var c:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        var input = new egret.TextField();
        input.size = 60;
        c.addChild(input);

        var textCount = 0;

        function create() {
            egret.setTimeout(function () {
                textCount++;
                input.text = getTextStr();
                input.x = 480 * Math.random();
                input.y = 800 * Math.random();
                console.log("textCount------>" + textCount);

                create();
            }, this, 100);
        }

        create();
        return c;
    }

    export function testAddText() {
        var c:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        var textCount = 0;
        function create() {
            egret.setTimeout(function () {
                textCount++;
                var uiText = new egret.TextField();
                uiText.text = (getTextStr());
                uiText.size = (60);
                uiText.anchorX = 0.5;
                uiText.anchorY = 0.5;
                uiText.x = 480 * Math.random();
                uiText.y = 800 * Math.random();
                c.addChild(uiText);
                console.log("textCount------>" + textCount);

                if (c.numChildren > 5) {
                    //c.removeChildAt(0);
                }
                create();
            }, this, 50);
        }

        create();
        return c;
    }
}