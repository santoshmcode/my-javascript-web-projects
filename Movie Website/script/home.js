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
}, 5000);

let movies = [
    {
        id: "1",
        title: "The Incredible Hulk",
        release_date: "2008-06-12",
        imdbRating: 6.7,
        img: "https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_FMjpg_UY720_.jpg",
    },
    {
        id: "2",
        title: "Iron Man",
        release_date: "2008-04-30",
        imdbRating: 7.9,
        img: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UY720_.jpg",
    },
    {
        id: "3",
        title: "Iron Man 2",
        release_date: "2010-04-28",
        imdbRating: 7.0,
        img: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX509_.jpg",
    },
    {
        id: "4",
        title: "Thor",
        release_date: "2011-04-21",
        imdbRating: 7.0,
        img: "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_FMjpg_UX800_.jpg",
    },
    {
        id: "5",
        title: "Captain America: The First Avenger",
        release_date: "2011-07-22",
        imdbRating: 6.9,
        img: "https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_FMjpg_UY749_.jpg",
    },
    {
        id: "6",
        title: "The Avengers",
        release_date: "2012-04-25",
        imdbRating: 8.0,
        img: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX800_.jpg",
    },
    {
        id: "7",
        title: "Iron Man 3",
        release_date: "2013-04-18",
        imdbRating: 7.1,
        img: "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_FMjpg_UX770_.jpg",
    },
    {
        id: "8",
        title: "Thor: The Dark World",
        release_date: "2013-10-29",
        imdbRating: 6.9,
        img: "https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_FMjpg_UX770_.jpg",
    },
    {
        id: "9",
        title: "Captain America: The Winter Soldier",
        release_date: "2014-03-20",
        imdbRating: 7.7,
        img: "https://m.media-amazon.com/images/M/MV5BMzA2NDkwODAwM15BMl5BanBnXkFtZTgwODk5MTgzMTE@._V1_FMjpg_UY720_.jpg",
    },
    {
        id: "10",
        title: "Guardians of the Galaxy",
        release_date: "2014-07-30",
        imdbRating: 8.0,
        img: "https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_FMjpg_UY720_.jpg",
    },
    {
        id: "11",
        title: "Avengers: Age of Ultron",
        release_date: "2015-04-22",
        imdbRating: 7.3,
        img: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_FMjpg_UX864_.jpg",
    },
    {
        id: "12",
        title: "Ant-Man",
        release_date: "2015-07-14",
        imdbRating: 7.3,
        img: "https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_FMjpg_UX488_.jpg",
    },
    {
        id: "13",
        title: "Captain America: Civil War",
        release_date: "2016-04-27",
        imdbRating: 7.8,
        img: "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_FMjpg_UY720_.jpg",
    },
    {
        id: "14",
        title: "Doctor Strange",
        release_date: "2016-10-25",
        imdbRating: 7.5,
        img: "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_FMjpg_UY720_.jpg",
    },
    {
        id: "15",
        title: "Guardians of the Galaxy Vol. 2",
        release_date: "2017-04-19",
        imdbRating: 7.6,
        img: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_FMjpg_UX509_.jpg",
    },
    {
        id: "16",
        title: "Spider-Man: Homecoming",
        release_date: "2017-07-05",
        imdbRating: 7.4,
        img: "https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_FMjpg_UX674_.jpg",
    },
    {
        id: "17",
        title: "Thor: Ragnarok",
        release_date: "2017-10-25",
        imdbRating: 7.9,
        img: "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_FMjpg_UY720_.jpg",
    },
    {
        id: "18",
        title: "Black Panther",
        release_date: "2018-02-13",
        imdbRating: 7.3,
        img: "https://m.media-amazon.com/images/M/MV5BMjE4OTIzNzkyN15BMl5BanBnXkFtZTgwNzE4NjI5MzI@._V1_FMjpg_UX810_.jpg",
    },
    {
        id: "19",
        title: "Avengers: Infinity War",
        release_date: "2018-04-25",
        imdbRating: 8.4,
        img: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_FMjpg_UY720_.jpg",
    },
    {
        id: "20",
        title: "Ant-Man and the Wasp",
        release_date: "2018-07-04",
        imdbRating: 7.0,
        img: "https://m.media-amazon.com/images/M/MV5BYjcyYTk0N2YtMzc4ZC00Y2E0LWFkNDgtNjE1MzZmMGE1YjY1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UY720_.jpg",
    },
    {
        id: "21",
        title: "Captain Marvel",
        release_date: "2019-03-08",
        imdbRating: 6.8,
        img: "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_FMjpg_UY720_.jpg",
    },
    {
        id: "22",
        title: "Avengers: Endgame",
        release_date: "2019-04-26",
        imdbRating: 8.4,
        img: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UY720_.jpg",
    },
    {
        id: "23",
        title: "Spider-Man: Far From Home",
        release_date: "2019-07-05",
        imdbRating: 7.5,
        img: "https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UY720_.jpg",
    },
];

if (localStorage.getItem("movies") == null) {
    let moviesList = JSON.stringify(movies);
    localStorage.setItem("movies", moviesList);
}

let moviesDiv = document.getElementById("movies");
let moviesArray = JSON.parse(localStorage.getItem("movies"));
moviesArray.forEach(function (el) {
    
    let div = document.createElement("div");
    let title = document.createElement("h2");
    let img = document.createElement("img");
    let rating = document.createElement("p");
    let releaseDate = document.createElement("p");

    title.innerHTML = el.title;
    img.src = el.img;
    rating.innerHTML = "IMDb RATING ⭐" + el.imdbRating + "/10";
    releaseDate.innerHTML = "Released On: " + el.release_date;
    
    moviesDiv.append(div);
    div.append(title, img, rating, releaseDate);
})

function sortLTH() {
    moviesArray.sort(function (a, b) {
        return a.imdbRating - b.imdbRating;
    })
    

    moviesDiv.innerHTML = null;

    moviesArray.forEach(function (el) {
        let div = document.createElement("div");
        let title = document.createElement("h2");
        let img = document.createElement("img");
        let rating = document.createElement("p");
        let releaseDate = document.createElement("p");

        title.innerHTML = el.title;
        img.src = el.img;
        rating.innerHTML = "IMDb RATING ⭐" + el.imdbRating + "/10";
        releaseDate.innerHTML = "Released On: " + el.release_date;

        moviesDiv.append(div);
        div.append(title, img, rating, releaseDate);
    });
    


}

function sortHTL() {
    moviesArray.sort(function (a, b) {
        return b.imdbRating - a.imdbRating;
    });
    

    moviesDiv.innerHTML = null;

    moviesArray.forEach(function (el) {
        let div = document.createElement("div");
        let title = document.createElement("h2");
        let img = document.createElement("img");
        let rating = document.createElement("p");
        let releaseDate = document.createElement("p");

        title.innerHTML = el.title;
        img.src = el.img;
        rating.innerHTML = "IMDb RATING ⭐" + el.imdbRating + "/10";
        releaseDate.innerHTML = "Released On: " + el.release_date;

        moviesDiv.append(div);
        div.append(title, img, rating, releaseDate);
    });
}

