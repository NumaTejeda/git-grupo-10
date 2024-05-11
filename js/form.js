/*Submit*/
const submit = document.querySelector("#btn-submit")

/*input-file*/
let inputFile = document.querySelector('#file');
let labelFile = document.querySelector('#label-file');

/*input mail*/
let inputMail = document.querySelector("#mail")
let labelMail = document.querySelector("#mail-label");

let firstName = document.querySelector("#nombre");
let lastName = document.querySelector("#apellido");

const textArea = document.querySelector("#consulta");

/* Estado de habilitación de los elementos */
let enable = [false, false, false, false];


inputFile.addEventListener('change', () => {
    if (inputFile.files.length > 0) {
        let sizeFileMegas = inputFile.files[0].size / (1024 * 1024)
        if (sizeFileMegas < 3) {
            let nameArchivo = inputFile.files[0].name.slice(0, 10) + "...";
            labelFile.textContent = nameArchivo;
            labelFile.classList.add('checked-file');
            labelFile.classList.remove('error-file');
        } else {
            labelFile.textContent = "El archivo debe pesar menos de 3MB"
            labelFile.classList.add('error-file');
            labelFile.classList.remove("checked-file")
        }
    }
})

inputMail.addEventListener('input', () => {
    let mail = inputMail.value.trim();
    let punto2 = /\.\w{2,}$/;
    let caracteresEspeciales = /[^a-zA-Z0-9\_\-\.]/g;
    let tildes = /[áéíóúÁÉÍÓÚ]/;
    if (mail.length > 6 && mail.indexOf('@') !== -1 && punto2.test(mail)
        && caracteresEspeciales.test(mail) && !tildes.test(mail)) {
        labelMail.style.color = "#eddfa7";
        inputMail.style.borderColor = "#66ff00";
        submit.disable = false;
        enable[2] = true
        observar(enable)
    } else {
        labelMail.style.color = "red";
        inputMail.style.borderColor = "red";
    }
})

firstName.addEventListener('input', () => {
    let name = firstName.value.trim().toLowerCase();
    let labelFirstName = firstName.closest('div').querySelector('label')
    if (name.length >= 2 && name.length <= 30) {
        enable[0] = true;
        labelFirstName.style.color = "#eddfa7"
        firstName.style.borderColor = "#66ff00"
        observar(enable)
    }
    else {
        firstName.style.borderColor = "red"
        labelFirstName.style.color = "red"
    }
})

lastName.addEventListener('input', () => {
    let lastNameValue = lastName.value.trim().toLowerCase();
    let labelName = lastName.closest('div').querySelector('label')
    if (lastNameValue.length >= 2 && lastNameValue.length < 100) {
        enable[1] = true;
        labelName.style.color = "#eddfa7"
        lastName.style.borderColor = "#66ff00"
        observar(enable)
    } else {
        labelName.style.color = 'red'
        lastName.style.borderColor = "red"
    }
})

textArea.addEventListener("input", () => {
    let textAreaValue = textArea.value.trim().toLowerCase();
    let labelArea = textArea.closest('div').querySelector('label')
    if (textAreaValue.length >= 10 && textAreaValue.length < 100) {
        enable[3] = true;
        observar(enable)
        labelArea.style.color = "#eddfa7"
        textArea.style.borderColor = "#66ff00"
    }
    else {
        textArea.style.borderColor = "red"
        labelArea.style.color = 'red'
    }
})

const observar = (array) => {
    if (array.every(value => value === true)) {
        submit.disabled = false;
    }
    console.log(enable)
}