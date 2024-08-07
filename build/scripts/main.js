

window.addEventListener('DOMContentLoaded', () => {

  
    function bodyLock(con) {
      const scrollFix = window.innerWidth - document.body.clientWidth + "px";
      if (con === true) {
        document.body.classList.add("_lock");
        document.body.style.paddingRight = scrollFix;
      } else if (con === false) {
        document.body.classList.remove("_lock");
        document.body.style.paddingRight = 0;
      } else if (con === undefined) {
        if (!body.classList.contains("_lock")) {
          document.body.classList.add("_lock");
          document.body.style.paddingRight = scrollFix;
        } else {
          document.body.classList.remove("_lock");
          document.body.style.paddingRight = 0;
        }
      } else {
        console.error("Неопределенный аргумент у функции bodyLock()");
      }
    }


    function cropText() {
      const elementsToCrop = document.querySelectorAll('[data-crop]');
      
      elementsToCrop.forEach(element => {
        const text = element.textContent,
              length = element.dataset.crop;
    
        if (text.length > length) {
          const croppedText = text.substring(0, length).trim() + '...';
          element.textContent = croppedText;
        }
      });
    }
    
    cropText()

    function cityChoose() {

      const searchWrap = document.querySelector('.header__search');
      const searchIcon = document.querySelector('.header__search-icon');

      searchIcon.addEventListener('click', () => {
        if(searchWrap.classList.contains('search-active')) {
          searchWrap.classList.remove('search-active')
        } else {
          searchWrap.classList.add('search-active')
        }
      })

      
    }

    cityChoose();




    function pageTabsInit(selector) {

        const tabs = document.querySelectorAll(selector);
        const blocks = document.querySelectorAll(selector + '-block');
        
        tabs.forEach(tab=>{
        
          tab.addEventListener('click', ()=>{
            blocks.forEach(block => {
              block.classList.remove('active-block');
            });
        
            tabs.forEach(tab=>{
              tab.classList.remove('active-tab');
            })
        
            blocks.forEach(block=>{
              if(block.dataset.tab == tab.dataset.tab) {
                block.classList.add('active-block');
                tab.classList.add('active-tab');
              }
            })
            
          })
        })
        
        
        if(tabs[0]) {
          tabs[0].classList.add('active-tab');
          blocks[0].classList.add('active-block');
        }
        
        
        }
        
    pageTabsInit('.projects .tab');
    pageTabsInit('.stages .tab');
    pageTabsInit('.complects .tab');





    class MobMenu {
      constructor() {
    
        this.mob = document.querySelector('.mob-menu');
        this.burger = document.querySelector('.burger');
        this.container = document.querySelector('.container');
        this.headerContacts = document.querySelector('.header__contacts');
    
        this.init();
      }
    

    

    
      listen() {
        this.burger.addEventListener('click', ()=>{
          if(this.mob.classList.contains('opened')) {
            this.close()
          } else {
            this.open()
          }
        })
      }
    
    
      open() {
        this.mob.classList.add('opened');
        this.container.classList.add('light-grey');
        this.container.classList.add('_locked');
        this.burger.classList.add('opened');
    
      }
    
      close() {
        this.mob.classList.remove('opened');
        this.container.classList.remove('light-grey');
        this.container.classList.remove('_locked');

        this.burger.classList.remove('opened');
      }
    
    
    
      init() {
        this.listen();
      }
    }
    
    const mobMenu = new MobMenu();



    function techSliderInit() {

      var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    
      if (screenWidth < 800) { 
    
    
    
        const techSliders = document.querySelectorAll('.techs__inner, .services-techs__inner');
    
        techSliders.forEach(el=>{
          const certsSlider = new Swiper(el, {
            slidesPerView: 1.2,
            spaceBetween: 20,
            autoplay: {
                delay: 3000,
                disableOnInteraction: true
              },
            speed: 1000,
            navigation: {
              nextEl: ".slider__arr.arr-r",
              prevEl: ".slider__arr.arr-l",
            },
            pagination:  {
              el: '.slider__nav',
              clickable: true
            }
     
          });
    
        });
    
      }
    }
    
    techSliderInit()
    
    window.addEventListener('load', techSliderInit);
    window.addEventListener('resize', techSliderInit);


    function projectsSliderInit() {
        const projectsSliders = document.querySelectorAll('.projects__section-inner');
    
        projectsSliders.forEach(el=>{
          const projectsSlider = new Swiper(el, {
            slidesPerView: 1.2,
            spaceBetween: 30,
            // autoplay: {
            //     delay: 3000,
            //     disableOnInteraction: true
            //   },
            speed: 1000,
            navigation: {
              nextEl: ".slider__arr.arr-r",
              prevEl: ".slider__arr.arr-l",
            },
            pagination: {
              el: ".slider__nav",
              clickable: true,
            },
            breakpoints: {
              1200: {
                slidesPerView: 4,
                navigation: {
                  nextEl: ".projects__arr.arr-r",
                  prevEl: ".projects__arr.arr-l",
                },
              },
              900: {
                slidesPerView: 3.1,
              },
              600: {
                slidesPerView: 2.1,
              },
            }
     
          });
    
        });
    
      
    }
    
    projectsSliderInit()




    function servicesAccordeon() {

      const servicesArrs = document.querySelectorAll('.services__title-wrap');

      servicesArrs.forEach(arr=>{
        arr.addEventListener('click', ()=>{
          if(arr.closest('.services__item').classList.contains('expanded')) {
            arr.closest('.services__item').classList.remove('expanded');
          } else {
            arr.closest('.services__item').classList.add('expanded');
          }
        })
      })

    }

    servicesAccordeon()


    function faqAccordeon() {

      const faqArrs = document.querySelectorAll('.faq__title-wrap');

      faqArrs.forEach(arr=>{
        arr.addEventListener('click', ()=>{
          if(arr.closest('.faq__item').classList.contains('expanded')) {
            arr.closest('.faq__item').classList.remove('expanded');
          } else {
            arr.closest('.faq__item').classList.add('expanded');
          }
        })
      })

    }

    faqAccordeon()



    function sliderBlockSliderInit() {
  
        const sliderBlockSlider = new Swiper('.slider-block__slider', {
          slidesPerView: 1.2,
          spaceBetween: 15,
          // autoplay: {
          //     delay: 3000,
          //     disableOnInteraction: true
          //   },
          speed: 1000,
          navigation: {
            nextEl: ".slider__arr.arr-r",
            prevEl: ".slider__arr.arr-l",
          },
          pagination: {
            el: ".slider__nav",
            clickable: true,
          },
          centeredSlides: false,
          initialSlide: 2,
          breakpoints: {
            1200: {
              slidesPerView: 5,
              spaceBetween: 30,
              centeredSlides: true,
              navigation: {
                nextEl: ".slider-block-next",
                prevEl: ".slider-block-prev",
              },
        
            },
            900: {
              slidesPerView: 3,
            },
            700: {
              slidesPerView: 1.6,
              centeredSlides: false,
            },
            500: {
              slidesPerView: 1.2,
              
            },
          }
   
        });
  }
  
  sliderBlockSliderInit()



  function reviewsSliderInit() {
  
    const reviewsSliderInit = new Swiper('.reviews__slider', {
      slidesPerView: 1.2,
      spaceBetween: 15,
      // autoplay: {
      //     delay: 3000,
      //     disableOnInteraction: true
      //   },
      speed: 1000,
      // navigation: {
      //   nextEl: ".techs__arr.arr-r",
      //   prevEl: ".techs__arr.arr-l",
      // },
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },
      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,

        },
        900: {
          slidesPerView: 2.5,
          
        },
        600: {
          slidesPerView: 2.1,
        },
      }

    });
  }

  reviewsSliderInit()


  function teamSliderInit() {
  
    const teamSliderInit = new Swiper('.team__slider', {
      slidesPerView: 1.2,
      spaceBetween: 15,
      // autoplay: {
      //     delay: 3000,
      //     disableOnInteraction: true
      //   },
      speed: 1000,
      navigation: {
        nextEl: ".arr-r.team__arr",
        prevEl: ".arr-l.team__arr",
      },
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },
      breakpoints: {
        1200: {
          slidesPerView: 3.5,
          spaceBetween: 30,

        },
        900: {
          slidesPerView: 2.5,
          
        },
        600: {
          slidesPerView: 2.1,

        },
      }

    });
  }

  teamSliderInit()


  function teamSliderSmInit() {
  
    const teamSliderInit = new Swiper('.team__slider--sm', {
      slidesPerView: 1.2,
      spaceBetween: 15,
      // autoplay: {
      //     delay: 3000,
      //     disableOnInteraction: true
      //   },
      speed: 1000,
      navigation: {
        nextEl: ".arr-r.team__arr",
        prevEl: ".arr-l.team__arr",
      },
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },
      breakpoints: {
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,

        },
        900: {
          slidesPerView: 2.5,
          
        },
        600: {
          slidesPerView: 2.1,

        },
      }

    });
  }

  teamSliderSmInit()


  function youtubeSliderInit() {
  
    const youtubeSliderInit = new Swiper('.youtube__slider', {
      slidesPerView: 1.2,
      spaceBetween: 15,
      // autoplay: {
      //     delay: 3000,
      //     disableOnInteraction: true
      //   },
      speed: 1000,
      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,

        },
        900: {
          slidesPerView: 2.5,
          
        },
        600: {
          slidesPerView: 2.1,

        },
      }

    });
  }

  youtubeSliderInit()



  function rangeInit() {
    var slider = document.querySelector('.calc__range');

    if(slider) {
      noUiSlider.create(slider, {
        start: 15,
        connect: 'lower',
        range: {
            'min': 1,
            'max': 30
        },
        // tooltips: true,
        tooltips: {
          // tooltips are output only, so only a "to" is needed
          to: function(numericValue) {
              return numericValue.toFixed(0) + ' лет';
          }
      }
    });

    slider.noUiSlider.on('update', function (values, handle) {
      var event = new Event('nouisliderChange'); // Создаем новое событие
      window.dispatchEvent(event); // Диспатчим его на глобальный объект window
    });

    }



    
  }

  rangeInit()


  function formatNumber(input) {
    // Удаляем все символы, кроме цифр
    let value = input.replace(/\D/g, '');
    // Форматируем число с разделителями пробелами каждые три символа
    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return value;
}


  function removeSeparators(input) {
    return Number(input.replace(/\D/g, ''));
  }

  // function inputLimit(input, limit) {
  //     if (input.value > limit) {
  //     input.value = limit;
  //     }
  //   }

  function inputLimit(input, limit) {
    if (isNaN(input.value) || input.value === '') {
        input.value = ''; // Очистить поле, если не число
    } else {
        const value = Number(input.value);
        if (value > limit) {
         input.value = limit; // Устанавливаем лимит
        } else {
         input.value = value; // Убеждаемся, что значение является числом
        }
    }
    }



  class Calc {
    constructor() {

      this.calcForm = document.querySelector('.calc__form');

      this.calcForm.reset();

      this.rangeSlider = document.querySelector('.calc__range');
      this.rangeSliderHandle = document.querySelector('.calc__range .noUi-handle');

      this.priceVal = document.querySelector('.calc__form [data-field="price"]');
      this.payVal = document.querySelector('.calc__form [data-field="payment"]');
      this.percentVal = document.querySelector('.calc__form [data-field="percent"]');


      this.creditVal = document.querySelector('.calc__result [data-res="total"]');
      this.monthlyVal = document.querySelector('.calc__result [data-res="monthly"]');

      this.yearsValueRaw = this.rangeSliderHandle.getAttribute('aria-valuenow');
      this.yearsValue = parseInt(this.yearsValueRaw);

      this.init()
    }


    listenRanges() {
      window.addEventListener('nouisliderChange', (event) => {
        this.yearsValueRaw = this.rangeSliderHandle.getAttribute('aria-valuenow');
        this.yearsValue = parseInt(this.yearsValueRaw);
        if(!this.validateFields()) {
          return;
        }

        if(!this.checkSums()) {
          return;
        } 

        this.calcRes();
    });
  
    }

    listenInputs() {

      this.calcInputs = document.querySelectorAll('[data-field]');


      this.calcInputs.forEach(input=>{
        
        input.addEventListener('input', ()=>{

          if(input.dataset.field == 'price') {
            this.price = input.value;
            this.price = removeSeparators(this.price);
            input.value = formatNumber(input.value);
          } else 
          if(input.dataset.field == 'payment') {
            this.pay = input.value;
            this.pay = removeSeparators(this.pay);
            input.value = formatNumber(input.value);
          } else 
          if(input.dataset.field == 'percent') {

            inputLimit(input, 100);

            this.percent = input.value;
          }


          if(!this.validateFields()) {
            return;
          }

          if(!this.checkSums()) {
            return;
          } 

          this.calcRes();
        })
      })

    }



    validateFields() {

      this.deleteErrs();
      
      const pattern = /\d/;
      const errArr = [];
         
        this.calcInputs.forEach(e=>{

          if(!pattern.test(e.value)) {
            errArr.push(e);
          } 
        })
      
      if(errArr.length > 0) {
        this.createErr(errArr);
        return false;
      } 

      return true;
    }

    checkSums() {

      if(this.pay > this.price) {

        const payWrap = this.payVal.closest('.calc__form-input-wrap');

        const spanPayErr = document.createElement('span');
        spanPayErr.classList.add('_error-txt');
        spanPayErr.innerHTML = 'Взнос не должен быть больше кредита';

        
        this.payVal.classList.add('_error-input');
        payWrap.appendChild(spanPayErr);
        return false;
        
      } else {
        return true;
      }

    }



    // Создаем ошибки в пусты полях
    createErr(arr) {
      // Удаляем старые ошибки
      this.deleteErrs();

      if(arr.length > 0) {

        arr.forEach(el=>{
          const arrSpan = document.createElement('span');
          arrSpan.classList.add('_error-txt');
          arrSpan.innerHTML = 'Заполните поле';


          const errWrap = el.closest('.calc__form-input-wrap');
          el.classList.add('_error-input');
          errWrap.appendChild(arrSpan);
        })

      }

    }

    // Удаление старых ошибок и обводок
    deleteErrs() {
      const errs = document.querySelectorAll('.calc__form ._error-txt');

      errs.forEach(err=>{
        err.remove();
      })

      const errInputs = document.querySelectorAll('.calc__form ._error-input');

      errInputs.forEach(el=>{
        el.classList.remove('_error-input');
      })

    }

 
    // Считаем ежемесячный платеж и сумму кредита 
    calcRes() {
      this.credit = this.price - this.pay;
      
      const monthlyInterestRate = this.percent / 12 / 100;

      const totalPayments = this.yearsValue * 12;
      
      const monthlyPayment = this.credit * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments) / (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);
      
      this.monthlyPayment = parseInt(monthlyPayment.toFixed(0));

      this.showRes()

    }


    // Подставляем результаты в HTML
    showRes() {

      console.log(this.credit);
      console.log(this.monthlyPayment);

      this.creditVal.innerHTML = this.credit.toLocaleString('ru-RU') + ' ₽';
      this.monthlyVal.innerHTML = 'от ' + this.monthlyPayment.toLocaleString('ru-RU') + ' ₽/ мес';
    }


    init() {

      this.listenRanges()
      this.listenInputs()
      
    }
  }


  if(document.querySelector('.calc__form')) {
    const calc = new Calc;
  }
  





