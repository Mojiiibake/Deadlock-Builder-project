// app/api/builds/route.ts
import { NextResponse } from 'next/server';
import { connectToDatabase, Build } from '@/app/lib/mongodb';
import { nanoid } from 'nanoid';

export async function POST(request: Request) {
    console.log('POST request received');
    await connectToDatabase();
    try {
        const buildData = await request.json();
        console.log('Received build data:', JSON.stringify(buildData, null, 2));

        const id = nanoid(10); // Generate a unique 10-character ID
        const newBuild = new Build({
            id,
            boxes: buildData.boxes,
            items: buildData.items
        });

        console.log('Attempting to save to MongoDB:', JSON.stringify(newBuild.toObject(), null, 2));

        await newBuild.save();
        console.log('Build saved successfully with ID:', id);

        return NextResponse.json({ id }, { status: 201 });
    } catch (error) {
        console.error('Error saving build:', error);
        return NextResponse.json({ error: 'Error saving build' }, { status: 500 });
    }
}


export async function GET(request: Request) {
    console.log('GET request received');
    await connectToDatabase();
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');
        console.log('Searching for build with ID:', id);

        const build = await Build.findOne({ id });
        if (build) {
            console.log('Build found:', JSON.stringify(build.toObject(), null, 2));
            return NextResponse.json(build);
        } else {
            console.log('Build not found for ID:', id);
            return NextResponse.json({ error: 'Build not found' }, { status: 404 });
        }
    } catch (error) {
        console.error('Error retrieving build:', error);
        return NextResponse.json({ error: 'Error retrieving build' }, { status: 500 });
    }
}