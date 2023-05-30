import {Injectable } from '@angular/core';
import { MyServiceClient } from './../protos/my-service_grpc_pb.d';
import { DataRequest } from './../protos/my-service_pb.d';
import { GrpcPmScannerServiceClient } from './../protos/ScannerClient_grpc_pb.d';
import {ScanDataRequest} from './../protos/ScannerClient_pb.d'
import* as grpc from 'grpc'
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';



@Injectable({
    providedIn: 'root',
  })
export class GrpcService {
  public data: any;
  public client:MyServiceClient;


  constructor(  public scannerClient : GrpcPmScannerServiceClient) {
    this.client =  new MyServiceClient('http://localhost:50051', null as unknown as grpc.ChannelCredentials);
    this.scannerClient = new GrpcPmScannerServiceClient('http://localhost:50051', null as unknown as grpc.ChannelCredentials)
  }

  getData() {
    const request = new DataRequest();
    request.setId('123');

    this.client.getData(request, (err, response) => {
      if (err) {
        console.error(err);
      } else {
        this.data = response.getData();
        console.log('grpc response', this.data);
      }
    });
  }

  scannerHealthCheck(){
    const request = new ScanDataRequest();
    const empty = new Empty();
    this.scannerClient.getScannerHealthCheck(empty, (err, res) => {
        console.log("GetScannerHealthCheck err", err);
        console.log('GetScannerHealthCheck res', res);
      })
  }
}
