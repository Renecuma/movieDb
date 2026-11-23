import { Component, signal, WritableSignal } from '@angular/core';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { chevronDownOutline, chevronUpOutline } from 'ionicons/icons';

interface Movie {
  id: number;
  title: string;
  hue: number;
}

interface MovieRow {
  title: string;
  movies: WritableSignal<Movie[]>;
  expanded: WritableSignal<boolean>;
}

const PAGE_SIZE = 12;
// Start loading the next page when the user is this close (px) to the end of a row.
const LOAD_THRESHOLD = 300;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonButton, IonContent, IonHeader, IonIcon, IonTitle, IonToolbar],
})
export class Tab1Page {
  private nextId = 1;

  readonly rows: MovieRow[] = ['Trending Now', 'Top Rated', 'New Releases'].map(
    (title) => ({
      title,
      movies: signal(this.createPlaceholders()),
      expanded: signal(false),
    }),
  );

  constructor() {
    addIcons({ chevronDownOutline, chevronUpOutline });
  }

  toggleExpanded(row: MovieRow): void {
    row.expanded.update((expanded) => !expanded);
  }

  // Collapsed rows scroll sideways, expanded rows scroll down; load more near either end.
  onRowScroll(row: MovieRow, event: Event): void {
    const el = event.target as HTMLElement;
    const nearEnd = row.expanded()
      ? el.scrollTop + el.clientHeight >= el.scrollHeight - LOAD_THRESHOLD
      : el.scrollLeft + el.clientWidth >= el.scrollWidth - LOAD_THRESHOLD;
    if (nearEnd) {
      row.movies.update((movies) => [...movies, ...this.createPlaceholders()]);
    }
  }

  // Placeholder data until a real movie API is wired up.
  private createPlaceholders(): Movie[] {
    return Array.from({ length: PAGE_SIZE }, () => {
      const id = this.nextId++;
      return { id, title: `Movie Title ${id}`, hue: (id * 47) % 360 };
    });
  }
}
