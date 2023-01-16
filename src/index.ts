import useReflare from 'reflare';

const handleRequest = async (
  request: Request,
): Promise<Response> => {
  const reflare = await useReflare();

  reflare.push({
    path: '/*',
        loadBalancing: {
      policy: 'random',
    },
    upstream: [
      {
        domain: 'gdindex.phantomdroida.workers.dev',
        protocol: 'https',
        weight: 14,
      },
      {
        domain: 'gdindex.phantomdroidb.workers.dev',
        protocol: 'https',
        weight: 15,
      },
      {
        domain: 'gdindex.phantomdroidc.workers.dev',
        protocol: 'https',
        weight: 16,
      },
      {
        domain: 'gdindex.phantomdroidx.workers.dev',
        protocol: 'https',
        weight: 17,
      },
      {
        domain: 'gdindex.phantomdroidy.workers.dev',
        protocol: 'https',
        weight: 18,
      },
      {
        domain: 'gdindex.phantomdroidz.workers.dev',
        protocol: 'https',
        weight: 19,
      },
    ],
    cors: {
      origin: '*',
      credentials: true,
    },
  });

  return reflare.handle(request);
};

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});
