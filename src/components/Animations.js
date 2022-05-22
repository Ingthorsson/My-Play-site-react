import gsap from "gsap";

export const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
        duration: 0.8,
        height: 0,
        transformOrigin: 'right  top',
        skewY: 2,
        ease: 'power3.inOut',
        stagger: {
            amount: 0.1
        }
    });
};

// CLOSE MENU
export const staggerRevealClose = (node1, node2) => {
    gsap.to([node1, node2], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
            amount: 0.07
        }
    });
};

export const staggerText = (node1, node2, node3) => {
    gsap.from([node1, node2, node3], {
        duration: 0.8,
        y: 100,
        delay: 0.1,
        ease: "power3.inOut",
        stagger: {
            amount: 0.3
        }
    });
};

export const fadeInUp = (node1) => {
    gsap.from(node1, {
        y: 60,
        duration: 0.8,
        delay: 0.2,
        opacity: 0,
        ease: 'power3.inOut',
    });
};


export const handleHover = e => {
    gsap.to(e.target, {
        duration: 0.3,
        y: 3,
        skewX: 4,
        ease: "power3.inOut"
    });
};

export const handleHoverExit = e => {
    gsap.to(e.target, {
        duration: 0.3,
        y: -3,
        skewX: 0,
        ease: "power3.inOut"
    });
};