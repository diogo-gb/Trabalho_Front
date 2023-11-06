// Você pode adicionar lógica de interação com os botões e funcionalidades aqui
// Por exemplo, para remover um equipamento ou adicionar um novo
// Lembre-se de que esta é uma funcionalidade simplificada e você precisará
// implementar uma lógica mais avançada para lidar com armazenamento de dados

document.addEventListener('DOMContentLoaded', () => {
    const equipmentList = document.querySelector('.equipment-list');

    equipmentList.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-btn')) {
            const equipmentItem = event.target.closest('.equipment-item');
            equipmentItem.remove();
        }
    });

    const addEquipmentBtn = document.querySelector('.add-equipment-btn');
    
    addEquipmentBtn.addEventListener('click', () => {
        // Adicione aqui a lógica para abrir um formulário de adição de equipamento
        // Por exemplo, uma modal ou redirecionamento para outra página
        // para inserir as informações do novo equipamento
    });
});
