// GENERATED CODE -- DO NOT EDIT!

'use strict';
var src_app_protos_my$service_pb = require('../../../src/app/protos/my-service_pb.js');

function serialize_mypackage_DataRequest(arg) {
  if (!(arg instanceof src_app_protos_my$service_pb.DataRequest)) {
    throw new Error('Expected argument of type mypackage.DataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mypackage_DataRequest(buffer_arg) {
  return src_app_protos_my$service_pb.DataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mypackage_DataResponse(arg) {
  if (!(arg instanceof src_app_protos_my$service_pb.DataResponse)) {
    throw new Error('Expected argument of type mypackage.DataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mypackage_DataResponse(buffer_arg) {
  return src_app_protos_my$service_pb.DataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var MyServiceService = exports['mypackage.MyService'] = {
  getData: {
    path: '/mypackage.MyService/GetData',
    requestStream: false,
    responseStream: false,
    requestType: src_app_protos_my$service_pb.DataRequest,
    responseType: src_app_protos_my$service_pb.DataResponse,
    requestSerialize: serialize_mypackage_DataRequest,
    requestDeserialize: deserialize_mypackage_DataRequest,
    responseSerialize: serialize_mypackage_DataResponse,
    responseDeserialize: deserialize_mypackage_DataResponse,
  },
};

