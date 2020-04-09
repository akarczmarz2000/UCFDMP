function footerResizeSmall(screenQuerySmall){
    var footerResize = document.getElementsByClassName(footer-resize-small)
    if (screenQuerySmall.matches){
        footerResize.style.display = "inline";
    }else{
        footerResize.style.display = "none";
    }
}

function footerResizeNormal(screenQueryNormal){
    var footerResize = document.getElementsByClassName(footer-resize-small)
    if (screenQuerySmall.matches){
        footerResize.style.display = "inline";
    }else{
        footerResize.style.display = "none";
    }
}