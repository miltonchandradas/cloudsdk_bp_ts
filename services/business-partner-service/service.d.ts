/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AddressEmailAddressApi } from './AddressEmailAddressApi';
import { AddressFaxNumberApi } from './AddressFaxNumberApi';
import { AddressHomePageUrlApi } from './AddressHomePageUrlApi';
import { AddressPhoneNumberApi } from './AddressPhoneNumberApi';
import { BpAddrDepdntIntlLocNumberApi } from './BpAddrDepdntIntlLocNumberApi';
import { BpContactToAddressApi } from './BpContactToAddressApi';
import { BpContactToFuncAndDeptApi } from './BpContactToFuncAndDeptApi';
import { BuPaAddressUsageApi } from './BuPaAddressUsageApi';
import { BuPaIdentificationApi } from './BuPaIdentificationApi';
import { BuPaIndustryApi } from './BuPaIndustryApi';
import { BusinessPartnerApi } from './BusinessPartnerApi';
import { BusinessPartnerAddressApi } from './BusinessPartnerAddressApi';
import { BusinessPartnerBankApi } from './BusinessPartnerBankApi';
import { BusinessPartnerContactApi } from './BusinessPartnerContactApi';
import { BusinessPartnerRoleApi } from './BusinessPartnerRoleApi';
import { BusinessPartnerTaxNumberApi } from './BusinessPartnerTaxNumberApi';
import { BusPartAddrDepdntTaxNmbrApi } from './BusPartAddrDepdntTaxNmbrApi';
import { CustAddrDepdntExtIdentifierApi } from './CustAddrDepdntExtIdentifierApi';
import { CustAddrDepdntInformationApi } from './CustAddrDepdntInformationApi';
import { CustomerApi } from './CustomerApi';
import { CustomerCompanyApi } from './CustomerCompanyApi';
import { CustomerCompanyTextApi } from './CustomerCompanyTextApi';
import { CustomerDunningApi } from './CustomerDunningApi';
import { CustomerSalesAreaApi } from './CustomerSalesAreaApi';
import { CustomerSalesAreaTaxApi } from './CustomerSalesAreaTaxApi';
import { CustomerSalesAreaTextApi } from './CustomerSalesAreaTextApi';
import { CustomerTaxGroupingApi } from './CustomerTaxGroupingApi';
import { CustomerTextApi } from './CustomerTextApi';
import { CustomerUnloadingPointApi } from './CustomerUnloadingPointApi';
import { CustomerWithHoldingTaxApi } from './CustomerWithHoldingTaxApi';
import { CustSalesPartnerFuncApi } from './CustSalesPartnerFuncApi';
import { CustSlsAreaAddrDepdntInfoApi } from './CustSlsAreaAddrDepdntInfoApi';
import { CustSlsAreaAddrDepdntTaxInfoApi } from './CustSlsAreaAddrDepdntTaxInfoApi';
import { CustUnldgPtAddrDepdntInfoApi } from './CustUnldgPtAddrDepdntInfoApi';
import { SupplierApi } from './SupplierApi';
import { SupplierCompanyApi } from './SupplierCompanyApi';
import { SupplierCompanyTextApi } from './SupplierCompanyTextApi';
import { SupplierDunningApi } from './SupplierDunningApi';
import { SupplierPartnerFuncApi } from './SupplierPartnerFuncApi';
import { SupplierPurchasingOrgApi } from './SupplierPurchasingOrgApi';
import { SupplierPurchasingOrgTextApi } from './SupplierPurchasingOrgTextApi';
import { SupplierTextApi } from './SupplierTextApi';
import { SupplierWithHoldingTaxApi } from './SupplierWithHoldingTaxApi';
import { BigNumber } from 'bignumber.js';
import { Moment } from 'moment';
import {
  DeSerializers,
  DefaultDeSerializers,
  Time
} from '@sap-cloud-sdk/odata-v2';
import { batch, changeset } from './BatchRequest';
export declare function businessPartnerService<
  BinaryT = string,
  BooleanT = boolean,
  ByteT = number,
  DecimalT = BigNumber,
  DoubleT = number,
  FloatT = number,
  Int16T = number,
  Int32T = number,
  Int64T = BigNumber,
  GuidT = string,
  SByteT = number,
  SingleT = number,
  StringT = string,
  AnyT = any,
  DateTimeOffsetT = Moment,
  DateTimeT = Moment,
  TimeT = Time
>(
  deSerializers?: Partial<
    DeSerializers<
      BinaryT,
      BooleanT,
      ByteT,
      DecimalT,
      DoubleT,
      FloatT,
      Int16T,
      Int32T,
      Int64T,
      GuidT,
      SByteT,
      SingleT,
      StringT,
      AnyT,
      DateTimeOffsetT,
      DateTimeT,
      TimeT
    >
  >
): BusinessPartnerService<
  DeSerializers<
    BinaryT,
    BooleanT,
    ByteT,
    DecimalT,
    DoubleT,
    FloatT,
    Int16T,
    Int32T,
    Int64T,
    GuidT,
    SByteT,
    SingleT,
    StringT,
    AnyT,
    DateTimeOffsetT,
    DateTimeT,
    TimeT
  >
