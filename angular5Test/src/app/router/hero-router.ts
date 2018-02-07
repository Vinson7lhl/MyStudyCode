//Routes就是一种数据的类型的结构，如string，number一样，所以导出的数组必须满足Routes的结构才行
import { Routes } from '@angular/router';
import { HerosComponent,childRouter } from '../components/heros/heros.component';
import { ProtectedComponent } from '../components/protected/protected.component';
import { AuthService } from "../service/auth.service";
import { LoggedInGuard } from "../service/loggedIn.guard.service";

/**
 * prefix：其实是阶段匹配，即有子路由，如果path=abc, 而路径是abc/xxx,是可以重定向的，而full则不可以，原因是full要求path必须完全一样才行
 * full:必须是完整匹配path才能够重定向，如下例子：path必须且只能是“”才能重定向
 */
export const HEROROUTER:Routes=[
  {
    path: '',
    pathMatch:'full',
    redirectTo:'/heros'
  },
  {
    path: 'heros',
    component: HerosComponent,
    children:childRouter
  },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate:[LoggedInGuard]
  }
];