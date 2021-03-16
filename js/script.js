window.addEventListener('DOMContentLoaded', () => {
    'use strict'
    AOS.init()

    const burger = (selector, menu) => {
        const burgerMenu = document.querySelector(selector)
        const list = document.querySelector(menu)

        burgerMenu.addEventListener('click', () => {
            burgerMenu.classList.toggle('active')
            list.classList.toggle('active')

            if (burgerMenu.classList.contains('active')) {
                document.body.classList.add('lock')
            } else {
                document.body.classList.remove('lock')
            }
        })
    }

    document.addEventListener('scroll', () => {
        if (window.screen.availWidth > 992) {
            const element = document.querySelector('.header__menu')
            const scrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);

            if (scrollTop >= 1) {
                element.classList.add('stiky')
            } else {
                element.classList.remove('stiky')
            }
        }
    })

    const slider = (slides, imageBlock) => {
        if (window.screen.availWidth >= 992) {
            const items = document.querySelectorAll(slides)
            const imageNowBlock = document.querySelector(imageBlock)

            items.forEach(item => {
                item.addEventListener('click', () => {
                    imageNowBlock.src = item.src.slice(21)
                    imageNowBlock.previousElementSibling.srcset = item.src.slice(21)
                })
            })
        }
    }

    const swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.article__next',
            prevEl: '.article__prev',
        },
        grabCursor: true
    })


    burger('.header__burger', '.header__list')
    slider('.product__img', '.product__img-now')
})