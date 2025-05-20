//  Lagu, Penyanyi, Likes, Play, link

var lagu = [
    ['Mangu' , 'Fourtwnty' , "66 rb" , "92 jt" , "img/mangu.jpeg"],
    ['Right Now' , 'NewJeans' , "126 rb" , "55 jt" , "img/right-now.jpeg"],
    ['Lesung pipi' , 'Raimlaode' , "35 rb" , "7,6 jt" , "img/lesung-pipi.jpeg"],
    ['HANDS UP' , 'MEOVV' , "62 rb" , "42 jt" , "img/hands-up.jpeg"],
    ['love.' , 'Wave to Earth' , "161 rb" , "52 jt" , "img/love..jpeg"],
    ['Season of Memories' , 'Gfriend' , "76 rb" , "22 jt" , "img/season-of-memories.jpeg"],
    ['별별별 (See That?)' , 'NMIXX' , "94 rb" , "68 jt" , "img/see-that.jpeg"],
    ['Love Language' , 'Tomorrow X Together' , "56 rb" , "29 jt" , "img/love-language.jpeg"],
    ['HOT' , 'Le Sserafim' , "112 rb" , "89 jt" , "img/hot.jpg"],
    ['My Girl' , 'A.C.E' , "82" , "4,6 jt" , "img/my-girl.jpeg"],
    ["Car's Outside" , 'James Arthur' , "772 rb" , "355 jt" , "img/cars-outside.jpeg"],
    ['Say Yes' , 'Loco,Punch' , "433 rb" , "614 jt" , "img/say-yes.jpeg"],
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
            <div class="kanan"><i class="fa-solid fa-play"></i> ${item[3]}</div>
            <div class="kiri"><i class="fa-solid fa-heart"></i> ${item[2]}</div>
        </div>
    </div>        
    `;
}

konten.innerHTML = template;
