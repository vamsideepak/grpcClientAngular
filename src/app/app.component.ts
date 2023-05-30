import { Component,OnInit } from '@angular/core';
import { GrpcService } from './services/grpc.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'grpcClient';

  constructor (private grpcService : GrpcService){

  }
  ngOnInit(): void {
    this.grpcService.getData();
  }
}
