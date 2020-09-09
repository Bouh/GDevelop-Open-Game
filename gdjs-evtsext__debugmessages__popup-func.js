gdjs.evtsExt__DebugMessages__popup = {};

gdjs.evtsExt__DebugMessages__popup.conditionTrue_0 = {val:false};
gdjs.evtsExt__DebugMessages__popup.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__DebugMessages__popup.userFunc0x1c6e630 = function(runtimeScene, eventsFunctionContext) {
"use strict";
alert(eventsFunctionContext.getArgument("message"));
};
gdjs.evtsExt__DebugMessages__popup.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DebugMessages__popup.userFunc0x1c6e630(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__DebugMessages__popup.func = function(runtimeScene, message, parentEventsFunctionContext) {
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
if (argName === "message") return message;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__DebugMessages__popup.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

