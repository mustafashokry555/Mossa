$(document).ready(function (){

  //nav active class
  $(".navbar-collapse .navbar-nav li").click(function(){
    $(this).addClass('active').siblings().removeClass('active');
  });

  
  //window scroll
  $(window).scroll(function () {
    let windowScroll = $(window).scrollTop();
    
    navPostion(windowScroll);
    navActiveLink(windowScroll);
    showCard(windowScroll);
  });
  
  //changr nav position & background
  function navPostion(windowScroll)
  {
    let servicesTop = $("#services").offset().top;
    if (windowScroll > servicesTop-200 ) 
    {
      $(".navbar").css("backgroundColor", "rgba(0,0,0,0.8)");
      $(".navbar").css("position", "fixed");
    }
    else 
    {
      $(".navbar").css("backgroundColor", "transparent");
      $(".navbar").css("position", "absolute");
    }
  }

  //nav active class when scroll
  function navActiveLink(windowScroll)
  {
    let sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      if(windowScroll >= section.offsetTop && windowScroll < (section.offsetTop + section.offsetHeight))
      {
        let sectionID = section.attributes.id.value;
        let navLink = $(`.navbar-collapse .navbar-nav li a[href='#${sectionID}']`);
        navLink.parent().addClass('active').siblings().removeClass('active');
      }
    });
  }

  //nav scroll
  $("nav .nav-link").click(function () {

    let navLink = $(this).attr("href");//section id
    let sectionOffset = $(navLink).offset().top;//section start
    $("html,body").animate({ scrollTop: sectionOffset }, 1000);
  });
  
  //cards animate
  function showCard(windowScroll)
  {
    if(windowScroll > $("#services").offset().top -100)
    {
      $("#services .card1").animate({left:"0"},1000,"linear");
      $("#services .card2").animate({top:"0"},1000,"linear");
      $("#services .card3").animate({right:"0"},1000,"linear");
    }
  }


  //services link
  $("#services .card a").click(function () {

    let servicesLink = $(this).attr("href");//section id
    let sectionOffset = $(servicesLink).offset().top;//section start
    $("html,body").animate({ scrollTop: sectionOffset }, 1000);
  });

  //first loading
  $("#loading").fadeOut(1500, function () {
    $("body").css("overflow", "auto");
  });

});

