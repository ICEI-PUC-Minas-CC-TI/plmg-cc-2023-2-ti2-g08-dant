const input = document.querySelector(".dir input");
const preview = document.querySelector(".preview");

input.style.opacity = 0;

input.addEventListener("change", updateImageDisplay);

function updateImageDisplay() {
  while (preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }

  const curFiles = input.files;
  if (curFiles.length === 0) {
    const para = document.createElement("p");
    para.textContent = "No files currently selected for upload";
    preview.appendChild(para);
  } else {
    const list = document.createElement("ol");
    preview.appendChild(list);

    for (const file of curFiles) {
      const listItem = document.createElement("li");
      const para = document.createElement("p");
      if (validFileType(file)) {
        para.textContent = `File name ${file.name}, file size ${returnFileSize(
          file.size,
        )}.`;
        const image = document.createElement("img");
        image.src = URL.createObjectURL(file);

        listItem.appendChild(image);
        listItem.appendChild(para);
      } else {
        para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
        listItem.appendChild(para);
      }

      list.appendChild(listItem);
    }
  }
}

// https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types
const fileTypes = [
  "image/apng",
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/pjpeg",
  "image/png",
  "image/svg+xml",
  "image/tiff",
  "image/webp",
  "image/x-icon",
];

function validFileType(file) {
  return fileTypes.includes(file.type);
}

function returnFileSize(number) {
  if (number < 1024) {
    return `${number} bytes`;
  } else if (number >= 1024 && number < 1048576) {
    return `${(number / 1024).toFixed(1)} KB`;
  } else if (number >= 1048576) {
    return `${(number / 1048576).toFixed(1)} MB`;
  }
}

const appid = localStorage.getItem("appid");
console.log(appid);

user(appid);

async function user (appid){
  let userData = await getUsuario(appid);
  console.log(userData);
}


const deletar = document.querySelector(".deletar");
const sim = document.querySelector(".sim");
const nao = document.querySelector(".nao");

deletar.addEventListener("click", () =>{
  const certeza = document.querySelector(".container-deletar .certeza");
  certeza.style.display = "block";
})

sim.addEventListener("click", async () => {
  let retorno = await deletarUsuario(appid);
  console.log(retorno);
  if (retorno === true) {
    alert("Foi deletado");
    localStorage.removeItem("appid");
    window.location.href = "index.html";
  }
  else{
    alert("Erro: tente novamente");
    const certeza = document.querySelector(".certeza");
    certeza.style.display = "none";
  }
})

nao.addEventListener("click", () => {
  const certeza = document.querySelector(".certeza");
  certeza.style.display = "none";
})

async function deletarUsuario(appid) {

  const url = `http://localhost:4567/UserPage/delete?id=${appid}`;

  try {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      throw new Error('Erro na solicitação DELETE.');
    }
  } catch (error) {
    throw error;
  }
}

async function getUsuario(appid) {
  const url = `http://localhost:4567/UserPage/user?id=${appid}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      throw new Error('Erro na solicitação GET.');
    }
  } catch (error) {
    throw error;
  }
}
