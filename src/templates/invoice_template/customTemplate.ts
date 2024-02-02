import { v2 } from "@govtechsg/open-attestation";

// export interface CocTemplateCertificate extends v2.OpenAttestationDocument {
//   name: string;
//   recipient: {
//     name: string;
//   };
// }

export type InvoiceDocumentSchemaS = v2.OpenAttestationDocument & InvoiceDocument;
export type InvoiceDocumentSchema = InvoiceDocumentSchemaS ;

export interface InvoiceDocument {
  id?: string;
  date?: string;
  customerId?: string;
  terms?: string;
  billFrom?: CompanyInfo;
  billTo: BillingAddress;
  billableItems?: InvoiceItem[];
  subtotal?: string;
  tax?: string;
  taxTotal?: string;
  total?: string;
}

export interface CompanyInfo {
  name: string;
  streetAddress: string;
  city: string;
  postalCode: string;
  phoneNumber: string;
}

export interface BillingAddress {
  name: string;
  company: CompanyInfo;
  email: string;
}

export interface InvoiceItem {
  description: string;
  quantity: string;
  unitPrice: string;
  amount: string;
}
export const InvoiceDocument: InvoiceDocumentSchema = {
  $template: {
    type: v2.TemplateType.EmbeddedRenderer,
    name: "INVOICE",
    url: "https://generictemplates.fdpconnect.com",
  },
  issuers: [
    {
      name: "abc",
      documentStore: "0x1245e5B64D785b25057f7438F715f4aA5D965733",
      identityProof: {
        type: v2.IdentityProofType.DNSTxt,
        location: "example.tradetrust.io",
      },
    },
  ],
  id: "2034",
  date: "2018-02-21",
  customerId: "564",
  terms: "Due Upon Receipt",
  billFrom: {
    name: "ABC Company",
    streetAddress: "Level 1, Industry Offices",
    city: "Singapore",
    postalCode: "123456",
    phoneNumber: "60305029",
  },
  billTo: {
    company: {
      name: "DEF Company",
      streetAddress: "Level 2, Industry Offices",
      city: "Singapore",
      postalCode: "612345",
      phoneNumber: "61204028",
    },
    name: "James Lee",
    email: "def@company.com",
  },
  billableItems: [
    {
      description: "Service Fee",
      quantity: "1",
      unitPrice: "200",
      amount: "200",
    },
    {
      description: "Labor: 5 hours at $75/hr",
      quantity: "5",
      unitPrice: "75",
      amount: "375",
    },
    {
      description: "New client discount",
      quantity: "1",
      unitPrice: "50",
      amount: "50",
    },
  ],
  subtotal: "625",
  tax: "0",
  taxTotal: "0",
  total: "625",
};