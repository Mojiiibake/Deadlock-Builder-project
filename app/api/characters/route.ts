import { NextResponse } from 'next/server';
import { getCharacters } from '../../lib/dataUtils';

export async function GET() {
    try {
        const characters = await getCharacters();
        // console.log('API: Fetched characters:', characters);
        return NextResponse.json(characters);
    } catch (error) {
        console.error('API: Error fetching characters:', error);
        return NextResponse.json({ error: 'Failed to fetch characters' }, { status: 500 });
    }
}