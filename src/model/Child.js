import Resident from './Resident';

var Child = function(){};

Child.prototype.newChild = function() {
 let newChild = Object.assign({},Resident.newResident());
 newChild.isFoster = false;
 newChild.isHMR = false;
 return newChild;
};
export default Object.create(Child.prototype);