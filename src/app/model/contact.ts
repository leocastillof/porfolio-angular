export class Contact {
    id?: number;
    description: string;
    facebook: string;
    twitter: string;
    google: string;
    linkedin: string;
    instagram: string;
    whatsapp: string;

    constructor(description: string, facebook: string, twitter: string, google: string, 
        linkedin: string, instagram: string, whatsapp: string)
    {
        this.description = description;
        this.facebook = facebook;
        this.twitter = twitter;
        this.google = google;
        this.linkedin = linkedin;
        this.instagram = instagram;
        this.whatsapp = whatsapp;
    }
}