function mapInit() {

        ymaps.ready(init);

        function init() {
            var myMap = new ymaps.Map("map", {
                center: [57.153033, 65.534328], // центр карты (координаты Тюмени)
                zoom: 12 // уровень масштаба
            });

            // Создание метки с дефолтной иконкой
            var myPlacemark = new ymaps.Placemark([57.153033, 65.534328], {
                hintContent: 'Тюмень',
                balloonContent: '<div class="map__baloon"><img src="images/map/baloon.png"><div class="map__content"><div class="map__info"><h3>Название объекта</h3><div class="map__descr">Описание объекта. Описание объекта. Описание объекта.</div><div class="map__tel">Номер тел.:<a href="tel:+7 (900) 000-00-00">+7 (900) 000-00-00</a></div></div><button class="map__btn">Записаться на экскурсию</button></div></div>'
            }, {
                iconLayout: 'default#image', // использовать дефолтную иконку
                iconImageHref: 'images/map/icon.png', // путь к иконке
                iconImageSize: [54, 54] // размер иконки

            });

            // Добавление метки на карту
            myMap.geoObjects.add(myPlacemark);

            // Открытие информационного окна при клике на метку
            myPlacemark.events.add('click', function () {
                myMap.balloon.open([57.153033, 65.534328], 'Дополнительная информация', {
                    closeButton: true // отображение кнопки закрытия окна
                });
            });
        }
      }

      if(document.getElementById('map')) {
        mapInit()
      }

      



      function footerLinksSpread() {
        const footerBlock = document.querySelectorAll('.footer__links');
        const footerSpoilers = document.querySelectorAll('.footer__links-more');
        const limit = 4;


        footerBlock.forEach(block=>{
          const footerLinks = block.querySelectorAll('.footer__link');
          if(footerLinks.length > limit && !block.querySelector('.footer__cols')) {
            block.querySelector('.footer__links-more').classList.remove('hidden');
            
            for (let i = limit; i < footerLinks.length; i++) {
              footerLinks[i].classList.add('hidden');
              
            }
          } 
        })


        footerSpoilers.forEach(spoiler => {
          spoiler.addEventListener('click', () => {
            if(!spoiler.classList.contains('opened')) {
              spoiler.closest('.footer__links').querySelectorAll('.footer__link').forEach(el=>el.classList.remove('hidden'));
              spoiler.textContent = 'Свернуть';
              spoiler.classList.add('opened');
            } else {
              const linksToClose = spoiler.closest('.footer__links').querySelectorAll('.footer__link');
              spoiler.classList.remove('opened');
              
              for (let i = limit; i < linksToClose.length; i++) {
                linksToClose[i].classList.add('hidden');
              }
             
            }
          })
        })





      }

      footerLinksSpread()


      function pageDetailSlider() {
        var navDetailSlider = new Swiper(".work-detail__nav-slider", {
          spaceBetween: 10,
          slidesPerView: 4,
          freeMode: true,
          watchSlidesProgress: true,
          breakpoints: {
            1200: {
              spaceBetween: 20,
            },
          }
        });

        var mainDetailSlider = new Swiper(".work-detail__main-slider", {
          spaceBetween: 10,
          navigation: {
            nextEl: ".work-detail__arr-next",
            prevEl: ".work-detail__arr-prev",
          },
          thumbs: {
            swiper: navDetailSlider,
          },
          
        });
      }

      pageDetailSlider()


      function otherWorksSliderInit() {
  
        const otherWorksSliderInit = new Swiper('.other-works__slider', {
          slidesPerView: 1.1,
          spaceBetween: 15,
          // autoplay: {
          //     delay: 3000,
          //     disableOnInteraction: true
          //   },
          speed: 1000,
          navigation: {
            nextEl: ".slider__arr.arr-r",
            prevEl: ".slider__arr.arr-l",
          },
          pagination: {
            el: ".slider__nav",
            clickable: true,
          },
          breakpoints: {
            1200: {
              slidesPerView: 3.5,
              spaceBetween: 30,
              navigation: {
                nextEl: ".arr-r.other-works__arr",
                prevEl: ".arr-l.other-works__arr",
              },
    
            },
            900: {
              slidesPerView: 2.5,
              
            },
            600: {
              slidesPerView: 2.1,
    
            },
          }
    
        });
      }
    
      otherWorksSliderInit()


      function complectsSpoiler() {
        const spoilers = document.querySelectorAll('.complects__spoiler');

        if(spoilers.length > 0) {
          spoilers.forEach(spoiler=>{
            const content = spoiler.closest('.complects__block').querySelector('.complects__block-content');

            spoiler.addEventListener('click', ()=>{
              if(content.classList.contains('opened')) {
                content.classList.remove('opened');
                spoiler.innerHTML = 'Читать целиком';
              } else {
                content.classList.add('opened');
                spoiler.innerHTML = 'Свернуть';
              }
            })

            
          })
        }
      }

      complectsSpoiler()



      function toggleMenusInit() {
        const toggles = document.querySelectorAll('.toggle-title');

        toggles.forEach(toggle=>{
          toggle.addEventListener('click', ()=>{
            if(toggle.closest('.toggle-wrap').classList.contains('opened')) {
              toggle.closest('.toggle-wrap').classList.remove('opened');
            } else {
              toggle.closest('.toggle-wrap').classList.add('opened');
            }
            
          })
        })
      }
      toggleMenusInit()



      function inpPlaceholders() {
        const inpWraps = document.querySelectorAll('.input-wrap');

        inpWraps.forEach(inpWrap => {

          const inp = inpWrap.querySelector('.inp');
          const inpName = inpWrap.querySelector('.inp-name');

          inp.addEventListener('focus', ()=>{
            inpName.classList.add('hidden');
          })

          inp.addEventListener('blur', ()=>{
            if(inp.value=='') {
              inpName.classList.remove('hidden');
            }
            
          })
          
        })
      }

      inpPlaceholders();


})