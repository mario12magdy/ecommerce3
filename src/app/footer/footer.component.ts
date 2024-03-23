import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {
 imgs:string[]=['../../assets/images/visa-1.svg','../../assets/images/american-express.svg','../../assets/images/master.svg','../../assets/images/vodafone-icon.svg']
 imgs2:string[]=['../../assets/images/google-store.svg','../../assets/images/app-store.svg']

  isDarkMode: boolean;

  constructor(private themeService: ThemeService) {
    
    this.isDarkMode = this.themeService.darkMode;
  }


}
