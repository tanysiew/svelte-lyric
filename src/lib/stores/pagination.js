import { writable } from 'svelte/store';

export const currentPage = writable(1);
// export const itemsPerPage = writable(10);
// export const totalItems = writable(0);
export const totalPages = writable(0);
// export const items = writable([]);

