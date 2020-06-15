	chrome.extension.sendMessage({}, function(response) {
		// CONTROLLER
		window.checkState = function(){
			// Email Contents Page
			if(document.location.pathname.endsWith("/contents")){
				fixEmailContents();
			}
			// Single Page Content
			if(document.location.pathname.includes("/contents/") && !document.location.pathname.includes("edit")){
					addSingleContentButtons();
			}
		}

		// VIEWS
		window.addSingleContentButtons = function(){
			$("#bm-content-buttons").remove();
			//document.getElementById("bm-content-buttons").parentNode.removeChild(getElementById("bm-content-buttons"));
			var singleContentButtons = document.getElementById("bm-content-buttons");
			if(! singleContentButtons ){
				var theButtonsHtml = '<a alt="Duplicate This Content" href="' + document.location.href + '/duplicate"><i id="bm-content-buttons" class="fa fa-copy"></i></a>';
				$(".v-toolbar__content .mx-3.v-btn--flat").before(theButtonsHtml);
				//document.querySelectorAll('.my #awesome selector');
				//target.insertAdjacentElement('beforebegin', element);
			}
		}
		window.fixEmailContents = function(){
			$('.email-camp td a')
				.css("font-size", "14px !important")
				.attr("target", "_blank");
			$('.email-camp td').css("font-size", "14px");
		}

		// INIT
		var readyStateCheckInterval = setInterval(function() {
			if (document.readyState === "interactive" || document.readyState === "complete") {
				clearInterval(readyStateCheckInterval);
				console.log("Better Maropost UI extention is active.");
				jQuery(document).ready(function( $ ) { console.log("jQuery loaded successfully"); });
				//On Load
				checkState();
				//On Click
				$("#app").click(function(){
					checkState();
				});
				//On #app State Change
				document.getElementById("app").addEventListener("DOMNodeInserted", function (e) {
				    checkState();
				}, false);
			}
		}, 10);
	});
