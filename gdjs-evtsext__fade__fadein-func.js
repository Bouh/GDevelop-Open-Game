gdjs.evtsExt__fade__Fadein = {};
gdjs.evtsExt__fade__Fadein.GDObjectObjects1= [];
gdjs.evtsExt__fade__Fadein.GDObjectObjects2= [];

gdjs.evtsExt__fade__Fadein.conditionTrue_0 = {val:false};
gdjs.evtsExt__fade__Fadein.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__fade__Fadein.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__fade__Fadein.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__fade__Fadein.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__fade__Fadein.GDObjectObjects1[i].setOpacity(gdjs.evtsExt__fade__Fadein.GDObjectObjects1[i].getOpacity() - (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 100));
}
}}

}


{


{
}

}


};

gdjs.evtsExt__fade__Fadein.func = function(runtimeScene, Object, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__fade__Fadein.GDObjectObjects1.length = 0;
gdjs.evtsExt__fade__Fadein.GDObjectObjects2.length = 0;

gdjs.evtsExt__fade__Fadein.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

