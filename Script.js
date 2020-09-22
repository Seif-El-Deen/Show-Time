// Global Functions 

// Sign up form Functions 
function closeSignUpForm(){
    document.getElementById('signUp').style.display='none';
}
function signUpForm(){
    if(document.getElementById('logIn').style.display=='block'){
        document.getElementById('logIn').style.display='none';
        document.getElementById('signUp').style.display='block';
    }
    else{
        document.getElementById('signUp').style.display='block';
    }
}
//Log In form Functions
function closeLogInForm(){
    document.getElementById('logIn').style.display='none';
}
function logInForm(){
    document.getElementById('logIn').style.display='block';
}



//  Home Page Start 

function navBar(){
    // nav bar bottons Display
    if(document.getElementById('navBtns').style.display=='block'){
        document.getElementById('navBtns').style.display='none';
    }
    else{
        document.getElementById('navBtns').style.display='block';
    }

    // slideshow Display
    if(document.getElementById('slideShow').style.display=='none'){
        document.getElementById('slideShow').style.display='block';
    }
    else{
        document.getElementById('slideShow').style.display='none';
    }

    // Most Viewing Head
    if(document.getElementById('motViewing').style.display=='none'){
        document.getElementById('motViewing').style.display='block';
    }
    else{
        document.getElementById('motViewing').style.display='none';
    }
    
    //Page Content Display  
    if(document.getElementById('page-content').style.display=='none'){
        document.getElementById('page-content').style.display='block';
    }
    else{
        document.getElementById('page-content').style.display='none';
    }

    //Fotter Display
    if(document.getElementById('footer').style.display=='none'){
        document.getElementById('footer').style.display='block';
    }
    else{
        document.getElementById('footer').style.display='none';
    }

       //Admin Page content Display
       if(document.getElementById('section1').style.display=='block'){
        document.getElementById('section1').style.display='none';
    }
    else{
        document.getElementById('section1').style.display='block';
    }


}

// // Slideshow function 

// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }

// Log in Verification
var adminEmail="seifeldeenmostafa000@gmail.com";
var adminPassword="plaplapla";
function adminLogin(){
    // Confirming Email & password 
    if((document.getElementById('adminEmail').value===adminEmail)&&(document.getElementById('adminPassword').value===adminPassword)){
        location.replace("Admin-Page.html");
    }
    else if((document.getElementById('adminEmail').value!=adminEmail)&&(document.getElementById('adminPassword').value!=adminPassword)){
        document.getElementById('adminEmail').style.borderColor='red';
        document.getElementById('adminEmail').style.color='red';
        document.getElementById('adminEmail').value="Wrong email & Password";
    }
    else if((document.getElementById('adminEmail').value)!=adminEmail){
        document.getElementById('adminEmail').style.borderColor='red';
        document.getElementById('adminEmail').style.color='red';
        document.getElementById('adminEmail').value="Wrong email";
    }
    else if(document.getElementById('adminPassword').value!=adminPassword){
        document.getElementById('adminPasswordText').innerHTML="Password <span style='color:red;'> Wrong password <i class='fas fa-question-circle'></i></span>";
    }
}

//Sig in form
function userLogin(){
    //confirming Email & Password
    var userEmail=document.getElementById('userEmail').value;
    var userPassword=document.getElementById('userPassword').value;
    if(userEmail.indexOf('@')==-1||userEmail.indexOf(".com")==-1||userEmail.length<15){
        document.getElementById('userEmail').style.borderColor='red';
        document.getElementById('userEmail').style.color='red';
        document.getElementById('userEmail').value="Wrong Email";
    }
    else if(userPassword.length==0){
        document.getElementById('userPasswordText').innerHtml="Password <span style='color:red;'> Enter password <i class='fas fa-question-circle'></i></span>";
    }
    else {
        document.getElementById('userHeader').style.display='block';
        document.getElementById('registeration').style.display='none';
        closeLogInForm();
    }
}


// Home Page End 

// Creidets Page start 

function navBarCreditsPage(){
    // nav bar bottons Display
    if(document.getElementById('navBtns').style.display=='block'){
        document.getElementById('navBtns').style.display='none';
    }
    else{
        document.getElementById('navBtns').style.display='block';
    }
    //Credits Content Display  
    if(document.getElementById('creditsContent').style.display=='none'){
        document.getElementById('creditsContent').style.display='block';
    }
    else{
        document.getElementById('creditsContent').style.display='none';
    }
    //Fotter Display
    if(document.getElementById('footer').style.display=='none'){
        document.getElementById('footer').style.display='block';
    }
    else{
        document.getElementById('footer').style.display='none';
    }
}


//  Credits Page End 

//  Admin Page Start 
//Background Color Change
// function backgroundRed(){
//     document.body.style.backgroundColor = 'red';
// }
// function backgroundYellow(){
//     document.body.style.backgroundColor='yellow';
// }
// function backgroundBlack(){
//     document.body.style.backgroundColor='black';
// }
// function backgroundGreen(){
//     document.body.style.backgroundColor='green';
// }
// function backgroundGray(){
//     document.body.style.backgroundColor='gray';
// }
// Font Color Change

// Change color Function  
function changeColor(){
    var colorInput=document.getElementById('color');
    var backgroundColor=colorInput.value;
    document.body.style.backgroundColor=backgroundColor;
}

// Admin Page End 

     /* To Top Button Start   */
mybutton=document.getElementById("toTopBtn");
    window.onscroll=function(){
        scrollFunction()
    };
function scrollFunction(){
    if(document.body.scrollTop>20||document.documentElement.scrollTop>20){
        mybutton.style.display='block';        
    }
    else{
        mybutton.style.display='none';
    }
}
function toTopButton(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
}
    /* To Top Button End   */


