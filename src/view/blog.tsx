import { Link, useNavigate, useParams } from "react-router-dom";

import Layout from "../components/Layout"

import { GetBlogByIdDocument, GetBlogsDocument, useDeleteBlogMutation, useGetBlogByIdQuery, useUpdateBlogMutation } from "../data/graphql/generated";
import { useCallback, useEffect, useState } from "react";
import Form from "../components/Form";
import { IRequestData } from "./create-blog";

const Blog = () => {
  const [isEdit, setIsEdit] = useState(false)
  const [img, setImg] = useState<any>()
  const [form, setForm] = useState<IRequestData>({
    title: '',
    content: '',
    image: '',
  })
  const navigate = useNavigate();
  const { blogId } = useParams();

  const { data } = useGetBlogByIdQuery({
    variables: {
      id: Number(blogId)
    }
  })

  const [updateBlog] = useUpdateBlogMutation({
    refetchQueries: [GetBlogsDocument, GetBlogByIdDocument]
  })

  const [deleteBlog] = useDeleteBlogMutation({
    refetchQueries: [GetBlogsDocument, GetBlogByIdDocument]
  })

  useEffect(() => {
    if (data?.getBlogById) {
      setForm({
        title: data.getBlogById.title,
        content: data.getBlogById.content,
        image: data.getBlogById.image
      })
    }

  }, [data?.getBlogById])

  const handleEdit = () => {
    setIsEdit(true)
  }

  const handleDelete = async () => {
    await deleteBlog({
      variables: {
        id: Number(blogId),
      }
    })
    navigate(-1);
  }

  const handleCancel = () => {
    setIsEdit(false)
  }

  const convertImgToBlob = useCallback(async () => {
    if (form.image) {
      const deco = new URL(form.image)
      if (deco.host) {
        const convertImg = await fetch(form.image);
        const blob = await convertImg.blob();
        const file = new File([blob], deco.pathname.replace(/\//g, ""), {
          type: blob.type,
        });
        setImg(file)
      }

    }
  }, [form.image])


  useEffect(() => {
    convertImgToBlob();

  }, [convertImgToBlob])

  const handleFile = async (file: any) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setForm({
        ...form,
        image: reader.result
      });
    });
    reader.readAsDataURL(file[0]);
    setImg(file[0])
  }

  const handleChange = (event: any) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const onSubmit = async () => {
    const response = await updateBlog({
      variables: {
        id: Number(blogId),
        body: {
          title: form.title,
          content: form.content,
          image: img
        }
      }
    })

    if (response.data?.updateBlog) {
      navigate(-1)
    }
  }

  return (
    <Layout>
      <header className=" flex justify-center items-center text-xl ">
        ADMIN BLOG
      </header>
      <main className="pt-[20px]">
        <div className="flex justify-between">
          <Link
            to={'..'}
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
          >
            Back
          </Link>
          <div>
            {!isEdit ? (
              <div>
                <button onClick={handleEdit} className="bg-yellow-300 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">Edit Blog</button>
                <button onClick={handleDelete} className="bg-red-500 hover:bg-red-300 text-white font-bold py-2 px-4 rounded ml-[30px]">Delete Blog</button>
              </div>

            ) : (
              <button onClick={handleCancel} className="bg-red-500 hover:bg-red-300 text-white font-bold py-2 px-4 rounded">Cancel</button>
            )}

          </div>
        </div>



        {!isEdit ? (
          <div className="flex justify-center mt-20">
            <div className="p-5 w-[600px] bg-[#FFE165] rounded ">
              <div className="text-center bg-[#E7ECFE] mb-4 rounded ">
                <span className="text-xl font-bold italic" >{data?.getBlogById.title}</span>
              </div>
              <div className="flex justify-center">
                <img className="rounded h-[400px]" src={data?.getBlogById.image} alt={data?.getBlogById.title} />
              </div>
              <div className="mt-[20px] bg-[#E7ECFE] p-5 rounded ">
                <div className="flex italic text-sm font-medium pb-[10px] justify-between">
                  <p>{data?.getBlogById.content}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Form form={form} onChangeFile={handleFile} mode="update" onChange={handleChange} onSubmit={onSubmit} />
        )}

      </main>
    </Layout>
  )
}

export default Blog