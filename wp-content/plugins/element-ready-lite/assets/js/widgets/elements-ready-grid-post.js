!function(t){var n=function(t,n){var e=t.find(".er-post-grid-tabs"),i=t.find(".trending-news-item .element-ready-post-meta"),a="",d="";e.length&&e.find("a").on("click",function(){n.each(e.find("a"),function(t,e){n(this).removeClass("active")}),a=n(this).addClass("active").data("filter").toString(),n.each(i,function(t,e){(d=n(this).data("filterby").toString().split(",")).includes(a)||"all"==a?n(this).parents(".trending-news-item").parent().fadeIn("slow"):n(this).parents(".trending-news-item").parent().fadeOut(1)})})};t(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/element-ready-grid-post.default",n)})}(jQuery);