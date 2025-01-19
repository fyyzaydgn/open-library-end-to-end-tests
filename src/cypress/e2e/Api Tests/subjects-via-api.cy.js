describe("API Tests via subjects and works endpoints", () => {
  let apiUrlSubjects;
  let apiBaseUrl;

  before(() => {
    cy.fixture("endpoints.json").then((data) => {
      apiUrlSubjects = data.apiUrlSubjects;
      apiBaseUrl = data.apiBaseUrl;
    });
  });

  const parameters = [
    { 
      subject: "programming",
      bookTitle: "Reconfigurable Processor Array A Bit Sliced Parallel Computer (USA)"
    },
    { 
      subject: "science_fiction",
      bookTitle: "Alice's Adventures in Wonderland"
    },
    { 
      subject: "love",
      bookTitle: "Wuthering Heights"
    },
  ];

  parameters.forEach(({ subject, bookTitle }) => {
    it(`Verifying books related to the subject: ${subject} via subjects and works API`, () => {
      cy.request({
        method: "GET",
        url: `${apiUrlSubjects}/${subject}.json`,
        headers: {
          "content-type": "application/json",
        },
      }).then((subjectsResponse) => {
        expect(subjectsResponse.status).to.eq(200);
        expect(subjectsResponse.body.work_count).to.be.greaterThan(0);

        const firstResult = subjectsResponse.body.works[0];
        const work_id = firstResult.key;
        expect(work_id).to.exist;

        cy.request({
          method: "GET",
          url: `${apiBaseUrl}${work_id}.json`,
          headers: {
            "content-type": "application/json",
          },
        }).then((workResponse) => {
          expect(workResponse.status).to.eq(200);
          const workData = workResponse.body;
          const workTitle = workData.title;
          expect(workTitle).to.eq(bookTitle);
        });
      });
    });
  });
});
