const progress =document.querySelector('.progress-bar');

window.addEventListener('scroll', ()=>{
    const windowScroll = window.pageYOffset;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const pageScrolled = (windowScroll / height) * 100;
    progress.style.width = `${pageScrolled}%`;

});