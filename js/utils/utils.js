export const generatePost = (post, doc) => {
    const taskList = document.querySelector('#list');
    taskList.innerHTML += `
        <article class="task-container">
            <h1>${task.title}</h1>
            <p>${task.description}</p>
            <button class="update-button button-left" id="updateButton${doc.id}">🖊️</button>
            <button class="delete-button button-right" id="deleteButton${doc.id}">🗑</button>
        </article>
    `;
};