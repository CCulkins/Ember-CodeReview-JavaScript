import Ember from 'ember';

export function postAwards(params) {
  var postMedals = params[0].get('awards');
  if (postMedals > 5) {
    return '!!!!!';
  } else if (postMedals = 5) {
    return '*****';
  } else if (postMedals = 4) {
    return '****';
  } else if (postMedals = 3) {
    return '***';
  } else if (postMedals = 2) {
    return '**';
  } else if (postMedals = 1){
    return '*';
  } else {
    return '';
  }
}
export default Ember.Helper.helper(postAwards);
