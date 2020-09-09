gdjs.evtsExt__BackgroundScene__loadBGScene = {};

gdjs.evtsExt__BackgroundScene__loadBGScene.conditionTrue_0 = {val:false};
gdjs.evtsExt__BackgroundScene__loadBGScene.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__BackgroundScene__loadBGScene.userFunc0x1c6e630 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const runtimeGame = runtimeScene.getGame();
runtimeGame.scenes = runtimeGame.scenes || {};
const name = eventsFunctionContext.getArgument("sceneName");

for(let layout of runtimeGame.getGameData().layouts) {
    if(layout.name === name) {
        const newScene = new gdjs.RuntimeScene(runtimeGame);
        newScene.loadFromScene(layout);
        runtimeGame.scenes[name] = newScene;
        newScene.onPause(); // Scene is paused for now
        break;
    }
}

};
gdjs.evtsExt__BackgroundScene__loadBGScene.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__BackgroundScene__loadBGScene.userFunc0x1c6e630(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__BackgroundScene__loadBGScene.func = function(runtimeScene, sceneName, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
if (argName === "sceneName") return sceneName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__BackgroundScene__loadBGScene.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

