export const getEmoji = (doc: string) => {
  if (doc.includes("identidad")) return "🆔";
  if (doc.includes("apoderados")) return "👯‍";
  if (doc.includes("nacimiento")) return "👶";
  if (doc.includes("abogados")) return "⚖️";
  if (doc.includes("inmueble") || doc.includes("herencia")) return "🏡";
  if (doc.includes("modelo del poder")) return "📜";
  if (doc.includes("revocar")) return "✋";
  if (doc.includes("localización")) return "📍";
  if (doc.includes("defunción")) return "⚰️";
  if (doc.includes("últimas voluntades")) return "📑";
  if (doc.includes("testamento")) return "📜";
  if (doc.includes("familia")) return "👪";
  if (doc.includes("banco")) return "🏦";
  if (doc.includes("matrimonio")) return "💍";
  if (doc.includes("certificado de matrimonio")) return "💍";
  if (doc.includes("soltería")) return "🆓";
  if (doc.includes("divorcio")) return "💔️";
  if (doc.includes("empadronamiento")) return "🏠";
  if (doc.includes("convenio regulador")) return "📝";
  if (doc.includes("liquidación")) return "💸";
  if (doc.includes("aportar")) return "💍";
  if (doc.includes("título de propiedad")) return "🏡";
  if (doc.includes("préstamo hipotecario")) return "🏦";
  if (doc.includes("arrendamiento")) return "📑";
  if (doc.includes("IBI")) return "💰";
  if (doc.includes("comunidad de propietarios")) return "🏘️";
  if (doc.includes("eficiencia energética")) return "🔋";
  if (doc.includes("gestoría del banco")) return "📞";
  if (doc.includes("precio y forma de pago")) return "💵";
  if (doc.includes("hipoteca") && doc.includes("cancelación")) return "❌🏠";
  if (doc.includes("hipoteca")) return "🏠";
  if (doc.includes("subrogación") || doc.includes("novación")) return "🔄";
  if (doc.includes("donación") && doc.includes("dinero")) return "💸";
  if (doc.includes("donación") && doc.includes("inmuebles")) return "🏠💸";
  if (doc.includes("compraventa") || doc.includes("inmobiliarias"))
    return "🏡💼";
  if (doc.includes("extinción de condominio")) return "🔓";
  if (doc.includes("obra nueva")) return "🏗️";
  if (doc.includes("escritura")) return "📜";
  if (
    doc.includes("certificado de deuda") ||
    doc.includes("certificado corriente de pago")
  )
    return "💳";
  if (doc.includes("valoración del inmueble")) return "💰";
  if (doc.includes("notario") || doc.includes("notarial")) return "✍️";
  if (doc.includes("propiedad")) return "🏡";
  if (doc.includes("parentezco")) return "👨‍👩‍👧‍👦";
  if (doc.includes("acuerdo de pago")) return "💵";
  if (doc.includes("importe") || doc.includes("cantidad a donar")) return "💵";
  if (doc.includes("transmisiones patrimoniales")) return "🏠💼";
  if (doc.includes("donatario")) return "👥";
  if (doc.includes("construcción") && doc.includes("finalizada")) return "🏗️✔️";
  if (doc.includes("obra nueva") || doc.includes("antigua")) return "🏠🔙";
  if (doc.includes("segregación") || doc.includes("finca")) return "🔪🏞️";
  if (doc.includes("cambio de uso")) return "🔄🏠";
  if (doc.includes("constitución de sociedades")) return "🏢💼";
  if (doc.includes("titularidad real")) return "🕵️‍♂️💼";
  if (doc.includes("certificación") || doc.includes("licencia")) return "📑";
  if (doc.includes("proyecto técnico") || doc.includes("arquitecto"))
    return "📐";
  if (doc.includes("capital social")) return "💰";
  if (doc.includes("socios")) return "👥";
  if (doc.includes("autorización")) return "✔️";
  if (doc.includes("notaría")) return "✍️";
  if (doc.includes("mercantil") || doc.includes("registro mercantil"))
    return "📚";
  if (doc.includes("blanqueo de capitales")) return "🛑💵";
  if (doc.includes("constitución") && doc.includes("acciones posteriores"))
    return "🔄🏢";
  if (doc.includes("nacionalidad") && doc.includes("jura")) return "🇪🇸✍️";
  if (doc.includes("pólizas")) return "📜💳";
  if (doc.includes("ratificaciones")) return "✍️🔄";
  if (doc.includes("manifestaciones") && doc.includes("presencia"))
    return "📝👁️";
  if (
    doc.includes("legitimación de firma") ||
    doc.includes("compulsa de documentos")
  )
    return "✍️📑";
  if (doc.includes("resolución") || doc.includes("ministerio")) return "🏛️";
  if (doc.includes("antecedentes penales")) return "🚔";
  if (doc.includes("certificado de nacimiento")) return "🍼";
  if (doc.includes("sociedad")) return "🏢";
  if (doc.includes("poder notarial")) return "📜✍️";
  if (doc.includes("acta de titularidad real")) return "🕵️‍♂️💼";
  if (doc.includes("firma")) return "✍️";
  if (doc.includes("copia de documentos")) return "📄🔁";
  if (doc.includes("visados")) return "🛂";
  return "📄"; // Default emoji
};
