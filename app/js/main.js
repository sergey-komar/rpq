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


    // Маска для Инпута
    var element = document.getElementById('input-mask');
    var element1 = document.getElementById('input-mask1');
    var element2 = document.getElementById('input-mask2');
    var maskOptions = {
        mask: '+{7}(000)000-00-00'
    };

    if(element){
        var mask = IMask(element, maskOptions);
    }
    if(element1){
        var mask = IMask(element1, maskOptions);
    }
    if(element2){
        var mask = IMask(element2, maskOptions);
    }


    const tabsItem1 = document.querySelector('.tabs-registration__item');
    const tabsItemBtn1 = document.querySelectorAll('.tabs-registration__item-btn');
    const tabsContent1 = document.querySelectorAll('.tabs-registration__content');

    function tabsHide1(){
        tabsContent1.forEach(item => {
            item.classList.add('hide-registration');
            item.classList.remove('show-registration');
        });

        tabsItemBtn1.forEach(btn =>{
            btn.classList.remove('tabs-registration__item-btn--active');
        })
    }
    function tabsShow1(i){
        tabsContent1[i].classList.add('show-registration');
        tabsContent1[i].classList.remove('hide-registration');
        tabsItemBtn1[i].classList.add('tabs-registration__item-btn--active');
    }


    if(tabsItem1 && tabsItemBtn1 && tabsContent1){
        tabsItem1.addEventListener('click', (e)=>{
            const target = e.target;
            
            if(target && target.classList.contains('tabs-registration__item-btn')){
                tabsItemBtn1.forEach((item, i)=>{
                    if(target == item){
                        tabsHide1();
                        tabsShow1(i);
                    }
                
                })
            
            }
        })
    
        tabsHide1();
        tabsShow1(0);
    
    }
   
   
   
});