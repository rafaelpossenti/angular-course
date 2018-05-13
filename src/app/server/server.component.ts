import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online{
        color: white;
    }
  `]    
})
export class ServerComponent {
    serverId: number = 10;
    serverService: string = 'offline';
    
    constructor(){
        this.serverService = Math.random() > 0.5 ? "online" : "offline";
    }
    
    getServerStatus(){
        return this.serverService;
    }
    
    getColor(){
        return this.serverService === "online" ? "green" : "red";
    }
    
}
