import Container from "../../components/container";
import PostBody from "../../components/post-body";
import Header from "../../components/header";
import Layout from "../../components/layout";
import PostTitle from "../../components/post-title";
import Head from "next/head";

export default function Datenschutz() {
  const text = `
  <div class="entry-content">
<h3>Datenschutz</h3>
<p>Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.</p>
<p>Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>
<p>Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.</p>
<p><b>Google Analytics</b></p>
<p>Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. (“Google”). Google Analytics verwendet sog. “Cookies”, Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Im Falle der Aktivierung der IP-Anonymisierung auf dieser Webseite, wird Ihre IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt. Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem sie das unter dem folgenden Link verfügbare <a href="http://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="nofollow">Browser-Plugin</a> herunterladen und installieren.</p>
<p>Angesichts der Diskussion um den Einsatz von Analysetools mit vollständigen IP-Adressen möchten wir darauf hinweisen, dass diese Website Google Analytics mit der Erweiterung “_anonymizeIp()” verwendet und daher IP-Adressen nur gekürzt weiterverarbeitet werden, um eine direkte Personenbeziehbarkeit auszuschließen.</p>
</div>
  `;

  return (
    <Layout>
      <Container>
        <Header />

        <article className="mb-32">
          <Head>
            <title>Datenschutz</title>
            <meta name="robots" content="noindex, follow" />
          </Head>
          <PostTitle>Datenschutz</PostTitle>
          <PostBody content={text} />
        </article>
      </Container>
    </Layout>
  );
}
