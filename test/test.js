const { ExpressServer } = require("../src/server");
const chai = require("chai");
const { expect, assert } = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
chai.should();


const app = ExpressServer();


describe("The express server", () => {
    let request;
    beforeEach(() => {
      request = chai.request(app);
    });

describe("API basics", () => {

  describe("GET /healthcheck", () => {
    it("ステータスコード200が返ってくること", async () => {
      const res = await request.get("/healthcheck");
      res.should.have.status(200);
    })
  })

  describe("GET /dogs", () => {
    it("登録されている犬種一覧を取得できること", async () => {
        const res = await request.get("/dogs");
        const expected = res.body;
        expect(expected.length).deep.equal(7);
      });
  });
});
});