import { Input, Select, Space, Button } from 'antd';
import Banner from 'components/Banner';
import Images from 'constants/images';
import PhotoList from 'features/Photo/components/PhotoList';
import { removePhoto } from 'features/Photo/photoSlice';
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Container } from 'reactstrap';
import productApi from '../../../../api/productApi';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
const { Search } = Input;
const { Option } = Select;

MainPage.propTypes = {};

function MainPage(props) {
  const dispatch = useDispatch();
  const photosData = useSelector(state => state.photos);
  const history = useHistory();
  const [photos, setPhotos] = useState([]);
  const [categorys, setCategorys] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const typingTimeoutRef = useRef(null)
  useEffect(() => {
    async function init() {
      setPhotos(photosData)

      const getCatarogys = photosData.map(e => (
        e.categoryId
      )).filter(onlyUnique)

      const option = getCatarogys.map(e => (
        <Option key={e}>{e}</Option>
      ))
      setCategorys(option);
    }
    init()
  }, [photosData])

  const handlePhotoEditClick = (photo) => {
    console.log('Edit: ', photo);
    const editPhotoUrl = `/photos/${photo.id}`;
    history.push(editPhotoUrl);
  }

  const handlePhotoRemoveClick = (photo) => {
    console.log('Remove: ', photo);
    const removePhotoId = photo.id;
    const action = removePhoto(removePhotoId);
    dispatch(action);
  }

  const handleSearch = (value) => {
    if (value) {
      const newPhotos = photos?.filter(e => e.title.includes(value))
      setPhotos(newPhotos)
    }
    else {
      setPhotos(photosData)
    }
  }

  const handleFilterChange = (value) => {
    console.log(value);
    if (value?.length > 0) {
      const newPhotos = photos.filter(e => value?.includes(e.categoryId))
      setPhotos(newPhotos)
    }
    else {
      setPhotos(photosData)
    }
  }
  const handleButtonClick = async () => {
    try {
      const params = {
        _page: 1,
        _limit: 10
      };
      const response = await productApi.getAll(params);
      console.log(response);
    } catch (error) {
      console.log('Failed to fetch product list: ', error);
    }
  }

  const handleSearchTerm = (e) => {
    const value = e.target.value
    console.log(value);
    setSearchTerm(value)

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
    }

    typingTimeoutRef.current = setTimeout(() => {
      handleFiltersChange(value)
    }, 300)
  }

  function handleFiltersChange(newFilters) {
    const newPhotos = photosData.filter(e => e.title.toLowerCase()?.includes(newFilters))
    setPhotos(newPhotos)
  }

  return (
    <div className="photo-main">
      <Banner title="🎉 Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />

      <Container className="text-center">
        <div className="py-5">
          
          <div className="text-right">
            <Space>

              <Select
                mode="multiple"
                allowClear
                style={{ width: 200 }}
                placeholder="Please select"
                // defaultValue={categorys}
                onChange={handleFilterChange}
                options={PHOTO_CATEGORY_OPTIONS}
              />
              {/* <Search
          allowClear
          placeholder="input search text"
          onSearch={handleSearch}
          style={{
            width: 200,
          }}
        /> */}
              <Search value={searchTerm} onChange={handleSearchTerm} />
            </Space>
          </div>

          <div>
            <Button onClick={handleButtonClick}>Fetch Product List</Button>
            <Button>

              <Link to="/photos/add">Add new photo</Link>
            </Button>
          </div>
        </div>

        <PhotoList
          photoList={photos}
          onPhotoEditClick={handlePhotoEditClick}
          onPhotoRemoveClick={handlePhotoRemoveClick}
        />
      </Container>
    </div>
  );
}
const onlyUnique = (value, index, self) => {
  return self.indexOf(value) === index;
}
export default MainPage;