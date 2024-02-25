let entercode ="WHITE WOLF";

function pass(){
    if(document.getElementById(`white`).value != entercode){
        alert(`Wrong Password, Try Again`);
        return false;
    }
    if(document.getElementById(`white`).value === entercode){
        alert(`Correct Password, click Ok To Enter Web Page`);
    }
}