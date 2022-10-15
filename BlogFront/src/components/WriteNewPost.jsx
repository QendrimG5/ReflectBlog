import React from 'react'

const WriteNewPost = () => {
    return (
        <div>
            <div>
                <h2 className='mb-5 text-3xl font-medium tracking-tight text-white bg-secondary px-4 py-2 rounded-xl'>Write an Article</h2>
            </div>

            <div className='mb-6'>
                <label for="categories" class="tex-lg text-gray-800">Select a category</label>
                <select id="categories" class="w-full border-2 rounded-xl p-4 mt-1 border-primary border-transparent  focus:border-secondary focus:ring-secondary transition ease-in-out focus:outline-none font-light text-gray-400 focus:text-gray-800">
                    <option selected>Choose a category</option>
                    <option value="SC">Social</option>
                    <option value="SP">Sport</option>
                    <option value="EN">Entertainment</option>
                    <option value="FA">Fashion</option>
                    <option value="TR">Travel</option>
                </select>

            </div>

            <div className="mb-6">
                <label for="base-input" className="tex-lg text-gray-800">Title</label>
                <input type="text" id="base-input" className="w-full border-2 rounded-xl p-4 mt-1 border-primary border-transparent  focus:border-secondary focus:ring-secondary transition ease-in-out focus:outline-none font-light text-gray-400 focus:text-gray-800" placeholder="Write your title here..." />
            </div>

            <div className='mb-6'>
                <label for="base-input" className="tex-lg text-gray-800">Upload a picture</label>

                <div class="flex justify-center items-center w-full mt-1">
                    <label for="dropzone-file" class="flex flex-col justify-center items-center w-full h-64 rounded-xl border-2 border-primary  cursor-pointer hover:bg-primary focus:border-secondary">
                        <div class="flex flex-col justify-center items-center pt-5 pb-6">
                            <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p class="mb-2 text-sm text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                            <p class="text-xs text-gray-400">PNG Only</p>
                        </div>
                        <input id="dropzone-file" type="file" class="hidden" />
                    </label>
                </div>
            </div>

            <div className='mb-6'>
                <label for="message" className="tex-lg text-gray-800">Body</label>
                <textarea id="message" rows="10" className="w-full resize-none hover:resize border-2 rounded-xl p-4 mt-1 border-primary border-transparent  focus:border-secondary focus:ring-secondary transition ease-in-out focus:outline-none font-light text-gray-400 focus:text-gray-800" placeholder="Write your text here..."></textarea>
            </div>

            <div className="flex flex-col">
                <button className="active:scale-[.98] active:duration-70 hover:scale-[1.07] ease-in-out transition-all py-3.5 rounded-xl bg-secondary text-white text-lg font-bold">Submit</button>
            </div>

        </div>
    )
}

export default WriteNewPost