export interface IConfig {
    appEnv: 'development' | 'staging' | 'production';
    nodeEnv: string | undefined;
    appName: string | undefined;
    appUrl: string | undefined;
}