// Add an event listener to the form that upon submits creates a new teacher
// When the teacher is created redirect to the teachers page

const teacherForm = document.querySelector("#teacherForm")

teacherForm.addEventListener("submit", async (e) => {
    e.preventDefault();


    const formData = new FormData(teacherForm)
    const reqBody = Object.fromEntries(formData)

    await fetch("/add/teacher", {
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(reqBody)
    })
    window.location.href = "/"
})