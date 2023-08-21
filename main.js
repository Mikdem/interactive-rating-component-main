const rate = document.querySelectorAll(".btn");
const submit = document.querySelector(".submit");
const ratePoint = document.querySelector("#rating");
const ratingDiv = document.querySelector(".card");
const thankyouDiv = document.querySelector(".thankyou");

submit.addEventListener("click", () => {
    thankyouDiv.classList.remove("hidden")
    ratingDiv.style.display = "none"
})

rate.forEach((zrate) => {
    zrate.addEventListener("click", () => {
        ratePoint.innerHTML = zrate.innerHTML
    })
})

// let rateValue = 0;

// ratingPart.forEach((rate) => {
//     rate.addEventListener("click", (e) => {
//         ratingPart.forEach((rt) => {
//             rt.classList.remove('bg-lightGrey')
//             rt.classList.remove('text-white')
//         })
//         rateValue = this.value
//         this.classList.add('bg-lightGrey')
//         this.classList.add('text-white')
//     })
// })

// submit.addEventListener('click', function (event) {
//     event.preventDefault()
//     ratePoint.innerText = btnValue
//     ratingDiv.classList.remove('flex')
//     ratingDiv.classList.add('hidden')
//     thankyouDiv.classList.remove('hidden')
//     thankyouDiv.classList.add('flex')
// })