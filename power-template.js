function createPowerSection(imageSrc, headerText, contentText) {
    return `
        <div class="power-section">
            <div class="power-row">
                <img class="power-icon" src="${imageSrc}" alt="icon">
                <div class="power-header">
                    <span class="header-text">${headerText}</span>
                </div>
            </div>
            <div class="power-content">
                ${contentText}
            </div>
        </div>
    `;
}