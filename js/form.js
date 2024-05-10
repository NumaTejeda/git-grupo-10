/*input-file*/

let inputFile = document.querySelector('#file');
let labelFile = document.querySelector('#label-file');

inputFile.addEventListener('change', () => {
    if (inputFile.files.length > 0) {
        let sizeFileMegas = inputFile.files[0].size / (1024 * 1024)
        if (sizeFileMegas < 3) {
            let nameArchivo = inputFile.files[0].name.slice(0, 10) + "...";
            labelFile.textContent = nameArchivo;
            labelFile.classList.add('checked-file');
            labelFile.classList.remove('error-file');
            console.log(inputFile.files[0])
        } else {
            console.error("Error: la imagen debe pesar menos que 3MB")
            labelFile.textContent = "El archivo debe pesar menos de 3MB"
            labelFile.classList.add('error-file');
            labelFile.classList.remove("checked-file")
        }
    }
})
/*input mail*/

let inputMail = document.querySelector("#mail")

inputMail.addEventListener('input', () => {
    let mail = inputMail.value.trim();
    console.log(mail.length)
    let regex = /\.\w{2,}$/;
    if ((mail.length > 3) && (mail.indexOf('@') !== -1) && regex.test(mail)) {
        console.log("correcto")


    } else {
        console.log("incorrect")


    }
})