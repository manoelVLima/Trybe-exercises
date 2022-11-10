const chai = require('chai');
const charHttp = require('chai-http');
const sinon = require('sinon');

const app = require('../../src/app');
const connection = require('../../src/db/connection');

const { expect, use } = chai;
use(charHttp);


const peopleList = [
  {
    id: 1,
    firstName: 'Luke',
    lastName: 'Skywalker',
    email: 'luke.skywalker@trybe.com',
    phone: '851 678 4453',
  },
  {
    id: 2,
    firstName: 'Dart',
    lastName: 'Vader',
    email: 'dart.vader@trybe.com',
    phone: '851 678 5665',
  },
];


describe("Testando os ENDPOINTs de people", function () {
  it("testando o cadastro de uma pessoa", async function() {
    sinon.stub(connection,'execute').resolves([{insertId: 42}])

    const response = await chai.request(app).post('/people').send({
      firstName: 'Luke',
      lastName: 'Skywalker',
      email: 'luke.skywalker@trybe.com',
      phone: '851 678 4453',
    })

    expect(response.status).to.be.equal(201);
    expect(response.body).to.be.deep.equal({ message: 'Pessoa cadastrada com sucesso!' })
  });

  it('Testando a listagem de todas as pessoas', async function () {
    sinon.stub(connection, 'execute').resolves([peopleList]);
    const response = await chai
      .request(app)
      .get('/people');

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(peopleList);
  });

  it('Testando a listagem de todas as pessoas', async function () {
    sinon.stub(connection, 'execute').resolves([peopleList]);
    const response = await chai
      .request(app)
      .get('/people');

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(peopleList);
  });

  it('Testando a alteração de uma pessoa com o id 1', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
    const response = await chai
      .request(app)
      .put('/people/1')
      .send(
        {
          firstName: 'Lucão',
          lastName: 'Andarilho dos céus',
          email: 'lucao.andarilho@trybe.com',
          phone: '851 678 4453',
        },
      );

    expect(response.status).to.equal(200);
    expect(response.body).to
      .deep.equal({ message: 'Pessoa de id 1 atualizada com sucesso' });
  });

  it('Testando a exclusão da pessoa com id 1', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
    const response = await chai
      .request(app)
      .delete('/people/1');

    expect(response.status).to.equal(200);
    expect(response.body).to
      .deep.equal({ message: 'Pessoa de id 1 excluída com sucesso' });
  });

  afterEach(sinon.restore);
})


