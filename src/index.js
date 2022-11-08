async function OsszesAdatABC() {

    let response = await fetch('/users.json');
    let eredmeny = await response.json();
    let adatok = eredmeny.users.sort(function (a, b) {
        if (a.firstName < b.firstName) { return -1; }
        if (a.firstName > b.firstName) { return 1; }
        return 0;
    })

    let termekLista = document.getElementById('adatLista');
    termekLista.textContent = '';

    for (let p of adatok) {
        let li = document.createElement('li');
        li.innerHTML =  p.firstName.toUpperCase()  + ' ' + p.lastName;
        termekLista.appendChild(li);
    }
}

async function Elerhetoseg() {
    let response = await fetch('/users.json');
    let eredmeny = await response.json();
    let adatok = eredmeny.users.sort(function (a, b) {
        if (a.username < b.username) { return -1; }
        if (a.username > b.username) { return 1; }
        return 0;
    })  

    let termekLista = document.getElementById('adatLista');
    termekLista.textContent = '';

    for (let p of adatok) {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        td1.innerHTML = p.username+'<br>';
        td2.innerHTML = p.email+'<br>';
        td3.innerHTML = p.phone+'<br>';
        adatokTablazat.appendChild(tr);
        adatokTablazat.appendChild(td1);
        adatokTablazat.appendChild(td2);
        adatokTablazat.appendChild(td3); 
    }
}

async function Sulyszamitas(){
    let response = await fetch('/users.json');
    let eredmeny = await response.json();
    let adatok=eredmeny.users.sort(function(a,b){
        if(a.weight< b.weight) {return -1;}
        if(a.weight>b.weight) {return 1;}
        return 0;
    })


}

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('ABC').addEventListener('click', () => { OsszesAdatABC() });
    document.getElementById('elerhetosegek').addEventListener('click', () => { Elerhetoseg() });
    document.getElementById('magassag').addEventListener('click',() => { Sulyszamitas()});
});