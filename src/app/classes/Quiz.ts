export class Quiz{
    constructor(
        public id:Number,
        public responses:Response[],
    ){

    }
}
export class Question{
    constructor(
        public id:Number,
        public question:String,
    ){

    }
}
export class Response{
    constructor(
        public id:Number,
        public question:Question,
        public choice:number
    ){

    }
}