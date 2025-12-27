// const hamburger = document.querySelector('.hamburger');
// const navLinks = document.querySelector('.nav-links');

// hamburger.addEventListener('click', () => {
//   navLinks.classList.toggle('active');
// });


// // Optional: close menu when link is clicked (mobile)
// document.querySelectorAll('.nav-links a').forEach(link => {
//   link.addEventListener('click', () => {
//     navLinks.classList.remove('active');
//   });
// });







// // CONTACT POPUP OPEN
// document.addEventListener("DOMContentLoaded", () => {
//   const contactButtons = document.querySelectorAll(".contact-btn");

//   if (contactButtons.length > 0) {
//     contactButtons.forEach(btn => {
//       btn.addEventListener("click", (e) => {
//         e.preventDefault();
//         const popup = document.getElementById("contactPopup");
//         if (popup) popup.style.display = "flex";
//       });
//     });
//   }
// });

// // CLOSE POPUP
// function closePopup() {
//   document.getElementById("contactPopup").style.display = "none";
// }


// await fetch("http://localhost:5000/save", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify(data)
// });

























// // =======================
// // NAVIGATION MENU
// // =======================
// const hamburger = document.querySelector('.hamburger');
// const navLinks = document.querySelector('.nav-links');

// if (hamburger) {
//   hamburger.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
//   });
// }

// document.querySelectorAll('.nav-links a').forEach(link => {
//   link.addEventListener('click', () => {
//     navLinks.classList.remove('active');
//   });
// });


// // =======================
// // CONTACT POPUP
// // =======================
// document.addEventListener("DOMContentLoaded", () => {

//   // OPEN POPUP ON EVERY PAGE
//   const contactButtons = document.querySelectorAll(".contact-btn");
//   const popup = document.getElementById("contactPopup");

//   if (contactButtons.length > 0 && popup) {
//     contactButtons.forEach(btn => {
//       btn.addEventListener("click", (e) => {
//         e.preventDefault();
//         popup.style.display = "flex";
//       });
//     });
//   }

//   // =======================
//   // FORM SUBMISSION
//   // =======================
//   const form = document.getElementById("contactForm");

//   if (form) {
//     form.addEventListener("submit", async (e) => {
//       e.preventDefault();

//       const formData = new FormData(form);

//       const data = {
//         name: formData.get("name"),
//         email: formData.get("email"),
//         phone: formData.get("phone"),
//         message: formData.get("message")
//       };

//       try {
//         const response = await fetch("http://localhost:5000/save", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(data)
//         });

//         const resData = await response.json();
//         alert(resData.message);

//       } catch (err) {
//         alert("Error sending message");
//       }

//       closePopup();  
//       form.reset();
//     });
//   }
// });


// // =======================
// // CLOSE POPUP
// // =======================
// function closePopup() {
//   const popup = document.getElementById("contactPopup");
//   if (popup) popup.style.display = "none";
// }



















// Mobile Nav Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Auto close menu on click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});


// CONTACT POPUP OPEN
document.addEventListener("DOMContentLoaded", () => {
  const contactButtons = document.querySelectorAll(".contact-btn");

  contactButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const popup = document.getElementById("contactPopup");
      popup.style.display = "flex";
    });
  });

  // Contact form success alert
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", function () {
      alert("Message sent successfully!");
    });
  }
});

// CLOSE POPUP
function closePopup() {
  document.getElementById("contactPopup").style.display = "none";
}
