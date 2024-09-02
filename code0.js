gdjs.Menu_32SceneCode = {};
gdjs.Menu_32SceneCode.localVariables = [];
gdjs.Menu_32SceneCode.GDTitleImgObjects1= [];
gdjs.Menu_32SceneCode.GDTitleImgObjects2= [];
gdjs.Menu_32SceneCode.GDTitleImgObjects3= [];
gdjs.Menu_32SceneCode.GDTitleImgObjects4= [];
gdjs.Menu_32SceneCode.GDPlayBtnObjects1= [];
gdjs.Menu_32SceneCode.GDPlayBtnObjects2= [];
gdjs.Menu_32SceneCode.GDPlayBtnObjects3= [];
gdjs.Menu_32SceneCode.GDPlayBtnObjects4= [];
gdjs.Menu_32SceneCode.GDEmojiImgObjects1= [];
gdjs.Menu_32SceneCode.GDEmojiImgObjects2= [];
gdjs.Menu_32SceneCode.GDEmojiImgObjects3= [];
gdjs.Menu_32SceneCode.GDEmojiImgObjects4= [];
gdjs.Menu_32SceneCode.GDBackgroundObjects1= [];
gdjs.Menu_32SceneCode.GDBackgroundObjects2= [];
gdjs.Menu_32SceneCode.GDBackgroundObjects3= [];
gdjs.Menu_32SceneCode.GDBackgroundObjects4= [];
gdjs.Menu_32SceneCode.GDSoundOnBtnObjects1= [];
gdjs.Menu_32SceneCode.GDSoundOnBtnObjects2= [];
gdjs.Menu_32SceneCode.GDSoundOnBtnObjects3= [];
gdjs.Menu_32SceneCode.GDSoundOnBtnObjects4= [];
gdjs.Menu_32SceneCode.GDSoundOffBtnObjects1= [];
gdjs.Menu_32SceneCode.GDSoundOffBtnObjects2= [];
gdjs.Menu_32SceneCode.GDSoundOffBtnObjects3= [];
gdjs.Menu_32SceneCode.GDSoundOffBtnObjects4= [];
gdjs.Menu_32SceneCode.GDLevelBtnObjects1= [];
gdjs.Menu_32SceneCode.GDLevelBtnObjects2= [];
gdjs.Menu_32SceneCode.GDLevelBtnObjects3= [];
gdjs.Menu_32SceneCode.GDLevelBtnObjects4= [];
gdjs.Menu_32SceneCode.GDSnowObjects1= [];
gdjs.Menu_32SceneCode.GDSnowObjects2= [];
gdjs.Menu_32SceneCode.GDSnowObjects3= [];
gdjs.Menu_32SceneCode.GDSnowObjects4= [];


