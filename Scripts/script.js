let StudentsData = [];
let StudentsDataSorted = new Map();
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
}

async function ShowFileName() {
    let inputFileText = document.getElementById("InputFileText");
    inputFileText.innerText = InputFile.name;
}

async function ProcessStudents() {
    await ReadData();
    ShowKantonsschulen();
    console.log(StudentsData);
    SortStudentsToFirstChoice();
}

async function ReadData() {
    const arrayBuffer = await InputFile.arrayBuffer();
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(arrayBuffer);
    const sheet = workbook.worksheets[0];

    for (let rowIndex = 2; rowIndex <= sheet.rowCount; rowIndex++) {
        const row = sheet.getRow(rowIndex);
        const student = {};
        const id = row.getCell(1).text;
        if (!id) return;

        student.vorname = row.getCell(2).text;
        student.name = row.getCell(3).text;
        student.anredeeltern = row.getCell(4).text;
        student.nameeltern = row.getCell(5).text;
        student.vornameeltern = row.getCell(6).text;
        student.nameeltern2 = row.getCell(7).text;
        student.vornameeltern2 = row.getCell(8).text;
        student.adresse = row.getCell(9).text;
        student.plz = row.getCell(10).text;
        student.ort = row.getCell(11).text;
        student.geschlecht = row.getCell(12).text;
        student.wunsch = row.getCell(13).text;
        student.spf1 = row.getCell(14).text;
        student.spf1sprache = row.getCell(15).text;
        student.spf2 = row.getCell(16).text;
        student.spf2sprache = row.getCell(17).text;
        student.vonschule = row.getCell(18).text;
        student.nachschule = row.getCell(19).text;
        student.punktezahl = row.getCell(20).text;
        student.promotionsentscheid = row.getCell(21).text;

        StudentsData.push(student);
    }
}

function ShowKantonsschulen() {
    let div = document.getElementById("Kantonsschulen");
    div.style.display = "inline";
}

function SortStudentsToFirstChoice() {
    for (i = 0; i < StudentsData.length; i++) {
        const key = `${StudentsData[i].spf1}|${StudentsData[i].spf1sprache}|${StudentsData[i].vonschule}`;
        if (!StudentsDataSorted.has(key)) {
            StudentsDataSorted.set(key, [StudentsData[i]]);
            continue;
        }
        StudentsDataSorted.get(key).push(StudentsData[i]);
    }
    console.log(StudentsDataSorted);
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
