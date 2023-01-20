"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustAddrDepdntInformation = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_CustAddrDepdntInformation" of service "API_BUSINESS_PARTNER".
 */
class CustAddrDepdntInformation extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.CustAddrDepdntInformation = CustAddrDepdntInformation;
/**
 * Technical entity name for CustAddrDepdntInformation.
 */
CustAddrDepdntInformation._entityName = 'A_CustAddrDepdntInformation';
/**
 * Default url path for the according service.
 */
CustAddrDepdntInformation._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
/**
 * All key fields of the CustAddrDepdntInformation entity
 */
CustAddrDepdntInformation._keys = ['Customer', 'AddressID'];
//# sourceMappingURL=CustAddrDepdntInformation.js.map