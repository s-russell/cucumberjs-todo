import { HttpClientModule } from '@angular/common/http';

export const environment = {
  production: true,
  httpConnectorImports: [HttpClientModule],
  baseUrl: 'https://realhost.com'
};
