gdjs.FunctionsIncludesCode = {};
gdjs.FunctionsIncludesCode.GDfade_95tiled_95spriteObjects1= [];
gdjs.FunctionsIncludesCode.GDfade_95tiled_95spriteObjects2= [];

gdjs.FunctionsIncludesCode.conditionTrue_0 = {val:false};
gdjs.FunctionsIncludesCode.condition0IsTrue_0 = {val:false};
gdjs.FunctionsIncludesCode.condition1IsTrue_0 = {val:false};
gdjs.FunctionsIncludesCode.condition2IsTrue_0 = {val:false};
gdjs.FunctionsIncludesCode.conditionTrue_1 = {val:false};
gdjs.FunctionsIncludesCode.condition0IsTrue_1 = {val:false};
gdjs.FunctionsIncludesCode.condition1IsTrue_1 = {val:false};
gdjs.FunctionsIncludesCode.condition2IsTrue_1 = {val:false};


gdjs.FunctionsIncludesCode.eventsList0 = function(runtimeScene) {

{



}


{



}


{


gdjs.FunctionsIncludesCode.condition0IsTrue_0.val = false;
gdjs.FunctionsIncludesCode.condition1IsTrue_0.val = false;
{
gdjs.FunctionsIncludesCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.FunctionsIncludesCode.condition0IsTrue_0.val ) {
{
gdjs.FunctionsIncludesCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(15)) == "toggled";
}}
if (gdjs.FunctionsIncludesCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, false);
}}

}


{


gdjs.FunctionsIncludesCode.condition0IsTrue_0.val = false;
gdjs.FunctionsIncludesCode.condition1IsTrue_0.val = false;
{
gdjs.FunctionsIncludesCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.FunctionsIncludesCode.condition0IsTrue_0.val ) {
{
gdjs.FunctionsIncludesCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(15)) == "untoggled";
}}
if (gdjs.FunctionsIncludesCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, false);
}}

}


{


{
{}}

}


{


{
{}{gdjs.evtTools.input.hideCursor(runtimeScene);
}}

}


{


gdjs.FunctionsIncludesCode.condition0IsTrue_0.val = false;
gdjs.FunctionsIncludesCode.condition1IsTrue_0.val = false;
if ( gdjs.FunctionsIncludesCode.condition0IsTrue_0.val ) {
}
if (gdjs.FunctionsIncludesCode.condition1IsTrue_0.val) {
{}{}}

}


{


gdjs.FunctionsIncludesCode.condition0IsTrue_0.val = false;
if (gdjs.FunctionsIncludesCode.condition0IsTrue_0.val) {
{}}

}


{


{
}

}


{



}


{



}


{



}


{



}


{


{
{}}

}


{


{
{}}

}


{



}


{


gdjs.FunctionsIncludesCode.condition0IsTrue_0.val = false;
gdjs.FunctionsIncludesCode.condition1IsTrue_0.val = false;
{
gdjs.FunctionsIncludesCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "c");
}if ( gdjs.FunctionsIncludesCode.condition0IsTrue_0.val ) {
{
{gdjs.FunctionsIncludesCode.conditionTrue_1 = gdjs.FunctionsIncludesCode.condition1IsTrue_0;
gdjs.FunctionsIncludesCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(29537796);
}
}}
if (gdjs.FunctionsIncludesCode.condition1IsTrue_0.val) {
{gdjs.evtTools.p2p.connect(gdjs.evtsExt__DebugMessages__prompt.func(runtimeScene, "Enter the Companion app connection ID", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}}

}


{


gdjs.FunctionsIncludesCode.condition0IsTrue_0.val = false;
{
gdjs.FunctionsIncludesCode.condition0IsTrue_0.val = gdjs.evtTools.p2p.onEvent("SayHi", true);
}if (gdjs.FunctionsIncludesCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__DebugMessages__popup.func(runtimeScene, "Hi", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.FunctionsIncludesCode.condition0IsTrue_0.val = false;
gdjs.FunctionsIncludesCode.condition1IsTrue_0.val = false;
{
gdjs.FunctionsIncludesCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if ( gdjs.FunctionsIncludesCode.condition0IsTrue_0.val ) {
{
gdjs.FunctionsIncludesCode.condition1IsTrue_0.val = gdjs.evtTools.systemInfo.isPreview(runtimeScene);
}}
if (gdjs.FunctionsIncludesCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


gdjs.FunctionsIncludesCode.condition0IsTrue_0.val = false;
{
gdjs.FunctionsIncludesCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(true);
}if (gdjs.FunctionsIncludesCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__BackgroundScene__loadBGScene.func(runtimeScene, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__BackgroundScene__switchBack.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__BackgroundScene__switchToBGScene.func(runtimeScene, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__RoomManager__goToRoom.func(runtimeScene, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__RoomManager__registerRoom.func(runtimeScene, 0, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{}}

}


};

gdjs.FunctionsIncludesCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FunctionsIncludesCode.GDfade_95tiled_95spriteObjects1.length = 0;
gdjs.FunctionsIncludesCode.GDfade_95tiled_95spriteObjects2.length = 0;

gdjs.FunctionsIncludesCode.eventsList0(runtimeScene);
return;

}

gdjs['FunctionsIncludesCode'] = gdjs.FunctionsIncludesCode;
