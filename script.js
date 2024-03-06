var card = document.querySelector(".card")

function openInNewTab(href) {
    Object.assign(document.createElement('a'), {
      target: '_blank',
      rel: 'noopener noreferrer',
      href: href,
    }).click();
  }

function stopfb() {
    Swal.fire({
        title: "Are you sure?",
        text: "You can back here anytime : )",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#008000",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, Lanjut ke facebook"
      }).then((result) => {
        if (result.isConfirmed) {
            openInNewTab("https://www.facebook.com/profile.php?id=100088080696904")
          Swal.fire({
            title: "Thank You : )",
            text: "Don't forget add friend me!!",
            icon: "success"
          });
        }
      });
}

function stopig() {
    Swal.fire({
        title: "Are you sure?",
        text: "You can back here anytime : )",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#008000",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, Lanjut ke Instagram"
      }).then((result) => {
        if (result.isConfirmed) {
            openInNewTab("https://www.instagram.com/gar.r29/")
          Swal.fire({
            title: "Thank You : )",
            text: "Don't forget to follow me : )",
            icon: "success"
          });
        }
      });
}

window.onload = function() {
    setTimeout(function() {
      var loader = document.querySelector('.preloader-container');
      loader.classList.add("active_new");
    //  $('.preloader').addClass('active');
      // Display your page content after preloader animation completes
     // document.body.style.overflow = 'auto'; // Restore scrolling
    }, 4000); // Adjust the duration as needed

    // Apply animations to each span element with a delay
    const spans = document.querySelectorAll('.preloader-text span');
    spans.forEach((span, index) => {
      setTimeout(() => {
        span.style.opacity = '1';
        span.style.animation = ' expandWidth 10s forwards, fadeOut 5s forwards'; // Add fade-out animation
      }, index * 200); // Adjust the delay between each letter's animation
    });
  };

$(document).ready(function(){
    console.log('Berfungsi dengan baik')
    console.log('Made by Tegar Setiadi')
});