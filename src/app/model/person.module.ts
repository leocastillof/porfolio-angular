export class person
{
    id?: number;
    name: String;
    lastname: String;
    img: String;

    constructor(name: String, lastname: String, img: String)
    {
        this.name = name;
        this.lastname = lastname;
        this.img = img;
    }
}