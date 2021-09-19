// firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//         document.getElementById("register").style.display = "none";
//         document.getElementById("login").style.display = "block";
//         userLoggedIn();
//     } else {
//         document.getElementById("login").style.display = "block";
//         document.getElementById("register").style.display = "none";
//     }
// });

function userLoggedIn() {
    const user = firebase.auth().currentUser;
    document.getElementById("greetUser").innerHTML = user.email;
}

function logout() {
    firebase.auth().signOut().then(() => {
        alert("logging out");
        window.location.replace("index.html");
    }).catch((error) => {
    });
}


let popped = 0;

document.addEventListener('mouseover', function(e){
    
    if (e.target.className === "balloon"){
        
                e.target.style.backgroundColor = "#ededed";
                e.target.textContent = "POP!";
                popped++;
                removeEvent(e);
                checkAllPopped();
    }   
});

function removeEvent(e){
    e.target.removeEventListener('mouseover', function(){
        
    })
};

function checkAllPopped(){
    if (popped === 24){
        console.log('all popped!');
        let gallery = document.querySelector('#balloon-gallery');
        let message = document.querySelector('#no-balloons');
        gallery.innerHTML = '';
        message.style.display = 'block';
    }
};
