export class AuthService{
   loggedIn:boolean = false; 

   isAuthenticated(){
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(this.loggedIn);
        },800);
      }
    );
    return promise;
   }
   login():void{
    this.loggedIn = true;
   }

   logout():void{
    this.loggedIn = false;
   }
}