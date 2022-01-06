import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'tech-interview';
    test() {
        let name = 'dinesh';
        console.log(name);
    }
}
