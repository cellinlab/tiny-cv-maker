import fs, { promises as fsPromiseAPIs } from 'fs';

const fileOperate = {
  /**
   * @description read file
   * @param path 
   * @param encoding 
   * @returns {Promise<string>} file content
   */
  read: (path: string, encoding: BufferEncoding = 'utf-8'): Promise<string> => {
    return fsPromiseAPIs.readFile(path, { encoding });
  },
  /**
   * @description write file
   * @param path 
   * @param data 
   * @param encoding 
   * @returns {Promise<void>}
   */
  write: (path: string, data: string, encoding: BufferEncoding = 'utf-8'): Promise<void> => {
    return fsPromiseAPIs.writeFile(path, data, { encoding });
  },
  /**
   * @description rename file
   * @param path 
   * @param newPath 
   * @returns {Promise<void>}
   */
  rename: (path: string, newPath: string): Promise<void> => {
    return fsPromiseAPIs.rename(path, newPath);
  },
  /**
   * @description delete file
   * @param path 
   * @returns {Promise<void>}
   */
  delete: (path: string): Promise<void> => {
    return fsPromiseAPIs.unlink(path);
  },
  /**
   * @description detect whether the file exists
   * @param path
   * @returns {Promise<void>}
   */
  exists: (path: string): Promise<void> => {
    return fsPromiseAPIs.access(path, fs.constants.F_OK);
  },
  /**
   * @description detect whether the file is writable
   * @param path
   * @returns {Promise<void>}
   */
  hasWritePermission: (path: string): Promise<void> => {
    return fsPromiseAPIs.access(path, fs.constants.W_OK);
  },
  /**
   * @description detect whether the file is readable
   * @param path
   * @returns {Promise<void>}
   */
  hasReadPermission: (path: string): Promise<void> => {
    return fsPromiseAPIs.access(path, fs.constants.R_OK);
  },
}

export default fileOperate;
