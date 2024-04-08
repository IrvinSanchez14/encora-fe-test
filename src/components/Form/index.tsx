import React from "react"

import { IRequestData } from "../../view/create-blog"

type ModeForm = "create" | "update"

interface IForm {
  form: IRequestData,
  onChangeFile: (e: any) => void
  mode?: ModeForm
  onSubmit: () => void
  onChange: (event: any) => void
}

const Form = ({
  form,
  onChangeFile,
  mode = "create",
  onSubmit,
  onChange
}: IForm) => {

  return (
    <div className="flex justify-center mt-20">
      <div className="p-5 w-[600px] bg-[#FFE165] rounded ">
        <div className="text-center bg-[#E7ECFE] mb-4 rounded p-5 ">
          <div className="md:flex md:items-center mb-6 p-4 border-[#fff] border-[2px] rounded">
            <div className="w-full">
              {form.image ? (
                <div className=" mt-5 flex justify-center">
                  <img src={form.image} alt="img" className="block" />
                </div>
              ) : <div />}
              <div className=" mt-5 flex justify-end">
                <input type="file" onChange={(e) => onChangeFile(e.target.files)} />
              </div>
            </div>
          </div>
          <div className=" border-[#fff] border-[2px]">
            <div className="md:flex md:items-center mb-6 pt-5">
              <div className="md:w-1/4">
                <label className="block  font-bold md:text-right mb-1 md:mb-0 pr-4" >
                  Title:
                </label>
              </div>
              <div className="md:w-2/3">
                <input onChange={onChange} name="title" value={form.title} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" placeholder="Title" />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/4">
                <label className="block font-bold md:text-right mb-1 md:mb-0 pr-4" >
                  Content:
                </label>
              </div>
              <div className="md:w-2/3">
                <textarea onChange={onChange} name="content" value={form.content} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="Type here..." />
              </div>
            </div>
          </div>
          <div className="md:flex md:items-center mt-5">
            <div className="md:w-1/3"></div>
            <div className="md:w-1/3">
              <button onClick={onSubmit} className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                {mode === "create" ? "Create" : "Update"}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Form