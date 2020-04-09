function footerResizeSmall(screenQuerySmall){
    if (screenQuerySmall.matches){
        document.getElementById("resizeSmall").style.display = "none";
    }else{
        document.getElementById("resizeSmall").style.display = "inline";
    }
}

function footerResizeNormal(screenQueryNormal){
    if (screenQueryNormal.matches){
        document.getElementById("resizeNormal").style.display = "inline";
    }else{
        document.getElementById("resizeNormal").style.display = "none";
    }
}