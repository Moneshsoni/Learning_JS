let namasteBtm = document.querySelector('button');
namasteBtm.addEventListener('click',inputMsg);
function inputMsg(){
    let name = prompt('Enter Name of student');
    namasteBtm.textContent = 'Roll No. 1' + name;

}