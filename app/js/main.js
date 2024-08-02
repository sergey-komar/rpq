$(function () {
    $('.slider-box').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        dots: true
     });
})




window.addEventListener('DOMContentLoaded', () => {


    const menu = document.querySelector('.menu');
    const mobile = document.querySelector('.nav-icon');

    mobile.addEventListener('click', function(){
        this.classList.toggle('nav-icon--active');
        menu.classList.toggle('nav--active');

    });

    const footerArrows = document.querySelector('.footer__arrows');

    footerArrows.addEventListener('click', () => {
        window.scrollTo({
                top: 0, 
                behavior: 'smooth' 
            
            });
    })



    const tabsItem = document.querySelector('.tabs__item');
    const tabsItemBtn = document.querySelectorAll('.tabs__item-btn');
    const tabsContent = document.querySelectorAll('.tabs__content');

    function tabsHide(){
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');
        });

        tabsItemBtn.forEach(btn =>{
            btn.classList.remove('tabs__item-btn--active');
        })
    }
    function tabsShow(i){
        tabsContent[i].classList.add('show');
        tabsContent[i].classList.remove('hide');
        tabsItemBtn[i].classList.add('tabs__item-btn--active');
    }


    if(tabsItem && tabsItemBtn && tabsContent){
        tabsItem.addEventListener('click', (e)=>{
            const target = e.target;
            
            if(target && target.classList.contains('tabs__item-btn')){
                tabsItemBtn.forEach((item, i)=>{
                    if(target == item){
                        tabsHide();
                        tabsShow(i);
                    }
                
                })
            
            }
        })
    
        tabsHide();
        tabsShow(0);
    
    }
   
});