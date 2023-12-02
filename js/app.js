let button = document.querySelector('#open-button');
let aside = document.querySelector('aside');
let close = document.querySelector('#close-button');

button.addEventListener('click', function(){
    aside.classList.add('show');
})

close.addEventListener('click', function(){
    aside.classList.toggle('hide');
})

let open_search_button = document.querySelector('#search_open_btn');
let close_search_button = document.querySelector('#close_search_button')
let search_box = document.querySelector('#search-box');

open_search_button.addEventListener('click', function(){
    search_box.style.transform = ('scale(1)');
})

close_search_button.addEventListener('click', function(){
    search_box.style.transform = ('scale(0)');
})

