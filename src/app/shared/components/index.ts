// Import components
import { TitleH1Component  } from "./titles/title-h1/title-h1.component";
import {CardUserComponent} from './cards/card-user/card-user.component'
import{CarouselComponent} from './carousel/carousel.component';
import { CardLoaderComponent } from "./loaders/card-loader/card-loader.component";
import {LoginComponent} from './forms/login/login.component';
import {RegisterComponent} from './forms/register/register.component';

export const components: any[] = [
    TitleH1Component,
    CardUserComponent,
    CarouselComponent,
    CardLoaderComponent,
    LoginComponent,
    RegisterComponent
];

// export all components
export * from "./titles/title-h1/title-h1.component";
export * from "./cards/card-user/card-user.component";
export * from './carousel/carousel.component';
export * from './forms/login/login.component';
export * from './forms/register/register.component';