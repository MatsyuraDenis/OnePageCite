function f1(checkbox){
  var checked = checkbox.parentElement;
  var element = checked.parentElement;
  var aboutCourse = element.parentElement.parentElement;
  if (checkbox.checked == true){
      
      
      checked.style.backgroundColor = "#ecf4e2";
      element.style.backgroundColor= "#e8f0dc";
      setTimeout(function(){       element.style.display = 'none'
      aboutCourse.style.paddingRight="0px";
      aboutCourse.style.paddingLeft="0px";      aboutCourse.style.animation = "hideIt 1s";     }, 200);

   
}
}
