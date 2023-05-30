// GENERATED CODE -- DO NOT EDIT!

'use strict';
var src_app_protos_ScannerClient_pb = require('../../../src/app/protos/ScannerClient_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_ScannerService_V1_ScanDataRequest(arg) {
  if (!(arg instanceof src_app_protos_ScannerClient_pb.ScanDataRequest)) {
    throw new Error('Expected argument of type ScannerService.V1.ScanDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ScannerService_V1_ScanDataRequest(buffer_arg) {
  return src_app_protos_ScannerClient_pb.ScanDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ScannerService_V1_ScanDataResponse(arg) {
  if (!(arg instanceof src_app_protos_ScannerClient_pb.ScanDataResponse)) {
    throw new Error('Expected argument of type ScannerService.V1.ScanDataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ScannerService_V1_ScanDataResponse(buffer_arg) {
  return src_app_protos_ScannerClient_pb.ScanDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ScannerService_V1_ScannerHealthCheck(arg) {
  if (!(arg instanceof src_app_protos_ScannerClient_pb.ScannerHealthCheck)) {
    throw new Error('Expected argument of type ScannerService.V1.ScannerHealthCheck');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ScannerService_V1_ScannerHealthCheck(buffer_arg) {
  return src_app_protos_ScannerClient_pb.ScannerHealthCheck.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ScannerService_V1_ScannerHealthCheckResponse(arg) {
  if (!(arg instanceof src_app_protos_ScannerClient_pb.ScannerHealthCheckResponse)) {
    throw new Error('Expected argument of type ScannerService.V1.ScannerHealthCheckResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ScannerService_V1_ScannerHealthCheckResponse(buffer_arg) {
  return src_app_protos_ScannerClient_pb.ScannerHealthCheckResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ScannerService_V1_StartScanRequest(arg) {
  if (!(arg instanceof src_app_protos_ScannerClient_pb.StartScanRequest)) {
    throw new Error('Expected argument of type ScannerService.V1.StartScanRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ScannerService_V1_StartScanRequest(buffer_arg) {
  return src_app_protos_ScannerClient_pb.StartScanRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ScannerService_V1_StartScanResponse(arg) {
  if (!(arg instanceof src_app_protos_ScannerClient_pb.StartScanResponse)) {
    throw new Error('Expected argument of type ScannerService.V1.StartScanResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ScannerService_V1_StartScanResponse(buffer_arg) {
  return src_app_protos_ScannerClient_pb.StartScanResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var GrpcPmScannerServiceService = exports['ScannerService.V1.GrpcPmScannerService'] = {
  startScan: {
    path: '/ScannerService.V1.GrpcPmScannerService/StartScan',
    requestStream: false,
    responseStream: false,
    requestType: src_app_protos_ScannerClient_pb.StartScanRequest,
    responseType: src_app_protos_ScannerClient_pb.StartScanResponse,
    requestSerialize: serialize_ScannerService_V1_StartScanRequest,
    requestDeserialize: deserialize_ScannerService_V1_StartScanRequest,
    responseSerialize: serialize_ScannerService_V1_StartScanResponse,
    responseDeserialize: deserialize_ScannerService_V1_StartScanResponse,
  },
  sendScanData: {
    path: '/ScannerService.V1.GrpcPmScannerService/SendScanData',
    requestStream: false,
    responseStream: false,
    requestType: src_app_protos_ScannerClient_pb.ScanDataRequest,
    responseType: src_app_protos_ScannerClient_pb.ScanDataResponse,
    requestSerialize: serialize_ScannerService_V1_ScanDataRequest,
    requestDeserialize: deserialize_ScannerService_V1_ScanDataRequest,
    responseSerialize: serialize_ScannerService_V1_ScanDataResponse,
    responseDeserialize: deserialize_ScannerService_V1_ScanDataResponse,
  },
  getScannerHealthCheck: {
    path: '/ScannerService.V1.GrpcPmScannerService/GetScannerHealthCheck',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: src_app_protos_ScannerClient_pb.ScannerHealthCheck,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_ScannerService_V1_ScannerHealthCheck,
    responseDeserialize: deserialize_ScannerService_V1_ScannerHealthCheck,
  },
  sendScannerHealthCheckStatus: {
    path: '/ScannerService.V1.GrpcPmScannerService/SendScannerHealthCheckStatus',
    requestStream: false,
    responseStream: false,
    requestType: src_app_protos_ScannerClient_pb.ScannerHealthCheck,
    responseType: src_app_protos_ScannerClient_pb.ScannerHealthCheckResponse,
    requestSerialize: serialize_ScannerService_V1_ScannerHealthCheck,
    requestDeserialize: deserialize_ScannerService_V1_ScannerHealthCheck,
    responseSerialize: serialize_ScannerService_V1_ScannerHealthCheckResponse,
    responseDeserialize: deserialize_ScannerService_V1_ScannerHealthCheckResponse,
  },
};

