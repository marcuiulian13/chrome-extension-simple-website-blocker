export interface IWebsite {
  address: string;
}

export interface IExtensionOptions {
  warningMessage: string;
  websites: IWebsite[];
  enableConfirm: boolean;
}
