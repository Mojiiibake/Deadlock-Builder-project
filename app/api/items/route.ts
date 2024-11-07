import { NextResponse } from 'next/server';
import { getItems } from '../../lib/dataUtils';

export async function GET() {
    const items = await getItems();
    return NextResponse.json(items);
}