import Container from "../../components/container";
import PostBody from "../../components/post-body";
import Header from "../../components/header";
import Layout from "../../components/layout";
import PostTitle from "../../components/post-title";
import Head from "next/head";

export default function Impressum() {
  const text = `
  <div class="post-content box mark-links">
<h3>Impressum</h3>
<p>Angaben gemäß § 5 TMG:</p>
<p>Marcel Gieron<br>
Johann-Häck-Str. 2<br>
51519 Odenthal</p>
<p>Tel.: 0163 2506388<br>
E-Mail: info [at] marcel.gieron.digital<br>
<h4>Disclaimer</h4>
<p style="font-size: x-small;">Quelle: eRecht24.de – Internetrecht von <a href="http://www.e-recht24.de" target="_blank" rel="nofollow">Rechtsanwalt</a> Sören Siebert</p>
<p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
<p><strong>Haftung für Links</strong></p>
<p>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
<p><strong>Urheberrecht</strong></p>
<p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
<br>
Die Artikel wurden mit Hilfe von ChatGPT erstellt.
</p>

<h4>Rechtswirksamkeit dieses Haftungsausschlusses</h4>
<p>Dieser Haftungsausschluss ist als Teil des Internetangebotes zu betrachten, von dem aus auf diese Seite verwiesen wurde. Sofern Teile oder einzelne Formulierungen dieses Textes der geltenden Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen sollten, bleiben die übrigen Teile des Dokumentes in ihrem Inhalt und ihrer Gültigkeit davon unberührt.</p>

</div>
  `;

  return (
    <Layout>
      <Container>
        <Header />

        <article className="mb-32">
          <Head>
            <title>Impressum</title>
            <meta name="robots" content="noindex, follow" />
          </Head>
          <PostTitle>Impressum</PostTitle>
          <PostBody content={text} />
        </article>
      </Container>
    </Layout>
  );
}
