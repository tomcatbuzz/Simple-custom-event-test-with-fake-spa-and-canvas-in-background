export function transition(currentPage, nextPage) {
  return new Promise((resolve, reject) => {
    tl = gsap.timeline()
    tl.to('transition', { 
    duration: 1.2,
    x: '-100%',
    });
    
      const div = document.createElement('div')
      div.className = 'transition'
      div.style.position = 'fixed'
      div.style.top = 0
      div.style.width = '100%'
      div.style.height = '100%'
      div.style.backgroundColor = 'white'
      div.style.zIndex = 2
      document.body.appendChild(div)
      const tl = gsap.timeline({
          onComplete: () => document.body.removeChild(div)
      })
      const transition = document.getElementsByClassName('transition')
      tl.fromTo(div, { 
      duration: 1.8,
      ease: 'power1.inOut',
      x: '-100%',
      },
      {
      x: 0
      });
      tl.fromTo(div, {
          x: 0
      },
      {
          x: '100%'
      });
      
  });
}