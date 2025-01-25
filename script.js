const checklistData = {
    bonus: {
        title: "Quer Bonus? Então toma bonus!",
        items: [
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
        ]
    },
    checklist2: {
        title: "Soluções de Tech",
        items: [
            {
                title: "Pixel Setup",
                subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"]
            },
            {
                title: "Pixel Optimization",
                subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"]
            },
            {
                title: "API Setup",
                subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"]
            },
            {
                title: "API Optimization",
                subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"]
            },
            {
                title: "API - CRM",
                subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"]
            }
        ]
    },
    checklist3: {
        title: "Soluções de Creative",
        items: [
            {
                title: "Major Item 1",
                subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"]
            },
            {
                title: "Major Item 2",
                subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"]
            }
        ]
    },
    checklist4: {
        title: "Soluções de Measurement",
        items: [
            {
                title: "Teste A/B",
                subItems: ["Verificar Experimentos", "Mesmo orçamento", "Só 1 variável", "Até 5 campanhas/conj. anúncios", "Verificar Objetivos", "Programar para o mesmo dia"]
            },
            {
                title: "Relatório de Anúncios",
                subItems: ["Campanhas Activas", "Estar vivo", "Todo Aplica"]
            },
            {
                title: "Brand Lift",
                subItems: ["40.000 UDS /227000 R (Trimestre)", "Accelerate +", "Test A/B (preferiblemente)", "Nome da página coincide con a marca"]
            },
            {
                title: "Conversion Lift",
                subItems: ["API optimizada", "42.000 UDS /238000 R (Timestre)", "Accelerate +", "Test A/B (preferiblemente)", "Nome da página coincide con a marca"]
            },
            {
                title: "Let's Talk Cross Media",
                subItems: ["Requisito 1", "Requisito 2", "Requisito 3"]
            }
        ]
    },
    checklist5: {
        title: "Formulario de Teste"
    }    
};

const infoData = {
    bonus: [
        {
            title: "Call Opening",
            content: "The call opening is crucial for setting the tone of the conversation. Make sure to greet the client warmly, introduce yourself, and briefly explain the purpose of the call."
        },
        {
            title: "Securing Commitments",
            content: "Securing commitments involves getting the client's agreement on key points. This helps ensure that both parties are aligned on expectations and next steps."
        },
        {
            title: "Discovery & Connection",
            content: "This phase is about understanding the client's needs and building rapport. Ask open-ended questions and actively listen to their responses."
        },
        {
            title: "Taylored Solutions/Unlocking opportunities",
            content: "Based on the information gathered, present solutions that are tailored to the client's specific needs. Highlight the benefits and value proposition of each solution."
        },
        {
            title: "Implementation",
            content: "Guide the client through the implementation process. Be clear about what steps need to be taken and offer support throughout the process."
        },
        {
            title: "Call Closing",
            content: "Summarize the key points discussed, confirm any actions or next steps, and thank the client for their time. Ensure they know how to reach you if they have any questions."
        }
    ],    
    checklist2: [
        {
            title: "Pixel Setup",
            content: "Adicionar Commercial"
        },
        {
            title: "Pixel Optimization",
            content: "Adicionar Commercial"
        },
        {
            title: "API Setup",
            content: "Adicionar Commercial"
        },
        {
            title: "API Optimization",
            content: "Adicionar Commercial"
        },
        {
            title: "API - CRM",
            content: "Adicionar Commercial"
        }
    ],

    checklist4: [
        {
            title: "Teste A/B",
            content: "Adicionar Commercial"
        },
        {
            title: "Relatório de Anúncios",
            content: "Adicionar Commercial"
        },
        {
            title: "Brand Lift",
            content: "Adicionar Commercial"
        },
        {
            title: "Conversion Lift",
            content: "Adicionar Commercial"
        },
        {
            title: "Let's talk Cross Media",
            content: "Adicionar Commercial"
        }
    ],
};

const checklist = document.getElementById('bonusChecklist');
const checklistTitle = document.getElementById('checklistTitle');
const buttons = document.querySelectorAll('.checklist-button');

function createChecklist(checklistItems) {
    checklist.innerHTML = ''; 
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
                updateMajorItemStatus(li, item.subItems.length);
            });
        });
        
        majorCheckbox.addEventListener('change', (e) => {
            const subCheckboxes = subList.querySelectorAll('input[type="checkbox"]');
            subCheckboxes.forEach(checkbox => {
                checkbox.checked = e.target.checked;
            });
            updateMajorItemStatus(li, item.subItems.length);
        });
        
        li.appendChild(majorLabel);
        li.appendChild(subList);
        checklist.appendChild(li);

        const infoButton = document.createElement('button');
        infoButton.textContent = 'Info';
        infoButton.classList.add('info-button');
        infoButton.addEventListener('click', () => showInfo(index));
        li.appendChild(infoButton);

        li.appendChild(majorLabel);
        li.appendChild(subList);
        checklist.appendChild(li);
    });
}

function showInfo(index) {
    const infoContainer = document.getElementById('infoContainer');
    const infoTitle = document.getElementById('infoTitle');
    const infoContent = document.getElementById('infoContent');
    
    const currentChecklist = document.querySelector('.checklist-button.active').dataset.checklist;
    const info = infoData[currentChecklist][index];
    
    infoTitle.textContent = info.title;
    infoContent.textContent = info.content;
    
    infoContainer.style.display = 'block';
}

// Add event listener to close info box when clicking outside
document.addEventListener('click', (event) => {
    const infoContainer = document.getElementById('infoContainer');
    const infoButtons = document.querySelectorAll('.info-button');
    
    if (!infoContainer.contains(event.target) && !Array.from(infoButtons).some(button => button.contains(event.target))) {
        infoContainer.style.display = 'none';
    }
});

function updateMajorItemStatus(majorItem, totalSubItems) {
    const checkedSubItems = majorItem.querySelectorAll('.sub-item input[type="checkbox"]:checked').length;
    const majorCheckbox = majorItem.querySelector('input[type="checkbox"]');
    const checkmark = majorItem.querySelector('.checkmark');
    
    if (checkedSubItems === totalSubItems) {
        majorCheckbox.checked = true;
        checkmark.classList.add('visible');
    } else {
        majorCheckbox.checked = false;
        checkmark.classList.remove('visible');
    }
}

function loadChecklist(checklistKey) {
    const data = checklistData[checklistKey];
    checklistTitle.textContent = data.title;
    createChecklist(data.items);
    
    buttons.forEach(button => {
        button.classList.remove('active');
        if (button.dataset.checklist === checklistKey) {
            button.classList.add('active');
        }
    });
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const checklistKey = button.dataset.checklist;
        if (checklistKey === 'checklist5') {
            // Redirect to the contact form page
            window.location.href = 'alunos.html';
        } else {
            // Load normal checklist
            loadChecklist(checklistKey);
        }
    });
});

// Load the default checklist (bonus) on page load
loadChecklist('bonus');