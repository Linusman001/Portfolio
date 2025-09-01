document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');

      // Check if offcanvas is visible
      const offcanvas = document.getElementById('offcanvasNavbar');
      const isOffcanvasVisible = window.getComputedStyle(offcanvas).display !== 'none' && offcanvas.classList.contains('show');

      if (isOffcanvasVisible) {
        e.preventDefault(); // Prevent default scroll

        // Close the offcanvas first
        const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
        bsOffcanvas.hide();

        // After it's closed, scroll to section
        offcanvas.addEventListener('hidden.bs.offcanvas', function handler() {
          document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
          offcanvas.removeEventListener('hidden.bs.offcanvas', handler);
        });
      }
    });
  });





   const items = document.querySelectorAll('#companyList .list-group-item');
  const contentBlocks = document.querySelectorAll('.company-content');

  items.forEach(item => {
    item.addEventListener('click', () => {
      // Remove active state from all list items
      items.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      // Hide all content blocks
      contentBlocks.forEach(block => block.classList.add('d-none'));

      // Show the selected one
      const targetId = item.getAttribute('data-bs-target');
      document.getElementById(targetId).classList.remove('d-none');
    });
  });