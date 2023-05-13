export class Person {
    id?: number;
    name: string;
    lastname: string;
    description: string;
    img: string;

    constructor(name: string, lastname: string, description: string, img: string){
        this.name = name;
        this.lastname = lastname;
        this.description = description;
        this.img = img;
    }
}
