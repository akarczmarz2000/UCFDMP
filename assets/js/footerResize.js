function footerResizeSmall(screenQuerySmall){
    var footerResizeSmall = document.getElementById("resizeSmall")
    if (screenQuerySmall.matches){
        footerResizeSmall.style.display = "none";
    }else{
        footerResizeSmall.style.display = "inline";
    }
}

function footerResizeNormal(screenQueryNormal){
    var footerResizeNormal = document.getElementById("resizeNormal")
    if (screenQueryNormal.matches){
        footerResizeNormal.style.display = "none";
    }else{
        footerResizeNormal.style.display = "inline";
    }
}