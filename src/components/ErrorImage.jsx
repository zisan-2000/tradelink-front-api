function ErrorImage({ src, altText }) {
  return (
    <img
      src={src}
      alt={altText}
      className="h-[400px] w-[420px] md:mt-10 md:h-[540px] md:w-[680px]"
    />
  );
}

export default ErrorImage;
