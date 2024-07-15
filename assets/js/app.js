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

// ESTHETICS SECTION JS
document.addEventListener("DOMContentLoaded", function () {
    const estheticsData = [
        { imgSrc: "./assets/image/webp/Esthetics1.webp", alt: "Esthetics1", text: "Acne scars" },
        { imgSrc: "./assets/image/webp/Esthetics2.webp", alt: "Esthetics2", text: "Benign pigmented lesions" },
        { imgSrc: "./assets/image/webp/Esthetics3.webp", alt: "Esthetics3", text: "Vascular lesions" },
        { imgSrc: "./assets/image/webp/Esthetics4.webp", alt: "Esthetics4", text: "Cherry angiomas" },
        { imgSrc: "./assets/image/webp/Esthetics5.webp", alt: "Esthetics5", text: "Dehydrated skin" },
        { imgSrc: "./assets/image/webp/Esthetics6.webp", alt: "Esthetics6", text: "Dullness" },
        { imgSrc: "./assets/image/webp/Esthetics7.webp", alt: "Esthetics7", text: "Dyspigmentation" },
        { imgSrc: "./assets/image/webp/Esthetics8.webp", alt: "Esthetics8", text: "Enlarged pores" },
        { imgSrc: "./assets/image/webp/Esthetics9.webp", alt: "Esthetics9", text: "   Fine lines" },
        { imgSrc: "./assets/image/webp/Esthetics10.webp", alt: "Esthetics10", text: "Pore Congestion" },
        { imgSrc: "./assets/image/webp/Esthetics11.webp", alt: "Esthetics11", text: "Prejuvenation" },
        { imgSrc: "./assets/image/webp/Esthetics12.webp", alt: "Esthetics12", text: "Redness" },
        { imgSrc: "./assets/image/webp/Esthetics13.webp", alt: "Esthetics13", text: "Seborrheic Keratosis" },
        { imgSrc: "./assets/image/webp/Esthetics14.webp", alt: "Esthetics14", text: "Skin laxity" },
        { imgSrc: "./assets/image/webp/Esthetics15.webp", alt: "Esthetics15", text: "Spider veins" },
        { imgSrc: "./assets/image/webp/Esthetics16.webp", alt: "Esthetics16", text: "Stretch marks" },
        { imgSrc: "./assets/image/webp/Esthetics17.webp", alt: "Esthetics17", text: "Submental fat" },
        { imgSrc: "./assets/image/webp/Esthetics18.webp", alt: "Esthetics18", text: "Sun damage" },
        { imgSrc: "./assets/image/webp/Esthetics19.webp", alt: "Esthetics19", text: "Syringomas" },
        { imgSrc: "./assets/image/webp/Esthetics20.webp", alt: "Esthetics20", text: "Irregular Texture" },
        { imgSrc: "./assets/image/webp/Esthetics21.webp", alt: "Esthetics21", text: "Uneven tone" },
        { imgSrc: "./assets/image/webp/Esthetics22.webp", alt: "Esthetics22", text: "Unwanted hair" },
        { imgSrc: "./assets/image/webp/Esthetics23.webp", alt: "Esthetics23", text: "Unwanted tattoo" },
        { imgSrc: "./assets/image/webp/Esthetics24.webp", alt: "Esthetics24", text: "Volume loss" },
        { imgSrc: "./assets/image/webp/Esthetics25.webp", alt: "Esthetics25", text: "Wrinkles" },
    ];
    const container = document.getElementById("esthetics-container");
    estheticsData.map(data => {
        const div = document.createElement("div");
        div.className = "flex items-center  flex-col gap-2 md:gap-[15px] w-[50%] sm:w-[33.33%] md:w-[25%] px-2 sm:px-3 py-2 sm:py-3 lg:w-[228px]";
        const img = document.createElement("img");
        img.src = data.imgSrc;
        img.alt = data.alt;
        img.className = "w-full lg:max-w-[200px]";
        div.appendChild(img);
        const p = document.createElement("p");
        p.className = "text-[17px] md:text-[22px] lg:text-[23px] leading-[22px] md:leading-[31.2px] font-semibold font-archivo text-darkBlack text-center";
        p.textContent = data.text;
        div.appendChild(p);
        container.appendChild(div);
    });
});