// Dicription Page Start

function description(num){
        if(num==1){
            document.getElementById('banner-img1').style.display='block';
            document.getElementById('banner-text1').style.display='block';
            // document.documentElement.scrollTop = 0;
        }
        else if(num==2){
            document.getElementById('banner-img2').style.display='block';
            document.getElementById('banner-text2').style.display='block';
            // document.documentElement.scrollTop = 0;
        }
        else if(num==3){
            document.getElementById('banner-img3').style.display='block';
            document.getElementById('banner-text3').style.display='block';
            // document.documentElement.scrollTop = 0;
        }
        else if(num==4){
            document.getElementById('banner-img4').style.display='block';
            document.getElementById('banner-text4').style.display='block';
            // document.documentElement.scrollTop = 0;
        }
        else if(num==5){
            document.getElementById('banner-img5').style.display='block';
            document.getElementById('banner-text5').style.display='block';
            // document.documentElement.scrollTop = 0;
        }
        else if(num==6){
            document.getElementById('banner-img6').style.display='block';
            document.getElementById('banner-text6').style.display='block';
            // document.documentElement.scrollTop = 0;
        }
}
function closeDiscription(num){
        if(num==1){
            document.getElementById('banner-img1').style.display='none';
            document.getElementById('banner-text1').style.display='none';
            // document.documentElement.scrollTop = 0;
        }
        else if(num==2){
            document.getElementById('banner-img2').style.display='none';
            document.getElementById('banner-text2').style.display='none';
            // document.documentElement.scrollTop = 0;
        } 
        else if(num==3){
            document.getElementById('banner-img3').style.display='none';
            document.getElementById('banner-text3').style.display='none';
            // document.documentElement.scrollTop = 0;
        }
        else if(num==4){
            document.getElementById('banner-img4').style.display='none';
            document.getElementById('banner-text4').style.display='none';
            // document.documentElement.scrollTop = 0;
        }
        else if(num==5){
            document.getElementById('banner-img5').style.display='none';
            document.getElementById('banner-text5').style.display='none';
            // document.documentElement.scrollTop = 0;
        }
        else if(num==6){
            document.getElementById('banner-img6').style.display='none';
            document.getElementById('banner-text6').style.display='none';
            // document.documentElement.scrollTop = 0;
        }
}

// Discription Page End

    // Series Page Start 
    function seriesDescription(num){
        if(num==11){
            document.getElementById('banner-img11').style.display='block';
            document.getElementById('banner-text11').style.display='block';
            // document.documentElement.scrollTop = 0;
        }
        else if(num==12){
            document.getElementById('banner-img12').style.display='block';
            document.getElementById('banner-text12').style.display='block';
            // document.documentElement.scrollTop = 0;
        }
        else if(num==13){
            document.getElementById('banner-img13').style.display='block';
            document.getElementById('banner-text13').style.display='block';
            // document.documentElement.scrollTop = 0;
        }
        else if(num==14){
            document.getElementById('banner-img14').style.display='block';
            document.getElementById('banner-text14').style.display='block';
            // document.documentElement.scrollTop = 0;
        }
        else if(num==15){
            document.getElementById('banner-img15').style.display='block';
            document.getElementById('banner-text15').style.display='block';
            // document.documentElement.scrollTop = 0;
        }
}
function closeSeriesDiscription(num){
        if(num==11){
            document.getElementById('banner-img11').style.display='none';
            document.getElementById('banner-text11').style.display='none';
            // document.documentElement.scrollTop = 0;
        }
        else if(num==12){
            document.getElementById('banner-img12').style.display='none';
            document.getElementById('banner-text12').style.display='none';
            // document.documentElement.scrollTop = 0;
        } 
        else if(num==13){
            document.getElementById('banner-img13').style.display='none';
            document.getElementById('banner-text13').style.display='none';
            // document.documentElement.scrollTop = 0;
        }
        else if(num==14){
            document.getElementById('banner-img14').style.display='none';
            document.getElementById('banner-text14').style.display='none';
            // document.documentElement.scrollTop = 0;
        }
        else if(num==15){
            document.getElementById('banner-img15').style.display='none';
            document.getElementById('banner-text15').style.display='none';
            // document.documentElement.scrollTop = 0;
        }
}
    // Series Page End




// Categories Page Start 
function sideBarDisplay(){
        document.getElementById('navbar').style.display='none';
        document.getElementById('wrapper').style.display='block';
        document.getElementById('moviesHeader').style.display='none';
        document.getElementById('pageContent').style.display='none';
        document.getElementById('footer').style.display='none';

}
function sideBarRemove(){
    document.getElementById('navbar').style.display='block';
    document.getElementById('wrapper').style.display='none';
    document.getElementById('moviesHeader').style.display='block';
    document.getElementById('pageContent').style.display='block';
    document.getElementById('footer').style.display='block';
    document.getElementById('container1').style.display='block';
    document.getElementById('container2').style.display='block';
}

//  News page strat 
function sideBarDisplayNews(){
    document.getElementById('navbar').style.display='none';
    document.getElementById('wrapper').style.display='block';
    document.getElementById('wrapperBtn').style.display='block';
    document.getElementById('container1').style.display='none';
    document.getElementById('container2').style.display='none';
    document.getElementById('footer').style.display='none';

}
function sideBarRemoveNews(){
    document.getElementById('container1').style.display='block';
    document.getElementById('container2').style.display='block';
    document.getElementById('navbar').style.display='block';
    document.getElementById('wrapper').style.display='none';
    document.getElementById('wrapperBtn').style.display='none';

}
