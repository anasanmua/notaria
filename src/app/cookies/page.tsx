"use client";
import { Col, Row, Typography, Divider } from "antd";
import BasicSection from "@/components/BasicSection/BasicSection";

const Cookies = () => {
  return (
    <>
      <BasicSection backgroundColor={"cream1"}>
        <Row justify="center">
          <Col xs={24} style={{ textAlign: "center" }}>
            <Typography.Title>Cookies</Typography.Title>
          </Col>
          <Col xs={12}>
            <p>
              GRUPO ÁTICO34, con CIF B87186177, dirección Paseo de la
              Castellana, 95, 15º, 28046 (Madrid) e inscrita en el Registro
              Mercantil de Madrid, tomo 33102, folio 50, sección 8, hoja
              M-595767, inscripción 1, no puede asumir ninguna responsabilidad
              derivada del uso incorrecto, inapropiado o ilícito de la
              información aparecida en las páginas de Internet de
              www.protecciondatos-lopd.com.
            </p>
            <p>
              Con los límites establecidos en la ley,
              www.protecciondatos-lopd.com no asume ninguna responsabilidad
              derivada de la falta de veracidad, integridad, actualización y
              precisión de los datos o informaciones que se contienen en sus
              páginas de Internet.
            </p>
            <p>
              Los contenidos e información no vinculan a
              www.protecciondatos-lopd.com ni constituyen opiniones, consejos o
              asesoramiento legal de ningún tipo pues se trata meramente de un
              servicio ofrecido con carácter informativo y divulgativo.
            </p>
            <p>
              Las páginas de Internet de www.protecciondatos-lopd.com pueden
              contener enlaces (links) a otras páginas de terceras partes que
              www.protecciondatos-lopd.com no puede controlar. Por lo tanto,
              www.protecciondatos-lopd.com no puede asumir responsabilidades por
              el contenido que pueda aparecer en páginas de terceros.
            </p>
            <p>
              Los textos, imágenes, sonidos, animaciones, software y el resto de
              contenidos incluidos en este website son propiedad exclusiva de
              www.protecciondatos-lopd.com o sus licenciantes. Cualquier acto de
              transmisión, distribución, cesión, reproducción, almacenamiento o
              comunicación pública total o parcial, debe contar con el
              consentimiento expreso de www.protecciondatos-lopd.com.
            </p>
            <p>
              Asimismo, para acceder a algunos de los servicios que
              www.protecciondatos-lopd.com ofrece a través del website deberá
              proporcionar algunos datos de carácter personal. En cumplimiento
              de lo establecido en el Reglamento (UE) 2016/679 del Parlamento
              Europeo y del Consejo, de 27 de abril de 2016, relativo a la
              protección de las personas físicas en lo que respecta al
              tratamiento de datos personales y a la libre circulación de estos
              datos le informamos que, mediante la cumplimentación de los
              presentes formularios, sus datos personales quedarán incorporados
              y serán tratados en los ficheros de GRUPO ÁTICO34 con el fin de
              poderle prestar y ofrecer nuestros servicios así como para
              informarle de las mejoras del sitio Web. Asimismo, le informamos
              de la posibilidad de que ejerza los derechos de acceso,
              rectificación, cancelación y oposición de sus datos de carácter
              personal, manera gratuita mediante email a lopd@atico34.com o en
              la dirección Paseo de la Castellana, 95, 15º, 28046 (Madrid).
            </p>
          </Col>
        </Row>
      </BasicSection>
      <Divider style={{ margin: 0, backgroundColor: "#bfbfbf" }} />
    </>
  );
};

export default Cookies;
