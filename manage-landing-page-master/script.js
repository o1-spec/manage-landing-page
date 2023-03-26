'use strict'

const btn = document.getElementsByClassName('btn')
const hamburger = document.querySelector('.hamburger')
const mobile = document.querySelector('.mobile-links')
const btnMobile = document.querySelector('.btn-mobile')
const mob = document.querySelector('.mobile')
const body = document.getElementsByTagName('body')
const mobileLink = document.querySelectorAll('.mobile-link')
const overlay = document.querySelector('.overlay')
const date = document.querySelector('.date')
const slide = document.getElementById('slide')

const now = new Date
const day = now.getFullYear()
date.textContent = day

hamburger.addEventListener('click',function(e){
    mob.classList.toggle('nav-open')
    overlay.classList.toggle('hidden')
})

mobileLink.forEach(function(btn){
    btn.addEventListener('click',function(e){
        e.preventDefault;
        mob.classList.toggle('nav-open')
        overlay.classList.toggle('hidden')
    })
})


btn[0].onclick = function(e){
    slide.style.transform = 'translateX(0px)'
    for(let i =0; i< 4; i++){
        btn[i].classList.remove('color')
    }
    this.classList.add('color')
}

btn[1].onclick = function(e){
    slide.style.transform = 'translateX(-400px)'
    for(let i =0; i< 4; i++){
        btn[i].classList.remove('color')
    }
    this.classList.add('color')
}

btn[2].onclick = function(e){
    slide.style.transform = 'translateX(-800px)'
    for(let i =0; i< 4; i++){
        btn[i].classList.remove('color')
    }
    this.classList.add('color')
}

btn[3].onclick = function(e){
    slide.style.transform = 'translateX(-1200px)'
    for(let i =0; i< 4; i++){
        btn[i].classList.remove('color')
    }
    this.classList.add('color')
}