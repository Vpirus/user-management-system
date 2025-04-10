import { AccountService } from '../_services';

export function appInitializer(accountService: AccountService) {
    return () => new Promise(resolve => {
        // attemp to refrest token on app start up to auto authenticate
        accountService.refreshToken() 
            .subscribe()
            .add(resolve);
    });
}