gdjs.IntroCode = {};
gdjs.IntroCode.GDfade_95tiled_95spriteObjects1= [];
gdjs.IntroCode.GDfade_95tiled_95spriteObjects2= [];

gdjs.IntroCode.conditionTrue_0 = {val:false};
gdjs.IntroCode.condition0IsTrue_0 = {val:false};


gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{



}


{


{
{gdjs.evtTools.p2p.useDefaultBrokerServer();
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Overworld", true);
}}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDfade_95tiled_95spriteObjects1.length = 0;
gdjs.IntroCode.GDfade_95tiled_95spriteObjects2.length = 0;

gdjs.IntroCode.eventsList0(runtimeScene);
return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
