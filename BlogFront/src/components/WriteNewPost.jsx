import { React, useRef } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import jwt_decode from 'jwt-decode'


import { useState, useEffect } from 'react';


const WriteNewPost = () => {
    const [categoryId,setCategoryId]=useState("")
    const [categories, setCategories] = useState([])
    const [imgUrl, setImgUrl] = useState("");

    const token = localStorage.getItem('token');
    var decoded = jwt_decode(token);

    console.log(decoded);

    const [file, setFile] = useState()
    const [fileName, setFileName] = useState()


    const title = useRef("");
    const content = useRef("");
    const image = useRef("");

    const handleFile = (e) => {
        // debugger;
        const file = e.target.files[0];
        setFile(file);
        setFileName(file.name);

        console.log('!!file', !!file)

        uploadFile(file);
    }

    const uploadFile = async (file) => {
        debugger;
        const formData = new FormData();

        formData.append("image", file);
        // formData.append("fileName", fileName);

        try {
            const res = await axios.post("http://20.76.132.225/api/Article/UploadImage", formData,
                {
                    // body: formData,
                    headers: {
                        'Content-Type': 'multipart/form-data ',
                    },
                }
            )
            setImgUrl(res?.data);
            // if (responseJson.status == 1) {
            //     alert('Upload Successful');
            // }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        axios.get("http://20.76.132.225/api/Category/GetcategoriesList").then((response) => {
            setCategories((existingData) => {
                return response.data;
            })
        })
    }, [])


    const navigate = useNavigate();

    const navigateHome = () => {
        // 👇️ navigate to /
        navigate('/');
    };

    async function addPost() {
        var data = {
            authorId: decoded.UserId,
            title: title.current.value,
            content: content.current.value,
            image: imgUrl,
            categoryId: categoryId

        }

        try {
            await axios.post("http://20.76.132.225/api/Article/PostArticle", data)
                .then((response) => {
                    navigateHome();

                })
        }
        catch (err) {
            window.alert("Post should have a title and body too.......")
        }
    }

    const handleCategory = (e) => {
        setCategoryId(e.target.value)
    }


    console.log("categories", categories);


    return (
        <div>
            <div>
                <h2 className='mb-5 text-3xl font-medium tracking-tight text-white bg-secondary px-4 py-2 rounded-xl'>Write an Article</h2>
            </div>

            <div className='mb-6'>

                <label for="categories" class="tex-lg text-gray-800">Select a category</label>

                <select onChange={handleCategory} id="categories" class="w-full border-2 rounded-xl p-4 mt-1 border-primary border-transparent  focus:border-secondary focus:ring-secondary transition ease-in-out focus:outline-none font-light text-gray-400 focus:text-gray-800">
                    <option selected>Choose Category</option>
                    {
                        categories?.map(({ name, id }) => <option key={id} value={id} >{name}</option>)
                    }
                </select>

            </div>


            <div className="mb-6">
                <label for="base-input" className="tex-lg text-gray-800">Title</label>
                <input type="text" id="base-input" className="w-full border-2 rounded-xl p-4 mt-1 border-primary border-transparent  focus:border-secondary focus:ring-secondary transition ease-in-out focus:outline-none font-light text-gray-400 focus:text-gray-800" placeholder="Write your title here..." ref={title} />
            </div>

            <div className='mb-6'>
                <label for="base-input" className="tex-lg text-gray-800">Upload picture</label>

                <div class="w-full mt-1">
                    {imgUrl && <img src={imgUrl} alt="Image" width={100} height={100} classNam="mb-3" />}
                    <label for="dropzone-file" class="flex flex-col justify-center items-center w-full h-64 rounded-xl border-2 border-primary  cursor-pointer hover:bg-primary focus:border-secondary">
                        {/* <div class="flex flex-col justify-center items-center pt-5 pb-6">
                            <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" ></path></svg>
                            <p class="mb-2 text-sm text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                            <p class="text-xs text-gray-400">PNG Only</p>
                        </div> */}
                        <input type="file" onChange={handleFile} />
                    </label>
                </div>
            </div>

            <div className='mb-6'>
                <label for="message" className="tex-lg text-gray-800" >Body</label>
                <textarea id="message" rows="10" className="w-full resize-none hover:resize border-2 rounded-xl p-4 mt-1 border-primary border-transparent  focus:border-secondary focus:ring-secondary transition ease-in-out focus:outline-none font-light text-gray-400 focus:text-gray-800" placeholder="Write your text here..." ref={content}></textarea>
            </div>

            <div className="flex flex-col">
                <button className="active:scale-[.98] active:duration-75 hover:scale-[1.05] ease-in-out transition-all py-3 rounded-xl bg-secondary text-white text-lg font-bold" value="upload" onClick={addPost}>Submit</button>
            </div>

        </div>
    )
}

export default WriteNewPost