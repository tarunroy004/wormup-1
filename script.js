window.addEventListener("mousemove", (dets) => {
    let clX = gsap.utils.mapRange(
        0,
        window.innerWidth,
        500,
        window.innerWidth - 500,
        dets.clientX
    );

    gsap.to("#rect", {
        left : clX,
        ease : Power3,
    });
});