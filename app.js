function displayScrolling()
{
    const scroll = document.querySelector(".scroll");
    
    if(window.pageYOffset > 0)
    {
        scroll.style.display = "none";
    }
    else{
        scroll.style.display = "block";
    }
}

window.addEventListener("scroll", ()=>{
    displayScrolling();
})