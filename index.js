import data from './student.json' assert {type: 'json'};

function showAllStudent(data) {

    console.log('ID\t\t\tName\t\tEmail\t\t\t\Language\t Gender \t PhoneNumber \t Address');

    data.forEach(student => {
        console.log(`${student._id.$oid} \t ${student.name} \t\t ${student.email} \t ${student.language} \t ${student.gender} \t ${student.phoneNumber} \t ${student.address} \t`);
    }
    );


}
function showStudent(student) {
    console.log('ID\t\t\tName\t\tEmail\t\t\t\Language\t Gender \t PhoneNumber \t Address');
    console.log(`${student._id.$oid} \t ${student.name} \t\t ${student.email} \t ${student.language} \t ${student.gender} \t ${student.phoneNumber} \t ${student.address} \t`);

}
function getStudentByID(ID) {
    const student = data.find(item => item._id.$oid === ID);
    showStudent(student)
}

function findStudent(input) {
    const student = data.filter(item => item.name.toLowerCase().includes(input.toLowerCase()) || item.email.toLowerCase().includes(input.toLowerCase()))
    showAllStudent(student)
}


function findAndUpdateStudent(ID,name, email) {
    const student = data.find(item => item._id.$oid === ID);

    

}

function getStudentByLanguage(language) {
    const student = data.filter(item => item.language.includes(language));
    // console.log(student);
    showAllStudent(student)

}