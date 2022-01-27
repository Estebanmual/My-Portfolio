/*
  Detecting storage function provided by MDN
  https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
  Returns true is there is storage available to use
*/
function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return e instanceof DOMException && (
        // everything except Firefox
        e.code === 22 // Firefox
        || e.code === 1014 // test name field too, because code might not be present
        // everything except Firefox
        || e.name === 'QuotaExceededError' // Firefox
        || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')// acknowledge QuotaExceededError only if there's something already stored
        && (storage && storage.length !== 0);
    }
  }

const nameData = document.getElementById('name')
const emailData = document.getElementById('email')
const messageData = document.getElementById('message')

var formData = {name: nameData, email: emailData, message: messageData}

function dataStorageSave(key , value) {
    formData[key] = value
    localStorage.setItem('data',JSON.stringify(formData))
}

function getDataStorage(key) {
    if (localStorage.getItem('data') === true){
    formData = JSON.parse(localStorage.getItem('data'))
    return formData[key]} else {
        return ''
    }
}

nameData.addEventListener('input',() => {
    dataStorageSave('name' ,nameData.value)
})

emailData.addEventListener('input',() => {
    dataStorageSave('email' ,emailData.value)
})

messageData.addEventListener('input',() => {
    dataStorageSave('message' ,messageData.value)
})


window.addEventListener('load', () => {
    nameData.value = getDataStorage('name')
    emailData.value = getDataStorage('email')
    messageData.value = getDataStorage('message')
})