// Adicione a função para retornar à tela principal
function goBack() {
    window.history.back();
}

// Lógica para enviar os dados do novo equipamento
document.addEventListener('DOMContentLoaded', () => {
    const newEquipmentForm = document.getElementById('newEquipmentForm');
    
    newEquipmentForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const name = newEquipmentForm.querySelector('#name').value;
        const model = newEquipmentForm.querySelector('#model').value;
        const serialNumber = newEquipmentForm.querySelector('#serialNumber').value;
        const purchaseDate = newEquipmentForm.querySelector('#purchaseDate').value;
        
        const equipmentData = {
            name,
            model,
            serialNumber,
            purchaseDate
        };
        
        try {
            // Adicione a lógica de envio para o servidor aqui
            // Por exemplo, usar fetch() ou outro método para enviar os dados
            // Lembre-se de implementar as medidas de segurança apropriadas
            alert('Equipamento adicionado com sucesso!');
            newEquipmentForm.reset();
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao adicionar equipamento. Tente novamente mais tarde.');
        }
    });
});
