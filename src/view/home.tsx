import Layout from "../components/Layout"
import List from "../components/List"
import { useNavigate } from "react-router-dom"
import { useGetBlogsQuery } from "../data/graphql/generated"

export interface IData {
  id: string
  title: string
  content: string
  image: string
}

function Home() {
  const navigate = useNavigate();
  const { data, loading } = useGetBlogsQuery({
    variables: {
      page: 5
    }
  })

  const handleCreate = () => {
    navigate("/create-blog")
  }

  return (
    <Layout>
      <header className=" flex justify-center items-center text-xl ">
        ADMIN BLOG
      </header>
      <main className="pt-[20px]">
        <div className="flex justify-between">
          <div>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Search..." />
          </div>
          <div>
            <button onClick={handleCreate} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create Blog</button>
          </div>
        </div>
        {loading ? (
          <p className="text-center">loading...</p>
        ) : <List data={data?.getBlogs} />}

      </main>
    </Layout>
  );
}

export default Home