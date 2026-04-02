/* PROJECTS FILTER 
Filters projects by industry, support type, and client type.
All three filters combine with AND logic — a project must match
at least one selection in each active filter group to be shown. */

(function () {
  const checkboxes   = document.querySelectorAll('input[type=checkbox]');
  const rows         = document.querySelectorAll('.project-row');
  const resultCount  = document.getElementById('result-count');
  const activeFiltersEl = document.getElementById('active-filters');
  const emptyState   = document.getElementById('empty-state');

  // ── Apply filters 
  function applyFilters() {
    const industry = getChecked('industry');
    const support  = getChecked('support');
    const client   = getChecked('client');

    let visible = 0;

    rows.forEach(function (row) {
      const rI = row.dataset.industry.split(',').map(s => s.trim());
      const rS = row.dataset.support.split(',').map(s => s.trim());
      const rC = row.dataset.client.split(',').map(s => s.trim());

      const matchI = industry.length === 0 || industry.some(v => rI.includes(v));
      const matchS = support.length  === 0 || support.some(v  => rS.includes(v));
      const matchC = client.length   === 0 || client.some(v   => rC.includes(v));

      const show = matchI && matchS && matchC;
      row.style.display = show ? '' : 'none';
      if (show) visible++;
    });

    // Update count
    resultCount.textContent = visible + (visible === 1 ? ' Project' : ' Projects');

    // Show / hide empty state
    emptyState.classList.toggle('show', visible === 0);

    // Render active filter pills
    const all = [...industry, ...support, ...client];
    activeFiltersEl.innerHTML = all
      .map(f => '<span class="filter-pill">' + f + '</span>')
      .join('');
  }

  // ── Helper: get checked values for a given data-type -- I dont remember
  function getChecked(type) {
    return Array.from(
      document.querySelectorAll('[data-type=' + type + ']:checked')
    ).map(cb => cb.dataset.val);
  }

  // ── Clear all filters 
  window.clearAll = function () {
    checkboxes.forEach(cb => (cb.checked = false));
    applyFilters();
  };

  // ── Mobile sidebar toggle 
  window.toggleFilters = function () {
    const btn   = document.getElementById('filterToggle');
    const inner = document.getElementById('sidebarInner');
    const isOpen = inner.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
  };

  // ── Attach listeners 
  checkboxes.forEach(cb => cb.addEventListener('change', applyFilters));

})();
