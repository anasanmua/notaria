const emojiMap: Record<string, string> = {
  "identidad": "🆔",
  "apoderados": "👯‍",
  "nacimiento": "👶",
  "abogados": "⚖️",
  "inmueble": "🏡",
  "herencia": "🏡",
  "modelo del poder": "📜",
  "revocar": "✋",
  "localización": "📍",
  "defunción": "⚰️",
  "últimas voluntades": "📑",
  "testamento": "📜",
  "familia": "👪",
  "banco": "🏦",
  "matrimonio": "💍",
  "certificado de matrimonio": "💍",
  "soltería": "🆓",
  "divorcio": "💔️",
  "empadronamiento": "🏠",
  "convenio regulador": "📝",
  "liquidación": "💸",
  "aportar": "💍",
  "título de propiedad": "🏡",
  "préstamo hipotecario": "🏦",
  "arrendamiento": "📑",
  "IBI": "💰",
  "comunidad de propietarios": "🏘️",
  "eficiencia energética": "🔋",
  "gestoría del banco": "📞",
  "precio y forma de pago": "💵",
  "hipoteca cancelación": "❌🏠", // special case
  "hipoteca": "🏠",
  "subrogación": "🔄",
  "novación": "🔄",
  "donación dinero": "💸",        // special case
  "donación inmuebles": "🏠💸",   // special case
  "compraventa": "🏡💼",
  "inmobiliarias": "🏡💼",
  "extinción de condominio": "🔓",
  "obra nueva": "🏗️",
  "escritura": "📜",
  "certificado de deuda": "💳",
  "certificado corriente de pago": "💳",
  "valoración del inmueble": "💰",
  "notario": "✍️",
  "notarial": "✍️",
  "propiedad": "🏡",
  "parentezco": "👨‍👩‍👧‍👦",
  "acuerdo de pago": "💵",
  "importe": "💵",
  "cantidad a donar": "💵",
  "transmisiones patrimoniales": "🏠💼",
  "donatario": "👥",
  "construcción finalizada": "🏗️✔️",
  "obra nueva antigua": "🏠🔙", // grouped case
  "segregación": "🔪🏞️",
  "finca": "🔪🏞️",
  "cambio de uso": "🔄🏠",
  "constitución de sociedades": "🏢💼",
  "titularidad real": "🕵️‍♂️💼",
  "certificación": "📑",
  "licencia": "📑",
  "proyecto técnico": "📐",
  "arquitecto": "📐",
  "capital social": "💰",
  "socios": "👥",
  "autorización": "✔️",
  "notaría": "✍️",
  "mercantil": "📚",
  "registro mercantil": "📚",
  "blanqueo de capitales": "🛑💵",
  "constitución acciones posteriores": "🔄🏢",
  "nacionalidad jura": "🇪🇸✍️",
  "pólizas": "📜💳",
  "ratificaciones": "✍️🔄",
  "manifestaciones presencia": "📝👁️",
  "legitimación de firma": "✍️📑",
  "compulsa de documentos": "✍️📑",
  "resolución": "🏛️",
  "ministerio": "🏛️",
  "antecedentes penales": "🚔",
  "certificado de nacimiento": "🍼",
  "sociedad": "🏢",
  "poder notarial": "📜✍️",
  "acta de titularidad real": "🕵️‍♂️💼",
  "firma": "✍️",
  "copia de documentos": "📄🔁",
  "visados": "🛂",
};

export const getEmoji = (doc: string): string => {
  const lowerDoc = doc.toLowerCase();

  // Check complex cases first (like pairs of terms)
  if (lowerDoc.includes("hipoteca") && lowerDoc.includes("cancelación"))
    return "❌🏠";
  if (lowerDoc.includes("donación") && lowerDoc.includes("dinero"))
    return "💸";
  if (lowerDoc.includes("donación") && lowerDoc.includes("inmuebles"))
    return "🏠💸";
  if (lowerDoc.includes("obra nueva") && lowerDoc.includes("antigua"))
    return "🏠🔙";
  if (lowerDoc.includes("construcción") && lowerDoc.includes("finalizada"))
    return "🏗️✔️";
  if (lowerDoc.includes("manifestaciones") && lowerDoc.includes("presencia"))
    return "📝👁️";
  if (lowerDoc.includes("constitución") && lowerDoc.includes("acciones posteriores"))
    return "🔄🏢";
  if (lowerDoc.includes("nacionalidad") && lowerDoc.includes("jura"))
    return "🇪🇸✍️";

  // Then check all other keyword matches
  for (const [keyword, emoji] of Object.entries(emojiMap)) {
    if (lowerDoc.includes(keyword.toLowerCase())) {
      return emoji;
    }
  }

  return "📄";
};
