// Add an event listener to the form that upon submits creates a new rating
// When the rating is created redirect to the ratings page

const ratingForm = document.querySelector("#ratingForm")

ratingForm.addEventListener("submit", async (e) => {
    e.preventDefault();


    const formData = new FormData(ratingForm)
    const reqBody = Object.fromEntries(formData)

    await fetch("/add/rating", {
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(reqBody)
    })
    window.location.href = "/ratings"
})
