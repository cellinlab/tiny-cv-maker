import { ipcRenderer } from 'electron';

/**
 * @description get app path
 * @returns {Promise<string>} app path
 */
export function getAppPath (): Promise<string> {
  return new Promise((resolve: (val: string) => void, reject: (err: Error) => void) => {
    ipcRenderer.send('get-root-path', '');
    ipcRenderer.on('reply-root-path', (event, arg: string) => {
      if (arg) {
        resolve(arg);
      } else {
        reject(new Error('Get app path failed.'));
      }
    });
  });
}
