import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Layout from "../components/Layout"
import { GetBlogsDocument, useCreateBlogMutation } from "../data/graphql/generated";
import Form from "../components/Form";

export interface IRequestData {
  title: string
  content: string
  image: any
}


const CreateBlog = () => {
  const [form, setForm] = useState<IRequestData>({
    title: '',
    content: '',
    image: '',
  })
  const [img, setImg] = useState()
  const navigate = useNavigate();
  const [createBlogMutation] = useCreateBlogMutation({
    refetchQueries: [GetBlogsDocument]
  })

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
    const request = await createBlogMutation({
      variables: {
        body: {
          title: form.title,
          content: form.content,
          image: img
        }
      }
    })

    if (request.data?.createBlog) {
      navigate(-1)
    }
  }

  return (
    <Layout>
      <header className=" flex justify-center items-center text-xl ">
        ADMIN BLOG
      </header>
      <main className="pt-[20px]">
        <Link
          to={'..'}
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          Back
        </Link>
        <Form form={form} onChangeFile={handleFile} onChange={handleChange} onSubmit={onSubmit} />
      </main>
    </Layout>
  )
}

export default CreateBlog