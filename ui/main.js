console.log('Loaded!');
var img=document.getElementById('madi');
var marginLeft=0;
function moveLeft(){
    marginLeft=marginLeft+10;
    img.style.marginLeft = marginLeft+'px';
}
img.onclick=function()
{
    var interval=setIntervalI(moveLeft,100);
};