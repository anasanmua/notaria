import {
  Archive,
  Briefcase,
  CheckSquare,
  ClipboardList,
  DollarSign,
  FileText,
  Folder,
  Home,
  Landmark,
  PenTool,
  UserCheck,
  Users,
} from "lucide-react";

export interface Service {
  type: string;
  description: string;
  documents?: string[];
  tax?: string;
  hasAdditionalDocs?: boolean;
  additionalDocs?: string[];
  additionalDescription?: string;
  additionalTitle?: string;
  additionalInfoDoc?: string;
}

export interface DataService {
  poderes: Service[];
  sucesiones: Service[];
  matrimonial: Service[];
  hipotecario: Service[];
  donaciones: Service[];
  inmobiliario: Service[];
  mercantil: Service[];
  nacionalidad: Service[];
  polizas: Service[];
  ratificaciones: Service[];
  actas: Service[];
  legitimacion: Service[];
}

export const data: DataService = {
  poderes: [
    {
      type: "generalTitle",
      description: "generalDescription",
      documents: ["generalDocu1", "generalDocu2", "generalDocu3"],
    },
    {
      type: "lawsuitsTitle",
      description: "lawsuitsDescription",
      documents: ["lawsuitsDocu1", "lawsuitsDocu2"],
    },
    {
      type: "specialPowersTitle",
      description: "specialPowersDescription",
      documents: ["specialPowersDocu1", "specialPowersDocu2"],
    },
    {
      type: "foreignPowersTitle",
      description: "foreignPowersDescription",
      documents: ["foreignPowersDocu1", "foreignPowersDocu2"],
    },
    {
      type: "revocationTitle",
      description: "revocationDescription",
      documents: ["revocationDocu1", "revocationDocu2", "revocationDocu3"],
    },
  ],
  sucesiones: [
    {
      type: "willTitle",
      description: "willDescription",
      documents: ["willDocu1"],
    },
    {
      type: "heirsDeclarationTitle",
      description: "heirsDeclarationDescription",
      documents: [
        "heirsDeclarationDocu1",
        "heirsDeclarationDocu2",
        "heirsDeclarationDocu3",
        "heirsDeclarationDocu4",
        "heirsDeclarationDocu5",
        "heirsDeclarationDocu6",
        "heirsDeclarationDocu7",
        "heirsDeclarationDocu8",
      ],
    },
    {
      type: "inheritanceTitle",
      description: "inheritanceDescription",
      documents: [
        "inheritanceDocu1",
        "inheritanceDocu2",
        "inheritanceDocu3",
        "inheritanceDocu4",
        "inheritanceDocu5",
        "inheritanceDocu6",
        "inheritanceDocu7",
        "inheritanceDocu8",
      ],
      tax: "inheritanceTax",
    },
    {
      type: "inheritanceRenunciationTitle",
      description: "inheritanceRenunciationDescription",
      documents: [
        "inheritanceRenunciationDocu1",
        "inheritanceRenunciationDocu2",
        "inheritanceRenunciationDocu3",
        "inheritanceRenunciationDocu4",
      ],
    },
  ],
  matrimonial: [
    {
      type: "marriageContractsTitle",
      description: "marriageContractsDescription",
      documents: ["marriageContractsDocu1", "marriageContractsDocu2"],
    },
    {
      type: "marriageProcedureTitle",
      description: "marriageProcedureDescription",
      documents: [
        "marriageProcedureDocu1",
        "marriageProcedureDocu2",
        "marriageProcedureDocu3",
        "marriageProcedureDocu4",
        "marriageProcedureDocu5",
        "marriageProcedureDocu6",
        "marriageProcedureDocu7",
        "marriageProcedureDocu8",
      ],
    },
    {
      type: "divorceTitle",
      description: "divorceDescription",
      documents: [
        "divorceDocu1",
        "divorceDocu2",
        "divorceDocu3",
        "divorceDocu4",
        "divorceDocu5",
      ],
      tax: "divorceTax",
    },
    {
      type: "marriageContributionTitle",
      description: "marriageContributionDescription",
      documents: [
        "marriageContributionDocu1",
        "marriageContributionDocu2",
        "marriageContributionDocu3",
      ],
    },
  ],
  hipotecario: [
    {
      type: "mortgageLoanTitle",
      description: "mortgageLoanDescription",
      documents: [
        "mortgageLoanDocu1",
        "mortgageLoanDocu2",
        "mortgageLoanDocu3",
        "mortgageLoanDocu4",
        "mortgageLoanDocu5",
        "mortgageLoanDocu6",
        "mortgageLoanDocu7",
        "mortgageLoanDocu8",
        "mortgageLoanDocu9",
      ],
      tax: "mortgageTax",
      hasAdditionalDocs: true,
      additionalDocs: [
        "mortgageLoanDocu13",
        "mortgageLoanDocu12",
        "mortgageLoanDocu11",
      ],
    },
    {
      type: "subrogationAndNovationTitle",
      description: "subrogationAndNovationDescription",
      documents: ["subrogationAndNovationDocu1", "subrogationAndNovationDocu2"],
    },
    {
      type: "mortgageCancellationTitle",
      description: "mortgageCancellationDescription",
      documents: [
        "mortgageCancellationDocu1",
        "mortgageCancellationDocu2",
        "mortgageCancellationDocu3",
      ],
      tax: "mortgageTax",
    },
  ],
  donaciones: [
    {
      type: "donationMoneyTitle",
      description: "donationMoneyDescription",
      documents: [
        "donationMoneyDocu1",
        "donationMoneyDocu2",
        "donationMoneyDocu3",
        "donationMoneyDocu4",
        "donationMoneyDocu5",
        "donationMoneyDocu6",
      ],
      tax: "donationTax",
    },
    {
      type: "donationRealEstateTitle",
      description: "donationRealEstateDescription",
      documents: [
        "donationRealEstateDocu1",
        "donationRealEstateDocu2",
        "donationRealEstateDocu3",
        "donationRealEstateDocu4",
        "donationRealEstateDocu5",
        "donationRealEstateDocu6",
      ],
      tax: "donationRealStateTax",
    },
  ],
  inmobiliario: [
    {
      type: "realEstateTransactionsTitle",
      description: "realEstateTransactionsDescription",
      documents: [
        "realEstateTransactionsDocu1",
        "realEstateTransactionsDocu2",
        "realEstateTransactionsDocu3",
        "realEstateTransactionsDocu4",
        "realEstateTransactionsDocu5",
        "realEstateTransactionsDocu6",
        "realEstateTransactionsDocu7",
        "realEstateTransactionsDocu8",
        "realEstateTransactionsDocu9",
        "realEstateTransactionsDocu10",
      ],
      tax: "realEstateTax",
    },
    {
      type: "condominiumExtinctionTitle",
      description: "condominiumExtinctionDescription",
      documents: [
        "condominiumExtinctionDocu1",
        "condominiumExtinctionDocu2",
        "condominiumExtinctionDocu3",
      ],
      tax: "condominiumExtinTax",
    },
    {
      type: "buildingConstructionTitle",
      description: "buildingConstructionDescription",
      documents: [
        "buildingConstructionDocu1",
        "buildingConstructionDocu2",
        "buildingConstructionDocu3",
        "buildingConstructionDocu4",
        "buildingConstructionDocu5",
      ],
      tax: "buildingConstructionTax",
      additionalTitle: "buildingConstructionPlusTitle",
      additionalDescription: "buildingConstructionPlusDescription",
    },
    {
      type: "oldNewBuildingTitle",
      description: "oldNewBuildingDescription",
      documents: [
        "oldNewBuildingDocu1",
        "oldNewBuildingDocu2",
        "oldNewBuildingDocu3",
      ],
      tax: "oldNewBuildingNewBuildingTax",
      additionalTitle: "oldNewBuildingPlusTitle",
      additionalDescription: "oldNewBuildingPlusDescription",
    },
    {
      type: "landSegregationTitle",
      description: "landSegregationDescription",
      documents: [
        "landSegregationDocu1",
        "landSegregationDocu2",
        "landSegregationDocu3",
      ],
      tax: "landSegregationTax",
    },
    {
      type: "useChangeTitle",
      description: "useChangeDescription",
      documents: [
        "useChangeDocu1",
        "useChangeDocu2",
        "useChangeDocu3",
        "useChangeDocu4",
        "useChangeDocu5",
        "useChangeDocu6",
      ],
      tax: "useChangeTax",
      additionalInfoDoc: "additionalInfoDoc",
    },
  ],
  mercantil: [
    {
      type: "companyFormationTitle",
      description: "companyFormationDescription",
      documents: [
        "companyFormationDocu1",
        "companyFormationDocu2",
        "companyFormationDocu3",
        "companyFormationDocu4",
      ],
      tax: "companyFormationTax",
    },
    {
      type: "realOwnershipTitle",
      description: "realOwnershipDescription",
      documents: [
        "realOwnershipDocu1",
        "realOwnershipDocu2",
        "realOwnershipDocu3",
        "realOwnershipDocu4",
      ],
    },
    {
      type: "postConstitutionActionsTitle",
      description: "postConstitutionActionsDescription",
      documents: ["postConstitutionActionsDocu1"],
    },
  ],
  nacionalidad: [
    {
      type: "nationalityOathTitle",
      description: "nationalityOathDescription",
      documents: [
        "nationalityOathDocu1",
        "nationalityOathDocu2",
        "nationalityOathDocu3",
        "nationalityOathDocu4",
        "nationalityOathDocu5",
      ],
    },
  ],
  polizas: [
    {
      type: "policiesTitle",
      description: "policiesDescription",
      documents: [
        "policiesDocu1",
        "policiesDocu2",
        "policiesDocu3",
        "policiesDocu4",
        "policiesDocu5",
      ],
    },
  ],
  ratificaciones: [
    {
      type: "ratificationsTitle",
      description: "ratificationsDescription",
      documents: ["ratificationsDocu1", "ratificationsDocu2"],
    },
  ],
  actas: [
    {
      type: "manifestationsAndPresenceActsTitle",
      description: "manifestationsAndPresenceActsDescription",
    },
  ],
  legitimacion: [
    {
      type: "signatureAuthenticationAndDocumentCopyingTitle",
      description: "signatureAuthenticationAndDocumentCopyingDescription",
    },
  ],
};

