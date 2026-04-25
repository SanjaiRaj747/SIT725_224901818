const { expect } = require('chai');
const request = require('request');
const { addNumbers } = require('../server');

describe('SIT725 Task 6.2C - Calculator Testing Suite', function() {
    
    // Logic Tests (Always work because they don't need the server)
    describe('addNumbers Logic (Calculation Function)', function() {
        it('should correctly add two positive integers (5 + 10 = 15)', function() {
            expect(addNumbers(5, 10)).to.equal(15);
        });

        it('should return 0 when adding two zeros', function() {
            expect(addNumbers(0, 0)).to.equal(0);
        });

        it('should return null if non-numeric strings are provided', function() {
            expect(addNumbers("hello", "world")).to.be.null;
        });
    });

    // API Tests (Require Terminal 1 to be running 'npm start')
    describe('REST API (/add endpoint)', function() {
        const baseUrl = 'http://localhost:3000/add';

        it('should return status 200 and data 50 for /add?a=20&b=30', function(done) {
            request(`${baseUrl}?a=20&b=30`, function(error, response, body) {
                // Check if server is actually up
                if (error) return done(new Error("Server is not running! Start it with 'npm start' in another terminal."));
                
                const jsonBody = JSON.parse(body);
                expect(response.statusCode).to.equal(200);
                expect(jsonBody.data).to.equal(50);
                done();
            });
        });

        it('should return status 400 when parameters are missing', function(done) {
            request(`${baseUrl}?a=5`, function(error, response, body) {
                if (error) return done(new Error("Server is not running!"));
                
                const jsonBody = JSON.parse(body);
                expect(response.statusCode).to.equal(400);
                expect(jsonBody.message).to.include("Invalid input");
                done();
            });
        });
    });
});