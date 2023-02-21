//смерджить два массива без дубликатов

const merge = (arr1, arr2) => {
    const set = new Set(arr1.concat(arr2));

return [...set];
}

merge(['all', 'video', 'image', 'text'], ['all', 'video', 'footprints', 'photo']) //['all', 'video', 'image', 'text', 'footprints', 'photo']