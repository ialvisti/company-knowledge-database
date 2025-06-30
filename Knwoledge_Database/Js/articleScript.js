// Js/articleScript.js
// Asume que Js/articlesData.js y Js/searchComponent.js ya fueron cargados antes

/**
 * Convierte markdown ligero a HTML
 */
function formatText(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/_(.*?)_/g, '<u>$1</u>')
    .replace(/\n/g, '<br>');
}

/**
 * Renderiza un solo artículo y sus dropdownGroups
 */
function renderArticle() {
  const params = new URLSearchParams(window.location.search);
  const art = articles.find(a => a.id === params.get('id'));
  if (!art) return;

  // 1) Título & descripción
  document.getElementById('title').textContent = art.title;
  document.getElementById('articleTitle').textContent = art.title;
  document.getElementById('desc').innerHTML = formatText(art.desc);

  // 2) Renderiza cada grupo en #dropdowns
  const container = document.getElementById('dropdowns');
  container.innerHTML = '';

  art.dropdownGroups.forEach(group => {
    // Título del grupo
    const h1 = document.createElement('h1');
    h1.textContent = group.topic;
    container.appendChild(h1);

    // Cada item dentro del grupo
    group.items.forEach(item => {
      const dd = document.createElement('div');
      dd.className = 'dropdown';

      const btn = document.createElement('button');
      btn.className = 'dropbtn';
      btn.innerHTML = formatText(item.title);

      const cont = document.createElement('div');
      cont.className = 'dropdown-content';

      // Si el detail incluye HTML, inyectarlo directo; si no, formatear
      const txt = item.detail.trim();
      cont.innerHTML = /<\/?[a-z][\s\S]*>/i.test(txt)
        ? txt
        : formatText(txt);

      btn.addEventListener('click', () => {
        const isOpen = cont.classList.toggle('show');
        if (isOpen) {
          // Intercambia colores cuando se despliega
          btn.style.background = 'var(--accent)';
          btn.style.color = 'var(--bg)';
        } else {
          // Vuelve a estilo por defecto cuando se oculta
          btn.style.background = '';
          btn.style.color = '';
        }
      });

      dd.append(btn, cont);
      container.appendChild(dd);
    });

    // Agrega un <br> después del último dropdown de este grupo
    container.appendChild(document.createElement('br'));
  });

  // 3) Owners & Experts
  const roles = document.getElementById('rolesContainer');
  roles.innerHTML = '';
  const makeBox = (label, list) => {
    const box = document.createElement('div');
    box.className = 'role-box';
    const h4 = document.createElement('h4');
    h4.textContent = label + list.map(x => x.name).join(', ');
    const profs = document.createElement('div');
    profs.className = 'profiles';
    list.forEach(x => {
      const img = document.createElement('img');
      img.src = x.img;
      img.alt = x.name;
      profs.appendChild(img);
    });
    box.append(h4, profs);
    roles.appendChild(box);
  };
  makeBox('Article owners: ', art.owners);
  makeBox('Subject experts: ', art.experts);
}

/**
 * Inicializa la página de artículo
 */
function initArticle() {
  initSearchComponent();
  renderArticle();
}

document.addEventListener('DOMContentLoaded', initArticle);
