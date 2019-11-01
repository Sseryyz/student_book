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

        return [
            [newGroup.students[0].name, newGroup.students[0].book.getMarks().math],
        ];
    }

}
class Gradebook {
    constructor() {
        this.math = Math.random();
        this.physics = Math.random();
        this.chemistry = Math.random();
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






