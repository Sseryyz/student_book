class Student {
    constructor(name) {
        this.name = name;
        this.book = new Gradebook();
    }
}
class Group {
    constructor() {
        this.students = [];
    }
    addStudent (student) {
        this.students.push(student);
    }
    all (subject) {
        const result = {};
        for (let student of this.students) {
            result[student.name] = student.book[subject]
        }

        return result;
    }
    marksMath () {
        console.log(vasya.book.math)

    }
    marksChemistry () {
        for (let i = 0; i < this.students.length; i++) {
            console.log([newGroup.students[i].name, newGroup.students[i].book.marks().chemistry])
        }
    }
    marksPhysics () {
        for (let i = 0; i < this.students.length; i++) {
            console.log([newGroup.students[i].name, newGroup.students[i].book.marks().physics])
        }
    }
}
class Gradebook {
    constructor(math, physics, chemistry) {
        this.math = 5;
        this.physics = 4;
        this.chemistry = 3;
    }
    marks () {
        return {
            math: this.math,
            chemistry: this.chemistry,
            physics: this.physics
        }
    }

    middleMark () {
        return ((+this.math + +this.physics + +this.chemistry) / 3).toFixed(1)
    }
}
let vasya = new Student("Vasya");
let petr = new Student("Petr");

let newGroup = new Group();
newGroup.addStudent(vasya);
newGroup.addStudent(petr);






