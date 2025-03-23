function loadPowerIcons() {
    const powerIcons = document.querySelectorAll('.power-icon');
    powerIcons.forEach(icon => {
      const iconUrl = icon.dataset.icon;
      if (iconUrl) {
        icon.style.backgroundImage = `url('${iconUrl}')`;
      }
    });
  }
  
  window.addEventListener('load', loadPowerIcons);