>;
declare class BusinessPartnerService<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  private apis;
  private deSerializers;
  constructor(deSerializers: DeSerializersT);
  private initApi;
  get addressEmailAddressApi(): AddressEmailAddressApi<DeSerializersT>;
  get addressFaxNumberApi(): AddressFaxNumberApi<DeSerializersT>;
  get addressHomePageUrlApi(): AddressHomePageUrlApi<DeSerializersT>;
  get addressPhoneNumberApi(): AddressPhoneNumberApi<DeSerializersT>;
  get bpAddrDepdntIntlLocNumberApi(): BpAddrDepdntIntlLocNumberApi<DeSerializersT>;
  get bpContactToAddressApi(): BpContactToAddressApi<DeSerializersT>;
  get bpContactToFuncAndDeptApi(): BpContactToFuncAndDeptApi<DeSerializersT>;
  get buPaAddressUsageApi(): BuPaAddressUsageApi<DeSerializersT>;
  get buPaIdentificationApi(): BuPaIdentificationApi<DeSerializersT>;
  get buPaIndustryApi(): BuPaIndustryApi<DeSerializersT>;
  get businessPartnerApi(): BusinessPartnerApi<DeSerializersT>;
  get businessPartnerAddressApi(): BusinessPartnerAddressApi<DeSerializersT>;
  get businessPartnerBankApi(): BusinessPartnerBankApi<DeSerializersT>;
  get businessPartnerContactApi(): BusinessPartnerContactApi<DeSerializersT>;
  get businessPartnerRoleApi(): BusinessPartnerRoleApi<DeSerializersT>;
  get businessPartnerTaxNumberApi(): BusinessPartnerTaxNumberApi<DeSerializersT>;
  get busPartAddrDepdntTaxNmbrApi(): BusPartAddrDepdntTaxNmbrApi<DeSerializersT>;
  get custAddrDepdntExtIdentifierApi(): CustAddrDepdntExtIdentifierApi<DeSerializersT>;
  get custAddrDepdntInformationApi(): CustAddrDepdntInformationApi<DeSerializersT>;
  get customerApi(): CustomerApi<DeSerializersT>;
  get customerCompanyApi(): CustomerCompanyApi<DeSerializersT>;
  get customerCompanyTextApi(): CustomerCompanyTextApi<DeSerializersT>;
  get customerDunningApi(): CustomerDunningApi<DeSerializersT>;
  get customerSalesAreaApi(): CustomerSalesAreaApi<DeSerializersT>;
  get customerSalesAreaTaxApi(): CustomerSalesAreaTaxApi<DeSerializersT>;
  get customerSalesAreaTextApi(): CustomerSalesAreaTextApi<DeSerializersT>;
  get customerTaxGroupingApi(): CustomerTaxGroupingApi<DeSerializersT>;
  get customerTextApi(): CustomerTextApi<DeSerializersT>;
  get customerUnloadingPointApi(): CustomerUnloadingPointApi<DeSerializersT>;
  get customerWithHoldingTaxApi(): CustomerWithHoldingTaxApi<DeSerializersT>;
  get custSalesPartnerFuncApi(): CustSalesPartnerFuncApi<DeSerializersT>;
  get custSlsAreaAddrDepdntInfoApi(): CustSlsAreaAddrDepdntInfoApi<DeSerializersT>;
  get custSlsAreaAddrDepdntTaxInfoApi(): CustSlsAreaAddrDepdntTaxInfoApi<DeSerializersT>;
  get custUnldgPtAddrDepdntInfoApi(): CustUnldgPtAddrDepdntInfoApi<DeSerializersT>;
  get supplierApi(): SupplierApi<DeSerializersT>;
  get supplierCompanyApi(): SupplierCompanyApi<DeSerializersT>;
  get supplierCompanyTextApi(): SupplierCompanyTextApi<DeSerializersT>;
  get supplierDunningApi(): SupplierDunningApi<DeSerializersT>;
  get supplierPartnerFuncApi(): SupplierPartnerFuncApi<DeSerializersT>;
  get supplierPurchasingOrgApi(): SupplierPurchasingOrgApi<DeSerializersT>;
  get supplierPurchasingOrgTextApi(): SupplierPurchasingOrgTextApi<DeSerializersT>;
  get supplierTextApi(): SupplierTextApi<DeSerializersT>;
  get supplierWithHoldingTaxApi(): SupplierWithHoldingTaxApi<DeSerializersT>;
  get batch(): typeof batch;
  get changeset(): typeof changeset;
}
export {};
//# sourceMappingURL=service.d.ts.map
