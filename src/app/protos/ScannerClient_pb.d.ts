// package: ScannerService.V1
// file: src/app/protos/ScannerClient.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class ScanDataRequest extends jspb.Message { 
    getPmtransactionid(): string;
    setPmtransactionid(value: string): ScanDataRequest;
    getTransactionid(): string;
    setTransactionid(value: string): ScanDataRequest;
    getRgbfront(): string;
    setRgbfront(value: string): ScanDataRequest;
    getRgbback(): string;
    setRgbback(value: string): ScanDataRequest;
    getIrfront(): string;
    setIrfront(value: string): ScanDataRequest;
    getIrback(): string;
    setIrback(value: string): ScanDataRequest;
    getLstfront(): string;
    setLstfront(value: string): ScanDataRequest;
    getLstback(): string;
    setLstback(value: string): ScanDataRequest;
    getBarcodebuffer(): Uint8Array | string;
    getBarcodebuffer_asU8(): Uint8Array;
    getBarcodebuffer_asB64(): string;
    setBarcodebuffer(value: Uint8Array | string): ScanDataRequest;
    getMagtrack1buffer(): Uint8Array | string;
    getMagtrack1buffer_asU8(): Uint8Array;
    getMagtrack1buffer_asB64(): string;
    setMagtrack1buffer(value: Uint8Array | string): ScanDataRequest;
    getMagtrack2buffer(): Uint8Array | string;
    getMagtrack2buffer_asU8(): Uint8Array;
    getMagtrack2buffer_asB64(): string;
    setMagtrack2buffer(value: Uint8Array | string): ScanDataRequest;
    getMagtrack3buffer(): Uint8Array | string;
    getMagtrack3buffer_asU8(): Uint8Array;
    getMagtrack3buffer_asB64(): string;
    setMagtrack3buffer(value: Uint8Array | string): ScanDataRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScanDataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ScanDataRequest): ScanDataRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScanDataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScanDataRequest;
    static deserializeBinaryFromReader(message: ScanDataRequest, reader: jspb.BinaryReader): ScanDataRequest;
}

export namespace ScanDataRequest {
    export type AsObject = {
        pmtransactionid: string,
        transactionid: string,
        rgbfront: string,
        rgbback: string,
        irfront: string,
        irback: string,
        lstfront: string,
        lstback: string,
        barcodebuffer: Uint8Array | string,
        magtrack1buffer: Uint8Array | string,
        magtrack2buffer: Uint8Array | string,
        magtrack3buffer: Uint8Array | string,
    }
}

export class ScanDataResponse extends jspb.Message { 
    getAcknowledgement(): boolean;
    setAcknowledgement(value: boolean): ScanDataResponse;
    getPmtransactionid(): string;
    setPmtransactionid(value: string): ScanDataResponse;
    getTransactionid(): string;
    setTransactionid(value: string): ScanDataResponse;
    getClientstatus(): Status;
    setClientstatus(value: Status): ScanDataResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScanDataResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ScanDataResponse): ScanDataResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScanDataResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScanDataResponse;
    static deserializeBinaryFromReader(message: ScanDataResponse, reader: jspb.BinaryReader): ScanDataResponse;
}

export namespace ScanDataResponse {
    export type AsObject = {
        acknowledgement: boolean,
        pmtransactionid: string,
        transactionid: string,
        clientstatus: Status,
    }
}

export class StartScanRequest extends jspb.Message { 
    getPmtransactionid(): string;
    setPmtransactionid(value: string): StartScanRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartScanRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StartScanRequest): StartScanRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartScanRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartScanRequest;
    static deserializeBinaryFromReader(message: StartScanRequest, reader: jspb.BinaryReader): StartScanRequest;
}

export namespace StartScanRequest {
    export type AsObject = {
        pmtransactionid: string,
    }
}

export class StartScanResponse extends jspb.Message { 
    getPmtransactionid(): string;
    setPmtransactionid(value: string): StartScanResponse;
    getTransactionid(): string;
    setTransactionid(value: string): StartScanResponse;
    getClientstatus(): Status;
    setClientstatus(value: Status): StartScanResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartScanResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StartScanResponse): StartScanResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartScanResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartScanResponse;
    static deserializeBinaryFromReader(message: StartScanResponse, reader: jspb.BinaryReader): StartScanResponse;
}

export namespace StartScanResponse {
    export type AsObject = {
        pmtransactionid: string,
        transactionid: string,
        clientstatus: Status,
    }
}

export class ScannerHealthCheck extends jspb.Message { 
    getStatuscode(): number;
    setStatuscode(value: number): ScannerHealthCheck;
    getStatusmessage(): string;
    setStatusmessage(value: string): ScannerHealthCheck;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScannerHealthCheck.AsObject;
    static toObject(includeInstance: boolean, msg: ScannerHealthCheck): ScannerHealthCheck.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScannerHealthCheck, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScannerHealthCheck;
    static deserializeBinaryFromReader(message: ScannerHealthCheck, reader: jspb.BinaryReader): ScannerHealthCheck;
}

export namespace ScannerHealthCheck {
    export type AsObject = {
        statuscode: number,
        statusmessage: string,
    }
}

export class ScannerHealthCheckResponse extends jspb.Message { 
    getAcknowledgement(): boolean;
    setAcknowledgement(value: boolean): ScannerHealthCheckResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScannerHealthCheckResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ScannerHealthCheckResponse): ScannerHealthCheckResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScannerHealthCheckResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScannerHealthCheckResponse;
    static deserializeBinaryFromReader(message: ScannerHealthCheckResponse, reader: jspb.BinaryReader): ScannerHealthCheckResponse;
}

export namespace ScannerHealthCheckResponse {
    export type AsObject = {
        acknowledgement: boolean,
    }
}

export enum Status {
    READY = 0,
    PROCESSING = 1,
    UNAVAILABLE = 2,
}
