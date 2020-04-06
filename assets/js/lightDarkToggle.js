function myFunction() {
   var element = document.section;
   if (element.classList.contains("content")){
       element.classList.remove("content")
       element.classList.add("dark-mode")
   }else{
       element.classList.remove("dark-mode")
       element.classList.add("content")
   }
}