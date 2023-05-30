// package: ScannerService.V1
// file: src/app/protos/ScannerClient.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as src_app_protos_ScannerClient_pb from "../../../src/app/protos/ScannerClient_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IGrpcPmScannerServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    startScan: IGrpcPmScannerServiceService_IStartScan;
    sendScanData: IGrpcPmScannerServiceService_ISendScanData;
    getScannerHealthCheck: IGrpcPmScannerServiceService_IGetScannerHealthCheck;
    sendScannerHealthCheckStatus: IGrpcPmScannerServiceService_ISendScannerHealthCheckStatus;
}

interface IGrpcPmScannerServiceService_IStartScan extends grpc.MethodDefinition<src_app_protos_ScannerClient_pb.StartScanRequest, src_app_protos_ScannerClient_pb.StartScanResponse> {
    path: "/ScannerService.V1.GrpcPmScannerService/StartScan";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<src_app_protos_ScannerClient_pb.StartScanRequest>;
    requestDeserialize: grpc.deserialize<src_app_protos_ScannerClient_pb.StartScanRequest>;
    responseSerialize: grpc.serialize<src_app_protos_ScannerClient_pb.StartScanResponse>;
    responseDeserialize: grpc.deserialize<src_app_protos_ScannerClient_pb.StartScanResponse>;
}
interface IGrpcPmScannerServiceService_ISendScanData extends grpc.MethodDefinition<src_app_protos_ScannerClient_pb.ScanDataRequest, src_app_protos_ScannerClient_pb.ScanDataResponse> {
    path: "/ScannerService.V1.GrpcPmScannerService/SendScanData";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<src_app_protos_ScannerClient_pb.ScanDataRequest>;
    requestDeserialize: grpc.deserialize<src_app_protos_ScannerClient_pb.ScanDataRequest>;
    responseSerialize: grpc.serialize<src_app_protos_ScannerClient_pb.ScanDataResponse>;
    responseDeserialize: grpc.deserialize<src_app_protos_ScannerClient_pb.ScanDataResponse>;
}
interface IGrpcPmScannerServiceService_IGetScannerHealthCheck extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, src_app_protos_ScannerClient_pb.ScannerHealthCheck> {
    path: "/ScannerService.V1.GrpcPmScannerService/GetScannerHealthCheck";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<src_app_protos_ScannerClient_pb.ScannerHealthCheck>;
    responseDeserialize: grpc.deserialize<src_app_protos_ScannerClient_pb.ScannerHealthCheck>;
}
interface IGrpcPmScannerServiceService_ISendScannerHealthCheckStatus extends grpc.MethodDefinition<src_app_protos_ScannerClient_pb.ScannerHealthCheck, src_app_protos_ScannerClient_pb.ScannerHealthCheckResponse> {
    path: "/ScannerService.V1.GrpcPmScannerService/SendScannerHealthCheckStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<src_app_protos_ScannerClient_pb.ScannerHealthCheck>;
    requestDeserialize: grpc.deserialize<src_app_protos_ScannerClient_pb.ScannerHealthCheck>;
    responseSerialize: grpc.serialize<src_app_protos_ScannerClient_pb.ScannerHealthCheckResponse>;
    responseDeserialize: grpc.deserialize<src_app_protos_ScannerClient_pb.ScannerHealthCheckResponse>;
}

export const GrpcPmScannerServiceService: IGrpcPmScannerServiceService;

export interface IGrpcPmScannerServiceServer {
    startScan: grpc.handleUnaryCall<src_app_protos_ScannerClient_pb.StartScanRequest, src_app_protos_ScannerClient_pb.StartScanResponse>;
    sendScanData: grpc.handleUnaryCall<src_app_protos_ScannerClient_pb.ScanDataRequest, src_app_protos_ScannerClient_pb.ScanDataResponse>;
    getScannerHealthCheck: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, src_app_protos_ScannerClient_pb.ScannerHealthCheck>;
    sendScannerHealthCheckStatus: grpc.handleUnaryCall<src_app_protos_ScannerClient_pb.ScannerHealthCheck, src_app_protos_ScannerClient_pb.ScannerHealthCheckResponse>;
}

