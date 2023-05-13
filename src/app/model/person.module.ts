export class person
{
    id?: number;
    name: String;
    lastname: String;
    description: String;
    img: String;

    constructor(name: String, lastname: String, description: String, img: String)
    {
        this.name = name;
        this.lastname = lastname;
        this.description = description;
        this.img = img;
    }
}