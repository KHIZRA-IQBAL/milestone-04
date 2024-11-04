window.addEventListener("load", () => {
 let name= localStorage.getItem("name");
 let designation= localStorage.getItem("desig");
 let education= localStorage.getItem("education");
 let Email= localStorage.getItem("email");
 let experience= localStorage.getItem("experience");
 let skills1= localStorage.getItem("skills1");
 let skills2= localStorage.getItem("skills2");
 let skills3= localStorage.getItem("skills3");
 let skills4= localStorage.getItem("skills4");
 let interest= localStorage.getItem("interest");
 let Github1= localStorage.getItem("Github");
 let picture= localStorage.getItem("profile_pic");

 
 
 let resName:any=document.getElementById("resName")
 resName.textContent = name

 let Designation:any=document.getElementById("designation")
 Designation.textContent = designation


 let Education:any=document.getElementById("education")
 Education.textContent = education

 let email:any=document.getElementById("email")
 email.textContent = Email

 
 let Experience:any=document.getElementById("experience")
 Experience.textContent = experience


 let skill1:any=document.getElementById("skill1")
 skill1.textContent = skills1
 
 let skill2:any=document.getElementById("skill2")
 skill2.textContent = skills2

 let skill3:any=document.getElementById("skill3")
 skill3.textContent = skills3

 let skill4:any=document.getElementById("skill4")
 skill4.textContent = skills4
 
 let Interest:any=document.getElementById("interest")
 Interest.textContent = interest

 let github:any=document.getElementById("anchor1")
 github.textContent = Github1
 
 let profile_pic1:any=document.getElementById("pfp")
profile_pic1 .src = picture
 
})
// print
let print_btn = document.getElementById("print-btn");
print_btn?.addEventListener("click", () => {
  window.print()
})

//Edit
let Edit_btn = document.getElementById("edit-btn");
Edit_btn?.addEventListener("click",()=>{
  window.history.back()
})

