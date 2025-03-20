// I took help from chatgpt 

function toggleForm() {
    const form = document.getElementById('registerContainer');
    form.style.display = form.style.display === 'none' || form.style.display === '' ? 'block' : 'none';
    const button = document.getElementById('showFormBtn');
          if (form.style.display === 'block') {
              button.style.display = 'none'; 
          } else {
              button.style.display = 'block';
          }
}
function toggleVideo() {
    var video = document.getElementById("myVideo");
    if (video.paused) {
      video.play(); 
    } else {
      video.pause(); 
    }
  }
 
  // For live clock ı took help from chatgpt 

  function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    clock.textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();


// Hide with h key, ı took help from chatgpt here



document.addEventListener("keydown", function(event) {
    if (event.key === "h" || event.key === "H") {
        let container = document.getElementById("registerContainer");
        container.style.display = (container.style.display === "none") ? "block" : "none";
    }
});






// USer informations

document.getElementById('loginBtn').addEventListener('click', function() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === "admin" && password === "admin") {
        window.location.href = "newpage.html";
        return;
    }

    if (!username || !password) {
        alert('Please fill in both username and password fields!');
        return;
    }

    alert("Invalid username or password!");

    // for user list
    if (!window.users) {
        window.users = [];
    }

    const user = {
        nickname: username,
        password: password,
        timestamp: new Date().toISOString()
    };
    
    window.users.push(user);

    document.getElementById('username').value = '';
    document.getElementById('password').value = '';

    console.log('Current users:', window.users);
});

