// let demo = document.querySelector("#btn")
// demo.onclick = (e) => {
// //     console.log("Click me one time")
//     console.log(e)
//     console.log(e.type)
//     console.log(e.target)
// }
// let demo1 = document.querySelector("#btn1")
// demo1.ondblclick = (evt) => {
//     // console.log("btn was clicked two times")


//     console.log(evt.type)
//     console.log(evt.target)

// }
// let test = document.querySelector("#para")
// test.onmouseover = (nit) => {
//     // console.log("i am inside the box")
//     console.log(nit.type)
//     console.log(nit.target)
// }
const toggleBtn = document.getElementById("toggleBtn");
toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "Light Mode";
    } else {
        toggleBtn.textContent = "Dark Mode";
    }
});