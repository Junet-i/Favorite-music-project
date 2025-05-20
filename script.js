//  Lagu, Penyanyi, Likes, Play, link

var lagu = [
    ['Mangu' , 'Fourtwnty' , 14044 , 28023 , "Favorite-music-project/img/mangu.jpeg"],
    ['Right Now' , 'NewJeans' , 20501 , 25090 , "img/right-now.jpeg"],
    ['Lesung pipi' , 'Raimlaode' , 18541 , 27062 , "img/lesung-pipi.jpeg"],
    ['HANDS UP' , 'MEOVV' , 11099 , 20299 , "img/hands-up.jpeg"],
    ['love.' , 'Wave to Earth' , 20129 , 33000 , "img/love..jpeg"],
    ['Season of Memories' , 'Gfriend' , 12102 , 23402 , "img/season-of-memories.jpeg"],
    ['See That?' , 'NMIXX' , 22002 , 28043 , "img/see-that.jpeg"],
    ['Love Language' , 'Tomorrow X Together' , 21501 , 32398 , "img/love-language.jpeg"],
    ['HOT' , 'Le Sserafim' , 23231 , 37062 , "img/hot.jpg"],
    ['My Girl' , 'A.C.E' , 24649 , 32532 , "img/my-girl.jpeg"],
    ["Car's Outside" , 'James Arthur' , 43719 , 53320 , "img/cars-outside.jpeg"],
    ['Say Yes' , 'Loco,Punch' , 22102 , 32402 , "img/say-yes.jpeg"],
];

// variabel
var konten = document.getElementById("container");
var template = "";

// perulangan for
for ( var i=0; i < lagu.length ; i++) {
    var item = lagu[i]

    template += `
    <div class="lagu">
        <img src="${item[4]}" alt="">
        <h2>${item[0]}</h2>
        <small class="penyanyi">
            <p>${item[1]}</p>
        </small>
        
        <div class="bawah">
            <div class="kanan"><i class="fa-solid fa-play"></i> ${item[2]}</div>
            <div class="kiri"><i class="fa-solid fa-heart"></i> ${item[3]}</div>
        </div>
    </div>        
    `;
}

konten.innerHTML = template;
