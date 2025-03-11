let sun = document.querySelector(".sun");
let service = document.querySelector(".service");
let color = document.querySelector(".color");
let color1 = document.querySelector(".color1");
let subtitle = document.querySelectorAll(".subtitle-description");
let column = document.querySelectorAll(".column .inner");
let heading = document.querySelectorAll(".heading");
let readbtn = document.querySelectorAll(".read-btn");
let contentright = document.querySelectorAll(".content-right-h2");
let contentrighttext = document.querySelector(".content-right-text");
let listicon =  document.querySelectorAll(".list-icon");
let clienttext = document.querySelectorAll(".clients-content-text");
let aboutusbtn = document.querySelectorAll(".about-us-btn");
let fifthsecond = document.querySelectorAll(".fifth-section-second-content");
let type = document.querySelectorAll(".type");
let currency = document.querySelectorAll(".currency");
let fifthsectext = document.querySelectorAll(".fifth-section-content");
let price = document.querySelectorAll(".price");
let website = document.querySelector(".create-website");
let websitetext = document.querySelectorAll(".create-website-text");
let subpart = document.querySelector(".subpart");
let footertext = document.querySelectorAll(".footer-text .footer-second-text");
let footermaintext = document.querySelectorAll(".footer-first-text");
let seconditem = document.querySelector(".second-item");
let lasttext = document.querySelectorAll(".last-part-text");
let lastparttext = document.querySelector(".last-part-last-text");
let input = document.querySelector(".input input");
let sunbtn = document.querySelector(".ri-sun-line");

console.dir(sunbtn);

let theme = true;

sun.addEventListener("click", () => {
    if(theme == true) {
        document.body.style.backgroundColor = "white";
        theme = false;
        service.classList.remove("color");
        for(let i=0; i<=5; i++) {
            subtitle[i].classList.remove("color1");
            subtitle[i].classList.add("color-light");
        }
        for(let q = 0; q<=3 ; q++) {
            column[q].style.backgroundColor = "white";
        }
        for(let i = 0; i<=3; i++) {
            heading[i].style.color = "#181818";
        }
        for(let i = 0; i<=5; i++) {
            readbtn[i].style.color = "#181818";
            readbtn[i].style.backgroundColor = "white";
        }
        for(i=0; i<=3; i++) {
            contentright[i].classList.remove("color");
        }
        contentrighttext.classList.remove("color1");
        contentrighttext.classList.add("color-light");
        for(let i=0; i<=3; i++) {
            listicon[i].classList.remove("color1");
            listicon[i].classList.add("color-light");
        }
        for(let i=0; i<=2; i++) {
            clienttext[i].classList.remove("color");
        }
        for(let i=0; i<=2; i++) {
            aboutusbtn[i].style.backgroundColor = "#f5f8fa";
            aboutusbtn[i].classList.remove("color");
        }
        for(let i=0; i<=1; i++) {
            fifthsecond[i].style.backgroundColor = "#d8d8d8";
        }
        for(let i=0; i<=2; i++) {
            type[i].classList.remove("color");
        }
        for(let i=0; i<=2; i++) {
            currency[i].classList.remove("color");
        }
        for(let i=0; i<=2; i++) {
            price[i].classList.remove("color");
        }
        for(let i=0; i<=2; i++) {
            fifthsectext[i].classList.remove("color");
        }
        website.style.backgroundColor = "#f5f8fa";
        for(let i=0; i<=1; i++) {
            websitetext[i].classList.remove("color");
        }
        subpart.classList.remove("color1");
        subpart.classList.add("color-light");
        for(let i=0; i<=15; i++) {
            footertext[i].classList.remove("color1");
            footertext[i].classList.add("color-light");
        }
        for(let i=0; i<=4; i++) {
            footermaintext[i].classList.remove("color");
            footermaintext[i].classList.add("black");
        }
        seconditem.classList.remove("color1");
        seconditem.classList.add("color-light");
        for(let i=0; i<=2; i++) {
            lasttext[i].classList.remove("color1");
            lasttext[i].classList.add("color-light");
        }
        lastparttext.classList.remove("color1");
        lastparttext.classList.add("color-light");
        input.style.backgroundColor = "#f5f8fa";
        sunbtn.classList.remove("ri-sun-line");
        sunbtn.classList.add("ri-moon-clear-line");

    } else if(theme == false) {
        document.body.style.backgroundColor = "black";
        theme = true;
        service.classList.add("color");
        for(let i=0; i<=5; i++) {
            subtitle[i].classList.add("color1");
            subtitle[i].classList.remove("color-light");
        }
        for(let i = 0; i<=3 ; i++) {
            column[i].style.backgroundColor = "#0f0f11";
        }
        for(let i = 0; i<=3; i++) {
            heading[i].style.color = "white";
        }
        for(let i = 0; i<=5; i++) {
            readbtn[i].style.color = "white";
            readbtn[i].style.backgroundColor = "#181818";
        }

        for(i=0; i<=3; i++) {
            contentright[i].classList.add("color");
        }
        contentrighttext.classList.add("color1");
        contentrighttext.classList.remove("color-light");
        for(let i=0; i<=3; i++) {
            listicon[i].classList.add("color1");
            listicon[i].classList.remove("color-light");
        }
        for(let i=0; i<=2; i++) {
            clienttext[i].classList.add("color");
        }
        for(let i=0; i<=2; i++) {
            aboutusbtn[i].style.backgroundColor = "#0f0f11";
            aboutusbtn[i].classList.add("color");
        }
        website.style.backgroundColor = "#0f0f11";
        for(let i=0; i<=1; i++) {
            websitetext[i].classList.add("color");
        }
        for(let i=0; i<=1; i++) {
            fifthsecond[i].style.backgroundColor = "#0f0f11";
        }
        for(let i=0; i<=2; i++) {
            type[i].classList.add("color");
        }
        for(let i=0; i<=2; i++) {
            currency[i].classList.add("color");
        }
        for(let i=0; i<=2; i++) {
            price[i].classList.add("color");
        }
        for(let i=0; i<=2; i++) {
            fifthsectext[i].classList.add("color");
        }
        subpart.classList.add("color1");
        subpart.classList.remove("color-light");
        for(let i=0; i<=15; i++) {
            footertext[i].classList.add("color1");
            footertext[i].classList.remove("color-light");
        }
        for(let i=0; i<=4; i++) {
            footermaintext[i].classList.add("color");
            footermaintext[i].classList.remove("black");
        }
        seconditem.classList.add("color1");
        seconditem.classList.remove("color-light");
        for(let i=0; i<=2; i++) {
            lasttext[i].classList.add("color1");
            lasttext[i].classList.remove("color-light");
        }
        lastparttext.classList.add("color1");
        lastparttext.classList.remove("color-light");
        input.style.backgroundColor = "black";
        sunbtn.classList.add("ri-sun-line");
        sunbtn.classList.remove("ri-moon-clear-line");
    }
});
