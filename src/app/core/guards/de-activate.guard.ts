import { CanDeactivateFn } from '@angular/router';

export const deActivateGuard: CanDeactivateFn<unknown> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  return true;
};
