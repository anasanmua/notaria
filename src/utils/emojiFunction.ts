const emojiMap = [
  { keywords: ["identidad", "id"], emoji: "🆔" },
  { keywords: ["apoderados", "attorneys", "agents"], emoji: "👯‍" },
  { keywords: ["nacimiento", "birth"], emoji: "👶" },
  { keywords: ["abogados", "lawyers"], emoji: "⚖️" },
  { keywords: ["inmueble", "property", "real estate"], emoji: "🏡" },
  { keywords: ["herencia", "inheritance"], emoji: "🏡" },
  {
    keywords: ["modelo del poder", "power model", "power template"],
    emoji: "📜",
  },
  { keywords: ["revocar", "revoke"], emoji: "✋" },
  { keywords: ["localización", "location"], emoji: "📍" },
  { keywords: ["defunción", "death"], emoji: "⚰️" },
  {
    keywords: ["últimas voluntades", "last will", "final wishes"],
    emoji: "📑",
  },
  { keywords: ["testamento", "will", "testament"], emoji: "📜" },
  { keywords: ["familia", "family"], emoji: "👪" },
  { keywords: ["banco", "bank"], emoji: "🏦" },
  { keywords: ["matrimonio", "marriage"], emoji: "💍" },
  {
    keywords: ["certificado de matrimonio", "marriage certificate"],
    emoji: "💍",
  },
  { keywords: ["soltería", "single status", "singleness"], emoji: "🆓" },
  { keywords: ["divorcio", "divorce"], emoji: "💔️" },
  {
    keywords: [
      "empadronamiento",
      "residency registration",
      "census registration",
    ],
    emoji: "🏠",
  },
  {
    keywords: [
      "convenio regulador",
      "regulatory agreement",
      "settlement agreement",
    ],
    emoji: "📝",
  },
  { keywords: ["liquidación", "liquidation", "settlement"], emoji: "💸" },
  { keywords: ["aportar", "contribute"], emoji: "🍥" },
  { keywords: ["título de propiedad", "property title", "deed"], emoji: "🏡" },
  { keywords: ["préstamo hipotecario", "mortgage loan"], emoji: "🏦" },
  { keywords: ["arrendamiento", "lease", "rental"], emoji: "📑" },
  { keywords: ["IBI", "property tax", "real estate tax"], emoji: "💰" },
  {
    keywords: [
      "comunidad de propietarios",
      "homeowners association",
      "community of owners",
    ],
    emoji: "🏘️",
  },
  { keywords: ["eficiencia energética", "energy efficiency"], emoji: "🔋" },
  {
    keywords: ["gestoría del banco", "bank manager", "bank agent"],
    emoji: "📞",
  },
  {
    keywords: [
      "precio y forma de pago",
      "price and payment method",
      "payment terms",
    ],
    emoji: "💵",
  },
  {
    keywords: ["hipoteca cancelación", "mortgage cancellation"],
    emoji: "❌🏠",
  },
  { keywords: ["hipoteca", "mortgage"], emoji: "🏠" },
  { keywords: ["subrogación", "subrogation"], emoji: "🔄" },
  { keywords: ["novación", "novation"], emoji: "🔄" },
  { keywords: ["donación dinero", "money donation"], emoji: "💸" },
  {
    keywords: [
      "donación inmuebles",
      "property donation",
      "real estate donation",
    ],
    emoji: "🏠💸",
  },
  { keywords: ["compraventa", "sale", "purchase"], emoji: "🏡💼" },
  { keywords: ["inmobiliarias", "real estate agencies"], emoji: "🏡💼" },
  {
    keywords: ["extinción de condominio", "co-ownership termination"],
    emoji: "🔓",
  },
  { keywords: ["obra nueva", "new construction"], emoji: "🏗️" },
  { keywords: ["escritura", "deed", "notarial act"], emoji: "📜" },
  { keywords: ["certificado de deuda", "debt certificate"], emoji: "💳" },
  {
    keywords: [
      "certificado corriente de pago",
      "payment up-to-date certificate",
    ],
    emoji: "💳",
  },
  { keywords: ["valoración del inmueble", "property valuation"], emoji: "💰" },
  { keywords: ["notario", "notary"], emoji: "✍️" },
  { keywords: ["notarial", "notarial"], emoji: "✍️" },
  { keywords: ["propiedad", "ownership", "property"], emoji: "🏡" },
  { keywords: ["parentezco", "kinship", "relationship"], emoji: "👨‍👩‍👧‍👦" },
  { keywords: ["acuerdo de pago", "payment agreement"], emoji: "💵" },
  { keywords: ["importe", "amount"], emoji: "💵" },
  { keywords: ["cantidad a donar", "amount to donate"], emoji: "💵" },
  {
    keywords: [
      "transmisiones patrimoniales",
      "property transfers",
      "asset transfers",
    ],
    emoji: "🏠💼",
  },
  { keywords: ["donatario", "donee", "recipient"], emoji: "👥" },
  {
    keywords: ["construcción finalizada", "construction completed"],
    emoji: "🏗️✔️",
  },
  { keywords: ["obra nueva antigua", "old new construction"], emoji: "🏠🔙" },
  { keywords: ["segregación", "segregation", "land split"], emoji: "🔪🏞️" },
  { keywords: ["finca", "plot", "estate"], emoji: "🔪🏞️" },
  { keywords: ["cambio de uso", "change of use"], emoji: "🔄🏠" },
  {
    keywords: [
      "constitución de sociedades",
      "company formation",
      "business incorporation",
    ],
    emoji: "🏢💼",
  },
  {
    keywords: ["titularidad real", "real ownership", "beneficial ownership"],
    emoji: "🕵️‍♂️💼",
  },
  { keywords: ["certificación", "certification"], emoji: "📑" },
  { keywords: ["licencia", "license", "permit"], emoji: "📑" },
  {
    keywords: ["proyecto técnico", "technical project", "technical plan"],
    emoji: "📐",
  },
  { keywords: ["arquitecto", "architect"], emoji: "📐" },
  {
    keywords: ["capital social", "share capital", "corporate capital"],
    emoji: "💰",
  },
  { keywords: ["socios", "partners", "shareholders"], emoji: "👥" },
  { keywords: ["autorización", "authorization", "permission"], emoji: "✔️" },
  { keywords: ["notaría", "notary office"], emoji: "✍️" },
  { keywords: ["mercantil", "commercial", "mercantile"], emoji: "📚" },
  {
    keywords: [
      "registro mercantil",
      "commercial registry",
      "mercantile registry",
    ],
    emoji: "📚",
  },
  { keywords: ["blanqueo de capitales", "money laundering"], emoji: "🛑💵" },
  {
    keywords: [
      "constitución acciones posteriores",
      "subsequent share formation",
    ],
    emoji: "🔄🏢",
  },
  { keywords: ["nacionalidad jura", "nationality oath"], emoji: "🇪🇸✍️" },
  { keywords: ["pólizas", "policies", "insurance documents"], emoji: "📜💳" },
  { keywords: ["ratificaciones", "ratifications"], emoji: "✍️🔄" },
  {
    keywords: [
      "manifestaciones presencia",
      "statements in person",
      "in-person declarations",
    ],
    emoji: "📝👁️",
  },
  {
    keywords: [
      "legitimación de firma",
      "signature legalization",
      "signature authentication",
    ],
    emoji: "✍️📑",
  },
  {
    keywords: [
      "compulsa de documentos",
      "document certification",
      "certified copy",
    ],
    emoji: "✍️📑",
  },
  { keywords: ["resolución", "resolution", "ruling"], emoji: "🏛️" },
  { keywords: ["ministerio", "ministry", "government office"], emoji: "🏛️" },
  { keywords: ["antecedentes penales", "criminal record"], emoji: "🚔" },
  { keywords: ["certificado de nacimiento", "birth certificate"], emoji: "🍼" },
  { keywords: ["sociedad", "company", "corporation"], emoji: "🏢" },
  { keywords: ["poder notarial", "power of attorney"], emoji: "📜✍️" },
  {
    keywords: ["acta de titularidad real", "beneficial ownership act"],
    emoji: "🕵️‍♂️💼",
  },
  { keywords: ["firma", "signature"], emoji: "✍️" },
  {
    keywords: ["copia de documentos", "copy of documents", "document copy"],
    emoji: "📄🔁",
  },
  { keywords: ["visados", "visas"], emoji: "🛂" },
];

