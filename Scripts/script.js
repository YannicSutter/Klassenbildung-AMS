let StudentsData = [];
let InputFile;
let FileKSH;
let FileKSS;
let FileKSW;
let FileKSWil;
let FileKSBG;

async function SelectInputFile() {
    const fileHandles = await window.showOpenFilePicker({
        multiple: false,
        types: [
            {
                description: 'Excel Files',
                accept: {
                    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
                },
            },
        ],
    });
    const fileHandle = fileHandles[0];
    InputFile = await fileHandle.getFile();
    ShowFileName();

    async function ShowFileName() {
        let inputFileText = document.getElementById("InputFileText");
        inputFileText.innerText = InputFile.name;
    }
}

async function Calculate() {
    await ReadData();
    ShowKantonsschulen();
    console.log(StudentsData);
    console.log(StudentsData[0].name);


    async function ReadData() {
        const arrayBuffer = await InputFile.arrayBuffer();
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.load(arrayBuffer);
        const sheet = workbook.worksheets[0];

        for (let rowIndex = 2; rowIndex <= sheet.rowCount; rowIndex++) {
            const row = sheet.getRow(rowIndex);
            const id = row.getCell(1).text;
            if (!id) return;

            const vorname = row.getCell(2).text;
            const name = row.getCell(3).text;
            const anredeeltern = row.getCell(4).text;
            const nameeltern = row.getCell(5).text;
            const vornameeltern = row.getCell(6).text;
            const nameeltern2 = row.getCell(7).text;
            const vornameeltern2 = row.getCell(8).text;
            const adresse = row.getCell(9).text;
            const plz = row.getCell(10).text;
            const ort = row.getCell(11).text;
            const geschlecht = row.getCell(12).text;
            const wunsch = row.getCell(13).text;
            const spf1 = row.getCell(14).text;
            const spf1sprache = row.getCell(15).text;
            const spf2 = row.getCell(16).text;
            const spf2sprache = row.getCell(17).text;
            const vonschule = row.getCell(18).text;
            const nachschule = row.getCell(19).text;
            const punktezahl = row.getCell(20).text;
            const promotionsentscheid = row.getCell(21).text;

            const student = new Student(id, vorname, name, anredeeltern, nameeltern, vornameeltern, nameeltern2, vornameeltern2, adresse, plz, ort, geschlecht, wunsch, spf1, spf1sprache, spf2, spf2sprache, vonschule, nachschule, punktezahl, promotionsentscheid);
            StudentsData.push(student);
        }
    }
    
    async function ShowKantonsschulen() {
        let div = document.getElementById("Kantonsschulen");
        if (div.style.display === "") {
            div.style.display = "inline";
        }
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
