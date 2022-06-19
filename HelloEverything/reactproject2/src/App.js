import logo from './logo.svg';
import './App.css';
// import Title from 'antd/lib/typography/Title';
import { Table, DatePicker, Space } from 'antd';
import ColorBox from './conponents/ColorBox';
import { useEffect, useState } from 'react';
import PostList from './conponents/PostList';
import Pagination from './conponents/Pagination';
import queryString from 'query-string'
import PostFiltersForm from './conponents/PostFiltersForm';
import TodoList from './conponents/TodoList';
import TodoForm from './conponents/TodoForm';
import CardInfo from './conponents/CardInfo';
import bootstrap from 'bootstrap/scss/bootstrap.scss'
import bohancook from './Capture4.PNG';
import Father from '../../reactproject2/src/conponents/Father';

function onChange(date, dateString) {
  console.log(date, dateString);
}
// import Title from '@material/typography';
function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'title 1' },
    { id: 2, title: 'title 2' },
    { id: 3, title: 'title 3' },
  ])
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 20,
    _totalRows: 1
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
    title_like: ''
  })
  const [dataSource, setDataSource] = useState([])
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(false)
  const [pageSize, setPageSize] = useState(10)
  const columns = [
    {
      title: 'ID',
      dataIndex: '_id'
    },
    {
      title: 'name',
      dataIndex: 'name'
    },
    {
      title: 'trips',
      dataIndex: 'trips'
    },

  ]

  useEffect(() => {
    async function fetchPostList() {
      try {
        const params = queryString.stringify(filters)
        const url = `https://js-post-api.herokuapp.com/api/posts?${params}`
        const res = await fetch(url)
        const resJson = await res.json()
        console.log({ resJson })
        const { data, pagination } = resJson
        setPostList(data)
        setPagination(pagination)
      } catch (error) {
        console.log('Failed to fetch post list', error.message)
      }
    }

    // fetchPostList()
    // fetchStrips(1, 10) // apply antd
  }, [filters]) // empty array chạy 1 lần thoy

  function handlePageChange(newPage) {

    console.log(`new page: ${newPage}`);
    setFilters({
      ...filters,
      _page: newPage
    })
  }

  function handleFiltersChange(newFilters) {
    console.log(`new filter: ${JSON.stringify(newFilters)}`);
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilters.searchTerm
    })
  }

  // const fetchStrips = (page, pageSize) => {
  //   setLoading(true)
  //   fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=${pageSize}`)
  //     .then(res => {
  //       res.json().then(resJson => {
  //         console.log(resJson);
  //         setDataSource(resJson.data)
  //         setTotalPages(resJson.totalPages)
  //         setLoading(false)
  //       })
  //     })
  // }

  const handleTodoClick = (todo) => {
    console.log(todo);
    const index = todoList.findIndex(x => x.id === todo.id)
    if (index < 0) return
    const newList = [...todoList]

    newList.splice(index, 1)

    setTodoList(newList)
  }

  const handleSubmit = (value) => {
    const newList = [...todoList]

    newList.push({
      id: todoList.length != 0 ? todoList[todoList.length - 1].id + 1 : 1,
      title: value

    })
    setTodoList(newList)
    console.log(`todoList: ${{ todoList }}`);
  }

  return (
    <div className="App">
      <Father></Father>
      {/* <div className='row'>
        <div className='col-md-3'>
          <CardInfo imgSource={bohancook}></CardInfo>
        </div>
        <div className='col-md-3'>
          <CardInfo></CardInfo>
        </div>
        <div className='col-md-3'>
          <CardInfo></CardInfo>
        </div>
        <div className='col-md-3'>
          <CardInfo></CardInfo>
        </div>
      </div> */}
      {/* <TodoForm onSubmit={handleSubmit}/>
        <TodoList todos={todoList} onTodoClick={handleTodoClick}/>
        <Table
          loading={loading}
          columns={columns}
          dataSource={dataSource}
          pagination={{
            pageSize: pageSize,
            total: totalPages,
            onChange: (page, pageSize) => {
              setPageSize(pageSize)
              fetchStrips(page, pageSize);
            },
          }}>
        </Table>
        <PostFiltersForm onSubmit={handleFiltersChange} />
        <PostList posts={postList} />
        <Pagination
          pagination={pagination}
          onPageChange={handlePageChange} /> */}
      {/* <ColorBox /> */}
      {/* <Space direction="vertical">
          <DatePicker onChange={onChange} />
          <DatePicker onChange={onChange} picker="week" />
          <DatePicker onChange={onChange} picker="month" />
          <DatePicker onChange={onChange} picker="quarter" />
          <DatePicker onChange={onChange} picker="year" />
        </Space>
          <Title>
            Linh
          </Title> */}

    </div>
  );
}
export default App;
