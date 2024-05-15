import { CanActivateFn } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('token') =='true'){
    return false
  }else{ 
    return true;  
}
  
  
 
};