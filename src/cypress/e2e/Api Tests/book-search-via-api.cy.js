describe("API Tests via search and authors endpoints", () => {
  let apiUrlSearch, apiUrlAuthor;

  before(() => {
    cy.fixture("endpoints.json").then((data) => {
      apiUrlSearch = data.apiUrlSearch;
      apiUrlAuthor = data.apiUrlAuthor;
    });
  });

  const parameters = [
    {
      title: "Harry Potter",
      author: "Rowling",
      authorWebsite: "http://www.jkrowling.com/",
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      authorWebsite: "http://www.tolkiensociety.org/index.html",
    },
    {
      title: "The Da Vinci Code",
      author: "Dan Brown",
      authorWebsite: "http://www.danbrown.com/",
    },
  ];

  parameters.forEach((param)=>{
  it("Verifying book and author information via search and authors API", () => {
    cy.request({
      method: "GET",
      url: apiUrlSearch,
      qs: {
        title: param.title,
        author: param.author,
      },
      headers: {
        "content-type": "application/json",
      },
    }).then((searchResponse) => {
      expect(searchResponse.status).to.eq(200);
      const firstResult = searchResponse.body.docs[0];
      const authorKey = firstResult.author_key[0];
      expect(authorKey).to.exist;

      cy.request({
        method: "GET",
        url: `${apiUrlAuthor}/${authorKey}.json`,
        headers: {
          "content-type": "application/json",
        },
      }).then((authorResponse) => {
        expect(authorResponse.status).to.eq(200);
        const authorData = authorResponse.body;
        const authorWebsite = authorData.links[0].url;
        expect(authorWebsite).to.eq(param.authorWebsite);
      });
    });
  });
});
})