export async function getPostBySlug(slug: string, fields: string[] = []) {
  const apiUrl =
    "https://verzeichnis.digital/api/get.php?type=one&table=solar&slug=" +
    slug +
    "&website=" +
    process.env.WEBSITE;

  return await getDataFromAPI(apiUrl)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Fehler beim Abrufen der Daten:", error);
      return [];
    });
}

export async function search(search: string) {
  const apiUrl =
    "https://verzeichnis.digital/api/get.php?type=search&table=solar&search=" +
    search +
    "&website=" +
    process.env.WEBSITE;

  return await getDataFromAPI(apiUrl)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Fehler beim Abrufen der Daten:", error);
      return [];
    });
}

export async function getAllPosts() {
  const apiUrl =
    "https://verzeichnis.digital/api/get.php?type=list&table=solar&website=" +
    process.env.WEBSITE;

  return await getDataFromAPI(apiUrl)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Fehler beim Abrufen der Daten:", error);
      return [];
    });
}

async function getDataFromAPI(url: string) {
  return await fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Fehler beim Abrufen der Daten: " + response.status);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Fehler beim Abrufen der Daten:", error);
    });
}
