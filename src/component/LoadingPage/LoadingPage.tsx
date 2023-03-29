import { ReactComponent as Spinner } from '../../assets/spinner-solid.svg';

const LoadingPage = () => {
  return (
    <section
      className="container_main bg-gray-50 rounded-lg flex justify-center items-center"
      data-testid="loading-component"
    >
      <Spinner className="animate-spin w-10 fill-blue-500" />
    </section>
  );
};

export default LoadingPage;
