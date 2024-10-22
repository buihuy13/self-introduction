//hover vào thì các program skills icon flip: thêm class fa-flip thì sẽ flip

let leetcode_x = document.querySelector(".leetcode-x");
let project_x = document.querySelector(".project-x");
let backend_x= document.querySelector(".backend-x");
let layout = document.querySelector(".skills_layout");
let leetcode = document.querySelector(".leetcode-skills");
let project = document.querySelector(".project-skills");
let backend = document.querySelector(".backend-skills");

leetcode_x.addEventListener("click",func1);
project_x.addEventListener("click",func2);
backend_x.addEventListener("click",func3);
leetcode.addEventListener("click",func1);
project.addEventListener("click",func2);
backend.addEventListener("click",func3);
document.addEventListener("keydown",func);

function func1() {
    let a = document.querySelector(".leetcode-skill");
    a.classList.toggle("none");
    layout.classList.toggle("none");
}

function func2() {
    let a = document.querySelector(".project-skill");
    a.classList.toggle("none");
    layout.classList.toggle("none");
}

function func3() {
    let a = document.querySelector(".backend-skill");
    a.classList.toggle("none");
    layout.classList.toggle("none");
}

function func(e) {
    if (layout.classList.contains("none")===false && e.which===13)
    {
        let x=document.querySelector(".leetcode-skill");
        let y=document.querySelector(".project-skill");
        if (x.classList.contains("none")===false)
        {
            func1();
        }
        else if (y.classList.contains("none")===false)
        {
            func2();
        }
        else
        {
            func3();
        }
    }
}