export interface IGrpcPmScannerServiceClient {
    startScan(request: src_app_protos_ScannerClient_pb.StartScanRequest, callback: (error: grpc.ServiceError | null, response: src_app_protos_ScannerClient_pb.StartScanResponse) => void): grpc.ClientUnaryCall;
    startScan(request: src_app_protos_ScannerClient_pb.StartScanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_protos_ScannerClient_pb.StartScanResponse) => void): grpc.ClientUnaryCall;
    startScan(request: src_app_protos_ScannerClient_pb.StartScanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_protos_ScannerClient_pb.StartScanResponse) => void): grpc.ClientUnaryCall;
    sendScanData(request: src_app_protos_ScannerClient_pb.ScanDataRequest, callback: (error: grpc.ServiceError | null, response: src_app_protos_ScannerClient_pb.ScanDataResponse) => void): grpc.ClientUnaryCall;
    sendScanData(request: src_app_protos_ScannerClient_pb.ScanDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_protos_ScannerClient_pb.ScanDataResponse) => void): grpc.ClientUnaryCall;
    sendScanData(request: src_app_protos_ScannerClient_pb.ScanDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_protos_ScannerClient_pb.ScanDataResponse) => void): grpc.ClientUnaryCall;
    getScannerHealthCheck(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: src_app_protos_ScannerClient_pb.ScannerHealthCheck) => void): grpc.ClientUnaryCall;
    getScannerHealthCheck(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_protos_ScannerClient_pb.ScannerHealthCheck) => void): grpc.ClientUnaryCall;
    getScannerHealthCheck(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_protos_ScannerClient_pb.ScannerHealthCheck) => void): grpc.ClientUnaryCall;
    sendScannerHealthCheckStatus(request: src_app_protos_ScannerClient_pb.ScannerHealthCheck, callback: (error: grpc.ServiceError | null, response: src_app_protos_ScannerClient_pb.ScannerHealthCheckResponse) => void): grpc.ClientUnaryCall;
    sendScannerHealthCheckStatus(request: src_app_protos_ScannerClient_pb.ScannerHealthCheck, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_protos_ScannerClient_pb.ScannerHealthCheckResponse) => void): grpc.ClientUnaryCall;
    sendScannerHealthCheckStatus(request: src_app_protos_ScannerClient_pb.ScannerHealthCheck, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_protos_ScannerClient_pb.ScannerHealthCheckResponse) => void): grpc.ClientUnaryCall;
}

export class GrpcPmScannerServiceClient extends grpc.Client implements IGrpcPmScannerServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public startScan(request: src_app_protos_ScannerClient_pb.StartScanRequest, callback: (error: grpc.ServiceError | null, response: src_app_protos_ScannerClient_pb.StartScanResponse) => void): grpc.ClientUnaryCall;
    public startScan(request: src_app_protos_ScannerClient_pb.StartScanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_protos_ScannerClient_pb.StartScanResponse) => void): grpc.ClientUnaryCall;
    public startScan(request: src_app_protos_ScannerClient_pb.StartScanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_protos_ScannerClient_pb.StartScanResponse) => void): grpc.ClientUnaryCall;
    public sendScanData(request: src_app_protos_ScannerClient_pb.ScanDataRequest, callback: (error: grpc.ServiceError | null, response: src_app_protos_ScannerClient_pb.ScanDataResponse) => void): grpc.ClientUnaryCall;
    public sendScanData(request: src_app_protos_ScannerClient_pb.ScanDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_protos_ScannerClient_pb.ScanDataResponse) => void): grpc.ClientUnaryCall;
    public sendScanData(request: src_app_protos_ScannerClient_pb.ScanDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_protos_ScannerClient_pb.ScanDataResponse) => void): grpc.ClientUnaryCall;
    public getScannerHealthCheck(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: src_app_protos_ScannerClient_pb.ScannerHealthCheck) => void): grpc.ClientUnaryCall;
    public getScannerHealthCheck(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_protos_ScannerClient_pb.ScannerHealthCheck) => void): grpc.ClientUnaryCall;
    public getScannerHealthCheck(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_protos_ScannerClient_pb.ScannerHealthCheck) => void): grpc.ClientUnaryCall;
    public sendScannerHealthCheckStatus(request: src_app_protos_ScannerClient_pb.ScannerHealthCheck, callback: (error: grpc.ServiceError | null, response: src_app_protos_ScannerClient_pb.ScannerHealthCheckResponse) => void): grpc.ClientUnaryCall;
    public sendScannerHealthCheckStatus(request: src_app_protos_ScannerClient_pb.ScannerHealthCheck, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_protos_ScannerClient_pb.ScannerHealthCheckResponse) => void): grpc.ClientUnaryCall;
    public sendScannerHealthCheckStatus(request: src_app_protos_ScannerClient_pb.ScannerHealthCheck, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_protos_ScannerClient_pb.ScannerHealthCheckResponse) => void): grpc.ClientUnaryCall;
}
