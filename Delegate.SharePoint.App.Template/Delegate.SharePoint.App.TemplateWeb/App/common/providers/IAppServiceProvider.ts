module $rootnamespace$ {
    export interface IAppServiceProvider {
        GetQueryStringParameter(param: string): string;
        GetHostWebUrl(): string;
        GetAppWebUrl(): string;
        GetClientTagToken(): string;
        ApplyHostWebStyle(): void;
        GetCurrentCulture(): string;
    }
}