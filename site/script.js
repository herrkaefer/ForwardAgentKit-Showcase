const examples = {
  learn: {
    request: '“Explain this phrase, save it for review, and let me hear it.”',
    steps: ['Explain with the learner’s context', 'Save through the app’s learning tools', 'Generate a pronunciation audio artifact'],
    symbol: 'Aa', type: 'LEARNING POINT', tag: 'Saved for review', title: 'Break the ice',
    description: 'Make people feel more relaxed at the start of a conversation.',
    foot: '“A quick question helped break the ice.”', accent: '▂ ▅ ▃ ▆ ▂'
  },
  create: {
    request: '“Create an illustration from this brief and write a caption I can use.”',
    steps: ['Use the supplied brief as context', 'Call the configured image-generation tool', 'Keep the image and caption in the conversation'],
    symbol: '▧', type: 'IMAGE & CAPTION', tag: 'Shareable artifacts', title: 'An idea, ready to use',
    description: 'A generated image you can preview, save, or share, with a caption alongside it.',
    foot: 'Created with independently configured capability models.', accent: 'IMAGE'
  },
  research: {
    request: '“Search this topic, read a useful page, and save a short summary.”',
    steps: ['Search with the configured web provider', 'Extract the selected page’s content', 'Write a summary into the authorized workspace'],
    symbol: '⌕', type: 'RESEARCH ARTIFACT', tag: 'Saved to workspace', title: 'A summary you can keep',
    description: 'Web findings become a readable file that stays available with the conversation.',
    foot: 'App-authorized workspace · preview and share', accent: '.md'
  }
};
const tabs = [...document.querySelectorAll('[data-demo]')];
const result = document.querySelector('#demo-result');
function selectExample(tab, focus = false) {
  const key = tab.dataset.demo;
  const example = examples[key];
  tabs.forEach(item => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
  });
  document.querySelector('#demo-panel').setAttribute('aria-labelledby', tab.id);
  document.querySelector('.demo-index').textContent = `0${tabs.indexOf(tab) + 1} / 03`;
  document.querySelector('#demo-request').textContent = example.request;
  ['#step-one', '#step-two', '#step-three'].forEach((selector, index) => {
    document.querySelector(selector).textContent = example.steps[index];
  });
  const fields = { '.result-symbol': 'symbol', '.result-type': 'type', '.result-tag': 'tag', 'h3': 'title', 'p': 'description', '.result-foot > span:first-child': 'foot', '.audio-mark': 'accent' };
  Object.entries(fields).forEach(([selector, field]) => { result.querySelector(selector).textContent = example[field]; });
  if (focus) tab.focus();
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectExample(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) { event.preventDefault(); selectExample(tabs[next], true); }
  });
});
