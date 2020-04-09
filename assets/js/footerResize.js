function footerResize() {
    var w = window.outerWidth;
    var element = document.getElementsByClassName("footerResize");
    if (w <= 816){
        element.classList.remove("col-sm-4")
    }else if (screen.width >= 820){
        element.classList.add("col-sm-4")
    }
}