gdjs.Menu_32SceneCode.mapOfGDgdjs_9546Menu_959532SceneCode_9546GDSnowObjects2Objects = Hashtable.newFrom({"Snow": gdjs.Menu_32SceneCode.GDSnowObjects2});
gdjs.Menu_32SceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.Menu_32SceneCode.GDBackgroundObjects2);
gdjs.Menu_32SceneCode.GDSnowObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Menu_32SceneCode.mapOfGDgdjs_9546Menu_959532SceneCode_9546GDSnowObjects2Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.Menu_32SceneCode.GDSnowObjects2.length ;i < len;++i) {
    gdjs.Menu_32SceneCode.GDSnowObjects2[i].setCenterPositionInScene((( gdjs.Menu_32SceneCode.GDBackgroundObjects2.length === 0 ) ? 0 :gdjs.Menu_32SceneCode.GDBackgroundObjects2[0].getCenterXInScene()),0);
}
}{for(var i = 0, len = gdjs.Menu_32SceneCode.GDSnowObjects2.length ;i < len;++i) {
    gdjs.Menu_32SceneCode.GDSnowObjects2[i].setAngle(90);
}
}{for(var i = 0, len = gdjs.Menu_32SceneCode.GDSnowObjects2.length ;i < len;++i) {
    gdjs.Menu_32SceneCode.GDSnowObjects2[i].setZOrder(100);
}
}}

}


};gdjs.Menu_32SceneCode.eventsList1 = function(runtimeScene) {

{


gdjs.Menu_32SceneCode.eventsList0(runtimeScene);
}


};gdjs.Menu_32SceneCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.window.isFullScreen(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.Menu_32SceneCode.GDBackgroundObjects3);
{for(var i = 0, len = gdjs.Menu_32SceneCode.GDBackgroundObjects3.length ;i < len;++i) {
    gdjs.Menu_32SceneCode.GDBackgroundObjects3[i].getBehavior("Resizable").setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.window.isFullScreen(runtimeScene));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.Menu_32SceneCode.GDBackgroundObjects2);
{for(var i = 0, len = gdjs.Menu_32SceneCode.GDBackgroundObjects2.length ;i < len;++i) {
    gdjs.Menu_32SceneCode.GDBackgroundObjects2[i].getBehavior("Resizable").setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}}

}


};gdjs.Menu_32SceneCode.mapOfGDgdjs_9546Menu_959532SceneCode_9546GDEmojiImgObjects4Objects = Hashtable.newFrom({"EmojiImg": gdjs.Menu_32SceneCode.GDEmojiImgObjects4});
gdjs.Menu_32SceneCode.eventsList3 = function(runtimeScene) {

};gdjs.Menu_32SceneCode.eventsList4 = function(runtimeScene) {

{


const keyIteratorReference4 = gdjs.Menu_32SceneCode.localVariables[0].getFromIndex(3);
const valueIteratorReference4 = gdjs.Menu_32SceneCode.localVariables[0].getFromIndex(2);
const iterableReference4 = gdjs.Menu_32SceneCode.localVariables[0].getFromIndex(0).getChild("emojis");
if(!iterableReference4.isPrimitive()) {
for(
    const iteratorKey4 in 
    iterableReference4.getType() === "structure"
      ? iterableReference4.getAllChildren()
      : iterableReference4.getType() === "array"
        ? iterableReference4.getAllChildrenArray()
        : []
) {
    if(iterableReference4.getType() === "structure")
        keyIteratorReference4.setString(iteratorKey4);
    else if(iterableReference4.getType() === "array")
        keyIteratorReference4.setNumber(iteratorKey4);
    const structureChildVariable4 = iterableReference4.getChild(iteratorKey4)
    valueIteratorReference4.castTo(structureChildVariable4.getType())
    if(structureChildVariable4.isPrimitive()) {
        valueIteratorReference4.setValue(structureChildVariable4.getValue());
    } else if (structureChildVariable4.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference4.replaceChildren(structureChildVariable4.getAllChildren());
    } else if (structureChildVariable4.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference4.replaceChildrenArray(structureChildVariable4.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);
gdjs.copyArray(runtimeScene.getObjects("EmojiImg"), gdjs.Menu_32SceneCode.GDEmojiImgObjects4);

let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite.func(runtimeScene, "https://cdngarenanow-a.akamaihd.net/gstaticid/gdevelop/emoji/" + gdjs.Menu_32SceneCode.localVariables[0].getFromIndex(2).getAsString() + ".png", gdjs.Menu_32SceneCode.mapOfGDgdjs_9546Menu_959532SceneCode_9546GDEmojiImgObjects4Objects, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}
}
}

}


};gdjs.Menu_32SceneCode.eventsList5 = function(runtimeScene) {

{


const keyIteratorReference2 = gdjs.Menu_32SceneCode.localVariables[0].getFromIndex(1);
const valueIteratorReference2 = gdjs.Menu_32SceneCode.localVariables[0].getFromIndex(0);
const iterableReference2 = runtimeScene.getGame().getVariables().getFromIndex(0);
if(!iterableReference2.isPrimitive()) {
for(
    const iteratorKey2 in 
    iterableReference2.getType() === "structure"
      ? iterableReference2.getAllChildren()
      : iterableReference2.getType() === "array"
        ? iterableReference2.getAllChildrenArray()
        : []
) {
    if(iterableReference2.getType() === "structure")
        keyIteratorReference2.setString(iteratorKey2);
    else if(iterableReference2.getType() === "array")
        keyIteratorReference2.setNumber(iteratorKey2);
    const structureChildVariable2 = iterableReference2.getChild(iteratorKey2)
    valueIteratorReference2.castTo(structureChildVariable2.getType())
    if(structureChildVariable2.isPrimitive()) {
        valueIteratorReference2.setValue(structureChildVariable2.getValue());
    } else if (structureChildVariable2.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference2.replaceChildren(structureChildVariable2.getAllChildren());
    } else if (structureChildVariable2.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference2.replaceChildrenArray(structureChildVariable2.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.Menu_32SceneCode.eventsList4(runtimeScene);} //Subevents end.
}
}
}

}


};gdjs.Menu_32SceneCode.eventsList6 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Menu_32SceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.Menu_32SceneCode.eventsList2(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("nktldn", "myLevel");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("nktldn", "myLevel", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(2));
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("PlayBtn"), gdjs.Menu_32SceneCode.GDPlayBtnObjects2);
gdjs.copyArray(runtimeScene.getObjects("TitleImg"), gdjs.Menu_32SceneCode.GDTitleImgObjects2);
{for(var i = 0, len = gdjs.Menu_32SceneCode.GDTitleImgObjects2.length ;i < len;++i) {
    gdjs.Menu_32SceneCode.GDTitleImgObjects2[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) + (gdjs.Menu_32SceneCode.GDTitleImgObjects2[i].getHeight()));
}
}{for(var i = 0, len = gdjs.Menu_32SceneCode.GDPlayBtnObjects2.length ;i < len;++i) {
    gdjs.Menu_32SceneCode.GDPlayBtnObjects2[i].setCenterPositionInScene((( gdjs.Menu_32SceneCode.GDTitleImgObjects2.length === 0 ) ? 0 :gdjs.Menu_32SceneCode.GDTitleImgObjects2[0].getCenterXInScene()),(( gdjs.Menu_32SceneCode.GDTitleImgObjects2.length === 0 ) ? 0 :gdjs.Menu_32SceneCode.GDTitleImgObjects2[0].getCenterYInScene()) + 137.5);
}
}{for(var i = 0, len = gdjs.Menu_32SceneCode.GDTitleImgObjects2.length ;i < len;++i) {
    gdjs.Menu_32SceneCode.GDTitleImgObjects2[i].getBehavior("Tween").addObjectPositionYTween2("title", 85, "easeInOutExpo", 0.75, false);
}
}{for(var i = 0, len = gdjs.Menu_32SceneCode.GDPlayBtnObjects2.length ;i < len;++i) {
    gdjs.Menu_32SceneCode.GDPlayBtnObjects2[i].getBehavior("Tween").addObjectPositionYTween2("playBtn", 415, "easeInOutExpo", 0.75, false);
}
}}

}


