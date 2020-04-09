function footerResizeSmall(screenQuerySmall){
    var footerResize = document.getElementsByClassName(footer-resize-small)
    if (screenQuerySmall.matches){
        document.footerResize.style.display = "inline";
    }else{
        document.footerResize.style.display = "none";
    }
}

function footerResizeNormal(screenQuerySmall){
    var footerResize = document.getElementsByClassName(footer-resize-small)
    if (screenQuerySmall.matches){
        document.footerResize.style.display = "none";
    }else{
        document.footerResize.style.display = "inline";
    }
}
