/* eslint-disable */
//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// let mongoose = require("mongoose");
// let Book = require('../app/models/book');

//Require the dev-dependencies
let chai = require('chai');
var expect = require("chai").expect;
let chaiHttp = require('chai-http');
let app = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe("login test", function() {
  // A "canary" test is one we set up to always pass
  // This can help us ensure our testing suite is set up correctly before writing real tests
  it("should pass this login test", function() {
    
    expect(true).to.be.true;
  });

  it('it should signin', (done) => {

  // Send some Form Data
  chai.request(app)
      .post('/signin')
      .type('form')
      .send({
        "username": "guest",
        "password": "guest"
    }).end((err, res) => {
        res.should.have.status(200);
        // res.body.should.be.a('array');
        // res.body.length.should.be.eql(0);
        done();
  });
});

  // it("should allow login successfull", function() {
  //   expect(multiply(2, 4)).to.equal(8);
  // });

  // // Test case.  Notice the `done` param
  // it('Should make an async call', function(done){

  //   // Make an async call, with a callback function
  //   async_call(function(){

  //       // Do whatever you need (test some values)
  //       // Then call done
  //       done();
  //   });
 
});


