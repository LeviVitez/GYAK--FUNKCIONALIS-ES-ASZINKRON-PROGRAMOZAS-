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
        li.innerHTML =  p.firstName + ' ' + p.lastName;
        termekLista.appendChild(li);
    }
}

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('ABC').addEventListener('click', () => { OsszesAdatABC() });

});