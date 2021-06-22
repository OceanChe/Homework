const normalizeState = (projectArray) => { // projectArray - массив проектов из первого код сниппета
    const arr = projectArray
    let normalizedState = {
        projectsById: {},
        tasksById: {}
    }

    arr.forEach(it => {
        normalizedState = {
            ...normalizedState,
            projectsById: {
                ...normalizedState.projectsById,
                [it.id]: {
                    id: it.id,
                    name: it.name,
                    tasksIds: [it.tasks.map(itt => itt.id)]
                }
            }
        }
        it.tasks.forEach(itt => {
            normalizedState = {
                ...normalizedState,
                tasksById: {
                    ...normalizedState.tasksById,
                    [itt.id]: {
                        id: itt.id,
                        name: itt.name,
                        description: itt.description,
                        completed: itt.completed
                    }
                }
            }
        })
    })

    return normalizedState
}

export default normalizeState