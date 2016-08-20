import { Component } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
    selector: 'my-app',
    templateUrl: '/AngularTemplate/app.template.html'

})
export class AppComponent {
    heroes = [];
    selectedHero: Hero;
    title: string = 'Tour of Heroes';


    constructor(private http: Http) {
        let self = this;
        this.http.get('/Data/Index')
            .map(res => res.json())
            .subscribe((data) => {
                self.heroes = data;
            });
    }

    onSelect(hero: Hero) { this.selectedHero = hero; }

}

export class Hero {
    id: number;
    name: string;
}

/*const HEROES: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];*/