{



}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variables._declare("level", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("levelIndex", variable);
}
{
const variable = new gdjs.Variable();
variable.setString("-");
variables._declare("emoji", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("emojiIndex", variable);
}
gdjs.Menu_32SceneCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.Menu_32SceneCode.eventsList5(runtimeScene);} //End of subevents
}
gdjs.Menu_32SceneCode.localVariables.pop();

}


};gdjs.Menu_32SceneCode.asyncCallback13999212 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Menu_32SceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("PlayBtn"), gdjs.Menu_32SceneCode.GDPlayBtnObjects4);

{for(var i = 0, len = gdjs.Menu_32SceneCode.GDPlayBtnObjects4.length ;i < len;++i) {
    gdjs.Menu_32SceneCode.GDPlayBtnObjects4[i].getBehavior("Tween").removeTween("PressedScale");
}
}gdjs.Menu_32SceneCode.localVariables.length = 0;
}
gdjs.Menu_32SceneCode.eventsList7 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Menu_32SceneCode.localVariables);
for (const obj of gdjs.Menu_32SceneCode.GDPlayBtnObjects3) asyncObjectsList.addObject("PlayBtn", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Menu_32SceneCode.asyncCallback13999212(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Menu_32SceneCode.asyncCallback13998748 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Menu_32SceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("PlayBtn"), gdjs.Menu_32SceneCode.GDPlayBtnObjects3);

{for(var i = 0, len = gdjs.Menu_32SceneCode.GDPlayBtnObjects3.length ;i < len;++i) {
    gdjs.Menu_32SceneCode.GDPlayBtnObjects3[i].getBehavior("Tween").addObjectScaleTween3("PressedScale", 1, "linear", 0.2, false, true);
}
}
{ //Subevents
gdjs.Menu_32SceneCode.eventsList7(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Menu_32SceneCode.localVariables.length = 0;
}
gdjs.Menu_32SceneCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Menu_32SceneCode.localVariables);
for (const obj of gdjs.Menu_32SceneCode.GDPlayBtnObjects2) asyncObjectsList.addObject("PlayBtn", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Menu_32SceneCode.asyncCallback13998748(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Menu_32SceneCode.asyncCallback14000164 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Menu_32SceneCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level Scene", true);
}gdjs.Menu_32SceneCode.localVariables.length = 0;
}
gdjs.Menu_32SceneCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Menu_32SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Menu_32SceneCode.asyncCallback14000164(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Menu_32SceneCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), false, false);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.Menu_32SceneCode.GDPlayBtnObjects1, gdjs.Menu_32SceneCode.GDPlayBtnObjects2);

