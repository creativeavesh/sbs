!function(e){var n=function(e,n){let o=e.find(".element-ready-submenu"),t=e.find(".er-ready-count-close-btn");e.find(".er-ready-cart-popup").on("click",function(e){o.hasClass("open")?o.removeClass("open"):o.addClass("open")}),t.on("click",function(){o.removeClass("open")})};e(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/element-ready-global-popup.default",n)})}(jQuery);