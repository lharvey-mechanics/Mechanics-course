
async function loadData(){
  const res = await fetch('data.json');
  return await res.json();
}
function escapeHtml(s){
  return String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
}
function chapNum(ch){
  const m = String(ch).match(/Chapter\s+(\d+)/i);
  return m ? parseInt(m[1],10) : 999;
}
function matches(t, q){
  if(!q) return true;
  const hay = (t.term + " " + t.definition + " " + t.example + " " + t.chapter).toLowerCase();
  return hay.includes(q);
}
async function init(){
  const credit = document.body.dataset.credit;
  const data = await loadData();
  const all = data.terms.filter(t => t.credit === credit);

  const input = document.getElementById('search');
  const cards = document.getElementById('cards');
  const count = document.getElementById('count');
  const chapterFilter = document.getElementById('chapterFilter');

  // Build chapter dropdown
  const chapters = [...new Set(all.map(t => t.chapter))].sort((a,b)=>chapNum(a)-chapNum(b));
  chapterFilter.innerHTML = '<option value=\"\">All chapters</option>' + chapters.map(ch => `<option value=\"${escapeHtml(ch)}\">${escapeHtml(ch)}</option>`).join('');

  function render(){
    const q = input.value.trim().toLowerCase();
    const ch = chapterFilter.value;

    let terms = all.slice();
    if (ch) terms = terms.filter(t => t.chapter === ch);
    if (q) terms = terms.filter(t => matches(t, q));

    terms.sort((a,b)=>{
      const ca = chapNum(a.chapter), cb = chapNum(b.chapter);
      if (ca !== cb) return ca-cb;
      return a.term.localeCompare(b.term);
    });

    count.textContent = `${terms.length} term(s) shown`;
    cards.innerHTML = terms.map(t => `
      <article class="card">
        <h3>${escapeHtml(t.term)}</h3>
        <div class="meta">${escapeHtml(t.chapter || "")}</div>
        <p class="def">${escapeHtml(t.definition || "")}</p>
        <p class="example"><strong>In the shop:</strong> ${escapeHtml(t.example || "")}</p>
      </article>
    `).join('') || '<p class="small">No matches.</p>';
  }

  input.addEventListener('input', render);
  chapterFilter.addEventListener('change', render);
  render();
}
init().catch(err => {
  console.error(err);
  const count = document.getElementById('count');
  if (count) count.textContent = 'Failed to load data.json. Confirm it is in the repo root.';
});
