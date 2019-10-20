import { LoginPage } from "./pages/login.po";
import { TodoPage } from './pages/todo.po';

//overwrite cucumber's World with a custom World
//that includes type information
declare module "cucumber" {
  type Credential = {
    username: string;
    password: string;
  };

  interface World {
    loginPage: LoginPage;
    todoPage: TodoPage;
  }
}
