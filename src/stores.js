import { writable } from 'svelte/store';

export const groupBy = writable('ort');
export const sortBy = writable('name');

export const updateGroupBy = (val) => {
    groupBy.set(val)
}

export const updateSortBy = (val) => {
    sortBy.set(val)
}