export const getEmoji = (doc: string): string => {
  console.log(doc, "doc");
  // Check complex cases first (like pairs of terms)
  const lowerDoc = doc.toLowerCase();

  if (
    (lowerDoc.includes("hipoteca") && lowerDoc.includes("cancelación")) ||
    (lowerDoc.includes("mortgage") && lowerDoc.includes("cancellation"))
  )
    return "❌🏠";

  if (
    (lowerDoc.includes("donación") && lowerDoc.includes("dinero")) ||
    (lowerDoc.includes("donation") && lowerDoc.includes("money"))
  )
    return "💸";

  if (
    (lowerDoc.includes("donación") && lowerDoc.includes("inmuebles")) ||
    (lowerDoc.includes("donation") && lowerDoc.includes("property"))
  )
    return "🏠💸";

  if (
    (lowerDoc.includes("obra nueva") && lowerDoc.includes("antigua")) ||
    (lowerDoc.includes("new construction") && lowerDoc.includes("old"))
  )
    return "🏠🔙";

  if (
    (lowerDoc.includes("construcción") && lowerDoc.includes("finalizada")) ||
    (lowerDoc.includes("construction") && lowerDoc.includes("completed"))
  )
    return "🏗️✔️";

  if (
    (lowerDoc.includes("manifestaciones") && lowerDoc.includes("presencia")) ||
    (lowerDoc.includes("statements") && lowerDoc.includes("presence")) ||
    (lowerDoc.includes("in-person") && lowerDoc.includes("declaration"))
  )
    return "📝👁️";

  if (
    (lowerDoc.includes("constitución") &&
      lowerDoc.includes("acciones posteriores")) ||
    (lowerDoc.includes("formation") &&
      lowerDoc.includes("subsequent shares")) ||
    (lowerDoc.includes("incorporation") && lowerDoc.includes("post-formation"))
  )
    return "🔄🏢";

  if (
    (lowerDoc.includes("nacionalidad") && lowerDoc.includes("jura")) ||
    (lowerDoc.includes("nationality") && lowerDoc.includes("oath"))
  )
    return "🇪🇸✍️";

  for (const { keywords, emoji } of emojiMap) {
    if (keywords.some((k) => lowerDoc.includes(k))) {
      return emoji;
    }
  }

  return "📄";
};
