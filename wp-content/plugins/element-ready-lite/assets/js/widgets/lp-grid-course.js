!function(e){var t=function(e,t){var n=e.find(".widget-layout").data("layout"),a=".shafull-container-"+e.data("id"),i=".shaf-item-"+e.data("id"),d=".shaf-filter-"+e.data("id")+" li";"undefined"!=n&&"tabs"==n&&t(window).on("load",function(){if(t(a).length>0){let e;(e=t(a)).shuffle({itemSelector:i,sizer:".shaf-sizer"}),t(d).on("click",function(){t(d).removeClass("active"),t(this).addClass("active");var n=t(this).attr("data-group");e.shuffle("shuffle",n)})}})};e(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/element-ready-grid-course.default",t)})}(jQuery);