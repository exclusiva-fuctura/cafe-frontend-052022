
export class AppSettings {

  private static get API_ENDPOINT(): string {
    return '/api';
  }

  public static get URL_PESSOA(): string {
    return AppSettings.API_ENDPOINT + '/pessoa';
  }
}
