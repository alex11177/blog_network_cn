// Find text nodes and wrap specific API names with <code class="api"> for visual emphasis
(function(){
  const APIS = ['querySelector','getElementById','ElementById'];
  const selector = 'main, article, .post-entry, .content';

  function walk(node) {
    let child = node.firstChild;
    while (child) {
      const next = child.nextSibling;
      if (child.nodeType === 3) { // text node
        let text = child.nodeValue;
        let replaced = false;
        APIS.forEach(api => {
          // word boundary match, case-sensitive
          const re = new RegExp('\\b' + api + '\\b', 'g');
          if (re.test(text)) {
            replaced = true;
            text = text.replace(re, `###HIGHLIGHT_START###${api}###HIGHLIGHT_END###`);
          }
        });
        if (replaced) {
          const span = document.createElement('span');
          // split by markers and build nodes
          text.split(/(###HIGHLIGHT_START###.*?###HIGHLIGHT_END###)/).forEach(part => {
            if (!part) return;
            if (part.startsWith('###HIGHLIGHT_START###')) {
              const api = part.replace('###HIGHLIGHT_START###','').replace('###HIGHLIGHT_END###','');
              const code = document.createElement('code');
              code.className = 'api';
              code.textContent = api;
              span.appendChild(code);
            } else {
              span.appendChild(document.createTextNode(part));
            }
          });
          node.replaceChild(span, child);
        }
      } else if (child.nodeType === 1) { // element
        // skip code blocks and pre and style/script
        const tag = child.tagName.toLowerCase();
        if (['code','pre','script','style','a'].indexOf(tag) === -1) {
          walk(child);
        }
      }
      child = next;
    }
  }

  function highlight() {
    document.querySelectorAll(selector).forEach(el => walk(el));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', highlight);
  } else {
    highlight();
  }
})();
