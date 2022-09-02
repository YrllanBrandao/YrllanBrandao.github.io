const year = new Date().getUTCFullYear();


const yearArea = document.querySelector("#year");

yearArea.innerHTML = year




const links = document.querySelectorAll(".navlink")


links.forEach(myLink =>{

     myLink.addEventListener("click", ()=>{

        for (const  link in links)
    {
    if(links[link].classList.contains("active"))
    {
        links[link].classList.remove("active")
    }

    myLink.classList.add("active")

    }

     })
})


//
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))