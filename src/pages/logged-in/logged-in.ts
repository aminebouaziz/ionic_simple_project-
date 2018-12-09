import { InfoPage } from './../info/info';
import { HelpPage } from './../help/help';
import { PostPage } from './../post/post';
import { Component } from '@angular/core';



@Component({
  selector: 'page-logged-in',
  templateUrl: 'logged-in.html',
})
export class LoggedInPage {
 
  tab1Root = PostPage;
  tab2Root = HelpPage;
  tab3Root = InfoPage;


 

 
}
