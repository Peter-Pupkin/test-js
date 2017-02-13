import Ember from 'ember';

export function inList([elem, list]/*, hash*/) {
 list = Ember.A(list);
  return list.contains(elem);
}

export default Ember.Helper.helper(inList);
