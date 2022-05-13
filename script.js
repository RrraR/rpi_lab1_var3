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

function OpenWindow() {
    //window.open(MyPath, "", "toolbar=no,status=no,menubar=no,location=center,scrollbars=no,resizable=no,height=500,width=657");
    var x = document.getElementById("form_sample");
    var createform = document.createElement('form'); // Create New Element Form
    createform.setAttribute("action", ""); // Setting Action Attribute on Form
    createform.setAttribute("method", "post"); // Setting Method Attribute on Form
    x.appendChild(createform);

    //var closeBtn = document.createElement('&times;');

    var heading = document.createElement('h2'); // Heading of Form
    heading.innerHTML = "Registration Form ";
    createform.appendChild(heading);
    var line = document.createElement('hr'); // Giving Horizontal Row After Heading
    createform.appendChild(line);
    var linebreak = document.createElement('br');
    createform.appendChild(linebreak);
    var namelabel = document.createElement('label'); // Create Label for Name Field
    namelabel.innerHTML = "Your Name : "; // Set Field Labels
    createform.appendChild(namelabel);
    var inputelement = document.createElement('input'); // Create Input Field for Name
    inputelement.setAttribute("type", "text");
    inputelement.setAttribute("name", "dname");
    createform.appendChild(inputelement);
    var linebreak = document.createElement('br');
    createform.appendChild(linebreak);
    var contactlabel = document.createElement('label'); // Create Label for contact number
    contactlabel.innerHTML = "Your contact number : "; // Set Field Labels
    createform.appendChild(contactlabel);
    var inputelement = document.createElement('input'); // Create Input Field for contact number
    inputelement.setAttribute("type", "text");
    inputelement.setAttribute("name", "contno");
    createform.appendChild(inputelement);
    var linebreak = document.createElement('br');
    createform.appendChild(linebreak);
    var emaillabel = document.createElement('label'); // Create Label for E-mail Field
    emaillabel.innerHTML = "Your Email : ";
    createform.appendChild(emaillabel);
    var emailelement = document.createElement('input'); // Create Input Field for E-mail
    emailelement.setAttribute("type", "text");
    emailelement.setAttribute("name", "demail");
    createform.appendChild(emailelement);
    var messagebreak = document.createElement('br');
    createform.appendChild(messagebreak);
    var submitelement = document.createElement('input'); // Append Submit Button
    submitelement.setAttribute("type", "submit");
    submitelement.setAttribute("name", "dsubmit");
    submitelement.setAttribute("value", "Submit");
    createform.appendChild(submitelement);
}
