const checklistItems = [
    {
        title: "Call Opening",
        subItems: ["Presentación", "Duración de la llamada", "Diferencia MTP/SBG", "Verificar la cuenta", "Informar agenda", "Confirmar agenda"]
    },
    {
        title: "Securing Commitments",
        subItems: ["Computadora?", "Permisos?", "Administrador?"]
    },
    {
        title: "Discovery & Connection",
        subItems: ["Hablar de que estudiaste sobre el anunciante", "Pagina web propia o con partner?", "Que estrategia llevas con tu MP?", "Cuales objetivos tienes para...(navidad? año?)", "Sabes para que sirve... (pixel, api, GTM, etc)?", "como te ha ido con las campañas?"]
    },
    {
        title: "Taylored Solutions/Unlocking opportunities",
        subItems: ["Ofrecer otras soluciones", "Explicar beneficios solución actual", "explicar beneficios solución sugerida", "tienes dudas sobre lo que vamos hacer hoy?"]
    },
    {
        title: "Implementation",
        subItems: ["Hacer implementación", "Probar implementación"]
    },
    {
        title: "Call Closing",
        subItems: ["Dudas?", "Mencionar envio del email", "Hacer resumen de la llamada", "Programar follow up con MTP", "programar call back con MP", "Despedida"]
    }
];

const checklist = document.getElementById('bonusChecklist');

checklistItems.forEach((item, index) => {
    const li = document.createElement('li');
    li.classList.add('major-item');
    
    const majorLabel = document.createElement('label');
    majorLabel.htmlFor = `major-${index}`;
    
    const majorCheckbox = document.createElement('input');
    majorCheckbox.type = 'checkbox';
    majorCheckbox.id = `major-${index}`;
    
    majorLabel.textContent = item.title;
    majorLabel.insertBefore(majorCheckbox, majorLabel.firstChild);
    
    const checkmark = document.createElement('i');
    checkmark.classList.add('fas', 'fa-check', 'checkmark');
    li.appendChild(checkmark);
    
    const subList = document.createElement('ul');
    subList.classList.add('sub-items');
    
    item.subItems.forEach((subItem, subIndex) => {
        const subLi = document.createElement('li');
        subLi.classList.add('sub-item');
        
        const subLabel = document.createElement('label');
        subLabel.htmlFor = `sub-${index}-${subIndex}`;
        
        const subCheckbox = document.createElement('input');
        subCheckbox.type = 'checkbox';
        subCheckbox.id = `sub-${index}-${subIndex}`;
        
        subLabel.textContent = subItem;
        subLabel.insertBefore(subCheckbox, subLabel.firstChild);
        
        subLi.appendChild(subLabel);
        subList.appendChild(subLi);
        
        subCheckbox.addEventListener('change', () => {
            const allSubItemsChecked = item.subItems.every((_, i) => 
                document.getElementById(`sub-${index}-${i}`).checked
            );
            majorCheckbox.checked = allSubItemsChecked;
            checkmark.classList.toggle('visible', allSubItemsChecked);
        });
    });
    
    majorCheckbox.addEventListener('change', (e) => {
        const subCheckboxes = subList.querySelectorAll('input[type="checkbox"]');
        subCheckboxes.forEach(checkbox => {
            checkbox.checked = e.target.checked;
        });
        checkmark.classList.toggle('visible', e.target.checked);
    });
    
    li.appendChild(majorLabel);
    li.appendChild(subList);
    checklist.appendChild(li);
});