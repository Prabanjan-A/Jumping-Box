function bounceoff(surface1,surface2) {
if (surface1.X - surface2.x < surface2.width/2 + surface1.width/2
    && surface2.x - surface1.x < surface2.width/2 + surface1.width/2) {
    surface1.velocityX = surface1.velocityX + (-1);
    surface2.velocityX = surface2.velocityX + (-1); 
}

if (surface1.y - surface2.y < surface2.width/2 + surface1.width/2
    && surface2.y - surface2.y < surface2.width/2 + surface1.width/2) {
    surface1.velocityY = surface1.velocityY + (-1);
    surface2.velocityY = surface2.velocityY + (-1);                                                           
 }
}

function isTouching(surface3,surface4) {
    if(surface3 - surface4.x < surface4.width/2 + surface3.width/2
        && surface4.x - surface3.x < surface4.width/2 + surface4.width/2
        && surface3.y - surface4.y < surface4.width/2 + surface3.width/2
        && surface4.y - surface3.y < surface4.width/2 + surface3.width/2  ){

  return true;
 }
else{
  return false; 
 }
}
