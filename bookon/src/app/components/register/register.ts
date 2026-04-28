import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  bookTitle: string = '';
  bookAuthor: string = '';
  bookPrice: string = '';

  constructor(private router: Router) {}

  registerBook() {
    const book = {
      title: this.bookTitle,
      author: this.bookAuthor,
      price: this.bookPrice,
      registeredAt: new Date()
    };

    console.log('Könyv regisztrálva:', book);

    // Adatok nullázása
    this.bookTitle = '';
    this.bookAuthor = '';
    this.bookPrice = '';

    // Átirányítás a note komponensre
    this.router.navigate(['/note']);
  }
}
