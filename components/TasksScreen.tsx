
import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { Tasks } from '../types';
import { CheckCircleIcon, TrashIcon, UndoIcon } from './icons';

const AppHeader: React.FC<{ title: string; subtitle: React.ReactNode }> = ({ title, subtitle }) => (
    <header className="bg-gradient-to-br from-[#D4C4F3] to-[#A185D7] text-white p-5 -mx-5 -mt-5 mb-5 rounded-b-2xl">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-base font-normal opacity-90">{subtitle}</p>
    </header>
);


const TasksScreen: React.FC = () => {
    const [tasks, setTasks] = useLocalStorage<Tasks>('menteCalmaTasks', { pending: [], completed: [] });
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        if (!newTask.trim()) return;
        setTasks({ ...tasks, pending: [...tasks.pending, newTask.trim()] });
        setNewTask('');
    };

    const handleCompleteTask = (index: number) => {
        const taskToMove = tasks.pending[index];
        const newPending = tasks.pending.filter((_, i) => i !== index);
        const newCompleted = [...tasks.completed, taskToMove];
        setTasks({ pending: newPending, completed: newCompleted });
    };

    const handleUndoTask = (index: number) => {
        const taskToMove = tasks.completed[index];
        const newCompleted = tasks.completed.filter((_, i) => i !== index);
        const newPending = [...tasks.pending, taskToMove];
        setTasks({ pending: newPending, completed: newCompleted });
    };

    const handleDeleteTask = (list: 'pending' | 'completed', index: number) => {
        const newList = tasks[list].filter((_, i) => i !== index);
        setTasks({ ...tasks, [list]: newList });
    };

    return (
        <div className="p-5">
            <AppHeader title="Suas Tarefas" subtitle="Pequenos passos, grandes mudanças." />
            <div className="content-area">
                <div className="flex gap-2.5 mb-5">
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        placeholder="Adicionar nova tarefa"
                        className="flex-grow p-3 border border-[#E0E0E0] rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-[#A185D7]"
                    />
                    <button onClick={handleAddTask} className="px-5 border-none bg-[#A185D7] text-white rounded-lg font-semibold cursor-pointer hover:bg-[#8a6ec1]">Adicionar</button>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4 text-[#333]">Tarefas Pendentes</h3>
                    <ul className="space-y-2.5 mb-5">
                        {tasks.pending.length === 0 ? (
                            <li className="bg-white p-4 rounded-lg shadow-md text-center text-gray-500">Nenhuma tarefa pendente.</li>
                        ) : (
                            tasks.pending.map((task, index) => (
                                <li key={index} className="bg-[#fdfcff] p-4 rounded-lg shadow-md flex items-center gap-2.5">
                                    <span className="flex-grow">{task}</span>
                                    <button onClick={() => handleCompleteTask(index)} className="bg-none border-none cursor-pointer text-[#28a745] text-lg hover:text-green-700"><CheckCircleIcon className="w-5 h-5" /></button>
                                    <button onClick={() => handleDeleteTask('pending', index)} className="bg-none border-none cursor-pointer text-[#dc3545] text-lg hover:text-red-700"><TrashIcon className="w-5 h-5" /></button>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-[#333]">Tarefas Concluídas</h3>
                    <ul className="space-y-2.5">
                        {tasks.completed.length === 0 ? (
                            <li className="bg-white p-4 rounded-lg shadow-md text-center text-gray-500">Nenhuma tarefa concluída.</li>
                        ) : (
                            tasks.completed.map((task, index) => (
                                <li key={index} className="bg-[#fdfcff] p-4 rounded-lg shadow-md flex items-center gap-2.5">
                                    <span className="flex-grow line-through text-[#888]">{task}</span>
                                    <button onClick={() => handleUndoTask(index)} className="bg-none border-none cursor-pointer text-[#ffc107] text-lg hover:text-yellow-600"><UndoIcon className="w-5 h-5"/></button>
                                    <button onClick={() => handleDeleteTask('completed', index)} className="bg-none border-none cursor-pointer text-[#dc3545] text-lg hover:text-red-700"><TrashIcon className="w-5 h-5"/></button>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TasksScreen;
