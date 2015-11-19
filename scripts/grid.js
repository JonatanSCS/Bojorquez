
function renderGrid(){
	var blocks = document.getElementById("grid_container").children;
	var pad = 10, cols = 3, newleft, newtop;
	var cuenta = 0;
	for(var i = 1; i < blocks.length; i++){
		if (i % cols == 0) {
			newtop = (blocks[i-cols].offsetTop + blocks[i-cols].offsetHeight) + pad;
		    blocks[i].style.top = newtop+"px";
		    if(cuenta <= newtop){
		    	cuenta = newtop;
		    }
		    
		} else {
			if(blocks[i-cols]){
				newtop = (blocks[i-cols].offsetTop + blocks[i-cols].offsetHeight) + pad;
				blocks[i].style.top = newtop+"px";
				 if(cuenta <= newtop){
		    	cuenta = newtop;
		    }
				

			}
			newleft = (blocks[i-1].offsetLeft + blocks[i-1].offsetWidth) + pad;
			blocks[i].style.left = newleft+"px";	
		}
    }


var tamano_pantalla = $(window).width();
$("#grid_container").css("height", cuenta + (tamano_pantalla)*.15 );


}
window.addEventListener("load", renderGrid, true);
window.addEventListener("resize", renderGrid, true);




