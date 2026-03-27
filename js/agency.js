/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});
// Dissolvenza Immagine -> Video nell'Hero

document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById('hero-video');
    
    if (video) {
        // Quando il video è pronto per essere riprodotto senza interruzioni
        video.oncanplaythrough = function() {
            setTimeout(function() {
                video.style.opacity = '1';
            }, 500); // Mezzo secondo di pausa per far godere l'immagine statica
        };
    }
});

// Script per attivare l'animazione della Timeline allo scroll
document.addEventListener("DOMContentLoaded", function() {
    const timelineItems = document.querySelectorAll('.timeline > li');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.2 }); // Si attiva quando il 20% dell'elemento è visibile

    timelineItems.forEach(item => {
        observer.observe(item);
    });
});
