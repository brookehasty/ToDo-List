const taskCard = `
<div class="task-item">
                            <div class="task-checkbox" onclick="toggleTask()"></div>
                            <div class="task-content">
                                <div class="task-title">Cooking Something</div>
                            </div>
                            <span class="status-badge status-something"></span>
                            <div class="priority-badge priority-something">
                                <i class="fas fa-circle"></i>
                            </div>

                            <div class="avatar">CF</div>

                            <button class="icon-btn" style="width: 30px; height: 30px;" onclick="editTask()">
                                <i class="fas fa-pen" style="font-size: 12px;"></i>
                            </button>

                            <button class="icon-btn" style="width: 30px; height: 30px;" onclick="deleteTask()">
                                <i class="fas fa-trash" style="font-size: 12px;"></i>
                            </button>
                        </div>
`