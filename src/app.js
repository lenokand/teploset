import 'bootstrap'

let btnMore = document.querySelector('.seo-text .btn-more')
if (btnMore) {
    btnMore.addEventListener('click', openSeoText)

    function openSeoText() {

        let allSeoText = document.querySelector('.seo-text .seo-content_all')
        allSeoText.style.display = 'block'
        btnMore.style.display = 'none'


    }
}



let contactTab = document.querySelectorAll('.contacts .accordion-body_item')

// console.log(contactTab.length)
if (contactTab.length > 0) {
    contactTab.forEach((tab, tabIndex) => {
        // console.log(tab, tabIndex)
        contactTab[0].classList.add('active')
        let tabContent = document.querySelectorAll('.contacts .right-item')
        if(tabContent.length > 0){
            tabContent[0].classList.add('active')
        }

       

        tab.addEventListener('click', function() {

             
            

            let activeTab = document.querySelector('.contacts .accordion-body_item.active')
            if(activeTab) {
                activeTab.classList.remove('active')
            }
            tab.classList.add('active')

            let activeTabContent = document.querySelector('.contacts .right-item.active')
            if(activeTabContent) {
                activeTabContent.classList.remove('active')
            }

            

            tabContent[tabIndex].classList.add('active')


        })


    })
}





let slides = document.querySelectorAll('.carousel-item')

    if(slides.length > 0){      
 // добавляем первому слайду видимость
    slides[0].classList.add('active')

   

    let buttonContainer = document.querySelector('#sliderMain .carousel-indicators')

    let i = 0
    // создаем кнопки для навигации
    while (i < slides.length) { 
        
        let button = document.createElement('button')

        button.setAttribute('type','button')
        button.setAttribute('data-bs-target','#sliderMain')
        button.setAttribute('data-bs-slide-to', i)
        // console.log(button)
       
        buttonContainer.appendChild(button )

        i++;
    }


}

 // добавляем первому поинтеру видимость
 let slidesBtns = document.querySelectorAll('.carousel-indicators button') 
    

 if(slidesBtns.length > 0){  
     
    slidesBtns[0].classList.add('active')
    slidesBtns[0].setAttribute('aria-current','true')

}

