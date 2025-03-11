class DragDropManager {
    constructor() {
        this.draggedItem = null;
        this.initEvents();
    }

    initEvents() {
        document.querySelectorAll('.ficha-card').forEach(item => {
            item.addEventListener('dragstart', this.handleDragStart);
            item.addEventListener('dragend', this.handleDragEnd);
        });

        document.querySelector('.grid-layout').addEventListener('dragover', this.handleDragOver);
    }

    handleDragStart(e) {
        this.draggedItem = e.target;
        e.target.style.opacity = '0.5';
    }

    handleDragOver(e) {
        e.preventDefault();
        const afterElement = this.getDragAfterElement(e.clientY);
        const grid = document.querySelector('.grid-layout');
        
        if (afterElement) {
            grid.insertBefore(this.draggedItem, afterElement);
        } else {
            grid.appendChild(this.draggedItem);
        }
    }
}