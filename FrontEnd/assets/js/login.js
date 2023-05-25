

function main() {

    addEventOnPage();

}

main();

//permet d'associer les événements aux élements HTML de la page
function addEventOnPage(){
    const btn= document.getElementById('btn_submit');
    btn.addEventListener('click',()=>connexion())
}

function connexion() {
    
    const url="";
    const datas=[];

    if (checkForm()==false) {
        //TODO prévenir l'utilisateur
        return;
    }

    datas=getDatasFromForm();

    
    sendFormToBackend(url, datas)
}

function getDatasFromForm(){
    return [];
}

function sendFormToBackend(url, datas){

    //TODO après le fecth stocker les données dans le LocalStorage
}

// controle des champs du formulaire
function checkForm(){

    //TODO test de l'email 
//TODO prévenir l'utilisateur
    //TODO test du mdp
//TODO prévenir l'utilisateur

    return true;
}
