gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.GDTitleObjects1= [];
gdjs.MenuCode.GDTitleObjects2= [];
gdjs.MenuCode.GDPress_9595any_9595keyObjects1= [];
gdjs.MenuCode.GDPress_9595any_9595keyObjects2= [];
gdjs.MenuCode.GDNewSprite5Objects1= [];
gdjs.MenuCode.GDNewSprite5Objects2= [];
gdjs.MenuCode.GDScoreObjects1= [];
gdjs.MenuCode.GDScoreObjects2= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyReleased(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


};gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.MenuCode.eventsList0(runtimeScene);
}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDPress_9595any_9595keyObjects1.length = 0;
gdjs.MenuCode.GDPress_9595any_9595keyObjects2.length = 0;
gdjs.MenuCode.GDNewSprite5Objects1.length = 0;
gdjs.MenuCode.GDNewSprite5Objects2.length = 0;
gdjs.MenuCode.GDScoreObjects1.length = 0;
gdjs.MenuCode.GDScoreObjects2.length = 0;

gdjs.MenuCode.eventsList1(runtimeScene);

return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
