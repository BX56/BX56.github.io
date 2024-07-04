gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDPewObjects1= [];
gdjs.Untitled_32sceneCode.GDPewObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1= [];
gdjs.Untitled_32sceneCode.GDNewSprite2Objects2= [];
gdjs.Untitled_32sceneCode.GDKaboomObjects1= [];
gdjs.Untitled_32sceneCode.GDKaboomObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSprite3Objects1= [];
gdjs.Untitled_32sceneCode.GDNewSprite3Objects2= [];
gdjs.Untitled_32sceneCode.GDNewSprite4Objects1= [];
gdjs.Untitled_32sceneCode.GDNewSprite4Objects2= [];
gdjs.Untitled_32sceneCode.GDGame_9595OverObjects1= [];
gdjs.Untitled_32sceneCode.GDGame_9595OverObjects2= [];
gdjs.Untitled_32sceneCode.GDShieldObjects1= [];
gdjs.Untitled_32sceneCode.GDShieldObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSprite5Objects1= [];
gdjs.Untitled_32sceneCode.GDNewSprite5Objects2= [];
gdjs.Untitled_32sceneCode.GDScoreObjects1= [];
gdjs.Untitled_32sceneCode.GDScoreObjects2= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.Untitled_32sceneCode.GDNewSprite3Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Untitled_32sceneCode.GDNewSprite2Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.Untitled_32sceneCode.GDNewSprite3Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDShieldObjects1Objects = Hashtable.newFrom({"Shield": gdjs.Untitled_32sceneCode.GDShieldObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPewObjects1Objects = Hashtable.newFrom({"Pew": gdjs.Untitled_32sceneCode.GDPewObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPewObjects1Objects = Hashtable.newFrom({"Pew": gdjs.Untitled_32sceneCode.GDPewObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Untitled_32sceneCode.GDNewSprite2Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDKaboomObjects1Objects = Hashtable.newFrom({"Kaboom": gdjs.Untitled_32sceneCode.GDKaboomObjects1});
gdjs.Untitled_32sceneCode.asyncCallback9119460 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Kaboom"), gdjs.Untitled_32sceneCode.GDKaboomObjects2);

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDKaboomObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDKaboomObjects2[i].deleteFromScene(runtimeScene);
}
}gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
for (const obj of gdjs.Untitled_32sceneCode.GDKaboomObjects1) asyncObjectsList.addObject("Kaboom", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback9119460(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Untitled_32sceneCode.GDNewSprite2Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Untitled_32sceneCode.GDNewSpriteObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGame_95959595OverObjects1Objects = Hashtable.newFrom({"Game_Over": gdjs.Untitled_32sceneCode.GDGame_9595OverObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDKaboomObjects1Objects = Hashtable.newFrom({"Kaboom": gdjs.Untitled_32sceneCode.GDKaboomObjects1});
gdjs.Untitled_32sceneCode.asyncCallback9122588 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Kaboom"), gdjs.Untitled_32sceneCode.GDKaboomObjects2);

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDKaboomObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDKaboomObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(true);
}gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
for (const obj of gdjs.Untitled_32sceneCode.GDKaboomObjects1) asyncObjectsList.addObject("Kaboom", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback9122588(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDShieldObjects1Objects = Hashtable.newFrom({"Shield": gdjs.Untitled_32sceneCode.GDShieldObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Untitled_32sceneCode.GDNewSpriteObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Untitled_32sceneCode.GDNewSprite2Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Untitled_32sceneCode.GDNewSpriteObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDKaboomObjects1Objects = Hashtable.newFrom({"Kaboom": gdjs.Untitled_32sceneCode.GDKaboomObjects1});
gdjs.Untitled_32sceneCode.asyncCallback9126628 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Kaboom"), gdjs.Untitled_32sceneCode.GDKaboomObjects2);

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDKaboomObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDKaboomObjects2[i].deleteFromScene(runtimeScene);
}
}gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
for (const obj of gdjs.Untitled_32sceneCode.GDKaboomObjects1) asyncObjectsList.addObject("Kaboom", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback9126628(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Untitled scene");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "Lazer1.wav");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "Hit.wav");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "Game Over.wav");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "RingCollected.wav");
}{gdjs.evtTools.sound.preloadMusic(runtimeScene, "Macbeth.mp3");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.variable.valuePush(runtimeScene.getGame().getVariables().getFromIndex(0), 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Spawn");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SpawnPowerUp");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Macbeth.mp3", 69, false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32sceneCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].getVariables().getFromIndex(1)).setBoolean(false);
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Untitled_32sceneCode.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Spawn") > 1.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickRandomObject((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite3Objects1Objects);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDNewSprite3Objects1 */
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Spawn");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite2Objects1Objects, (( gdjs.Untitled_32sceneCode.GDNewSprite3Objects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDNewSprite3Objects1[0].getPointX("")), (( gdjs.Untitled_32sceneCode.GDNewSprite3Objects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDNewSprite3Objects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSprite2Objects1[i].addForce(-(400), 0, 1);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSprite2Objects1[i].getBehavior("Scale").setScale(4);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSprite2Objects1[i].setY(gdjs.Untitled_32sceneCode.GDNewSprite2Objects1[i].getY() - (90));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSprite2Objects1[i].setAngle(gdjs.Untitled_32sceneCode.GDNewSprite2Objects1[i].getAngle() - (90));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Untitled_32sceneCode.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "SpawnPowerUp") > 10;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickRandomObject((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite3Objects1Objects);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDNewSprite3Objects1 */
gdjs.Untitled_32sceneCode.GDShieldObjects1.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SpawnPowerUp");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDShieldObjects1Objects, (( gdjs.Untitled_32sceneCode.GDNewSprite3Objects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDNewSprite3Objects1[0].getPointX("")), (( gdjs.Untitled_32sceneCode.GDNewSprite3Objects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDNewSprite3Objects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDShieldObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDShieldObjects1[i].addForce(-(400), 0, 1);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDShieldObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDShieldObjects1[i].getBehavior("Scale").setScale(4);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDShieldObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDShieldObjects1[i].setY(gdjs.Untitled_32sceneCode.GDShieldObjects1[i].getY() - (90));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32sceneCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].setY(gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].getY() - (20));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32sceneCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].setY(gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].getY() + (20));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32sceneCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "z");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].getVariableBoolean(gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[k] = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDNewSpriteObjects1 */
gdjs.Untitled_32sceneCode.GDPewObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPewObjects1Objects, (( gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[0].getPointX("")), (( gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPewObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPewObjects1[i].setX(gdjs.Untitled_32sceneCode.GDPewObjects1[i].getX() + (250));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPewObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPewObjects1[i].setY(gdjs.Untitled_32sceneCode.GDPewObjects1[i].getY() + (55));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPewObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPewObjects1[i].addForce(1920, 0, 1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Lazer1.wav", false, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Untitled_32sceneCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pew"), gdjs.Untitled_32sceneCode.GDPewObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPewObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDNewSprite2Objects1 */
/* Reuse gdjs.Untitled_32sceneCode.GDPewObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Untitled_32sceneCode.GDScoreObjects1);
gdjs.Untitled_32sceneCode.GDKaboomObjects1.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "Hit.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSprite2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPewObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPewObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDScoreObjects1[i].getBehavior("Text").setText("Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDKaboomObjects1Objects, (( gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDNewSprite2Objects1[0].getPointX("")), (( gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDNewSprite2Objects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDKaboomObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDKaboomObjects1[i].getBehavior("Scale").setScale(gdjs.Untitled_32sceneCode.GDKaboomObjects1[i].getBehavior("Scale").getScale() + (2));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDKaboomObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDKaboomObjects1[i].setX(gdjs.Untitled_32sceneCode.GDKaboomObjects1[i].getX() + (50));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDKaboomObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDKaboomObjects1[i].setY(gdjs.Untitled_32sceneCode.GDKaboomObjects1[i].getY() + (50));
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32sceneCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Untitled_32sceneCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite2Objects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].getVariableBoolean(gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].getVariables().getFromIndex(1), false) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[k] = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDNewSpriteObjects1 */
gdjs.Untitled_32sceneCode.GDGame_9595OverObjects1.length = 0;

gdjs.Untitled_32sceneCode.GDKaboomObjects1.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "Game Over.wav", false, 100, 1);
}{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 69);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].toggleVariableBoolean(gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].getVariables().getFromIndex(0));
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "Spawn");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGame_95959595OverObjects1Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGame_9595OverObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGame_9595OverObjects1[i].setZOrder(15);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGame_9595OverObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGame_9595OverObjects1[i].setX(80);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGame_9595OverObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGame_9595OverObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGame_9595OverObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGame_9595OverObjects1[i].getBehavior("Tween").addObjectOpacityTween2("Fade", 255, "linear", 1, false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDKaboomObjects1Objects, (( gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[0].getPointX("")), (( gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDKaboomObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDKaboomObjects1[i].getBehavior("Scale").setScale(gdjs.Untitled_32sceneCode.GDKaboomObjects1[i].getBehavior("Scale").getScale() + (2));
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32sceneCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shield"), gdjs.Untitled_32sceneCode.GDShieldObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDShieldObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].getVariableBoolean(gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].getVariables().getFromIndex(1), false) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[k] = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDNewSpriteObjects1 */
/* Reuse gdjs.Untitled_32sceneCode.GDShieldObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "RingCollected.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].toggleVariableBoolean(gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].getVariables().getFromIndex(1));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDShieldObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDShieldObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32sceneCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Untitled_32sceneCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite2Objects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].getVariableBoolean(gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].getVariables().getFromIndex(1), true) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[k] = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDNewSpriteObjects1 */
/* Reuse gdjs.Untitled_32sceneCode.GDNewSprite2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Untitled_32sceneCode.GDScoreObjects1);
gdjs.Untitled_32sceneCode.GDKaboomObjects1.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "Hit.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSprite2Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDScoreObjects1[i].getBehavior("Text").setText("Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].toggleVariableBoolean(gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].getVariables().getFromIndex(1));
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDKaboomObjects1Objects, (( gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDNewSprite2Objects1[0].getPointX("")), (( gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDNewSprite2Objects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDKaboomObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDKaboomObjects1[i].getBehavior("Scale").setScale(gdjs.Untitled_32sceneCode.GDKaboomObjects1[i].getBehavior("Scale").getScale() + (2));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDKaboomObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDKaboomObjects1[i].setX(gdjs.Untitled_32sceneCode.GDKaboomObjects1[i].getX() + (50));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDKaboomObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDKaboomObjects1[i].setY(gdjs.Untitled_32sceneCode.GDKaboomObjects1[i].getY() + (50));
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(1), true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyReleased(runtimeScene);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPewObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPewObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDKaboomObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDKaboomObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite4Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite4Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDGame_9595OverObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGame_9595OverObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDShieldObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDShieldObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite5Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite5Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDScoreObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDScoreObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList3(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
