// test('Não deveria passar!', (done) => {
//   setTimeout(() => {
//     try {
//       expect(10).toBe(5);
//     console.log('Deveria falhar!');
//     done();
//     } catch (error) {
//       done(error);
//     }

const { exportAllDeclaration } = require("@babel/types");
const { doesNotMatch } = require("assert");

    
//   }, 500);
// });

const asyncSum = (a, b, callback) => {
  setTimeout(() => {
    const result = a + b + 1;
    callback(result);
  }, 1000);
};

test('Testando asyncSum, soma 5 mais 10', (done) => {
  asyncSum(5, 10, (result) => {

    try {
      expect(result).toBe(15);
      done();
    } catch (error) {
      done(error);
    }
  });
});
