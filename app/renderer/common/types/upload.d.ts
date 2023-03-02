declare namespace TSUpload {
  export interface Input {
    style?: React.CSSProperties;
    accept?: string;
    multiple?: boolean;
    visible?: boolean;
    onAfterClick: () => void;
    onAfterChange: (fileList: File[]) => void;
  }

  export interface File {
    uuid: string;
    file: any;
    fileType: string;
    base64URL: string;
    revokeFileBase64URL: (base64URL: string) => void;
    upload?: () => void;
    cancel?: () => void;
    retry?: () => void;
  }
}
