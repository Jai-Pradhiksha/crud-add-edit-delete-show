// let objects = [
//     {
//         id : 1,
//         name : "Jai",
//         active : true,
//         dept : "CSE"
//     },
//     {
//         id : 2,
//         name : "Rhaum",
//         active : true,
//         dept : "MECH"
//     },
//     {
//         id : 3,
//         name : "Varsha",
//         active : true,
//         dept : "ECE"
//     },
//     {
//         id : 4,
//         name : "Maha",
//         active : true,
//         dept : "IT"
//     }
// ]

// for(let i = 0; i< objects.length; i++){
    
//     //console.log(objects[i].id+" || "+ objects[i].name+" || "+objects[i].active)
//     console.log("user details : " + i + " ....");
//     let result = "";
//     for (let temp in objects[i]){
//         result += objects[i][temp] + " || ";
//         console.log(objects[i][temp]);
//     }
//     console.log(result);
// }

// console.log(objects[1][1])


// for (const obj of objects) {
//     console.log(`${obj.id} || ${obj.name} || ${obj.active} || ${obj.dept}`);
// }
// i=0;
// j=4;
// while(i<4){
//     while(j>0){
//         console.log(objects[i]+"||")
//         i++;
//         j--;
//     }
// }

//key names
// for(let i in objects){
//     console.log(i,objects[i])
// }


// //hard coded keys
// // for(var j = 0; j< objects.length; j++){
// //     console.log("User details : "+j)
// //     console.log(objects[j].id)
// //     console.log(objects[j]["name"])
// //     console.log(objects[j].active)
// // }

// let student = {
//     id : 1,
//     name : "Jai",
//     active : true,
//     department : "CSE"        
// }

// for(let i in student){
//     console.log(i,student[i])
// }



// a=1;
// b=5;
// while (a<5){
//     while (b>0){
//         console.log(a+"="+b+"<br/>");
//         a++;
//         b--;
//     }
// }

function processData() {
    // old way...
        console.log(document.forms.length);

        let username = document.forms[3].txtUsername.value;
        let password = document.forms[3].txtPassword.value;
        console.log(username, password);

        let username1 = document.loginForm.txtUsername.value;
        let password1 = document.loginForm.txtPassword.value;
        console.log(username1, password1);
    
    // traditional way...
        let username2 = document.getElementById("txtUsername").value;
        let password2 = document.getElementById("txtPassword").value;
        console.log(username2, password2);

        let username3 = document.getElementsByClassName("clsInput")[0].value
        let password3 = document.getElementsByClassName("clsInput")[1].value;
        console.log(username3, password3);

    // modern way...
        let username4 = document.querySelector("#txtUsername").value;
        let password4 = document.querySelector("#txtPassword").value;
        console.log(username4, password4);

        let username5 = document.querySelectorAll(".clsInput")[0].value;
        let password5 = document.querySelectorAll(".clsInput")[1].value;
        console.log(username5, password5);
}