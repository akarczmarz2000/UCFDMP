function footerResizeSmall(screenQuerySmall){
    var footerResize = document.getElementsByClassName(footer-resize-small)
    if (screenQuerySmall.matches){
        footerResize.style.display = "none";
    }else{
        footerResize.style.display = "inline";
    }
}

function footerResizeNormal(screenQueryNormal){
    var footerResize = document.getElementsByClassName(footer-resize-small)
    if (screenQuerySmall.matches){
        footerResize.style.display = "none";
    }else{
        footerResize.style.display = "inline";
    }
}