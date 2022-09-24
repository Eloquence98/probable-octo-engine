const options = {
  root: null,
  threshhold: 0,
  rootMargin: "0px",
};

// let target = document.querySelectorAll(".is-anima");
// console.log(target);

// function handleIntersection(entries, clas) {
//   entries.map((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add(clas);
//     }
//   });
// }

// const observer = new IntersectionObserver(
//   handleIntersection("animateFromBottom"),
//   options
// );
// observer.observe(target);

const toTop = document.querySelectorAll(".to-top");

// **************************
// Internection Observer for innner div's Contnet
// **************************
const newObs = new IntersectionObserver((entrys, obser) => {
  entrys.forEach((ent) => {
    if (!ent.isIntersecting) {
      return;
    }
    ent.target.classList.add("animateFromBottom");
  });
}, options);

toTop.forEach((elm) => {
  newObs.observe(elm);
});

const sectionShowcaseElm = document.querySelector(".showcase");

const myOptions = {};
const observerFirNavigation = new IntersectionObserver((entries, observer) => {
  // if first section is visible on the view port
  if (entries[0].isIntersecting === true) {
    window.onscroll = function (e) {
      setTimeout((e) => {
        // headerAnimation.style.setProperty("--height0", "0px");
        console.log("intersecting");
      }, 100);
    };
  }
  // if first section is NOT visible on the view port
  else {
    // See if scrolling down or up
    let newValue = 0;
    let oldValue = 0;
    window.onscroll = function (e) {
      newValue = window.pageYOffset;
      if (oldValue < newValue) {
        document
          .querySelector(".header-animate")
          .style.setProperty("$navbar-opacity", "0");
        // headerAnimation.style.setProperty("--height0", "0px");
        console.log("goin down");
      } else if (oldValue > newValue) {
        // headerAnimation.style.setProperty("--height0", "100px");
        document
          .querySelector(".header-animate")
          .style.setProperty("$navbar-opacity", "1");
        console.log("going up");
      }
      oldValue = newValue;
    };
    //
  }
}, myOptions);
// Observe section with obsForSections
observerFirNavigation.observe(sectionShowcaseElm);
