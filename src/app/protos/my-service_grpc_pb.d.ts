// package: mypackage
// file: src/app/protos/my-service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as src_app_protos_my_service_pb from "../../../src/app/protos/my-service_pb";

interface IMyServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getData: IMyServiceService_IGetData;
}

interface IMyServiceService_IGetData extends grpc.MethodDefinition<src_app_protos_my_service_pb.DataRequest, src_app_protos_my_service_pb.DataResponse> {
    path: "/mypackage.MyService/GetData";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<src_app_protos_my_service_pb.DataRequest>;
    requestDeserialize: grpc.deserialize<src_app_protos_my_service_pb.DataRequest>;
    responseSerialize: grpc.serialize<src_app_protos_my_service_pb.DataResponse>;
    responseDeserialize: grpc.deserialize<src_app_protos_my_service_pb.DataResponse>;
}

export const MyServiceService: IMyServiceService;

export interface IMyServiceServer {
    getData: grpc.handleUnaryCall<src_app_protos_my_service_pb.DataRequest, src_app_protos_my_service_pb.DataResponse>;
}

export interface IMyServiceClient {
    getData(request: src_app_protos_my_service_pb.DataRequest, callback: (error: grpc.ServiceError | null, response: src_app_protos_my_service_pb.DataResponse) => void): grpc.ClientUnaryCall;
    getData(request: src_app_protos_my_service_pb.DataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_protos_my_service_pb.DataResponse) => void): grpc.ClientUnaryCall;
    getData(request: src_app_protos_my_service_pb.DataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_protos_my_service_pb.DataResponse) => void): grpc.ClientUnaryCall;
}

export class MyServiceClient extends grpc.Client implements IMyServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getData(request: src_app_protos_my_service_pb.DataRequest, callback: (error: grpc.ServiceError | null, response: src_app_protos_my_service_pb.DataResponse) => void): grpc.ClientUnaryCall;
    public getData(request: src_app_protos_my_service_pb.DataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_protos_my_service_pb.DataResponse) => void): grpc.ClientUnaryCall;
    public getData(request: src_app_protos_my_service_pb.DataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_protos_my_service_pb.DataResponse) => void): grpc.ClientUnaryCall;
}
