import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from './service/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    currentUser: any;
    username="";
    isLoggedIn = false;
    constructor(private tokenStorage: TokenStorageService, private router: Router) {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    }

    ngOnInit(): void {
        this.isLoggedIn = !!this.tokenStorage.getToken();
        if (this.isLoggedIn) {
            this.currentUser = this.tokenStorage.getUser();
            console.log(this.currentUser);
        }
    }

    logout(){
        this.tokenStorage.signOut();
        window.location.reload();
    }

    
}
