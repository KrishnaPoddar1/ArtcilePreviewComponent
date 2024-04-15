const button=document.querySelector(".person button");
const tooltipElement=document.getElementsByClassName("tooltipElement");

button.addEventListener("click",function(){
    if(window.matchMedia("(max-width:768px)").matches){
        const personElement=button.parentElement;
        //personElement.style.display="none";
        personElement.classList.add("hidden");
        tooltipElement[0].classList.remove("hidden");
    }else {
        //tooltipElement[0].style.display="block";
        tooltipElement[0].style.display = "flex"
        tooltipElement[0].style.position="absolute";
        const buttonRect = button.getBoundingClientRect();
        /*
        tooltipElement[0].style.top= buttonRect.top + buttonRect.height + "px";
        tooltipElement[0].style.left =buttonRect.left+"px";
        */
        tooltipElement[0].style.bottom = "60px";
        tooltipElement[0].style.right = "-60px";
        tooltipElement[0].classList.remove("hidden");

        document.addEventListener("click",function (e) {
            if(e.target!==button && e.target!== tooltipElement){
                tooltipElement[0].classList.add("hidden");
                //const personElement=button.parentElement;
                //personElement.classList.remove("hidden");
            }
        });
        

    }
});


/*

const share= document.getElementById("mybutton");
const person=document.getElementsByClassName("person");
const shareBlock=document.getElementsbyClassName("share");
const share2= document.getElementById("share2");
const screenWidth = window.innerWidth;


share.addEventListener('click', function (e) {

    if(screenWidth >= 768){
        shareBlock[0].classList.remove("hidden");
    }else{
        person[0].classList.add("hidden");
        shareBlock[0].classList.remove("hidden");
    }
});

share2.addEventListener('click', function() {
    person[0].classList.remove("hidden");
    shareBlock[0].classList.add("hidden");
});

*/
