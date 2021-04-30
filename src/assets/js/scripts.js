// 'use strict';
//
// document.onload = function (e) {
//   const navItem = document.querySelectorAll(".nav-item");
//   const filter = document.querySelectorAll(".filter");
//   const navTrigger = document.querySelector(".nav-trigger");
//   const contactSend = document.getElementById("contact-me-submit");
//   const elem = document.querySelector(".masonry");
//   let iso;
//   let scrolled = 0
//
//   function scrollEvents() {
//     /** @type {number} */
//     scrolled = window.pageYOffset;
//     if (0 < scrolled) {
//       document.body.classList.add("scrolled");
//     } else {
//       document.body.classList.remove("scrolled");
//     }
//   }
//
//   if (elem) {
//     imagesLoaded(elem, function () {
//       iso = new Isotope(elem, {
//         itemSelector: ".item",
//         masonry: {
//           columnWidth: ".item-sizer"
//         }
//       });
//       Array.prototype.forEach.call(filter, (a) => {
//         a.addEventListener("click", (event) => {
//           event.stopPropagation();
//           event.preventDefault();
//           const updatedFilter = a.getAttribute("href");
//           iso.arrange({
//             filter: updatedFilter
//           });
//           Array.prototype.forEach.call(filter, (a) => {
//             a.classList.remove("active");
//           });
//           a.classList.add("active");
//         });
//       });
//     });
//
//   }
//
//   navTrigger.addEventListener("click", () => {
//     document.body.classList.toggle("nav-open");
//   });
//   Array.prototype.forEach.call(navItem, (a) => {
//     a.addEventListener("click", () => {
//       Array.prototype.forEach.call(navItem, (a) => {
//         a.classList.remove("active");
//       });
//       document.body.classList.remove("nav-open");
//       a.classList.add("active");
//     });
//   });
//   document.addEventListener("scroll", scrollEvents, false);
//   document.addEventListener("touchmove", scrollEvents, false);
//
//   /**
//    * @return {undefined}
//    */
//
//
//   window.addEventListener("resize", () => {
//     iso.reloadItems();
//     iso.layout();
//   });
//
//   /**
//    * @return {?}
//    */
//   function validateName() {
//     /** @type {(Element|null)} */
//     var a = document.getElementById("contact-me-name");
//     return !!a.value.length && !/\d/.test(a.value);
//   }
//
//   /**
//    * @return {?}
//    */
//   function validateEmail() {
//     /** @type {(Element|null)} */
//     var a = document.getElementById("contact-me-email");
//     return a.value.length;
//   }
//
//   /**
//    * @return {?}
//    */
//   function validateMsg() {
//     /** @type {(Element|null)} */
//     var a = document.getElementById("contact-me-msg");
//     return 30 <= a.value.length;
//   }
//
//   /**
//    * @param {!Event} event
//    * @return {undefined}
//    */
//   function submitForm(event) {
//     if (event.preventDefault(), validateName() && validateEmail() && validateMsg()) {
//       var customfont = {
//         email_from_name: document.getElementById("contact-me-name").value,
//         email_from_email: document.getElementById("contact-me-email").value,
//         email_to: "contact@lkeaz.me",
//         email_phone: document.getElementById("contact-me-phone").value,
//         email_html: document.getElementById("contact-me-msg").value
//       };
//       emailjs.send("default_service", "template_Z1BGxcXr", customfont);
//       contactSend.setAttribute("disabled", "");
//       document.getElementById("message-sent").classList.toggle("hide");
//       if (!document.getElementById("message-error").classList.contains("hide")) {
//         document.getElementById("message-sent").classList.add("hide");
//       }
//     } else {
//       document.getElementById("message-error").classList.remove("hide");
//     }
//   }
//
//   contactSend.addEventListener("click", submitForm, false);
// }
//
