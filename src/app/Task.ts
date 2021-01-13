export class Task{
    id:string;
    title:string;
    status:boolean;
    date:string;
    constructor(title){
        this.id='not set';
        this.title=title;
        this.status=false;
        this.date=(new Date('dd-mm-yyyy')).toLocaleDateString();
        
    }
}