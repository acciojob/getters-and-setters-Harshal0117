class Person {
    constructor(name, age) {
        this._name = name; // Private variable for name
        this._age = age;   // Private variable for age
    }

    // Getter for name
    get name() {
        return this._name;
    }

    // Getter for age
    get age() {
        return this._age;
    }

    // Setter for age
    set age(age) {
        this._age = age;
    }
}

class Student extends Person {
    constructor(name, age) {
        super(name, age); // Call the parent constructor
    }

    // Method to indicate the student is studying
    study() {
        console.log(`${this.name} is studying`);
    }
}

class Teacher extends Person {
    constructor(name, age) {
        super(name, age); // Call the parent constructor
    }

    // Method to indicate the teacher is teaching
    teach() {
        console.log(`${this.name} is teaching`);
    }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
