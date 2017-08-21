console.log('Loaded!');
var img=document.getELementById('madi');
var marginRight=0;
function moveLeft(){
    marginRight=marginRight+10;
    img.style.marginRight = marginRight+'px';
}
img.onclick=function()
{
    var interval=setIntervalI(moveLeft,100);
};