{for(var i = 0, len = gdjs.Menu_32SceneCode.GDPlayBtnObjects2.length ;i < len;++i) {
    gdjs.Menu_32SceneCode.GDPlayBtnObjects2[i].getBehavior("Tween").addObjectScaleTween3("PressedScale", 0.9, "linear", 0.2, false, true);
}
}
{ //Subevents
gdjs.Menu_32SceneCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.Menu_32SceneCode.GDPlayBtnObjects1 */
gdjs.copyArray(runtimeScene.getObjects("TitleImg"), gdjs.Menu_32SceneCode.GDTitleImgObjects1);
{for(var i = 0, len = gdjs.Menu_32SceneCode.GDTitleImgObjects1.length ;i < len;++i) {
    gdjs.Menu_32SceneCode.GDTitleImgObjects1[i].getBehavior("Tween").addObjectPositionYTween2("title", 0 - (gdjs.Menu_32SceneCode.GDTitleImgObjects1[i].getHeight()), "easeInOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.Menu_32SceneCode.GDPlayBtnObjects1.length ;i < len;++i) {
    gdjs.Menu_32SceneCode.GDPlayBtnObjects1[i].getBehavior("Tween").addObjectPositionYTween2("title", 0 - (( gdjs.Menu_32SceneCode.GDTitleImgObjects1.length === 0 ) ? 0 :gdjs.Menu_32SceneCode.GDTitleImgObjects1[0].getHeight()), "easeInOutExpo", 0.5, false);
}
}
{ //Subevents
gdjs.Menu_32SceneCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.Menu_32SceneCode.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayBtn"), gdjs.Menu_32SceneCode.GDPlayBtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Menu_32SceneCode.GDPlayBtnObjects1.length;i<l;++i) {
    if ( !(gdjs.Menu_32SceneCode.GDPlayBtnObjects1[i].getBehavior("Tween").exists("PressedScale")) ) {
        isConditionTrue_0 = true;
        gdjs.Menu_32SceneCode.GDPlayBtnObjects1[k] = gdjs.Menu_32SceneCode.GDPlayBtnObjects1[i];
        ++k;
    }
}
gdjs.Menu_32SceneCode.GDPlayBtnObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Menu_32SceneCode.GDPlayBtnObjects1.length;i<l;++i) {
    if ( gdjs.Menu_32SceneCode.GDPlayBtnObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Menu_32SceneCode.GDPlayBtnObjects1[k] = gdjs.Menu_32SceneCode.GDPlayBtnObjects1[i];
        ++k;
    }
}
gdjs.Menu_32SceneCode.GDPlayBtnObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13996988);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Menu_32SceneCode.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.Menu_32SceneCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtsExt__JSONResourceLoader__LoadJSONToGlobal.func(runtimeScene, "levels.json", runtimeScene.getGame().getVariables().getFromIndex(0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Background", 0, 0, 100);
}{gdjs.evtTools.window.setAdaptGameResolutionAtRuntime(runtimeScene, true);
}
{ //Subevents
gdjs.Menu_32SceneCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


gdjs.Menu_32SceneCode.eventsList11(runtimeScene);
}


};

