export const setHtmlSize: Function = (win: Window, doc: Document) => {
  const designSize: number = 1920;
  const screenWidth: number = window.screen.width || 0;
  const radio = screenWidth / designSize;
  const docEl = doc.documentElement;
  const recal = () => {
    const clientWidth: number = docEl.clientWidth || 0;
    if (!clientWidth) return;
    let rem: number = (clientWidth / designSize) * 100;
    rem = Math.max(rem, 70 * radio);
    docEl.style.fontSize = rem + "px";
  };
  recal();
  if (!doc.addEventListener) return;
  win.addEventListener("resize", recal, false);
  doc.addEventListener("DOMContentLoaded", recal, false);
};
