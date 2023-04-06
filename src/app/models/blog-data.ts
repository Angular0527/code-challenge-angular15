export class BlogData {
    title: string;
    description?: string;
    url?: string;
    publishedAt?: string;
    source?: any;
    
    content: string;
    image?: string;


    constructor(){
        this.title='';
        this.content='';
        this.image='';
        this.description='';
        this.url='';
        this.publishedAt='';
        this.source=null;
    }
}
