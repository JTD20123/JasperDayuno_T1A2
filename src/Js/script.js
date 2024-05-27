function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

$(".bar").each(function(){
    $(this).find(".bar-inner").animate({
      width: $(this).attr("data-width")
    },2000)
  });