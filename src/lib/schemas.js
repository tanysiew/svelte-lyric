import { z } from 'zod';

export const addSongSchema = z.object({
    title: z.string({required_error: 'Title is required'}),
    original_key: z.string({required_error: 'Key is required'}),
    lyric_by: z.string({required_error: 'Lyric by is required'}),
    music_by: z.string({required_error: 'Music by is required'}),
    lyric: z.string({required_error: 'Lyric by is required'}),
})