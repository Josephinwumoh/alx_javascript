function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
        return function() {
            return seat;
        };
    }

    let students = [];

    for (let p = 0; p < numbersOfStudents; p++) {
        students.push(studentSeat(p + 1));
    }

    return students;
}

let classRoom = createClassRoom(10);

console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());