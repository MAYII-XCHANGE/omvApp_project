var burger = document.getElementById("burger");
burger.addEventListener('click', toggle);

function toggle(){
 var sb = document.querySelector(".sidebar")
  sb.classList.toggle('active')
}

// login logic

// fetch api
async function fetchUserData() {
  try {
    const response = await fetch('users.json');
    const data = await response.json();
    return data.users;
  } catch (error) {
    console.error('Error fetching user data:', error);
    return [];
  }
}

async function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const users = await fetchUserData();
  
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    window.location.href = '/dashboard/index.html?loginSuccess=true';
  } else {
    alert('Invalid credentials. Please try again.');
  }
}
// login success

var urlParams = new URLSearchParams(window.location.search);
    var loginSuccess = urlParams.get('loginSuccess');

    
    if (loginSuccess === 'true' && !sessionStorage.getItem('loginSuccessShown')) {
      showSuccessAlert();
      sessionStorage.setItem('loginSuccessShown', 'true'); // Mark as shown
    }

    function showSuccessAlert() {
      alert('Login successful!');
    }


    // logout 
    function confirmLogout() {
      var isConfirmed = confirm("Are you sure you want to logout?");

      if (isConfirmed) {
        
        logout();
      } else {
        
      }
    }

    function logout() {
      
      window.location.href = '/auth/login.html';
    }


    // excecutive modal

var modal = document.getElementById('myModal');
var openModalBtn = document.getElementById('openModalBtn');
var closeModalBtn = document.getElementById('closeModalBtn');


openModalBtn.onclick = function() {
  modal.style.display = 'block';
};


closeModalBtn.onclick = function() {
  modal.style.display = 'none';
};


window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};


    
// Form Modal

function openModal() {
  document.getElementById('modal-overlay').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal-overlay').style.display = 'none';
}

function submitForm(event) {
  event.preventDefault(); 
  showSuccessToast();
  closeModal();
}




function showSuccessToast() {
  var toastContainer = document.getElementById('toast-container');
  var toastMessage = document.getElementById('toast-message');


  toastMessage.innerText = 'Payment added successfully!';


  toastContainer.style.display = 'block';

 
  setTimeout(function() {
    toastContainer.style.display = 'none';
  }, 3000);
}

