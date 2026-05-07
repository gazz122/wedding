function openInvite(){

    document.getElementById('mainContent')
    .scrollIntoView({
        behavior:'smooth'
    });

    const music = document.getElementById('bgMusic');

    music.volume = 0;
    music.play();

    let vol = 0;

    const fade = setInterval(()=>{

        if(vol < 0.5){

            vol += 0.05;
            music.volume = vol;

        }else{

            clearInterval(fade);

        }

    },200);

}


/* ===== MUSIC CONTROL ===== */

const music = document.getElementById('bgMusic');

function stopMusic(){

    music.pause();

}

async function playMusic(){

    try{

        await music.play();

    }catch(err){}

}

/* desktop + mobile */
document.addEventListener("visibilitychange",()=>{

    if(document.hidden){

        stopMusic();

    }else{

        playMusic();

    }

});

/* keluar browser/app HP */
window.addEventListener("blur",stopMusic);

/* safari ios */
window.addEventListener("pagehide",stopMusic);

/* balik lagi */
window.addEventListener("focus",playMusic);


/* ===== COUNTDOWN ===== */

const targetDate =
new Date("2026-07-03T15:00:00+07:00").getTime();

setInterval(()=>{

    const now = new Date().getTime();

    const distance = targetDate - now;

    document.getElementById('days').innerHTML =
    Math.floor(distance/(1000*60*60*24));

    document.getElementById('hours').innerHTML =
    Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    document.getElementById('minutes').innerHTML =
    Math.floor((distance%(1000*60*60))/(1000*60));

    document.getElementById('seconds').innerHTML =
    Math.floor((distance%(1000*60))/1000);

},1000);


/* ===== COPY REKENING ===== */

function copyRek(id){

    const rek =
    document.getElementById(id).innerText;

    navigator.clipboard.writeText(rek);

    alert('Nomor rekening berhasil dicopy: ' + rek);

}


/* ===== SCROLL ANIMATION ===== */

const observer =
new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add('show');

        }

    });

});

document.querySelectorAll('.fade-up')
.forEach(el=>{

    observer.observe(el);

});


/* ===== PARALLAX ===== */

window.addEventListener('scroll',()=>{

    const hero =
    document.querySelector('.hero-fancy');

    hero.style.backgroundPositionY =
    window.scrollY * 0.4 + 'px';

});


/* ===== FLOWERS ===== */

const flowers = document.querySelector('.flowers');

for(let i=0;i<15;i++){

    const flower = document.createElement('img');

    flower.src = 'images/rose.png';

    flower.classList.add('flower');

    flower.style.left = Math.random()*100 + 'vw';

    flower.style.animationDuration =
    (Math.random()*5 + 8) + 's';

    flower.style.width =
    (Math.random()*20 + 25) + 'px';

    flower.style.opacity =
    Math.random()*0.5 + 0.4;

    flowers.appendChild(flower);

}
