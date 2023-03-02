import { getImage } from '@astrojs/image';

const image = await getImage({
  src: import('../assets/1.png'),
  alt: '',
});

const Component = () => {
  return (
    <>
      <h1>Hello from react</h1>
      <img src={image.src!} alt={image.alt!} />
    </>
  );
};

export default Component;
