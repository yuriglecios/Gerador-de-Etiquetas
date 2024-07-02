/*JsBarcode("#barcode", "123456789012", {
    format: "CODE128",
    lineColor: "#000",
    width: 2,
    height: 100,
    displayValue: true
});*/

const selectProductActiveBtnGet = document.querySelector("#select-product");
const tbodyAllproducts = document.querySelector("#tbody-products-all");
const productsAllbtn = document.querySelector("#btn-products");
var modal = document.getElementById("myModal");
var btnViewIcon = document.querySelector("#view");
var span = document.getElementsByClassName("close")[0];


const urlProduct = "http://localhost:8080";


const getAllproducts = async () => {
  try {
    const response = await fetch(urlProduct + "/produtos", {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(`Erro HTTP! Status: ${response.status}`);
    }
    const products = await response.json();
    console.log(products);
    return products;
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return null;
  }
};

async function getProduct(idProduct) {
  try {
    const response = await fetch(`${urlProduct}/${idProduct}`, {
      method: 'GET'
    });
    if (!response.ok) {
      throw new Error('Erro ao buscar produto');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro:', error);
    throw error;
  }
};


const allproducts = async () => {
  const allproducts = await getAllproducts();
  console.log(allproducts);

  tbodyAllproducts.innerHTML = "";
  if (allproducts != null) {
    for (i = 0; i < allproducts.length; i++) {
      const client = allproducts[i];
      const tr = document.createElement("tr");
      const trContent = `
     <td>${client.codeClient}</td>
     <td>${client.name}</td>
     <td>${client.cpf}</td>
     <td>${client.age}</td>
     <td><span onclick="editClient(event)" id="${client.codeClient}" class="material-symbols-outlined btn-edit-client">
        edit</span></td>
        <td><span onclick="deleteClient(event)" id="${client.codeClient}" class="material-symbols-outlined btn-delete-client">
        delete</span></td>
        `;
      tr.innerHTML = trContent;
      tbodyAllproducts.appendChild(tr);
    }
    editBtn = document.querySelector(".btn-edit-client");
    deleteBtn = document.querySelector(".btn-delete-client");
    editBtn.addEventListener("click", editClient);
    deleteBtn.addEventListener("click", deleteClient);
  }
};

productsAllbtn.addEventListener("click", allproducts);


const searchNumber = async () => {
  const input = document.getElementById("input-filter-client");
  const id = input.value;
  try {
    const client = await getProduct(id);
    if (client != null) {
      tbodyAllproducts.innerHTML = "";
      const tr = document.createElement("tr");
      const trContent = `
        <td>${client.codeClient}</td>
        <td>${client.name}</td>
        <td>${client.cpf}</td>
        <td>${client.age}</td>
        <td><span onclick="editClient(event)" id="${client.codeClient}" class="material-symbols-outlined btn-edit-client">
        edit</span></td>
        <td><span onclick="deleteClient(event)" id="${client.codeClient}" class="material-symbols-outlined btn-delete-client">
        delete</span></td>
      `;
      tr.innerHTML = trContent;
      tbodyAllproducts.appendChild(tr);
    }
    editBtn = document.querySelector(".btn-edit-client");
    deleteBtn = document.querySelector(".btn-delete-client");
    btnDeleteConfirm.addEventListener("click", confirmDelete);
  } catch (error) {
    console.error("Erro ao buscar produto:", error);
  }
};


btnViewIcon.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

