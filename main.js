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
        Object.entries(this.students[0].book.getMarks())
        Object.entries(this.students[1].book.getMarks())

        return [
            [newGroup.students[0].name, newGroup.students[0].book.getMarks().math],
            [newGroup.students[1].name, newGroup.students[1].book.getMarks().math],
        ];
    }

}
class Gradebook {
    constructor() {
        this.math = Math.random().toFixed(1);
        this.physics = Math.random().toFixed(1);
        this.chemistry = Math.random().toFixed(1);
    }
    getMarks () {
        return {
            math: this.math,
            chemistry: this.chemistry,
            physics: this.physics,
        }
    }
}
let vasya = new Student("Vasya");
let petr = new Student("Petr");

let newGroup = new Group();
newGroup.addStudent(vasya);
newGroup.addStudent(petr);






