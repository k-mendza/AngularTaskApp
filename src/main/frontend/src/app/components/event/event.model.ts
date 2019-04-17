export class Event {
    public id: any;
    public time: string;
    public subject: string;
    public location: string;
    public description: string;

    constructor(id:any, time: string, subject: string, location: string, description: string) {
        this.id = id;
        this.time = time;
        this.subject = subject;
        this.location = location;
        this.description = description;
    };
}