gdjs.Menu_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Menu_32SceneCode.GDTitleImgObjects1.length = 0;
gdjs.Menu_32SceneCode.GDTitleImgObjects2.length = 0;
gdjs.Menu_32SceneCode.GDTitleImgObjects3.length = 0;
gdjs.Menu_32SceneCode.GDTitleImgObjects4.length = 0;
gdjs.Menu_32SceneCode.GDPlayBtnObjects1.length = 0;
gdjs.Menu_32SceneCode.GDPlayBtnObjects2.length = 0;
gdjs.Menu_32SceneCode.GDPlayBtnObjects3.length = 0;
gdjs.Menu_32SceneCode.GDPlayBtnObjects4.length = 0;
gdjs.Menu_32SceneCode.GDEmojiImgObjects1.length = 0;
gdjs.Menu_32SceneCode.GDEmojiImgObjects2.length = 0;
gdjs.Menu_32SceneCode.GDEmojiImgObjects3.length = 0;
gdjs.Menu_32SceneCode.GDEmojiImgObjects4.length = 0;
gdjs.Menu_32SceneCode.GDBackgroundObjects1.length = 0;
gdjs.Menu_32SceneCode.GDBackgroundObjects2.length = 0;
gdjs.Menu_32SceneCode.GDBackgroundObjects3.length = 0;
gdjs.Menu_32SceneCode.GDBackgroundObjects4.length = 0;
gdjs.Menu_32SceneCode.GDSoundOnBtnObjects1.length = 0;
gdjs.Menu_32SceneCode.GDSoundOnBtnObjects2.length = 0;
gdjs.Menu_32SceneCode.GDSoundOnBtnObjects3.length = 0;
gdjs.Menu_32SceneCode.GDSoundOnBtnObjects4.length = 0;
gdjs.Menu_32SceneCode.GDSoundOffBtnObjects1.length = 0;
gdjs.Menu_32SceneCode.GDSoundOffBtnObjects2.length = 0;
gdjs.Menu_32SceneCode.GDSoundOffBtnObjects3.length = 0;
gdjs.Menu_32SceneCode.GDSoundOffBtnObjects4.length = 0;
gdjs.Menu_32SceneCode.GDLevelBtnObjects1.length = 0;
gdjs.Menu_32SceneCode.GDLevelBtnObjects2.length = 0;
gdjs.Menu_32SceneCode.GDLevelBtnObjects3.length = 0;
gdjs.Menu_32SceneCode.GDLevelBtnObjects4.length = 0;
gdjs.Menu_32SceneCode.GDSnowObjects1.length = 0;
gdjs.Menu_32SceneCode.GDSnowObjects2.length = 0;
gdjs.Menu_32SceneCode.GDSnowObjects3.length = 0;
gdjs.Menu_32SceneCode.GDSnowObjects4.length = 0;

gdjs.Menu_32SceneCode.eventsList12(runtimeScene);

return;

}

gdjs['Menu_32SceneCode'] = gdjs.Menu_32SceneCode;
