import { v4 as uuid } from 'uuid';

class FileEvent {
  public uuid: string;
  public file: any;
  public fileType: string;
  public base64URL: string;

  constructor(file: any) {
    this.file = file;
    this.uuid = uuid();

    const types = file?.type?.split('/') || [];
    this.fileType = types.length ? types[0] : '';

    this.base64URL = window.URL.createObjectURL(file);
  }

  public revokeFileBase64URL(base64URL: string) {
    window.URL.revokeObjectURL(base64URL);
  }

  public upload() {}

  public cancel() {}

  public retry() {}
}

export default FileEvent;
