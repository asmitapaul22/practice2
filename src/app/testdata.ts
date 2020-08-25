import {InMemoryDbService} from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService{
    books:any;
    createDb(){
        let bookDetails=[
            {id:101,name:"renu",category:"angular"},
            {id:102,name:"rina",category:"angular"},
            {id:103,name:"riya",category:"angular"}
        ];
        return (books:bookDetails);
        }
    
}

