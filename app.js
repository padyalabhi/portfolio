function displayScrolling()
{
    const scroll = document.querySelector(".scroll");
    
    if(window.pageYOffset == 0 && screen.width <= 600)
    {
        scroll.style.display = "block";
    }
    else{
        scroll.style.display = "none";
    }
}

window.addEventListener("scroll", ()=>{
    console.log("scrolling");
    displayScrolling();
})