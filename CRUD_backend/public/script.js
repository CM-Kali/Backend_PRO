const API = "/api/users";
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const userIdInput = document.getElementById("userId");
const saveBtn = document.getElementById("saveBtn");
const userList = document.getElementById("userList");

document.addEventListener("DOMContentLoaded", loadUsers);

saveBtn.addEventListener("click", () => {
  if(userIdInput.value) updateUser(userIdInput.value);
  else createUser();
});

async function loadUsers() {
  userList.innerHTML = "";
  const res = await fetch(API);
  const users = await res.json();

  users.forEach(u => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${u.name} (${u.email})
      <button onclick="editUser('${u._id}','${u.name}','${u.email}')">Edit</button>
      <button onclick="deleteUser('${u._id}')">Delete</button>
    `;
    userList.appendChild(li);
  });
}

async function createUser() {
  await fetch(API, {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({name: nameInput.value, email: emailInput.value})
  });
  nameInput.value = "";
  emailInput.value = "";
  loadUsers();
}

function editUser(id, name, email){
  userIdInput.value = id;
  nameInput.value = name;
  emailInput.value = email;
}

async function updateUser(id){
  await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({name: nameInput.value, email: emailInput.value})
  });
  userIdInput.value = "";
  nameInput.value = "";
  emailInput.value = "";
  loadUsers();
}

async function deleteUser(id){
  await fetch(`${API}/${id}`, {method: "DELETE"});
  loadUsers();
}
