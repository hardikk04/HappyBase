const tl = gsap.timeline();

gsap.to(".page1-path", {
  strokeDashoffset: 0,
  duration: 3,
});

tl.from(".page1-hero-box>h1", {
  y: 400,
  stagger: 0.25,
  ease: "power4.in",
  opacity: 0,
  duration: 1,
});

tl.from(".page1-overlay", {
  scale: 0,
  duration: 1,
});

tl.from(".line-ani", {
  opacity: 0,
  rotate: "0deg",
  width: "1.3vw",
  duration: 0.5,
});

tl.to(".page1-part2", {
  top: "-100vh",
  scrollTrigger: {
    scroller: "body",
    trigger: ".page1",
    start: "top 0%",
    end: "top -100%",
    // markers: true,
    scrub: 1,
    pin: true,
    pinSpacing: false,
  },
});

tl.to(".page2-svg1", {
  rotate: 360,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page1-part2",
    start: "top 100%",
    end: "top 0%",
    scrub: 1,
    // markers: true,
  },
});

tl.to(".page2-svg2", {
  rotate: 360,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page1-part2",
    start: "top 100%",
    end: "top 0%",
    scrub: 1,
    // markers: true,
  },
});

gsap.to(".page2-path", {
  strokeDashoffset: 0,
  // strokeDasharray: 0,
  duration: 3,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page2-path",
    start: "top 40%",
    end: "top 0%",
    // markers: true,
    // scrub: 1,
  },
});

gsap.to(".page2-overlay", {
  height: "140%",
  width: "140%",
  duration: 1,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page2",
    start: "top 30%",
    end: "top 0%",
    // markers: true,
    // scrub: 1,
  },
});

gsap.to(".page3-img1", {
  y: 150,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page3-img1",
    start: "top 100%",
    end: "top 0%",
    // markers: true,
    scrub: 1,
  },
});

gsap.to(".page3-img2", {
  y: -150,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page3-img1",
    start: "top 100%",
    end: "top 0%",
    // markers: true,
    scrub: 1,
  },
});

gsap.to(".page3-path", {
  strokeDashoffset: 0,
  duration: 3,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page3-path",
    start: "top 50%",
    end: "top 0%",
    // markers: true,
    // scrub: 1,
  },
});

gsap.from(".page3-hero>h1", {
  y: 120,
  opacity: 0,
  stagger: -0.3,
  ease: "power1.out",
  scrollTrigger: {
    scroller: "body",
    trigger: ".page3-hero",
    start: "top 80%",
    end: "top 0%",
    // markers: true,
    // scrub: 1,
  },
});
