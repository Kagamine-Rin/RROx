declare module '*.css';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.svg?raw';
declare module '*.exe';
declare module '*.dll';
declare module '*.ico';

declare interface Window {
    ipc: {
        invoke( channel: string, ...params: any[] ): Promise<any>,
        send  ( channel: string, ...params: any[] ): Promise<any>,
        on   ( channel: string, listener: ( event: Electron.IpcRendererEvent, ...args: any[] ) => void ): () => void,
        once ( channel: string, listener: ( event: Electron.IpcRendererEvent, ...args: any[] ) => void ): () => void,
    }
    mode: 'normal' | 'overlay';
    openBrowser: ( url: string ) => void;
    settingsStore: {
        get<T>( key: string ): T;
        getAll(): any;
        set( key: string, val: any ): void;
        reset( key: string ): void;
    };
}