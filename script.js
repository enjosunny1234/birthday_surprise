console.log("SCRIPT CHAL RAHI HAI");

console.log(document.getElementById("giftScreen"));

const loader = document.getElementById("loader");

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 800);


    }, 2000);

});


// ===============================
// GIFT SCREEN
// ===============================

const giftScreen = document.getElementById("giftScreen");
const giftBox = document.getElementById("giftBox");
const openGiftBtn = document.getElementById("openGiftBtn");

const hero = document.querySelector(".hero");

hero.style.display = "none";

if (giftScreen) {
    giftScreen.style.display = "flex";
}

let giftOpened = false;


// hero ko starting me hide rakho

if (hero) {
    hero.style.display = "none";
}



function openGift() {

    if (giftOpened) return;

    giftOpened = true;



    if (giftBox) {

        giftBox.classList.add("open");

    }

    // Music start
    const music = document.getElementById("bgMusic");

    if (music) {
        music.play().catch(() => { });
    }



    setTimeout(() => {

        giftScreen.classList.add("hide");

    }, 1800);


    setTimeout(() => {

        giftScreen.style.display = "none";

        hero.style.display = "flex";

        document.body.style.overflowY = "auto";

    }, 3200);

}



if (openGiftBtn) {

    openGiftBtn.addEventListener("click", openGift);

}


if (giftBox) {

    giftBox.addEventListener("click", openGift);

}


// ===============================
// MUSIC
// ===============================


const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");


if (music) {

    music.volume = 0.35;

}


let playing = false;


if (musicBtn) {

    musicBtn.addEventListener("click", () => {


        if (!playing) {


            music.play();

            playing = true;

            musicBtn.innerHTML =
                '<i class="fa-solid fa-pause"></i>';


        } else {


            music.pause();

            playing = false;


            musicBtn.innerHTML =
                '<i class="fa-solid fa-music"></i>';


        }


    });

}

const targetDate = new Date("July 14, 2026 00:00:00").getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const distance = targetDate - now;


    if (distance < 0) return;


    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );


    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );


    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );



    const d = document.getElementById("days");
    const h = document.getElementById("hours");
    const m = document.getElementById("minutes");
    const s = document.getElementById("seconds");


    if (d)
        d.textContent = String(days).padStart(2, "0");


    if (h)
        h.textContent = String(hours).padStart(2, "0");


    if (m)
        m.textContent = String(minutes).padStart(2, "0");


    if (s)
        s.textContent = String(seconds).padStart(2, "0");

}


updateCountdown();

setInterval(updateCountdown, 1000);




// ===============================
// EXPLORE BUTTON
// ===============================


const exploreBtn = document.getElementById("exploreBtn");


if (exploreBtn) {

    exploreBtn.addEventListener("click", () => {


        const countdown =
            document.querySelector(".countdown");


        if (countdown) {

            countdown.scrollIntoView({

                behavior: "smooth"

            });

        }


    });

}




// ===============================
// FALLING HEARTS
// ===============================


function createHeart() {


    const heart = document.createElement("div");


    heart.innerHTML = "❤";


    heart.style.position = "fixed";

    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.top = "-20px";


    heart.style.color = "#ff5f91";


    heart.style.fontSize =
        Math.random() * 20 + 15 + "px";


    heart.style.opacity = "0.8";


    heart.style.pointerEvents = "none";


    heart.style.zIndex = "5";


    document.body.appendChild(heart);



    let position = -20;


    const speed =
        Math.random() * 2 + 1;


    const fall = setInterval(() => {


        position += speed;


        heart.style.top =
            position + "px";


        if (position > window.innerHeight) {


            clearInterval(fall);

            heart.remove();


        }


    }, 20);



}



setInterval(createHeart, 300);

// ===============================
// SURPRISE MODAL
// ===============================


const modal = document.getElementById("surpriseModal");

const surpriseBtn = document.getElementById("surpriseBtn");

const closeModal = document.getElementById("closeModal");



if (surpriseBtn && modal) {


    surpriseBtn.addEventListener("click", () => {


        modal.classList.add("active");


        createConfetti();


    });


}



if (closeModal && modal) {


    closeModal.addEventListener("click", () => {


        modal.classList.remove("active");


    });


}



window.addEventListener("click", (e) => {


    if (e.target === modal) {


        modal.classList.remove("active");


    }


});





// ===============================
// CONFETTI
// ===============================


function createConfetti() {


    for (let i = 0; i < 150; i++) {


        const confetti =
            document.createElement("span");



        confetti.style.position = "fixed";


        confetti.style.left =
            Math.random() * 100 + "vw";


        confetti.style.top = "-20px";


        confetti.style.width = "8px";


        confetti.style.height = "14px";


        confetti.style.borderRadius = "3px";


        confetti.style.background =
            `hsl(${Math.random() * 360},100%,65%)`;


        confetti.style.pointerEvents = "none";


        confetti.style.zIndex = "99999";


        document.body.appendChild(confetti);



        let y = -20;


        const speed =
            Math.random() * 5 + 3;


        const rotate =
            Math.random() * 720;



        const fall = setInterval(() => {


            y += speed;


            confetti.style.top =
                y + "px";


            confetti.style.transform =
                `rotate(${rotate + y}deg)`;



            if (y > window.innerHeight) {


                clearInterval(fall);


                confetti.remove();


            }


        }, 20);



    }


}





// ===============================
// SCROLL ANIMATION
// ===============================


const observer =
    new IntersectionObserver((entries) => {


        entries.forEach(entry => {


            if (entry.isIntersecting) {


                entry.target.animate([


                    {

                        opacity: 0,

                        transform: "translateY(50px)"

                    },


                    {

                        opacity: 1,

                        transform: "translateY(0)"

                    }


                ], {


                    duration: 800,

                    easing: "ease",

                    fill: "forwards"


                });


            }


        });



    }, {

        threshold: 0.2

    });





document.querySelectorAll(".section")
    .forEach(section => {


        section.style.opacity = "0";


        observer.observe(section);


    });





console.log("❤️ Happy Birthday Palak ❤️");

if (openGiftBtn) {
    openGiftBtn.addEventListener("click", openGift);
}
