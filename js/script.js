/* make toggle btn */
let btn=document.getElementById("btn")
let menu=document.getElementById("menu")
btn.onclick=()=>{
  menu.classList.toggle('open')
}
   window.onload = () => {
            let top = document.querySelector('.top')
        
            window.onscroll = (e) => {

                var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

                if(scrollTop > 300) {
                    top.classList.add('open')
                }else {
                    top.classList.remove('open')
                }
            }
            
            top.onclick = () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                    })
            }
        
        }
        // Function to check if an element is in the viewport
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
function animateElements() {
  var elements = document.querySelectorAll('.animate-text');
  elements.forEach(function (el) {
    if (isElementInViewport(el)) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
}

document.addEventListener('scroll', animateElements);

animateElements();