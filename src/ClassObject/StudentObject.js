export default class StudentTemplate{
    #name;
    #subject;
    #qualification;

    constructor(name, subject, qualification){
            this.name = name
            this.subject = subject;
            this.qualification = qualification;
    }

    get name(){
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }

    get subject(){
        return  this.#subject;
    }

    set subject(subject) {
        this.#subject = subject;
    }

    get qualification() {
        return this.#qualification;
    }

    set qualification(qualification){
        this.#qualification = qualification;
        
    }

}