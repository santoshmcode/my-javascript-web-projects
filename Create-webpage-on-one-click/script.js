function createWebPage() {
    var body = document.querySelector("body");

    var main1 = document.createElement("div");
    main1.setAttribute("class", "main1");
    body.appendChild(main1);

    var img1 = document.createElement("img");
    img1.setAttribute(
        "src",
        "https://masai-course.s3.ap-south-1.amazonaws.com/resources/images/linus.jpg"
    );
    img1.setAttribute("alt", "Linus Trovalds image");
    img1.setAttribute("class", "img1");
    main1.appendChild(img1);

    var name1 = document.createElement("div");
    name1.setAttribute("class", "name1");
    name1.innerHTML = "Linus Trovalds";
    main1.appendChild(name1);

    var about1 = document.createElement("div");
    about1.setAttribute("class", "about1");
    about1.innerHTML = "The creator of Linux & Git";
    main1.appendChild(about1);

    var main2 = document.createElement("div");
    main2.setAttribute("class", "main2");
    body.appendChild(main2);

    var img2 = document.createElement("img");
    img2.setAttribute("class", "img2");
    img2.setAttribute(
        "src",
        "https://masai-course.s3.ap-south-1.amazonaws.com/resources/images/khan.jpg"
    );
    img2.setAttribute("alt", "Sal Khan image");
    main2.appendChild(img2);

    var divInMain2 = document.createElement("div");
    main2.appendChild(divInMain2);

    var name2 = document.createElement("div");
    name2.setAttribute("class", "name2");
    name2.innerHTML = "Sal Khan";
    divInMain2.appendChild(name2);

    var about2 = document.createElement("div");
    about2.setAttribute("class", "about2");
    about2.innerHTML =
        "Salman Khan is the founder of the Khan Academy which has a mission of providing a free world-class education for anyone, anywhere.";
    divInMain2.appendChild(about2);

    var main3 = document.createElement("div");
    main3.setAttribute("class", "main3");
    body.appendChild(main3);

    var div1InMain3 = document.createElement("div");
    main3.appendChild(div1InMain3);

    var name3 = document.createElement("div");
    name3.setAttribute("class", "name3");
    name3.setAttribute("id", "name3");
    name3.innerHTML = "Ken Thompson";
    div1InMain3.appendChild(name3);

    var about3 = document.createElement("div");
    about3.setAttribute("class", "about3");
    about3.innerHTML =
        "Designed and implemented the original Unix operating system";
    div1InMain3.appendChild(about3);

    var div2InMain3 = document.createElement("div");
    main3.appendChild(div2InMain3);

    var name3_1 = document.createElement("div");
    name3_1.setAttribute("class", "name3");
    name3_1.setAttribute("id", "name3-1");
    name3_1.innerHTML = "Dennis Ritchie";
    div2InMain3.appendChild(name3_1);

    var about3_1 = document.createElement("div");
    about3_1.setAttribute("class", "about3");
    about3_1.setAttribute("id", "about3-1");
    about3_1.innerHTML = "The creator of C Programming Language";
    div2InMain3.appendChild(about3_1);

    var button = document.getElementById("btn");
    button.removeElement();
}
