import Ember from 'ember';

export function or([a,b]/*, hash*/) {
  return !!(a||b);
}

export default Ember.Helper.helper(or);
