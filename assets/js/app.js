
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav',
    prevArrow: $('.arrow-left'),
    nextArrow: $('.arrow-right')

});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    autoPlay: true,
    speed: 500,
    autoplaySpeed: 5000,
    variableWidth: true,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
    prevArrow: $('.arrow-left'),
    nextArrow: $('.arrow-right')
});

// HEADER JS
function openNav() {
    document.querySelector(".menuList").classList.toggle("start-0");
    document.body.classList.toggle("overflow-hidden");
    document.querySelector(".menuIcon").classList.toggle("cross");
}
function toggleDropdown() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    dropdownMenu.classList.toggle("hidden");
}
// APPOINTMENT SECTION JS
let inputText = document.querySelector(".checkBoxText");
let checkImg = document.querySelector(".checkImg");
let clickBtn = document.querySelectorAll(".labelCheck")

clickBtn.forEach((e) => {
    e.addEventListener("click", () => {
        let checkImgDisply = window.getComputedStyle(checkImg).display;
        if (checkImgDisply === "none") {
            checkImg.style.display = "block";
        } else {
            checkImg.style.display = "none";
        }
    });
});
