import { Routes } from '@angular/router';
import { App } from './app';
import { Download } from './features/components/download/download';
import { Transcription } from './features/components/transcription/transcription';

export const routes: Routes = [
  // {
  //   path: '',
  //   component: App
  // },
  {
    path: '',
    component: Download
  },
    {
    path: 'download',
    component: Download
  },
  {
    path: 'transcription',
    component: Transcription
  }
];
