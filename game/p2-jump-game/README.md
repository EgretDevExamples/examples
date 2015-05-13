粒子特效展示

粒子库下载：https://github.com/egret-labs/egret-game-library/

粒子库文件夹 p2


需要倒入第三方库，目录需要与项目文件夹平级。

例如项目路径 C:\project\demo\src

拷贝 libsrc 第三方粒子库文件夹位置到  C:\project\

修改egretProperties.json文件 modules 中增加		
{
	"name": "physics",
	"path": "../libsrc/physics"
}

---------------------------------------------
最终结构：

C:\project\demo\src
C:\project\libsrc\physics

在拷贝完成后,需要执行一次 

webStorm 需要执行egret build -e

EgretVS  需要执行《编译项目与Egret引擎》

---------------------------------------------

本示例中 

新建一个工程。

拷贝code中的文件到与src同级目录覆盖。

拷贝libsrc文件夹到src上上级。

编译一次项目。


