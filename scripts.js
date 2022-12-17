/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/**
 * Search function
 */

const searchInput = document.querySelector("#searchbar > input");
const searchButton = document.querySelector("#searchbar > button");

const lookup = {
  "/": "/",
  deepl: "https://deepl.com/",
  reddit: "https://reddit.com/",
  maps: "https://maps.google.com/",
};
const engine = "google";
const engineUrls = {
  deepl: "https://www.deepl.com/translator#-/-/",
  duckduckgo: "https://duckduckgo.com/?q=",
  ecosia: "https://www.ecosia.org/search?q=",
  google: "https://www.google.com/search?q=",
  startpage: "https://www.startpage.com/search?q=",
  youtube: "https://www.youtube.com/results?q=",
};

const isWebUrl = (value) => {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
};

const getTargetUrl = (value) => {
  if (isWebUrl(value)) return value;
  if (lookup[value]) return lookup[value];
  return engineUrls[engine] + value;
};

const search = () => {
  const value = searchInput.value;
  const targetUrl = getTargetUrl(value);
  window.open(targetUrl, "_self");
};

searchInput.onkeyup = (event) => event.key === "Enter" && search();
searchButton.onclick = search;

/**
 * inject bookmarks into html
 */

const bookmarks = [
  {
    id: "AzVAP20K6ddMsuNk",
    label: "School",
    bookmarks: [
      {
        id: "1OTc9VL3COSbDCNv",
        label: "INNA",
        url: "https://nam.inna.is/Components/Students/Students.html",
      },
      {
        id: "BeFWwLqVKKB5Krti",
        label: "Notion",
        url: "https://www.notion.so/The-Dashboard-6d01acbb21124d2c87b72fc0d4f4f28e",
      },
      {
        id: "90I73U3mOP0UIivF",
        label: "Docs",
        url: "https://docs.google.com/document/u/0/?tgif=d",
      },
      {
        id: "yVWjfZEVb4PjIuen",
        label: "Drive",
        url: "https://drive.google.com/drive/my-drive?ths=true",
      },
    ],
  },
  {
    id: "uR1lW0rMVmR18JpW",
    label: "Entertainment",
    bookmarks: [
      {
        id: "7cof1BwxKNhGSJpN",
        label: "Youtube",
        url: "https://www.youtube.com/",
      },
      {
        id: "eFmLhtseM25kEANx",
        label: "Reddit",
        url: "https://www.reddit.com/",
      },
      {
        id: "aZIRQLa0hp0dAN8a",
        label: "Twitter",
        url: "https://www.twitter.com",
      },
      {
        id: "CO9jxYQkftILVTYd",
        label: "Japanese Cartoon",
        url: "https://9anime.to/home",
      },
    ],
  },
  {
    id: "Z20WyvPNzO45wOqu",
    label: "Work",
    bookmarks: [
      {
        id: "OgW33YozNH6tAa6W",
        label: "LinkedIn",
        url: "https://www.linkedin.com/",
      },
      {
        id: "37t1mjuPhzK4NOMb",
        label: "LeetCode",
        url: "https://leetcode.com/",
      },
      {
        id: "yRjHtYvabQC1JuyY",
        label: "Exercism",
        url: "https://exercism.org/tracks",
      },
      {
        id: "XbfHeQbzQbOnx5l2",
        label: "freeCodeCamp",
        url: "https://www.freecodecamp.org/learn",
      },
    ],
  },
  {
    id: "q6iujwudf4EcfRAT",
    label: "Personal",
    bookmarks: [
      {
        id: "wgHL1vERfYgYBlmV",
        label: "Github",
        url: "https://github.com/Dev-KPV",
      },
      {
        id: "gQV61lYcFabv8bw6",
        label: "Bank",
        url: "https://www.landsbankinn.is/einstaklingar?gclid=CjwKCAiA-dCcBhBQEiwAeWidtVMgWv6MtMhMx1WFrO0n18hNLkmfHi1ucGAfQEjDIEai9Finswf0eRoC3HMQAvD_BwE",
      },
      {
        id: "hgtvtHFMBkffKOkT",
        label: "Dev-page",
        url: "https://dev.to/karlp",
      },
      {
        id: "O2ZaHiwByWNnotYc",
        label: "Links-Page",
        url: "https://www.template.com",
      },
    ],
  },
];

const createGroupContainer = () => {
  const container = document.createElement("div");
  container.className = "bookmark-group";
  return container;
};

const createGroupTitle = (title) => {
  const h2 = document.createElement("h2");
  h2.innerHTML = title;
  return h2;
};

const createBookmark = ({ label, url }) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = url;
  a.innerHTML = label;
  li.append(a);
  return li;
};

const createBookmarkList = (bookmarks) => {
  const ul = document.createElement("ul");
  bookmarks.map(createBookmark).forEach((li) => ul.append(li));
  return ul;
};

const createGroup = ({ label, bookmarks }) => {
  const container = createGroupContainer();
  const title = createGroupTitle(label);
  const bookmarkList = createBookmarkList(bookmarks);
  container.append(title);
  container.append(bookmarkList);
  return container;
};

const injectBookmarks = () => {
  const bookmarksContainer = document.getElementById("bookmarks");
  bookmarksContainer.append();
  bookmarks
    .map(createGroup)
    .forEach((group) => bookmarksContainer.append(group));
};

injectBookmarks();
