import { RichTranslationValues } from "next-intl";
import { ReactNode } from "react";
import Link from "next/link";

export const richTextLinksDescription: RichTranslationValues = {
  registroCivil: (chunks: ReactNode) => (
    <Link
      target="_blank"
      href="https://sede.mjusticia.gob.es/es/tramites/certificado-nacimiento"
    >
      {chunks}
    </Link>
  ),
  colegioNotarial: (chunks: ReactNode) => (
    <Link
      target="_blank"
      href="https://madrid.notariado.org/portal/legalizacion-y-apostillas"
    >
      {chunks}
    </Link>
  ),
  ministerioAsuntos: (chunks: ReactNode) => (
    <Link
      target="_blank"
      href="https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Legalizaciones/Servicio-de-legalizaciones.aspx"
    >
      {chunks}
    </Link>
  ),
  impuestoSucesiones: (chunks: ReactNode) => (
    <Link
      target="_blank"
      href="https://www.comunidad.madrid/servicios/atencion-contribuyente/impuesto-sucesiones"
    >
      {chunks}
    </Link>
  ),
  patrimoniales: (chunks: ReactNode) => (
    <Link
      target="_blank"
      href="https://www.comunidad.madrid/servicios/atencion-contribuyente/transmisiones-patrimoniales-onerosas"
    >
      {chunks}
    </Link>
  ),
  terrenos: (chunks: ReactNode) => (
    <Link
      target="_blank"
      href="https://agenciatributaria.madrid.es/portales/contribuyente/es/Tramites/Plusvalia-Autoliquidacion/?vgnextoid=6258ef82e1bed010VgnVCM1000000b205a0aRCRD&vgnextchannel=97d608f9be116810VgnVCM1000001d4a900aRCRD"
    >
      {chunks}
    </Link>
  ),
  donaciones: (chunks: ReactNode) => (
    <Link
      target="_blank"
      href="https://www.comunidad.madrid/servicios/atencion-contribuyente/donaciones"
    >
      {chunks}
    </Link>
  ),
  actos: (chunks: ReactNode) => (
    <Link
      target="_blank"
      href="https://www.comunidad.madrid/servicios/atencion-contribuyente/actos-juridicos-documentados"
    >
      {chunks}
    </Link>
  ),
  societarias: (chunks: ReactNode) => (
    <Link
      target="_blank"
      href="https://www.comunidad.madrid/servicios/atencion-contribuyente/operaciones-societarias"
    >
      {chunks}
    </Link>
  ),
};

export const richTextLinksDocuments: RichTranslationValues = {
  empadronamiento: (chunks) => (
    <Link
      target="_blank"
      href="https://sede.madrid.es/portal/site/tramites/menuitem.62876cb64654a55e2dbd7003a8a409a0/?vgnextoid=23ccdd9d6baed010VgnVCM2000000c205a0aRCRD&vgnextchannel=5388a38813180210VgnVCM100000c90da8c0RCRD&vgnextfmt=default"
    >
      {chunks}
    </Link>
  ),
  defuncion: (chunks) => (
    <Link
      target="_blank"
      href="https://sede.mjusticia.gob.es/es/tramites/certificado-defuncion"
    >
      {chunks}
    </Link>
  ),
  matrimonio: (chunks) => (
    <Link
      target="_blank"
      href="https://sede.mjusticia.gob.es/es/tramites/certificado-matrimonio"
    >
      {chunks}
    </Link>
  ),
  voluntades: (chunks) => (
    <Link
      target="_blank"
      href="https://sede.mjusticia.gob.es/es/tramites/certificado-actos-ultima"
    >
      {chunks}
    </Link>
  ),
  fallecimiento: (chunks) => (
    <Link
      target="_blank"
      href="https://www.mjusticia.gob.es/es/ciudadania/tramite?k=solicitud-certificado-contratos-seguros-cobertura-fallecimiento-online"
    >
      {chunks}
    </Link>
  ),
  partidas: (chunks) => (
    <Link
      target="_blank"
      href="https://sede.mjusticia.gob.es/es/tramites/certificado-nacimiento"
    >
      {chunks}
    </Link>
  ),
};
