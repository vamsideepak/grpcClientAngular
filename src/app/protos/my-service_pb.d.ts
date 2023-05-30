// package: mypackage
// file: src/app/protos/my-service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class DataRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): DataRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DataRequest): DataRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DataRequest;
    static deserializeBinaryFromReader(message: DataRequest, reader: jspb.BinaryReader): DataRequest;
}

export namespace DataRequest {
    export type AsObject = {
        id: string,
    }
}

export class DataResponse extends jspb.Message { 
    getData(): string;
    setData(value: string): DataResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DataResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DataResponse): DataResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DataResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DataResponse;
    static deserializeBinaryFromReader(message: DataResponse, reader: jspb.BinaryReader): DataResponse;
}

export namespace DataResponse {
    export type AsObject = {
        data: string,
    }
}
