import { Image } from './../../interfaces/image.interface';

 //create signal with img array. Format: signal<dataType>(InitialValue)
  export const images: Image[] = [
    {
      id: '1',
      src: 'https://picsum.photos/id/10/600/400',
      alt: 'A landscape with trees in the foreground and mountains with a lake in the background.'
    },
    {
      id: '2',
      src: 'https://picsum.photos/id/17/600/400',
      alt: 'A path between grass fields and several trees at the end of the path.'
    },
    {
      id: '3',
      src: 'https://picsum.photos/id/25/600/400',
      alt: 'Branches silhouettes and the sunlight behind them.'
    },
    {
      id: '4',
      src: 'https://picsum.photos/id/49/600/400',
      alt: 'Round White mediterranean buildings'
    },
    {
      id: '5',
      src: 'https://picsum.photos/id/57/367/267',
      alt: 'Street from NYC'
    }
  ];
