export interface Service {
  type: string;
  description: string;
  documents?: string[];
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
      ],
    },
    {
      type: "condominiumExtinctionTitle",
      description: "condominiumExtinctionDescription",
      documents: ["condominiumExtinctionDocu1", "condominiumExtinctionDocu2"],
    },
    {
      type: "newBuildingDeclarationTitle",
      description: "newBuildingDeclarationDescription",
      documents: ["newBuildingDeclarationDocu1"],
    },
    {
      type: "newBuildingConstructionTitle",
      description: "newBuildingConstructionDescription",
      documents: [
        "newBuildingConstructionDocu1",
        "newBuildingConstructionDocu2",
        "newBuildingConstructionDocu3",
        "newBuildingConstructionDocu4",
        "newBuildingConstructionDocu5",
      ],
    },
    {
      type: "oldNewBuildingTitle",
      description: "oldNewBuildingDescription",
      documents: [
        "oldNewBuildingDocu1",
        "oldNewBuildingDocu2",
        "oldNewBuildingDocu3",
      ],
    },
    {
      type: "landSegregationTitle",
      description: "landSegregationDescription",
      documents: ["landSegregationDocu1", "landSegregationDocu2"],
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
    },
    {
      type: "realOwnershipTitle",
      description: "realOwnershipDescription",
      documents: [
        "realOwnershipDocu1",
        "realOwnershipDocu2",
        "realOwnershipDocu3",
      ],
    },
    {
      type: "postConstitutionActionsTitle",
      description: "postConstitutionActionsDescription",
      documents: ["postConstitutionActionsDocu1"],
    },
    {
      type: "nationalityOathTitle",
      description: "nationalityOathDescription",
      documents: [
        "nationalityOathDocu1",
        "nationalityOathDocu2",
        "nationalityOathDocu3",
        "nationalityOathDocu4",
      ],
    },
    {
      type: "policiesTitle",
      description: "policiesDescription",
      documents: ["policiesDocu1", "policiesDocu2"],
    },
    {
      type: "ratificationsTitle",
      description: "ratificationsDescription",
      documents: ["ratificationsDocu1", "ratificationsDocu2"],
    },
    {
      type: "manifestationsAndPresenceActsTitle",
      description: "manifestationsAndPresenceActsDescription",
      documents: ["manifestationsAndPresenceActsDocu1"],
    },
    {
      type: "signatureAuthenticationAndDocumentCopyingTitle",
      description: "signatureAuthenticationAndDocumentCopyingDescription",
      documents: ["signatureAuthenticationAndDocumentCopyingDocu1"],
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
