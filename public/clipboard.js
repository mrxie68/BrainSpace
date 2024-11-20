// buttons
const svgCopy =
  '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="white" d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"/></svg>';
const svgCheck =
  '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 16 16"><path fill="white" d="M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032Z"/></svg>';
const addCopyButtons = (clipboard) => {
  document.querySelectorAll("pre > code").forEach((codeBlock) => {
    const button = document.createElement("button");
    button.className = "clipboard-button";
    button.type = "button";
    button.title = "Copy";
    button.innerHTML = svgCopy;
    button.addEventListener("click", () => {
      const codeText = codeBlock.innerText.replace(/\s+$/gm, '');
      clipboard.writeText(codeText).then(
        () => {
          button.blur();
          button.innerHTML = svgCheck;
          setTimeout(() => (button.innerHTML = svgCopy), 2000);
        },
        (error) => (button.innerHTML = "Error")
      );
    });    
    // 3. Append the button after the pre tag (.highlight > pre > button > code)
    const pre = codeBlock.parentNode;
    pre.parentNode.insertBefore(button, pre.nextSibling);
  });
};
// trigger function
if (navigator && navigator.clipboard) {
  addCopyButtons(navigator.clipboard);
} 
