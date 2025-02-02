import { useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import Loader from './components/Loader/Loader';
import ImageModal from './components/ImageModal/ImageModal';

import { fetchImages } from './services/api';

import './App.css';

const notify = (message = 'Empty query!') => toast.error(message);

function App() {
  const [query, setQuery] = useState('');
  const [imagesList, setImagesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [page, setPage] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({
    description: '',
    alt_description: '',
    regular: '',
  });

  useEffect(() => {
    const handleSearchQuery = async () => {
      if (!query) {
        return;
      }

      try {
        setIsLoading(true);
        setIsError(false);

        const data = await fetchImages(query, page);

        setImagesList(prev => [...prev, ...data.results]);
        setIsLoadMore(page < data.total_pages);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    handleSearchQuery();
  }, [query, page]);

  const handleNewQuery = newQuery => {
    if (!newQuery) {
      notify();
      return;
    }
    setImagesList([]);
    setPage(0);
    setQuery(newQuery);
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const selectImage = item => {
    setSelectedImage(item);
    openModal();
  };

  return (
    <div className="container">
      <Toaster />
      <SearchBar onSubmit={handleNewQuery} />
      {imagesList.length > 0 && (
        <ImageGallery images={imagesList} onSelectedItem={selectImage} />
      )}
      {isLoading && <Loader />}
      {isLoadMore && <LoadMoreBtn clickAction={handleLoadMore} />}
      {isError && <ErrorMessage message="try late....." />}
      {modalIsOpen && (
        <ImageModal
          isOpen={modalIsOpen}
          url={selectedImage.regular}
          onClose={closeModal}
          description={
            selectedImage.description || selectedImage.alt_description
          }
        />
      )}
    </div>
  );
}

export default App;
