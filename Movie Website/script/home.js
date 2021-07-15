let slideShow = document.getElementById("slideShow");

let imgArray = [
    "https://64.media.tumblr.com/3498de4c7707991db1896f796e954838/tumblr_p3vnz7AD7E1spgwzwo1_1280.jpg",

    "https://www.99images.com/photos/wallpapers/3d-abstract/iron-man-4kandroid-iphone-desktop-hd-backgrounds-wallpapers-1080p-4k-x9exh.jpg?v=1613312773",

    "https://wallpaper.dog/large/11010173.jpg",

    "https://wallpaperaccess.com/full/14877.jpg",

    "https://wallpaperaccess.com/full/54053.jpg",

    "https://wallpapercave.com/wp/wp2028630.jpg",

    "https://wallpapercave.com/wp/wp4590044.jpg",
];

let img = document.createElement("img");
img.src = imgArray[0];

slideShow.append(img);
let i = 1;
setInterval(function () {
    if (i === imgArray.length) {
        i = 0;
    }
    img.src = imgArray[i];
    i++;
}, 3000);


