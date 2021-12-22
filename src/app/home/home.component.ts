import { Component } from "@angular/core";


@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"],

})
export class HomeComponent {
    title = "TO DO list";//variable contenent une chazine de character
    constructor() { }

    todos =   [
        {title: "todo 1",
        date: '12.03.2021',
        description: "description de la tache 1 ",
        isDone: false,
        img:"https://picsum.photos/200",
        show: false
    },
    {title: "todo 2",
    date: '12.04.2021',
    description: "description de la tache 2",
    isDone: false,
    img:"https://picsum.photos/200",
    show: false
}
    
    ];
// Show/hide


    onChangeStatus(i:number){
        this.todos[i].isDone = !this.todos[i].isDone;
    }

  toggle(i:number){
      this.todos[i].show=!this.todos[i].show;
  }


    ngOnInit(): void {
    }

}
