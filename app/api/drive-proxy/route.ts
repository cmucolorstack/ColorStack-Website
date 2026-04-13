import { NextRequest, NextResponse } from 'next/server';

// Proxies a Google Drive file server-side so visitors don't need a Google login.
// Usage: /api/drive-proxy?id={fileId}
export async function GET(req: NextRequest) {
  const fileId = req.nextUrl.searchParams.get('id');
  if (!fileId) {
    return new NextResponse('Missing id', { status: 400 });
  }

  // Try the direct CDN URL first, fall back to uc?export=view
  const urls = [
    `https://lh3.googleusercontent.com/d/${fileId}`,
    `https://drive.google.com/uc?export=view&id=${fileId}`,
  ];

  for (const url of urls) {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0' },
      redirect: 'follow',
    });

    if (res.ok && res.headers.get('content-type')?.startsWith('image/')) {
      const buffer = await res.arrayBuffer();
      return new NextResponse(buffer, {
        headers: {
          'Content-Type': res.headers.get('content-type') ?? 'image/jpeg',
          'Cache-Control': 'public, max-age=3600',
        },
      });
    }
  }

  return new NextResponse('Image not found or not publicly shared', { status: 404 });
}
