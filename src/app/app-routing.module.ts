import {
    NgModule
} from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';
import {
    AuthGuardService
} from './services/auth-guard.service';

const routes: Routes = [
    //{ path: '',loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)},
    {
        path: '',
        loadChildren: './login/login.module#LoginPageModule'
    },
    {
        path: 'create-bills',
        loadChildren: './pages/create-bills/create-bills.module#CreateBillsPageModule',
        canActivate: [AuthGuardService]
    },
    {
        path: 'home',
        loadChildren: './pages/home/home.module#HomePageModule',
        canActivate: [AuthGuardService]
    },
    {
        path: 'register',
        loadChildren: './register/register.module#RegisterPageModule'
    },
    {
        path: 'login',
        loadChildren: './login/login.module#LoginPageModule'
    },
    {
        path: 'dashboard',
        loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule',
        canActivate: [AuthGuardService]
    },
   { path: 'create-team', loadChildren: './pages/create-team/create-team.module#CreateTeamPageModule',canActivate: [AuthGuardService] },
   {
   path: 'house-chores',
   loadChildren: './pages/house-chores/house-chores.module#HouseChoresPageModule',
   canActivate: [AuthGuardService]
    },
  { path: 'add-tasks', loadChildren: './pages/add-tasks/add-tasks.module#AddTasksPageModule',canActivate: [AuthGuardService]},
  { path: 'bill-listing', loadChildren: './pages/bill-listing/bill-listing.module#BillListingPageModule',canActivate: [AuthGuardService]},
  { path: 'calender', loadChildren: './pages/calender/calenders.module#CalenderPageModule',canActivate: [AuthGuardService] },
  { path: 'teams', loadChildren: './pages/teams/teams.module#TeamsPageModule' ,canActivate: [AuthGuardService]},
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule',canActivate: [AuthGuardService] },
  { path: 'my-account', loadChildren: './pages/my-account/my-account.module#MyAccountPageModule' ,canActivate: [AuthGuardService] },
  { path: 'add-member-to-team', loadChildren: './pages/add-member-to-team/add-member-to-team.module#AddMemberToTeamPageModule',canActivate: [AuthGuardService]  },
  { path: 'refer-a-friend', loadChildren: './pages/refer-a-friend/refer-a-friend.module#ReferAFriendPageModule' ,canActivate: [AuthGuardService]  },
  { path: 'chatroom', loadChildren: './pages/chatroom/chatroom.module#ChatroomPageModule' ,canActivate: [AuthGuardService]  },
  { path: 'userlist', loadChildren: './pages/userlist/userlist.module#UserlistPageModule' ,canActivate: [AuthGuardService]  },
  { path: 'add-suggestion', loadChildren: './pages/add-suggestion/add-suggestion.module#AddSuggestionPageModule' ,canActivate: [AuthGuardService]},
  { path: 'update-password', loadChildren: './update-password/update-password.module#UpdatePasswordPageModule',canActivate: [AuthGuardService]},
  { path: 'forgot-password', loadChildren: './forgot-password/forgot-password.module#ForgotPasswordPageModule' },
  { path: 'properties-listing', loadChildren: './pages/properties-listing/properties-listing.module#PropertiesListingPageModule' ,canActivate: [AuthGuardService] },
  { path: 'add-property', loadChildren: './pages/add-property/add-property.module#AddPropertyPageModule' ,canActivate: [AuthGuardService] },
  { path: 'public-profile', loadChildren: './pages/public-profile/public-profile.module#PublicProfilePageModule' ,canActivate: [AuthGuardService]},
  { path: 'flatemates', loadChildren: './pages/flatemates/flatemates.module#FlatematesPageModule' ,canActivate: [AuthGuardService]},
  { path: 'add-issues', loadChildren: './pages/add-issues/add-issues.module#AddIssuesPageModule' ,canActivate: [AuthGuardService]},
  { path: 'join-group', loadChildren: './pages/join-group/join-group.module#JoinGroupPageModule' ,canActivate: [AuthGuardService]},
  { path: 'group-application', loadChildren: './pages/group-application/group-application.module#GroupApplicationPageModule' ,canActivate: [AuthGuardService]},
  { path: 'user-application-detail', loadChildren: './pages/user-application-detail/user-application-detail.module#UserApplicationDetailPageModule',canActivate: [AuthGuardService] },
  { path: 'issue-thread', loadChildren: './pages/issue-thread/issue-thread.module#IssueThreadPageModule' ,canActivate: [AuthGuardService]},
  { path: 'policy', loadChildren: './policy/policy.module#PolicyPageModule' },
  { path: 'group-bill-listing', loadChildren: './pages/group-bill-listing/group-bill-listing.module#GroupBillListingPageModule' ,canActivate: [AuthGuardService]},
  { path: 'group-detail-page', loadChildren: './pages/group-detail-page/group-detail-page.module#GroupDetailPagePageModule',canActivate: [AuthGuardService] },
  { path: 'group-summary-page', loadChildren: './pages/group-summary-page/group-summary-page.module#GroupSummaryPagePageModule',canActivate: [AuthGuardService] },
  { path: 'landlord-profile-page', loadChildren: './pages/landlord-profile-page/landlord-profile-page.module#LandlordProfilePagePageModule',canActivate: [AuthGuardService] },
  { path: 'property-detail', loadChildren: './pages/property-detail/property-detail.module#PropertyDetailPageModule' ,canActivate: [AuthGuardService]},
  { path: 'edit-task', loadChildren: './pages/edit-task/edit-task.module#EditTaskPageModule',canActivate: [AuthGuardService] },
  { path: 'reset-password', loadChildren: './pages/reset-password/reset-password.module#ResetPasswordPageModule' }, 
  { path: 'edit-property', loadChildren: './pages/edit-property/edit-property.module#EditPropertyPageModule' },

 { path: 'property-application', loadChildren: './pages/property-application/property-application.module#PropertyApplicationPageModule' },
  { path: 'prop-info', loadChildren: './pages/prop-info/prop-info.module#PropInfoPageModule' },

  { path: '**',redirectTo: 'login' },
  
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}