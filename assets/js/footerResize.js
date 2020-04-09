function footerResizeSmall(screenQuerySmall){
    var footerResizeSmall = document.getElementsByClassName("footer-resize-small")
    if (screenQuerySmall.matches){
        footerResizeSmall.style.display = "none";
    }else{
        footerResizeSmall.style.display = "inline";
    }
}

function footerResizeNormal(screenQueryNormal){
    var footerResizeNormal = document.getElementsByClassName("footer-resize-normal")
    if (screenQueryNormal.matches){
        footerResizeNormal.style.display = "none";
    }else{
        footerResizeNormal.style.display = "inline";
    }
}