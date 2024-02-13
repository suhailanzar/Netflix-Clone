import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input({ required: true }) userImg: string = ''
  navList = ['Home', 'TV shows', 'News & Popular', 'My List', 'Browse by Language']
  userImageUrl = "https://scontent.fcok3-2.fna.fbcdn.net/v/t39.30808-6/425312715_1998966673902162_2089129287877743532_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=j2e25DAYL2oAX_0dQGs&_nc_ht=scontent.fcok3-2.fna&oh=00_AfAO76zy8KznkJexGE44pCrTmWveyuRM6CvoONzqcvshwA&oe=65CDB869"
}
