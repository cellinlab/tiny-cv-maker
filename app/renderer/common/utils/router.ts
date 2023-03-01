/**
 * @description: judge whether the url is a http or https url
 * @param url 
 * @returns 
 */
export function isHttpOrHttpsUrl (url: string): boolean {
  let regRule = /(http|https):\/\/([\w.]+\/?)\S*/;
  return regRule.test(url.toLowerCase());
}
