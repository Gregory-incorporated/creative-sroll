// Register ScrollTrigger and ScrollSmoother plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Only apply the animation for devices without touch
if (!ScrollTrigger.isTouch) {
  // Create ScrollSmoother with options
  ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
    smooth: 1.5,
    effects: true,
  });

  // Animate opacity of hero-section element
  gsap.fromTo(
    ".hero-section",
    { opacity: 1 },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: ".hero-section",
        start: "center",
        end: "bottom",
        scrub: true,
      },
    }
  );

  // Animate gallery__left items
  gsap.utils.toArray(".gallery__left .gallery__item").forEach((item) => {
    gsap.fromTo(
      item,
      { opacity: 0, x: -150 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: "-850",
          end: "-100",
          scrub: true,
        },
      }
    );
  });

  // Animate gallery__right items
  gsap.utils.toArray(".gallery__right .gallery__item").forEach((item) => {
    gsap.fromTo(
      item,
      { opacity: 0, x: 150 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: "-850",
          end: "-100",
          scrub: true,
        },
      }
    );
  });
}