export const dataCardServices = [
  {
    icon: Users,
    title: "notarialPowerTitle",
    description: "notarialPowerDescription",
    href: "poderes",
  },
  {
    icon: PenTool,
    title: "testamentaryTitle",
    description: "testamentaryDescription",
    href: "sucesiones",
  },
  {
    icon: CheckSquare,
    title: "marriageContractsTitle",
    description: "marriageContractsDescription",
    href: "matrimonial",
  },
  {
    icon: Home,
    title: "mortgageTitle",
    description: "mortgageDescription",
    href: "hipotecario",
  },
  {
    icon: Archive,
    title: "donationsTitle",
    description: "donationsDescription",
    href: "donaciones",
  },
  {
    icon: FileText,
    title: "realStateTitle",
    description: "realStateDescription",
    href: "inmobiliario",
  },
  {
    icon: Briefcase,
    title: "tradeTitle",
    description: "tradeDescription",
    href: "mercantil",
  },
  {
    icon: Folder,
    title: "nationalityTitle",
    description: "nationalityDescription",
    href: "nacionalidad",
  },
  {
    icon: Landmark,
    title: "policiesTitle",
    description: "policiesDescription",
    href: "polizas",
  },
  {
    icon: ClipboardList,
    title: "ratificationsTitle",
    description: "ratificationsDescription",
    href: "ratificaciones",
  },
  {
    icon: UserCheck,
    title: "manifestationsTitle",
    description: "manifestationsDescription",
    href: "actas",
  },
  {
    icon: DollarSign,
    title: "signatureLegitimationTitle",
    description: "signatureLegitimationDescription",
    href: "legitimacion",
  },
];
