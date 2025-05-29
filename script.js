const teamMembers = [
    {
      name: "James Anderson",
      role: "Frontend Developer",
      img: "imag1.jpg",
      description: "James is a passionate frontend developer with 5 years of experience in React and Vue."
    },
    {
      name: "Olivia Brown",
      role: "Backend Developer",
      img: "imag2.jpg",
      description: "Olivia specializes in scalable backend systems and database design with Node.js and Python."
    },
    {
      name: "Emma Johnson",
      role: "UI/UX Designer",
      img: "imag3.jpg",
      description: "Emma crafts beautiful and user-friendly interfaces with a keen eye for detail."
    }
  ];
  
  const cards = document.querySelectorAll('.team-card');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalRole = document.getElementById('modal-role');
  const modalDesc = document.getElementById('modal-desc');
  const modalClose = document.getElementById('modal-close');
  const searchInput = document.getElementById('searchInput');
  
  function openModal(index) {
    const member = teamMembers[index];
    modalImg.src = member.img;
    modalImg.alt = member.name;
    modalTitle.textContent = member.name;
    modalRole.textContent = member.role;
    modalDesc.textContent = member.description;
    modal.hidden = false;
    modal.setAttribute('aria-hidden', 'false');
    modalClose.focus();
    document.body.style.overflow = 'hidden'; // prevent background scroll
  }
  
  function closeModal() {
    modal.hidden = true;
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  
  cards.forEach((card, index) => {
    card.addEventListener('click', () => openModal(index));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(index);
      }
    });
  });
  
  modalClose.addEventListener('click', closeModal);
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) {
      closeModal();
    }
  });
  
  // Search filter functionality
  searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase();
    cards.forEach((card, index) => {
      const name = teamMembers[index].name.toLowerCase();
      const role = teamMembers[index].role.toLowerCase();
      if (name.includes(filter) || role.includes(filter)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
  