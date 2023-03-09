export interface footerConfig {
  left: string;
  right: string;
  setDefaultRightUrl?: boolean;
}
export interface titleConfig {
  left: string;
  right: string;
}

interface contactDetail {
  address: string;
  type: string;
}

export interface headerConfig {
  name: string;
  github: string;
  job: string;
  profiles: string[];
  contacts: contactDetail[];
  weChatQrCode: boolean;
  showWeChatQrCodeInHTML: boolean;
}
