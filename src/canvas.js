import gsap from 'gsap'
export function canvas(canvas) {
    const color = ["black", "rgb(23, 98, 128)", "#690c0c"]

    // tl = gsap.timeline()
    // tl.to('transition', { 
    // duration: 1.2,
    // x: '-100%',
    // });
    // return tl;

    window.addEventListener("navigation", event => {
        const { page } = event.detail;
        // const div = document.createElement('div')
        // div.className = 'transition'
        // div.style.position = 'fixed'
        // div.style.top = 0
        // div.style.width = '100%'
        // div.style.height = '100%'
        // div.style.backgroundColor = 'white'
        // div.style.zIndex = 2
        // document.body.appendChild(div)
        // const tl = gsap.timeline({
        //     onComplete: () => document.body.removeChild(div)
        // })
        // const transition = document.getElementsByClassName('transition')
        // tl.fromTo(div, { 
        // duration: 1.8,
        // ease: 'power1.inOut',
        // x: '-100%',
        // },
        // {
        // x: 0
        // });
        // tl.fromTo(div, {
        //     x: 0
        // },
        // {
        //     x: '100%'
        // });
        
        // console.log(div, 'div')
    
        // const transition = event.navigation
        // console.log(transition, 'transition')
        

        // const change = event.target.onchange
        // console.log(event, 'event')
        // console.log(change, 'onchange')
        // console.log(event.currentTarget.ontransitionstart, 'start')
        // console.log(event.currentTarget.ontransitionend, 'end')
        // console.log(event.target, 'target')
        // console.log(event.target.navigation.transition, 'nav')
        // if(page && event.currentTarget.onchange) {
        //     canvas.style.backgroundColor = color[0]
        // } else if (page && event.currentTarget.onchange) {
        //     canvas.style.backgroundColor = color[1];
        // }
        if (page === "/") {
            canvas.style.backgroundColor = color[0];
            // tl.play()
            // classList.add('.show')
        } else if (page === "/about") {
            canvas.style.backgroundColor = color[1];
            // tl.play()
        } else if (page === "/contact") {
            canvas.style.backgroundColor = color[2];
            // tl.play()
        }
    });
}