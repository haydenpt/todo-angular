import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})

export class TodoListComponent implements OnInit {

  todoList = [
    new Todo(1, "Do Training", false, new Date("2022-07-08")),
    new Todo(2, "Learn Spring Boot", false, new Date("2022-07-14")),
    new Todo(3, "Learn Angular", false, new Date("2022-07-15")),

  ]

  constructor() {}

  ngOnInit(): void {}
}
