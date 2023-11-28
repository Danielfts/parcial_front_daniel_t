export class Curso {
    constructor(
        public id:number,
        public title:string,
        public platform:string,
        public launch_year:number,
        public offers_certificate:boolean,
        public description:string,
        public image:string,
        public duration_hours:number,
    ) {
        
    }
}