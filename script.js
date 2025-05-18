//  Lagu, Penyanyi, Likes, Play, link

var lagu = [
    ['Mangu' , 'Fourtwnty' , 14044 , 28023 , "mangu.jpeg"],
    ['Right Now' , 'NewJeans' , 20501 , 25090 , "right-now.jpeg"],
    ['Lesung pipi' , 'Raimlaode' , 18541 , 27062 , "lesung-pipi.jpeg"],
    ['HANDS UP' , 'MEOVV' , 11099 , 20299 , "hands-up.jpeg"],
    ['love.' , 'Wave to Earth' , 20129 , 33000 , "love..jpeg"],
    ['Season of Memories' , 'Gfriend' , 12102 , 23402 , "season-of-memories.jpeg"],
    ['See That?' , 'NMIXX' , 22002 , 28043 , "see-that.jpeg"],
    ['Love Language' , 'Tomorrow X Together' , 21501 , 32398 , "love-language.jpeg"],
    ['HOT' , 'Le Sserafim' , 23231 , 37062 , "hot.jpg"],
    ['My Girl' , 'A.C.E' , 24649 , 32532 , "my-girl.jpeg"],
    ["Car's Outside" , 'James Arthur' , 43719 , 53320 , "cars-outside.jpeg"],
    ['Say Yes' , 'Loco,Punch' , 22102 , 32402 , "say-yes.jpeg"],
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
            <p>Oleh ${item[1]}</p>
        </small>
        
        <div class="bawah">
            <div class="kanan"><i class="fa-solid fa-play"></i> ${item[2]}</div>
            <div class="kiri"><i class="fa-solid fa-heart"></i> ${item[3]}</div>
        </div>
    </div>        
    `;
}

konten.innerHTML = template;