function Calculate() {
    ShowKantonsschulen();
}

function ShowKantonsschulen() {
    let div = document.getElementById("Kantonsschulen");
    console.log(div.style.display);
    if (div.style.display === "") {
        div.style.display = "inline";
    }
}

function Download(school) {
    switch(school) {
        case "KSH":
            break;
        case "KSS":
            break;
        case "KSW":
            break;
        case "KSWil":
            break;
        case "KSBG":
            break;
        case "All":
            break;
    }
}

class Student {
    constructor(id, vorname, name, anredeeltern, nameeltern, vornameeltern, nameeltern2, vornameeltern2, adresse, plz, ort, geschlecht, wunsch, spf1, spf1sprache, spf2, spf2sprache, vonschule, nachschule, punktezahl, promotionsentscheid) {
        id = this.id;
        vorname = this.vorname;
        name = this.name;
        anredeeltern = this.anredeeltern;
        nameeltern = this.nameeltern;
        vornameeltern = this.vornameeltern;
        nameeltern2 = this.nameeltern2;
        vornameeltern2 = this.vornameeltern2;
        adresse = this.adresse;
        plz = this.plz;
        ort = this.ort;
        geschlecht = this.geschlecht;
        wunsch = this.wunsch;
        spf1 = this.spf1;
        spf1sprache = this.spf1sprache;
        spf2 = this.spf2;
        spf2sprache = this.spf2sprache;
        vonschule = this.vonschule;
        nachschule = this.nachschule;
        punktezahl = this.punktezahl;
        promotionsentscheid = this.promotionsentscheid;
    }
}
