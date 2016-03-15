import FizzBuzz from './fizzbuzz';

(function() {
  'use strict';

  describe('Cata', function(){
    describe('FizzBuzz', function(){
      it('should return fizz for multiples of three', function(){
        var returned = FizzBuzz.getReturned(3);
        expect(returned).to.equal('fizz');
      });
     it('should return fizz for multiples of five', function(){
      var returned = FizzBuzz.getReturned(20);
      expect(returned).to.equal('buzz');
      });
      it('should return fizz for multiples of three and five', function(){
        var returned = FizzBuzz.getReturned(15);
        expect(returned).to.equal('fizzbuzz');
      });
      it('should return number for non-multiples of three and five', function(){
        var returned = FizzBuzz.getReturned(4);
        expect(returned).to.equal(4);
      });
    });

  })


  
}());