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
    getAllMarksMath () {
        // Object.entries(this.students[0].book.marks())
        // Object.entries(this.students[1].book.marks())

        this.students.forEach(function(item, i, arr) {
            console.log(item + i + arr)
        })

        // return [
        //     [newGroup.students[0].name, newGroup.students[0].book.marks().math],
        //     [newGroup.students[1].name, newGroup.students[1].book.marks().math],
        // ];
    }
    getAllMiddleMark () {
        Object.entries(this.students[0].book.getMiddleMark())
        Object.entries(this.students[1].book.getMiddleMark())

        return [
            +newGroup.students[0].book.getMiddleMark() + +newGroup.students[1].book.getMiddleMark()
        ]
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






