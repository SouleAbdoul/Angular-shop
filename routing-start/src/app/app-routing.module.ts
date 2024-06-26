
import { RouterModule, Routes } from "@angular/router";
import {NgModule} from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { ServersComponent } from "./servers/servers.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGuardService } from "./aut.guard.service";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ServerResolver } from "./servers/server/server.resolver.service";


const appRoutes:Routes = [
  {path:'',component:HomeComponent}, // home route takes an empty path
  {path:'users',component:UsersComponent,children:
    [
      {path:':id/:name',component:UserComponent},
    ]
  },
  {path:
    'servers'
    ,canActivateChild:[AuthGuardService],
     component:ServersComponent,children:
      [
        {path:':id/edit',component:EditServerComponent, canDeactivate:[CanDeactivateGuard]},
        {path:':id',component:ServerComponent,resolve:{server:ServerResolver}}

      ]
    },
    // {path: 'not-found',component:PageNotFoundComponent},
    {path: 'not-found',component:ErrorPageComponent,data:{message:'Page not Found!'}},
    {path: '**',redirectTo: '/not-found',pathMatch:'full'}
  ];


@NgModule({
    imports:[
    RouterModule.forRoot(appRoutes,{useHash:true})
],
exports:[RouterModule]
})

export class appRoutingModule{

}