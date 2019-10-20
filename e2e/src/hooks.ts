import { Before } from "cucumber";
import { LoginPage } from "./pages/login.po";
import { TodoPage } from './pages/todo.po';

//attach page objects to world
Before(function() {
  this.loginPage = new LoginPage();
  this.todoPage = new TodoPage();
});

