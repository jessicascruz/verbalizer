import { Component, inject, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DownloadService } from '../../services/download/DownloadService';

@Component({
  selector: 'app-download',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './download.html',
  styleUrl: './download.scss',
})
export class Download implements OnInit {
  // private downloadService = inject(DownloadService);
  url = new FormControl('');

  constructor(private downloadService: DownloadService) {}

  ngOnInit(): void {
    this.retornoClientes();
  }

  updateUrl(event: Event) {
    this.url.get('value')?.toString();
    alert(this.url.value);
  }

  retornoClientes(): any {
    this.downloadService.getUsuarios().subscribe((data) => {
      console.log(data);
    });
  }

  adicionarProduto(): void {
    const novoProduto = { id: 3, nome: 'Jess', email: "jess@gmail.com" };
    this.downloadService.adicionarUsuario(novoProduto).subscribe(() => {
      this.retornoClientes();
    });
  }
}
