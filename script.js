var count = 0;
function rotateFirstCarousel() {
    count++;
    if(count == 1){
        const img1 = document.createElement("img");
        img1.setAttribute("id", "img1");
        img1.src = "newproduct-pic1.png";
        document.getElementById("newProdPic1").src = "newproduct-pic2.png";
        document.getElementById("newProdPic2").src = "newproduct-pic3.png";
        document.getElementById("newProdPic3").style.display = 'none';
        document.getElementsByClassName("newprodpic")[0].appendChild(img1);
    }
    if (count == 2) {
        const img2 = document.createElement("img");
        img2.setAttribute("id", "img2");
        img2.src = "newproduct-pic2.png";
        document.getElementById("newProdPic1").src = "newproduct-pic3.png";
        document.getElementById("newProdPic2").src = "newproduct-pic1.png";
        document.getElementById("img1").style.display = 'none';
        document.getElementsByClassName("newprodpic")[0].appendChild(img2);
    }
    if (count == 3) {
        const img3 = document.createElement("img");
        img3.setAttribute("id", "img3");
        img3.src = "newproduct-pic3.png";
        document.getElementById("newProdPic1").src = "newproduct-pic1.png";
        document.getElementById("newProdPic2").src = "newproduct-pic2.png";
        document.getElementById("img2").style.display = 'none';
        document.getElementsByClassName("newprodpic")[0].appendChild(img3);
        //count = 0;
    }
    if (count == 4) {
        const img4 = document.createElement("img");
        img4.src = "newproduct-pic1.png";
        document.getElementById("newProdPic1").src = "newproduct-pic2.png";
        document.getElementById("newProdPic2").src = "newproduct-pic3.png";
        document.getElementById("img3").style.display = 'none';
        document.getElementsByClassName("newprodpic")[0].appendChild(img4);
        
       
    }
}

var countTwo = 0;
function rotateSecondCarousel() {
    countTwo++;
    if (countTwo == 1) {
        const img1 = document.createElement("img");
        img1.setAttribute("id", "img1");
        img1.src = "featured-1.png";
        document.getElementById("featured-1").src = "featured-2.png";
        document.getElementById("featured-2").src = "featured-3.png";
        document.getElementById("featured-3").src = "featured-4.png";
        document.getElementById("featured-4").style.display = 'none';
        document.getElementsByClassName("feturedpic")[0].appendChild(img1);
    }
    if (countTwo == 2) {
        const img2 = document.createElement("img");
        img2.setAttribute("id", "img2");
        img2.src = "featured-2.png";
        document.getElementById("featured-1").src = "featured-3.png";
        document.getElementById("featured-2").src = "featured-4.png";
        document.getElementById("featured-3").src = "featured-1.png";
        document.getElementById("img1").style.display = 'none';
        document.getElementsByClassName("feturedpic")[0].appendChild(img2);
    }
    if (countTwo == 3) {
        const img3 = document.createElement("img");
        img3.setAttribute("id", "img3");
        img3.src = "featured-3.png";
        document.getElementById("featured-1").src = "featured-4.png";
        document.getElementById("featured-2").src = "featured-1.png";
        document.getElementById("featured-3").src = "featured-2.png";
        document.getElementById("img2").style.display = 'none';
        document.getElementsByClassName("feturedpic")[0].appendChild(img3);
    }
}
