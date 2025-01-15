import { createDirectus } from '@directus/sdk';

const directus = createDirectus('http://localhost:8055');

export class DirectusService {
  private directus = directus;
}
