$(document).ready(function() {
  $('.Frontpage--link__about').on({
    "mouseenter focus": () => showTitleLink('.Frontpage--titleAbout'),
    "mouseleave blur": () => hideTitleLink('.Frontpage--titleAbout'),
  });
  $('.Frontpage--link__working').on({
    "mouseenter focus": () => showTitleLink('.Frontpage--titleWorking'),
    "mouseleave blur": () => hideTitleLink('.Frontpage--titleWorking')
  });
  $('.Frontpage--link__learning').on({
    "mouseenter focus": () => showTitleLink('.Frontpage--titleLearning'),
    "mouseleave blur": () => hideTitleLink('.Frontpage--titleLearning')
  });
  $('.Frontpage--link__music').on({
    "mouseenter focus": () => showTitleLink('.Frontpage--titleMusic'),
    "mouseleave blur": () => hideTitleLink('.Frontpage--titleMusic'),
  });

  function showTitleLink(classname) {
    $(classname).removeClass('Frontpage--titleLink__hidden');
  }
  function hideTitleLink(classname) {
    $(classname).addClass('Frontpage--titleLink__hidden');
  }
});